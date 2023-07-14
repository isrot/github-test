import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <Grid item lx={12 / 5} lg={3} md={4} sm={6} xs={12}>
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 230,
          "&:hover": { transform: "scale(1.1)" },
        }}
      >
        <CardContent>
          <Typography sx={{overflow: 'auto'}} variant="h5">{task.title}</Typography>
          <Typography sx={{ mb: 1.5, wordBreak: "break-word" }} color="text.secondary">
            {task.description}
          </Typography>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default TaskCard;
