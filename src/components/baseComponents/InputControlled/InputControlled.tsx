import { Controller } from 'react-hook-form';
import { InputControlledProps } from './InputControlledProps';

export function InputControlled({
  control,
  label,
  name,
  type = 'text',
  placeholder,
}: InputControlledProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ fieldState, field }) => (
        <div className="flex flex-col">
          <label> {label}</label>
          <input
            className={
              fieldState.error
                ? 'bg-red-100 rounded border-2 hover:bg-red-200 focus:bg-red-200 active:bg-red-200  transition-colors duration-300 '
                : 'bg-blue-50 rounded hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-100 transition-colors duration-300'
            }
            {...field}
            type={type}
            placeholder={placeholder}
          ></input>
          {fieldState.error && (
            <label className="text-red-400">{fieldState.error.message}</label>
          )}
        </div>
      )}
    />
  );
}
