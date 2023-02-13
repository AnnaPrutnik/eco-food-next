import React from 'react';
import { Category, Product, Section, Card } from './heading.styled';

interface IHeading {
  text: string;
}

export const CategoryTitle: React.FC<IHeading> = ({ text }) => {
  return <Category>{text}</Category>;
};

export const ProductTitle: React.FC<IHeading> = ({ text }) => {
  return <Product>{text}</Product>;
};

export const CardTitle: React.FC<IHeading> = ({ text }) => {
  return <Card>{text}</Card>;
};

export const SectionTitle: React.FC<IHeading> = ({ text }) => {
  return <Section>{text}</Section>;
};
