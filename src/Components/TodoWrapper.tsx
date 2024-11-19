import React, { useState } from 'react';
import TodoForm from './todoForm.tsx';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {/* Optional: Render todos for debugging */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoWrapper;
