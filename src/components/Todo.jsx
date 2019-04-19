import React from 'react';
import { Link } from 'react-router-dom';

const Todo = ({todo}) => {
  return (
    <li className="todo">{todo.title} <br /><Link to={`/todos/${todo.id}`} className="todo-link">détails...</Link></li>
  );
}
 
export default Todo;