export interface InputProps {
  name: string;
  label?: string;
  inputType?: 'text' | 'email' | 'phone';
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
