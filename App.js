import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import "./App.css"; 

function Home() {
  return (
    <div className='home'>
      <h1>Task Flow</h1>
      <p>Task Management Application</p>
    </div>
  );
}

function AddTask() {
  return (
    <div className='addtask'>
      <h1>This is a Task Management Application where you can add task.</h1>
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
          <Route path='/home' element={<Home />} />
          <Route path='/addtask' element={<AddTask />} />
        </Routes>
      </Router>

      {/* Optionally Include the FunctionalComponent */}
    </div>
  );
}

export default App;
