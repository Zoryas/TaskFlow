import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function TaskListView({ tasks, deleteTask }) {
  return (
    <div className="task-list-view">
      <h1>Task List</h1>
      {tasks.length === 0 ? (
        <p>No tasks available. Please add a task.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} - {task.description}{" "}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AddTaskView({ addTask }) {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), ...taskDetails }; 
    addTask(newTask); 
    setTaskDetails({ title: "", description: "" });
  };

  return (
    <div className="add-task-view">
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={taskDetails.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={taskDetails.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskDetails) => {
    setTasks((prevTasks) => [...prevTasks, taskDetails]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      {/* Set up Router for navigation */}
      <Router>
        {/* Simple Navigation Links */}
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/addtask" className="nav-link">
                Add Task
              </Link>
            </li>
          </ul>
        </nav>

        {/* Define the routes */}
        <Routes>
          <Route
            path="/home"
            element={<TaskListView tasks={tasks} deleteTask={deleteTask} />}
          />
          <Route
            path="/addtask"
            element={<AddTaskView addTask={addTask} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

