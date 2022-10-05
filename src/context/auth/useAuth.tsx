import Router from "next/router";
import { useState } from "react";
import { useMoralis } from "react-moralis";

export interface InitialState {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  isLoggingOut: boolean;
  etherAddress: string;
  login: () => Promise<void>;
  logOut: () => Promise<void>;
}

export const useAuth = (): InitialState => {
  const { isAuthenticated, authenticate, logout, isLoggingOut } = useMoralis();

  const [etherAddress, setEtherAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function login() {
    if (!isAuthenticated) {
      setIsLoading(true);

      try {
        const response = await authenticate();

        setEtherAddress(response?.get("ethAddress"));

        Router.push("/");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function logOut() {
    await logout();
  }

  return {
    etherAddress,
    login,
    logOut,
    isAuthenticating: isLoading,
    isAuthenticated,
    isLoggingOut,
  };
};
