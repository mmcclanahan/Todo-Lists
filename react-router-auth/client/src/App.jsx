import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import readTodosRequest from './API/readTodosRequest';
import writeTodo from './API/writeTodo';
import deleteTodo from './API/deleteTodo';
import updateTodo from './API/updateTodo';
import AddTodoInput from './components/AddTodoInput';
import TodoCard from './components/TodoCard';

function App() {

  const queryClient = useQueryClient();

  const { isLoading, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: readTodosRequest,
  });

  const addTodoMutation = useMutation({
    mutationFn: writeTodo,
    onSuccess: (newTodo) => {
      //queryClient.invalidateQueries({queryKey: ['todos']});
      queryClient.setQueryData(['todos'], (oldTodos) => {
        return [...oldTodos, newTodo];
      })
    }
  })

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: (updatedTodo) => {
      queryClient.setQueryData(['todos'], (oldTodos) => {
        return oldTodos.map((todo) =>
          todo._id === updatedTodo._id ? updatedTodo : todo
        );
      })
    }
  })

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (_, todoId) => {
      //queryClient.invalidateQueries({queryKey: ['todos']});
      queryClient.setQueryData(['todos'], (oldTodos) => {
        return oldTodos.filter((todo) => todo._id !== todoId);
      });
    }
  })

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='App'>
      <h1>Todos</h1>
      <ul>
        {data.map((todo) => (
          <TodoCard key={todo._id} todoObj={todo} updateTodo={updateTodoMutation.mutate} deleteTodo={deleteTodoMutation.mutate} />
        ))}
      </ul>
      <AddTodoInput mutate={addTodoMutation.mutate}/>
      {addTodoMutation.isPending && <p>data is being added...</p>}
    </div>
  );
}

export default App
