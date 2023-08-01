import {
  IBrand,
  ICountry,
  IForm,
  IAvailability,
  IDelivery,
} from './IFilterData';

export interface IProduct {
  _id: string;
  name: string;
  url: string;
  price: number;
  oldPrice: number;
  size: number;
  description: string;
  composition: string;
  vitamins: string[];
  minerals: string[];
  nutritionalValue: number;
  image: string;
  rating: number;
  categories: string[];
  availability: IAvailability;
  brand: IBrand;
  country: ICountry;
  form: IForm;
  delivery: IDelivery;
}
