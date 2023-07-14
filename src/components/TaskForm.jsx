import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Box, Button, FormControl, Paper, TextField, TextareaAutosize } from "@mui/material";

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
    <Paper sx={{ m: 5, pt: 5, pb: 5, maxWidth: 500,  minWidth: 275}}>
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl>
          <TextField 
            required
            sx={{pb:2}}
            id="title_field"
            label="Write your task"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
          />  
          <TextareaAutosize
            minRows={8}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add the description"
            value={description}
          />

          <Button color="primary" variant="contained" type="submit">
            Save
          </Button>
        </FormControl>
      </Box>
    </Paper>
  );
}

export default TaskForm;
