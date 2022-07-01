import React, { FC } from 'react';

import { CreateTodo } from '../createTodo/CreateTodo';
import { FindTodo } from '../findTodo/FindTodo';
import { Updates } from '../updates/Updates';

export const SideMenu: FC = () => {
  return (
    <aside>
      <CreateTodo />
      <FindTodo />
      <Updates />
    </aside>
  );
};
