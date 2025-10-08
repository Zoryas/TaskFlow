import React from "react";

function TaskListView({ tasks, deleteTask }) {
  return (
    <div className='task-list-view'>
      <h1>View Task</h1>
      {tasks.length === 0 ? (
        <p>No tasks available. Please add a task.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>
                {task.title} - {task.description} - {task.priority}
              </span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskListView;
