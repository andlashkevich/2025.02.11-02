export const deletePost = (postId) =>
  fetch(`http://localhost:3003/posts/${postId}`, {
    method: "DELETE",
  });
