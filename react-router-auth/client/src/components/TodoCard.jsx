/* eslint-disable react/prop-types */
const TodoCard = ({ todoObj, deleteTodo, updateTodo }) => {

  const completed = () => {
    updateTodo({id: todoObj._id, text: todoObj.text, completed: !todoObj.completed});
  }

  return (
    <li>
      <span>{todoObj.text}{todoObj.completed ? "yes": "no"}</span>
      <button onClick={() => {completed()}}>complete</button>
      <button onClick={() => {deleteTodo(todoObj._id)}}>delete</button>
    </li>
  )
}

export default TodoCard;