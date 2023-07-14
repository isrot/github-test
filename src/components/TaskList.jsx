import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Grid, Typography } from "@mui/material";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <Typography variant="h4">There are no tasks</Typography>;
  }

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3, md: 3 }}
      justifyContent="flex-start"
    >
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Grid>
  );
}

export default TaskList;
