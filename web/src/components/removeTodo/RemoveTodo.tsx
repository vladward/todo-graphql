import { FC } from 'react';

import { useRemoveTodoMutation } from '../../hooks/mutations';
import { CardType } from '../card/Card';
import { RemoveIcon } from '../icons';

export const RemoveTodo: FC<Pick<CardType, 'id'>> = ({ id }) => {
  const [removeTodo] = useRemoveTodoMutation();
  const handleRemove = async () => {
    if (id) {
      await removeTodo({
        variables: {
          id,
        },
      });
    }
  };
  return (
    <div className='uk-padding-small'>
      <RemoveIcon onClick={handleRemove} />
    </div>
  );
};
