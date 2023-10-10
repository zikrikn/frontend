import { createBrowserRouter } from "react-router-dom";
import { Home, Register, Login } from "@/pages";
import RootLayout from "@/layouts/root-layout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <h1>404 - Something wrong</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "auth",
        children: [
          {
            element: <Register />,
            path: "register",
          },
          {
            element: <Login />,
            path: "login",
          },
        ],
      },
    ],
  },
]);
