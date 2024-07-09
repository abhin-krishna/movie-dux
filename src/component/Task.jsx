import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Task = () => {
  const [input, setInput] = useState("");
  const [tasks, SetTasks] = useState([]);

  const handleSubmit = () => {
    const id = Math.random(2 * 1000) / 100;
    console.log(id);
    SetTasks([...tasks, { id: id, name: input }]);
    console.log(tasks);
  };

  const handleDelete = (id) => {
    SetTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <div className="form-container">
        <div className="form">
          <h1>Add Tasks</h1>
          <TextField
            id="standard-basic"
            label="Enter a Task"
            variant="standard"
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <label onClick={handleSubmit}>
            <AddIcon />
          </label>
        </div>
        <div className="task-list">
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <label onClick={() => handleDelete(task.id)}>
                  <DeleteIcon />
                </label>
                <span>{task.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task;
