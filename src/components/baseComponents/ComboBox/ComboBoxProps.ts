import { HTMLInputTypeAttribute } from 'react';
import { Control } from 'react-hook-form';

export type ComboBoxProps = {
  label: string;
  name: string;
  selectedValue?: ComboBoxOption;
  options: ComboBoxOption[];
  isLoading?: boolean;
  type?: HTMLInputTypeAttribute;
};

export type ComboBoxOption = {
  value: string;
  label: string;
};
