import React from 'react';
import Todo from './Todo';

const Todos = ({todos}) => {
  console.log(todos);
  return (
    <div>
      <ul className="todos">
        {todos && todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
 
export default Todos;