import './CustomInput.css';

import { useField } from 'formik';
import React, { ChangeEvent, FC } from 'react';

import { useSearchContext } from '../../context';

export const CustomInput: FC<CustomInputType> = ({
  name,
  placeholder,
  type = 'text',
  disabled = false,
  label,
  id,
}) => {
  const [field, meta] = useField(name);
  const { searchValue, setSearchValue } = useSearchContext();
  const hasError = Boolean(meta.error && meta.touched);
  return (
    <div className='uk-margin-small-bottom'>
      {type === 'checkbox' && (
        <label style={{ marginRight: '10px' }} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={type === 'checkbox' ? 'uk-checkbox' : 'uk-search-input customInput'}
        type={type}
        name={name}
        value={searchValue || field.value}
        onChange={(e) => setSearchValue(e.currentTarget.value) || field.onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      <div className='customInput__error'>
        {hasError && <p className='uk-text-danger uk-margin-remove'>{meta.error}</p>}
      </div>
    </div>
  );
};

type CustomInputType = {
  name: string;
  placeholder?: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};
