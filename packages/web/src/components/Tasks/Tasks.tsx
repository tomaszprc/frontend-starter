import { Button, Container, Grid, TextField } from "@mui/material";
import {
  TasksDocument,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useTasksQuery,
} from "../../gql/graphql";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Tasks() {
  const { data } = useTasksQuery();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [removeTask] = useDeleteTaskMutation({
    refetchQueries: [TasksDocument],
  });

  const [createTask] = useAddTaskMutation({
    refetchQueries: [TasksDocument],
  });

  const handleRemoveButton = (id: number) => {
    removeTask({
      variables: {
        id: id,
      },
    });
  };

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTask({
      variables: {
        task: {
          name,
          description,
        },
      },
    });
  };

  return (
    <Container>
      <Grid container gap={3}>
        {data?.tasks.map((task) => {
          return (
            <div
              key={task.id}
              style={{ border: "1px solid black", padding: 10 }}
            >
              <div>Task name: {task.name}</div>
              <div>Task description: {task.name}</div>
              <div>
                Task link: <Link to={`/tasks/${task.id}`}>Task details</Link>
              </div>
              <Button onClick={() => handleRemoveButton(task.id)} color="error">
                Remove
              </Button>
            </div>
          );
        })}

        <form autoComplete="off" onSubmit={handleForm}>
          <h2>Change Task</h2>
          <TextField
            label="Name"
            onChange={(e) => setName(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            sx={{ mb: 3 }}
            fullWidth
            value={name}
          />
          <TextField
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            value={description}
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button variant="outlined" color="secondary" type="submit">
            Add task
          </Button>
        </form>
      </Grid>
    </Container>
  );
}
