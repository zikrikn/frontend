import { client } from "./client";
import axios from "axios";

axios.defaults.withCredentials = true;

export function getUserData() {
  client.get("/profile");
}
