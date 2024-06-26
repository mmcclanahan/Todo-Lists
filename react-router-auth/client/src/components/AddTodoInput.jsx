import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const AddTodoInput = ({ addTodo }) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addTodo(input);
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={input}
        onChange={handleChange}
        placeholder="Enter todo"
      />
      <button type='submit'>Create</button>
    </form>
  );
};

export default AddTodoInput;