import { HTMLInputTypeAttribute } from 'react';
import { Control } from 'react-hook-form';

export interface InputControlledProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
}
