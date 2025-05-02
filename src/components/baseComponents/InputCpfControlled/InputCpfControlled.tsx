import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { InputCpfControlledProps } from './InputCpfControlledProps';

export function InputCpfControlled({
  name,
  label,
  placeholder,
}: InputCpfControlledProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors?.[name]?.message as string | undefined;

  const removeMask = (value: string) => value.replace(/\D/g, '').slice(0, 11);

  const applyMask = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    if (digits.length <= 9)
      return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
  };

  return (
    <Controller
      name={name}
      rules={{
        required: 'CPF is required',
        validate: (value) => value.length === 11 || 'Invalid CPF',
      }}
      render={({ field }) => (
        <div className="flex flex-col gap-1">
          {label && <label htmlFor={name}>{label}</label>}
          <input
            id={name}
            placeholder={placeholder}
            value={applyMask(field.value || '')}
            onChange={(e) => field.onChange(removeMask(e.target.value))}
            className={`rounded px-2 py-1 border ${
              error ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
          />
          {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
      )}
    />
  );
}
