import React from 'react';

const TodoDetails = ({ match }) => {
  console.log('match.params', match.params);
  return (
    <div>
      <h1>Détails de {match.params.id}</h1>
    </div>
  );
}
 
export default TodoDetails;
