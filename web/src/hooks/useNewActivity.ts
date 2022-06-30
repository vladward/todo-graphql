import { useEffect, useState } from 'react';

import { CardType } from '../components';
import { useRemovedTodoSubscription, useUpdatedTodoSubscription } from './subscriptions';

export const useNewActivity = () => {
  const { data: updateSubscriptionData } = useUpdatedTodoSubscription();
  const { data: removeSubscriptionData } = useRemovedTodoSubscription();

  const [updData, setUpdData] = useState<Array<CardType & { operation: string }>>([]);

  useEffect(() => {
    if (updateSubscriptionData) {
      setUpdData([
        ...updData,
        {
          id: updateSubscriptionData?.updatedTodo.id,
          title: updateSubscriptionData?.updatedTodo.title,
          description: updateSubscriptionData?.updatedTodo.description,
          completed: updateSubscriptionData?.updatedTodo.completed,
          operation: 'Updated',
        },
      ]);
    }
  }, [updateSubscriptionData?.updatedTodo]);

  useEffect(() => {
    if (removeSubscriptionData) {
      setUpdData([
        ...updData,
        {
          id: removeSubscriptionData?.removedTodo.id,
          title: removeSubscriptionData?.removedTodo.title,
          description: removeSubscriptionData?.removedTodo.description,
          completed: removeSubscriptionData?.removedTodo.completed,
          operation: 'Removed',
        },
      ]);
    }
  }, [removeSubscriptionData?.removedTodo]);

  return { updData };
};
