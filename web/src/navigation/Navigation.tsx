import './Navigation.css';

import React, { FC, ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import { CreateTodo, FindTodo } from '../components';
import { PATHS, routes } from '../constants';

const RouterWrapper: FC<RouteWrapperType> = ({ children }) => {
  return (
    <div className='wrapper'>
      <h3 className='uk-background-primary'>{'Your Todos'}</h3>
      <aside>
        <CreateTodo />
        <FindTodo />
      </aside>
      <div className='content'>
        <div className='uk-margin-small uk-flex uk-flex-column uk-flex-center uk-margin-remove'>
          {children}
        </div>
      </div>
    </div>
  );
};

export const Navigation = () => {
  UIkit.use(Icons);
  return (
    <Routes>
      {routes.map((route, index) => {
        const { component: Component, path } = route;
        return (
          <Route
            key={route.path + index}
            path={path}
            element={
              <RouterWrapper>
                <Component />
              </RouterWrapper>
            }
          />
        );
      })}
      <Route path={'*'} element={<Navigate replace to={PATHS.todolists} />} />
    </Routes>
  );
};

type RouteWrapperType = {
  children: ReactNode;
};
