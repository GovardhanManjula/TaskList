import React, { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import './App.css'; // Importing CSS file for styling

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="app">
      <h1>Task List</h1>
      <TaskList tasks={tasks} addTask={addTask} />
    </div>
  );
}

export default App;