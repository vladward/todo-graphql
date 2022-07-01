import { FC } from 'react';

import { CardType } from '../card/Card';

export const CardDescription: FC<Pick<CardType, 'description'>> = ({ description }) => {
  return (
    <div className='uk-text-default uk-width-1-1 uk-margin-medium uk-text-center'>
      <div className='uk-text-meta'>Description:&nbsp;</div>
      {description}
    </div>
  );
};
