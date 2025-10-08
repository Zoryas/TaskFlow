import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTaskView({ addTask }) {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), ...taskDetails };
    addTask(newTask);
    setTaskDetails({ title: "", description: "", priority: "" });
    navigate("/home");
  };

  return (
    <div className='add-task-view'>
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type='text'
            name='title'
            value={taskDetails.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type='text'
            name='description'
            value={taskDetails.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Priority: </label>
          <select
            name='priority'
            value={taskDetails.priority}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select Priority</option>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </select>
        </div>
        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
}

export default AddTaskView;
