'use client';

import { useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { ComboBoxProps } from './ComboBoxProps';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function ComboBox({
  label,
  options,
  control,
  name,
  isLoading,
  type = 'text',
}: ComboBoxProps & { control: any; name: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (value) => {
          const match = options.some((option) => option.label === value);
          return match || 'Selecione um item da lista';
        },
      }}
      render={({ field, fieldState }) => {
        const handleBlur = (e: React.FocusEvent) => {
          if (
            containerRef.current &&
            !containerRef.current.contains(e.relatedTarget as Node)
          ) {
            setIsOpen(false);
            setHighlightedIndex(-1);
          }
        };

        return (
          <div
            ref={containerRef}
            className="relative w-full"
            onBlur={handleBlur}
          >
            <label className="block mb-1 font-medium text-gray-700">
              {label}
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type={type}
                value={field.value || ''}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                onFocus={() => {
                  if (options.length > 0) setIsOpen(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setHighlightedIndex((prev) =>
                      Math.min(prev + 1, options.length - 1),
                    );
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setHighlightedIndex((prev) => Math.max(prev - 1, 0));
                  } else if (e.key === 'Enter' || e.key === 'Tab') {
                    if (
                      highlightedIndex >= 0 &&
                      highlightedIndex < options.length
                    ) {
                      const option = options[highlightedIndex];
                      field.onChange(option.label);
                      setIsOpen(false);
                    }
                  } else if (e.key === 'Escape') {
                    setIsOpen(false);
                  }
                }}
                placeholder="Digite para buscar..."
                className={`w-full border ${
                  fieldState.error ? 'border-red-500' : 'border-gray-300'
                } rounded px-3 py-2 pr-10`}
              />
              {isLoading && (
                <Loader2 className="absolute right-2 top-2.5 h-5 w-5 animate-spin text-gray-400" />
              )}
            </div>

            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute z-10 bg-white border border-gray-300 rounded  w-full max-h-50 overflow-auto shadow-md"
              >
                {options.length === 0 && !isLoading ? (
                  <li className="px-3 py-2 text-gray-500 cursor-default">
                    Nenhum resultado encontrado
                  </li>
                ) : (
                  options.map((option, index) => (
                    <li
                      key={option.value}
                      tabIndex={-1}
                      onClick={() => {
                        field.onChange(option.label);
                        setIsOpen(false);
                      }}
                      className={`px-3 py-2 cursor-pointer ${
                        index === highlightedIndex
                          ? 'bg-blue-100'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {option.label}
                    </li>
                  ))
                )}
              </motion.ul>
            )}

            {fieldState.error && (
              <p className="text-red-500 text-sm mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
}
