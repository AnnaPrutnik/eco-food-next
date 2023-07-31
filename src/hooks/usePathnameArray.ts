'use client';
import { usePathname } from 'next/navigation';

export const usePathnameArray = () => {
  const pathname = usePathname();
  return pathname.split('/');
};
