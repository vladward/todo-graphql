import './Home.css';

import { Todolists } from '../../components';
import { useTodosQuery } from '../../hooks/queries';

export const Home = () => {
  const { data } = useTodosQuery({});
  return (
    <div className='uk-padding-small'>
      <Todolists data={data?.todos?.edges} total={data?.todos?.total} />
    </div>
  );
};
