import React, { useState } from 'react';
import TodoList from './TodoList'; 

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTodoText.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodoText, completed: false },
      ]);
      setNewTodoText('');
    }
  };

  const handleToggleCompleted = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} placeholder="Add a new todo" />
        <button type="submit">Add</button>
      </form>
      <TodoList todos={todos} onToggleCompleted={handleToggleCompleted} onDelete={handleDelete} />
    </div>
  );
}

export default App;
