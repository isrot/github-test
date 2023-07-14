import React from "react";
import TasKkList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="xl" align="center">
      <Container>
        <Typography sx={{mt:5}} variant="h3">Task Manager</Typography>
      </Container>
      <TaskForm />
      <TasKkList />
    </Container>
  );
}

export default App;
