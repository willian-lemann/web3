import Image from "next/image";
import Router from "next/router";

import { useAuthContext } from "../context/auth/AuthContext";

const Login = () => {
  const { login, isAuthenticating, isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    Router.replace("/login");
  }

  return (
    <div className="h-screen w-screen relative flex items-center justify-center">
      <div className="absolute z-50 mb-10 flex flex-col items-center">
        <h1 className="text-3xl">Welcome to Metaverse</h1>

        <button
          onClick={login}
          className="animate-pulse mt-10 border-none w-auto h-[45px] bg-pink-600 rounded-md px-[0.75rem] text-white"
        >
          {isAuthenticating && !isAuthenticated
            ? "loading..."
            : "Join our community!"}
        </button>
      </div>

      <Image src="https://i.imgur.com/WYAjt3T.jpeg" layout="fill" />
    </div>
  );
};

export default Login;
