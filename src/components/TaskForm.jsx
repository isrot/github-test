import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Button } from "@mui/material";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title: title,
      description: description,
    });
    setTitle("");
    setDescription("");
    const titleField = document.getElementById("title_field");
    titleField.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="title_field"
        placeholder="Write your task"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        cols="30"
        rows="10"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <Button color="primary" variant="contained" type="submit">Save</Button>
    </form>
  );
}

export default TaskForm;
