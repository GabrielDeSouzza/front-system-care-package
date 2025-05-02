import { HTMLInputTypeAttribute } from 'react';

export interface InputControlledProps {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
}
