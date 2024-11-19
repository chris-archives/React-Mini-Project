import React, { useState } from 'react';

export const TodoForm = (addTodo) => {
  const [value, setValue] = useState("");

  const submitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addTodo(value);
  };

  return (
    <form className="TodoForm" onSubmit={submitForm}>
      <input
        type="text"
        className="TodoInput"
        placeholder="What is the task today?"
        value={value} // Bind value to state
        onChange={(e) => setValue(e.target.value)} // Update state on input change
      />
      <button type="submit" className="AddButton">
        Add Tasks
      </button>
    </form>
  );
}

export default TodoForm;
