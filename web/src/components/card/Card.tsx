import './Card.css';

import { FC } from 'react';

import { CardActions } from '../cardActions/CardActions';
import { CardDescription } from '../cardDescription/CardDescription';
import { CardHeader } from '../cardHeader/CardHeader';
import { CardStatus } from '../cardStatus/CardStatus';

export const Card: FC<CardType> = ({ completed, description, title, id }) => {
  return (
    <div className='card'>
      <div className='uk-width-medium uk-card uk-margin-medium uk-margin-small-right uk-margin-small-left uk-margin-small-top uk-margin-remove-bottom uk-padding-small uk-card-default uk-card-body uk-card-hover'>
        <CardHeader title={title} />
        <CardDescription description={description} />
        <CardStatus completed={completed} />
        <CardActions
          id={id}
          title={title}
          completed={completed}
          description={description}
        />
      </div>
    </div>
  );
};

export type CardType = {
  id?: string;
  title?: string;
  description?: string;
  completed?: boolean;
};
