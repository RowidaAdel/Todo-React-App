import React from 'react';

const TodoList = ({ tasks, deleteTask, editTask, toggleComplete }) => {
  return (
    <ul className="task_list">
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => (
          <li
            key={index}
            className={`task_item ${task.completed ? 'completed' : ''}`}
          >
            <div className="task_content">
              <span
                className="circle"
                onClick={() => toggleComplete(index)}
              >
                {task.completed ? '✔' : ''}
              </span>
              <span className="task_text">{task.text}</span>
            </div>

            <div className="task_buttons">
              <button
                className="edit_btn"
                onClick={() => {
                  const updated = prompt('Edit your task:', task.text);
                  if (updated && updated.trim()) {
                    editTask(index, updated.trim());
                  }
                }}
              >
                Edit
              </button>
              <button
                className="delete_btn"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      ) : (
        <li>No tasks available</li>
      )}
    </ul>
  );
};

export default TodoList;
