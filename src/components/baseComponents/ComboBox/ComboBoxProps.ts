import { Control } from 'react-hook-form';

export type ComboBoxProps = {
  label: string;
  selectedValue?: ComboBoxOption;
  searchOptionsFunc: (search: string) => Promise<ComboBoxOption[]>;
  control: Control<any>;
  name: string;
};

export type ComboBoxOption = {
  value: string;
  label: string;
};
