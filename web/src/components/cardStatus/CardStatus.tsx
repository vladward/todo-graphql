import { FC } from 'react';

import { CardType } from '../card/Card';

export const CardStatus: FC<Pick<CardType, 'completed'>> = ({ completed }) => {
  const classname = completed
    ? 'uk-text-lead uk-text-primary uk-margin-medium uk-text-center'
    : 'uk-text-lead uk-text-danger uk-margin-medium uk-text-center';
  return (
    <div className={classname}>
      <div className='uk-text-meta'>Status:&nbsp;</div>
      {completed ? 'Completed' : 'Not Completed'}
    </div>
  );
};
