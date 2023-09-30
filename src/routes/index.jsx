import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages";

export const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
    errorElement: <h1>404 - Something wrong</h1>,
  },
]);
