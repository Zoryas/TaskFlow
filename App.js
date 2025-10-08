import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // React Router
import "./App.css"; // Import the App.css for styling
import TaskListView from "./TaskListView"; // Import the TaskListView component
import AddTaskView from "./AddTaskView"; // Import the AddTaskView component

function App() {
  const [tasks, setTasks] = useState([]); // Initialize tasks state

  // Function to add a new task
  const addTask = (taskDetails) => {
    setTasks((prevTasks) => [...prevTasks, taskDetails]);
  };

  // Function to delete a task
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
