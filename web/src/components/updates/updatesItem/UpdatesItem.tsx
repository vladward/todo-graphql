import './UpdatesItem.css';

import { FC } from 'react';

import { CardType } from '../../card/Card';

export const UpdatesItem: FC<UpdatesItemType> = ({ completed, description, title }) => {
  return (
    <div className='updatesItem'>
      <span className='updatesItem__title'>Title:&nbsp;{title}</span>
      <span className='updatesItem__description'>Description:&nbsp;{description}</span>
      <span className='updatesItem__status'>completed:&nbsp;{`${completed}`}</span>
    </div>
  );
};

type UpdatesItemType = Pick<CardType, 'title' | 'description' | 'completed'>;
