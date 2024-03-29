export async function fetchPosts() {
  const response = await fetch("http://localhost:3000/post");
  return response.json();
}

export async function fetchPost(postId: string) {
  const response = await fetch(`http://localhost:3000/post/${postId}`);
  return response.json();
}

export async function deletePost(postId: string) {
  const response = await fetch(`http://localhost:3000/post/${postId}`, {
    method: "DELETE",
  });
  return response.json();
}

export async function updatePost(post: {
  id: string;
  name: string;
  description: string;
}) {
  const response = await fetch(`http://localhost:3000/post`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
}

export async function createPost(post: { name: string; description: string }) {
  const response = await fetch(`http://localhost:3000/post`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
}
