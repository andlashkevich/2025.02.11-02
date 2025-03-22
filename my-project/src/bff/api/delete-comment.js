export const deleteComment = async (commentId) =>
  fetch(`http://localhost:3003/comments/${commentId}`, {
    method: "DELETE",
  });
