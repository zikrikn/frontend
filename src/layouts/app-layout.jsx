import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";
import { UserProvider } from "@/context/user-context";

export default function AppLayout() {
  return (
    <UserProvider>
      <Toaster />
      <Outlet />
    </UserProvider>
  );
}
