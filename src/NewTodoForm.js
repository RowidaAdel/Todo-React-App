import React, { useState } from 'react';
import './NewTodoForm.css';

function NewTodoForm({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return alert("Task can't be empty!");
    addTask(input);
    setInput('');
  };

  return (
    <form className="row" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit" className="btn-task">Add Task</button>
    </form>
  );
}

export default NewTodoForm;
