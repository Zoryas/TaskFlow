import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; 

function TaskListView() {
  return (
    <div className='task-list-view'>
      <h1>Task List</h1>
      <p>Here you can see all the tasks you have to manage.</p>
      {/* Here, you would list the tasks in the future */}
    </div>
  );
}

function AddTaskView() {
  return (
    <div className='add-task-view'>
      <h1>Add New Task</h1>
      <p>This is where you can add a new task to your list.</p>
      {/* Future form for adding tasks would go here */}
    </div>
  );
}

function App() {
  return (
    <div className='app'>
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
          <Route path='/home' element={<TaskListView />} />
          <Route path='/addtask' element={<AddTaskView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
