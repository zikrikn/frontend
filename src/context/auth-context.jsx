import { createContext, useContext, useEffect } from "react";
import { useApi } from "@/hooks/use-api";
import { getUserData } from "@/api/user";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { loading, data, request } = useApi(getUserData);

  useEffect(() => {
    request();
  }, []);

  return (
    <AuthContext.Provider value={data}>
      {loading ? <h1>Loading...</h1> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
