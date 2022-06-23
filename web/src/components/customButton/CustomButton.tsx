import React, { FC } from 'react';

export const CustomButton: FC<CustomButtonType> = ({
  type = 'button',
  text,
  className,
  onClick,
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

type CustomButtonType = {
  type?: 'submit' | 'reset' | 'button';
  text: string;
  className: string;
  onClick?: () => void;
};
