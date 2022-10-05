import Router from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { InitialState, useAuth } from "./useAuth";

const AuthContext = createContext({} as InitialState);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuth();

  useEffect(() => {
    if (auth.isAuthenticated) {
      Router.push("/");
    } else {
      Router.push("/login");
    }
  }, [auth.isAuthenticated]);

  return (
    <AuthContext.Provider value={{ ...auth }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
