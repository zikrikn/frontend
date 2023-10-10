import { client } from "./client";

function register(data) {
  return client.post("/signup", { ...data });
}

function login(data) {
  const params = new URLSearchParams({ ...data });
  return client.post("/login", params);
}

export default {
  register,
  login,
};
