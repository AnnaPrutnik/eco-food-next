import { FC } from 'react';
import { Category, Product, Section, Card } from './heading.styled';

interface IHeading {
	text: string;
}

export const CategoryTitle: FC<IHeading> = ({ text }) => {
	return <Category>{text}</Category>;
};

export const ProductTitle: FC<IHeading> = ({ text }) => {
	return <Product>{text}</Product>;
};

export const CardTitle: FC<IHeading> = ({ text }) => {
	return <Card>{text}</Card>;
};

export const SectionTitle: FC<IHeading> = ({ text }) => {
	return <Section>{text}</Section>;
};
