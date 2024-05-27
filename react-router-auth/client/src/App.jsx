import { useTodos } from './hooks/useTodos';
import AddTodoInput from './components/AddTodoInput';
import TodoCard from './components/TodoCard';

function App() {
  const { todosQuery, addTodoMutation, updateTodoMutation, deleteTodoMutation } = useTodos();

  if (todosQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (todosQuery.isError) {
    return <div>Error: {todosQuery.error.message}</div>;
  }

  return (
    <div className='App'>
      <h1>Todos</h1>
      <ul>
        {todosQuery.data.map((todo) => (
          <TodoCard
            key={todo._id}
            todoObj={todo}
            updateTodo={updateTodoMutation.mutate}
            deleteTodo={deleteTodoMutation.mutate}
          />
        ))}
      </ul>
      <AddTodoInput addTodo={addTodoMutation.mutate} />
      {addTodoMutation.isLoading && <p>Adding todo...</p>}
    </div>
  );
}

export default App;
