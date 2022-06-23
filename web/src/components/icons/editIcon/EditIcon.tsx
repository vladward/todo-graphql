import './EditIcon.css';

import { FC } from 'react';

export const EditIcon: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <span className='uk-margin-small-right edit' uk-icon='pencil' onClick={onClick} />
  );
};
