import {
	createContext,
	useContext,
	PropsWithChildren,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';

type loadingContextType = {
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const defaultLoading: loadingContextType = {
	isLoading: false,
	setIsLoading: () => {},
};

const LoadingContext = createContext<loadingContextType>(defaultLoading);

export function useLoadingContext() {
	return useContext(LoadingContext);
}

export function LoadingProvider({ children }: PropsWithChildren<unknown>) {
	const [isLoading, setIsLoading] = useState(false);

	const values = {
		isLoading,
		setIsLoading,
	};
	return (
		<LoadingContext.Provider value={values}>{children}</LoadingContext.Provider>
	);
}
