export async function handleLogin(username, password) {
  const response = await fetch("http://localhost:8081/login", {
    params: {
      username,
      password,
    },
  });
  const data = await response.json();
  console.log(data);
}
