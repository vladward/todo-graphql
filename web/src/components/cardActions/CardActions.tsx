import './CardActions.css';

import { Edit, Remove } from '../icons';

export const CardActions = () => {
  return (
    <div className='actions'>
      <Edit />
      <Remove />
    </div>
  );
};
