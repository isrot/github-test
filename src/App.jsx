import React from "react";
import TasKkList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="xl" align="center">
      <TaskForm />
      <TasKkList />
    </Container>
  );
}

export default App;
