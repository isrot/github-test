import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Grid } from "@mui/material";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (!tasks) {
    return <h1>There are no tasks</h1>;
  }

  return (

      <Grid container spacing={{ xs:2, sm: 3, md: 3}} justifyContent="flex-start" sx={{ mt: 2 }}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Grid>

  );
}

export default TaskList;
