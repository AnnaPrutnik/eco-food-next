export interface IFilterItem {
  _id: string;
  name: string;
}

export interface IAvailability extends IFilterItem {}
export interface IBrand extends IFilterItem {}
export interface ICountry extends IFilterItem {
  code: string;
}

export interface IForm extends IFilterItem {}

export interface IDelivery {
  _id: string;
  description: string;
}

export interface IFilterData {
  price: {
    min: number;
    max: number;
  };
  brands: IBrand[];
  countries: ICountry[];
  form: IForm[];
  availability: IAvailability[];
  delivery: IDelivery[];
}
