import Cookies from "js-cookie";

export function handleAuth(token) {
  if (token) {
    Cookies.set("token", token, { expires: 3, path: "/" });
    window.location.replace("/");
  }
}

export function getToken() {
  const token = Cookies.get("token");

  if (!token) return null;
  return token;
}

export function logout() {
  Cookies.remove("token");
  window.location.replace("/");
}
