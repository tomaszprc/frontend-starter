import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchPost, updatePost } from "../../api";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import { Post } from "./Posts";

export default function SinglePost() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["singlePost"],
    queryFn: () => fetchPost(id || "1"),
  });

  const updatePostMutation = useMutation({
    mutationFn: (post: Post) => updatePost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["singlePost"] });
    },
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (id) {
      updatePostMutation.mutate({
        id: id.toString(),
        name,
        description,
      });
    }
  };

  useEffect(() => {
    if (data) {
      setName(data.name);
      setDescription(data.description || "");
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Task details:
      <div>ID: {data.id}</div>
      <div>NAME: {data.name}</div>
      <div>DESCRIPTION: {data.description}</div>
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
