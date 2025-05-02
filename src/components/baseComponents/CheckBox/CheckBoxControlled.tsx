import { Controller, useFormContext } from 'react-hook-form';
import { CheckBoxControlledProps } from './CheckBoxControlledProps';

export function CheckboxControlled({ label, name }: CheckBoxControlledProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          {label}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={field.value || false}
              onChange={(e) => field.onChange(e.target.checked)}
              className="h-4 w-4 text-blue-600"
            />
          </label>
          {fieldState.error && (
            <span className="text-red-400 text-sm">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
}
