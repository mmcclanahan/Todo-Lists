import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import readTodosRequest from '../API/readTodosRequest';
import writeTodo from '../API/writeTodo';
import deleteTodo from '../API/deleteTodo';
import updateTodo from '../API/updateTodo';

export const useTodos = () => {
  const queryClient = useQueryClient();

  //stale time triggers: switching tabs (refocusing the tab) / default stale time in index.jsx
  //refetchInterval : interval fn calls
  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: readTodosRequest,
    //staleTime: 6000,
    //refetchInterval: 4000,
  });

  const addTodoMutation = useMutation({
    mutationFn: writeTodo,
    onSuccess: (newTodo) => {
      queryClient.setQueryData(['todos'], (oldTodos) => [...oldTodos, newTodo]);
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: (updatedTodo) => {
      queryClient.setQueryData(['todos'], (oldTodos) =>
        oldTodos.map((todo) => (todo._id === updatedTodo._id ? updatedTodo : todo))
      );
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (_, todoId) => {
      queryClient.setQueryData(['todos'], (oldTodos) =>
        oldTodos.filter((todo) => todo._id !== todoId)
      );
    },
  });

  return {
    todosQuery,
    addTodoMutation,
    updateTodoMutation,
    deleteTodoMutation,
  };
};
