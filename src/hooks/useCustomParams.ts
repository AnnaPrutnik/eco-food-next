'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export const useCustomParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState<number | null>(null);

  useEffect(() => {
    const persistentScroll = scrollY;
    if (persistentScroll === null) return;

    window.scrollTo({ top: Number(scrollY) });
  }, [scrollY, searchParams]);

  const createNewSearchParams = (type: string, value: string) => {
    const param = { [type]: value };
    const newParam = new URLSearchParams(param);
    return newParam.toString();
  };

  const updateSearchParams = (type: string, newValue: string) => {
    const newParams = createNewSearchParams(type, newValue);
    //if search params is empty set new value to url string
    if (searchParams.toString().length === 0) {
      return newParams;
    }

    //if this type of search params has already existed, update value
    if (searchParams.has(type)) {
      let newSearchParams = new URLSearchParams();

      searchParams.forEach((value, key) => {
        if (key === type) {
          newSearchParams.append(type, newValue);
        } else {
          newSearchParams.append(key, value);
        }
      });
      return newSearchParams.toString();
    }
    //if this type of search params has not existed, add new to search params

    return searchParams.toString() + '&' + newParams;
  };

  const sendNewParams = (params: string) => {
    setScrollY(window.scrollY);
    router.push(pathname + '?' + params);
  };

  const setNewSearchParams = (type: string, newValue: string) => {
    const params = updateSearchParams(type, newValue);
    sendNewParams(params);
  };

  const getValuesFromParams = (type: string) => {
    const stringValue = searchParams.get(type);
    return stringValue ? stringValue.split('_') : [];
  };

  const removePropertyFromParams = (type: string) => {
    const params = searchParams
      .toString()
      .split('&')
      .filter((item) => !item.includes(type))
      .join('&');
    sendNewParams(params);
  };

  return { setNewSearchParams, getValuesFromParams, removePropertyFromParams };
};
