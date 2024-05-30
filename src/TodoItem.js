import React from 'react';

function TodoItem({ todo, onToggleCompleted, onDelete }) {
  const handleToggleCompleted = () => {
    onToggleCompleted(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggleCompleted} />
      <span>{todo.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
