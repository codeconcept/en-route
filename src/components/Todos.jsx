import React from 'react';

const Todos = ({todos}) => {
  console.log(todos);
  return (
    <div>
      <ul>
        {todos && todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default Todos;