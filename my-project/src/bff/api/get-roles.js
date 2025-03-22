export const getRoles = () =>
  fetch("http://localhost:3003/roles").then((loadedRoles) =>
    loadedRoles.json()
  );
