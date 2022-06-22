import './Card.css';

import { FC } from 'react';

import { CardActions } from '../cardActions/CardActions';
import { CardDescription } from '../cardDescription/CardDescription';
import { CardHeader } from '../cardHeader/CardHeader';
import { CardStatus } from '../cardStatus/CardStatus';

export const Card: FC<CardType> = ({ completed, description, title }) => {
  return (
    <div className='card'>
      <div className='uk-width-medium uk-card uk-margin-medium uk-margin-small-right uk-margin-small-left uk-padding-small uk-card-default uk-card-body uk-card-hover'>
        <CardHeader title={title} />
        <CardDescription description={description} />
        <CardStatus completed={completed} />
        <CardActions />
      </div>
    </div>
  );
};

export type CardType = {
  id?: string;
  title: string;
  description?: string;
  completed?: boolean;
};
