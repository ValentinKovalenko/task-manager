import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder: string;
  register?: { [key: string]: any };
  errors?: FieldError;
}
