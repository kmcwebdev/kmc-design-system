import React from 'react';

export interface CheckboxProps {
  label: string | JSX.Element;
  description?: string;
  name: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, name, description, ...rest }) => {
  return (
    <fieldset className="space-y-3">
      <div className="relative flex items-center">
        <div className="grid grid-cols-[18px_1fr] items-center gap-x-2">
          <input
            id={name}
            aria-describedby={name}
            name={name}
            type="checkbox"
            className="transition-all focus:ring-main-accent h-4 w-4 text-main-accent border-2 border-gray-600 rounded duration-75 justify-self-center"
            {...rest}
          />

          {typeof label === 'string' ? (
            <label htmlFor={name} className="text-gray-700">
              {label}
            </label>
          ) : (
            label
          )}

          {description && (
            <p id={`${name}-description`} className="text-gray-500 col-start-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </fieldset>
  );
};
