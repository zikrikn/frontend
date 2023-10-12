import Cookies from "js-cookie";

export function handleAuth(token) {
  if (token) {
    Cookies.set("token", token, { expires: 3 });
    setTimeout(() => window.location.replace("/"), 1500);
  }
}

export function getToken() {
  const token = Cookies.get("token");
  return token ?? null;
}

export function logout() {
  Cookies.remove("token");
  window.location.replace("/");
}
