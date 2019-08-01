import React, { ChangeEvent } from 'react';

type Props = {
  name: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};

export default function Input(props: Props) {
  const { name, label, type, value, placeholder, onChange } = props;
  return (
    <label>
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
