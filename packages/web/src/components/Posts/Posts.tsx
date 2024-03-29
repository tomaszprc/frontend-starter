import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, deletePost, fetchPosts } from "../../api";
import { Button, Container, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export interface Post {
  id: string;
  name: string;
  description: string;
}

export default function Posts() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const deletePostMutation = useMutation({
    mutationFn: (postId: string) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const createPostMutation = useMutation({
    mutationFn: (post: { name: string; description: string }) =>
      createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createPostMutation.mutate({
      name: name,
      description: description,
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Grid container gap={3}>
        {data &&
          data.map((post: Post) => {
            return (
              <div
                key={post.id}
                style={{ border: "1px solid black", padding: 10 }}
              >
                <div>Post name: {post.name}</div>
                <div>Post description: {post.name}</div>
                <div>
                  Post link: <Link to={`/post/${post.id}`}>Post details</Link>
                </div>
                <Button
                  onClick={() => deletePostMutation.mutate(post.id.toString())}
                  color="error"
                >
                  Remove
                </Button>
              </div>
            );
          })}
        <form autoComplete="off" onSubmit={handleForm}>
          <h2>add post</h2>
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
            Add post
          </Button>
        </form>
      </Grid>
    </Container>
  );
}
