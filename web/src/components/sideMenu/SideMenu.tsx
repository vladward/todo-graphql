import React, { FC } from 'react';

import { CreateTodo } from '../createTodo/CreateTodo';
import { FindTodo } from '../findTodo/FindTodo';

export const SideMenu: FC = () => {
  return (
    <aside>
      <CreateTodo />
      <FindTodo />
    </aside>
  );
};
