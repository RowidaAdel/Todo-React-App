import React from 'react';

function Todo({ task, index, deleteTask, editTask, toggleComplete }) {
  return (
    <li className="task_item">
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.text}
      </span>
      {task.completed && <span className="check-icon">✅</span>}
      
      <button
        className="edit_btn"
        onClick={() => {
          const updated = prompt('Edit your task:', task.text);
          if (updated) editTask(index, updated);
        }}
      >
        Edit
      </button>
      <button className="delete_btn" onClick={() => deleteTask(index)}>
        Delete
      </button>
      <button className="complete_btn" onClick={() => toggleComplete(index)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </li>
  );
}

export default Todo;
