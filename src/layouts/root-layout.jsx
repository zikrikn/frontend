import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "@/context/auth-context";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Toaster />
      <Outlet />
    </AuthProvider>
  );
}
