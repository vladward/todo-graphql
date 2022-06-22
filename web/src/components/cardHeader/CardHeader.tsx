import { FC } from 'react';

import { CardType } from '../card/Card';

export const CardHeader: FC<Pick<CardType, 'title'>> = ({ title }) => {
  return (
    <div className='uk-card-header uk-padding-small uk-text-center uk-margin-small-top'>
      <div className='uk-card-title uk-text-lead uk-text-primary uk-text-nowrap'>
        {title}
      </div>
    </div>
  );
};
