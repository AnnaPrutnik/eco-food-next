export const checkValueIsNumber = (value: string, defaultValue: number) => {
	const numberValue = Number(value);
	return isNaN(numberValue) ? defaultValue : numberValue;
};
