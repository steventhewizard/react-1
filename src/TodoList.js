import React from 'react';
import TodoItem from './TodoItem'; 

function TodoList({ todos, onToggleCompleted, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggleCompleted={onToggleCompleted} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
