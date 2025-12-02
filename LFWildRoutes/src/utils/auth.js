const login = async (username, password) => {
  const response = await fetch("api/session/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  return await response.json();
};

const logout = async () => {
  const response = await fetch("api/session/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

const isLogged = async () => {
  const response = await fetch("api/session/isLogged");
  return await response.json();
};

export { login, logout, isLogged };
