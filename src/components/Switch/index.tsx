import React, { useEffect, useRef, InputHTMLAttributes } from 'react';

import { useField } from '@unform/core';

import { TogleControll } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  value?: string;
}

const Switch: React.FC<InputProps> = ({
  name,
  value,
  label,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const defaultChecked = defaultValue === value;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.checked;
      },
      clearValue: (ref) => {
        /**
         * If you want to change the default checked for false or true,
         * you can do so here. In this example, when resetting the form,
         * the checkbox goes back to its initial state.
         */
        ref.current.checked = defaultChecked;
      },
      setValue: (ref, value) => {
        ref.current.checked = value;
      },
    });
  }, [defaultValue, fieldName, registerField, defaultChecked]);

  return (
    <TogleControll>
      <input
        defaultChecked={defaultChecked}
        ref={inputRef}
        value={value}
        type="checkbox"
        id={fieldName}
        {...rest}
      />
      <span className="control"></span>
      <label htmlFor={fieldName} key={fieldName}>
        {label}
      </label>

      {error && <span>{error}</span>}
    </TogleControll>
  );
};

export default Switch;
