import React, { useState, useEffect } from 'react';
import './App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    document.documentElement.classList.toggle('dark-mode', savedMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode', !isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode);
  };

  const addTask = (text) => {
    if (!text.trim()) return alert("Task can't be empty!");
    const newTask = { text: text.trim(), completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];  
    updated.splice(index, 1);    
    setTasks(updated);           
    localStorage.setItem('tasks', JSON.stringify(updated));  
  };

  const editTask = (index, newText) => {
    const updated = [...tasks];
    updated[index].text = newText;
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));  
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));  
  };

  return (
    <>
      <button onClick={toggleDarkMode} className="theme-toggle">
        <i id="theme-icon" className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
      </button>

      <div className="todo">
        <h1>To-Do List</h1>
        <NewTodoForm addTask={addTask} />
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </>
  );
}

export default App;
