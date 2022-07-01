import './Updates.css';

import { useNewActivity } from '../../hooks';
import { UpdatesItem } from './updatesItem/UpdatesItem';

export const Updates = () => {
  const { updData } = useNewActivity();

  return (
    <div className='updates'>
      <h5>Updates</h5>
      {updData ? (
        updData?.map((activity, index) => {
          return (
            <UpdatesItem
              key={index}
              title={activity?.title}
              description={activity?.description}
              completed={activity?.completed}
            />
          );
        })
      ) : (
        <p>no updates yet</p>
      )}
    </div>
  );
};
