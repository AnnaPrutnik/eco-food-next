import { createContext, useContext, PropsWithChildren, useState } from 'react';
import { ICollectionItem, IPriceProps, ISelectItem } from 'types';

type initialDataContext = {
	price: IPriceProps;
	brands: ICollectionItem[];
	form: ICollectionItem[];
	availability: ICollectionItem[];
	country: ICollectionItem[];
	sort: ISelectItem[];

	setFilterValues: (values: FilterValues) => void;
};

interface FilterValues {
	price: IPriceProps;
	brands: ICollectionItem[];
	form: ICollectionItem[];
	availability: ICollectionItem[];
	country: ICollectionItem[];
	sort: ISelectItem[];
}

const defaultInitialData: initialDataContext = {
	price: { min: null, max: null },
	brands: [],
	form: [],
	availability: [],
	country: [],
	sort: [],

	setFilterValues: (values: FilterValues) => {},
};

const InitialDataContext =
	createContext<initialDataContext>(defaultInitialData);

export function useInitialDataContext() {
	return useContext(InitialDataContext);
}

export function InitialDataProvider({ children }: PropsWithChildren<unknown>) {
	const [price, setPrice] = useState<IPriceProps>(defaultInitialData.price);
	const [brands, setBrands] = useState<ICollectionItem[]>(
		defaultInitialData.brands
	);
	const [form, setForm] = useState<ICollectionItem[]>(defaultInitialData.form);
	const [availability, setAvailability] = useState<ICollectionItem[]>(
		defaultInitialData.availability
	);
	const [country, setCountry] = useState<ICollectionItem[]>(
		defaultInitialData.country
	);
	const [sort, setSort] = useState<ISelectItem[]>(defaultInitialData.sort);

	const setFilterValues = (values: FilterValues) => {
		setPrice(values.price);
		setAvailability(values.availability);
		setBrands(values.brands);
		setForm(values.form);
		setCountry(values.country);
		setSort(values.sort);
	};

	const values = {
		price,
		brands,
		form,
		availability,
		country,
		sort,

		setFilterValues,
	};
	return (
		<InitialDataContext.Provider value={values}>
			{children}
		</InitialDataContext.Provider>
	);
}
