export const deleteUser = (userId) =>
  fetch(`http://localhost:3003/users/${userId}`, {
    method: "DELETE",
  });
