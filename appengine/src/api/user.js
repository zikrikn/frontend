import { client } from "./client";

export function getCurrentUser() {
  return client.get("/profile");
}
