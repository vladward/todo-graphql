import './RemoveIcon.css';

import { FC } from 'react';

export const RemoveIcon: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <span className='uk-margin-small-right remove' uk-icon='close' onClick={onClick} />
  );
};
