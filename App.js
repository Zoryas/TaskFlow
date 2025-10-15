//Reagan Gabutelo
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; 
import TaskListView from "./TaskListView"; 
import AddTaskView from "./AddTaskView"; 

function App() {
  const [tasks, setTasks] = useState([]); 

 
  const addTask = (taskDetails) => {
    setTasks((prevTasks) => [...prevTasks, taskDetails]);
  };

  
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className='App'>
      {/* Set up Router for navigation */}
      <Router>
        {/* Simple Navigation Links */}
        <nav className='navbar'>
          <ul>
            <li>
              <Link to='/home' className='nav-link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/addtask' className='nav-link'>
                Add Task
              </Link>
            </li>
          </ul>
        </nav>

        {/* Define the routes */}
        <Routes>
          <Route
            path='/home'
            element={<TaskListView tasks={tasks} deleteTask={deleteTask} />}
          />
          <Route path='/addtask' element={<AddTaskView addTask={addTask} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


