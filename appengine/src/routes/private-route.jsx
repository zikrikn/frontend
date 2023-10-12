import { useUser } from "@/context/user-context";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function PrivateRoute({ role = [], children, redirect }) {
  const { user } = useUser();
  const isCurrentRoleAllowed = role.includes(user?.role);

  if (user && isCurrentRoleAllowed) {
    return children ?? <Outlet />;
  }

  return <Navigate to={redirect} replace />;
}
