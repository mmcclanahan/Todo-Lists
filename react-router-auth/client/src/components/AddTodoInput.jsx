import { useState } from 'react';

const AddTodoInput = ({ mutate }) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      mutate(input);
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