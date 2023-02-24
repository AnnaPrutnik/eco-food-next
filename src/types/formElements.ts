export interface InputProps {
  name: string;
  label?: string;
  value?: string;
  onChangeInput?: (value: string) => void;
}

export interface IOption {
  value: string;
  label: string;
}

export interface SelectProps {
  name: string;
  label: string;
  options: IOption[];
}

export interface ICheckBox {
  id: number;
  name: string;
}
