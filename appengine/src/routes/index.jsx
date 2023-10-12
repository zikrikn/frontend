import { createBrowserRouter } from "react-router-dom";
import { Home, Register, Login, Error, Profile } from "@/pages";
import { PrivateRoute } from "./private-route";
import AppLayout from "@/layouts/app-layout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
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
      {
        path: "/profile",
        element: (
          <PrivateRoute role={["user", "admin"]} redirect="/">
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
