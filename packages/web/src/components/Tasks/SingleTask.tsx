import { useParams } from "react-router-dom";
import {
  TaskDocument,
  useTaskQuery,
  useUpdateTaskMutation,
} from "../../gql/graphql";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function SingleTask() {
  const { id } = useParams();
  const { data } = useTaskQuery({
    variables: {
      id: Number(id),
    },
  });

  const [updateTask] = useUpdateTaskMutation({
    refetchQueries: [TaskDocument],
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (data) {
      setName(data?.task.name);
      setDescription(data?.task.description || "");
    }
  }, [data]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name && description) {
      updateTask({
        variables: {
          task: {
            id: Number(id),
            name,
            description,
          },
        },
      });
    }
  };

  return (
    <div>
      Task details:
      <div>ID: {data?.task.id}</div>
      <div>NAME: {data?.task.name}</div>
      <div>DESCRIPTION: {data?.task.description}</div>
      <form autoComplete="off" onSubmit={handleSubmit}>
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
          Change
        </Button>
      </form>
    </div>
  );
}
