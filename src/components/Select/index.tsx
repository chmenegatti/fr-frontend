import React, {
  useRef,
  useEffect,
  ReactNode,
  SelectHTMLAttributes,
} from 'react';

import { useField } from '@unform/core';
import { SelectContainer } from './styles';

interface SelectProps {
  children: ReactNode;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
}

const Select: React.FC<SelectProps> = ({ name, label, children, ...rest }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      ref: selectRef,
      name: fieldName,
      getValue: (ref) => {
        return ref.current?.value;
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <SelectContainer>
      <label htmlFor={fieldName}>{label}</label>

      <select
        id={fieldName}
        ref={selectRef}
        defaultValue={defaultValue}
        {...rest}
      >
        {children}
      </select>
      <div className="select_arrow"></div>
      {error && <span className="error">{error}</span>}
    </SelectContainer>
  );
};

export default Select;
