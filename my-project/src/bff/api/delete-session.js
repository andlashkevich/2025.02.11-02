export const deleteSession = async (sessionId) =>
  fetch(`http://localhost:3003/sessions/${sessionId}`, {
    method: "DELETE",
  });
