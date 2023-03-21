import { useRouter } from 'next/router';
import { getAsString, transformValuesFromString } from 'helpers';
import { QUERY } from 'utils/constans';

export const useQueryParams = () => {
	const router = useRouter();
	const { query } = router;

	const updateQueryParams = () => {
		const { categoryUrl, ...restQuery } = query;
		router.push(
			{
				pathname: `/${query.categoryUrl}`,
				query: { ...restQuery },
			},
			undefined,
			{ shallow: true }
		);
	};

	const setArrayAsPropertyToQuery = (property: string, value: string[]) => {
		if (value.length === 0 && query[property]) {
			delete query[property];
		}

		if (value.length > 0) {
			query[property] = value
				.map(item => item.toLowerCase().split(' ').join('-'))
				.join('_');
		}
	};

	const setValueAsPropertyToQuery = (property: string, value: string) => {
		query[property] = value;
	};

	const deletePropertyFromQuery = (property: string) => {
		if (query[property]) {
			delete query[property];
		}
	};

	const getPropertiesFormQuery = () => {
		const { categoryUrl, sortBy, ...restQueries } = query;
		if (restQueries) {
			const queries = Object.entries(restQueries).map(property => {
				const key = property[0];
				const value = property[1];
				if (value === undefined) {
					return [key, []] as [string, string[]];
				}
				const transform = transformValuesFromString(value);
				if (!transform) {
					return [key, []] as [string, string[]];
				}

				if (key === QUERY.price) {
					return [key, [transform.join('-')]] as [string, string[]];
				}
				return [key, transform] as [string, string[]];
			});
			return queries;
		}
		return null;
	};

	const getStringValueFromQuery = (property: string): null | string => {
		const value = query[property];
		return value ? getAsString(value) : null;
	};

	const getArrayValueFromQuery = (property: string): null | string[] => {
		const value = getStringValueFromQuery(property);

		if (!value) {
			return null;
		}

		return value
			.split('_')
			.map(item => item.toLowerCase().split('-').join(' '));
	};

	return {
		updateQueryParams,
		setArrayAsPropertyToQuery,
		setValueAsPropertyToQuery,
		getPropertiesFormQuery,
		getStringValueFromQuery,
		getArrayValueFromQuery,
		deletePropertyFromQuery,
	};
};
