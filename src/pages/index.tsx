import { useAuthContext } from "../context/auth/AuthContext";

const Home = () => {
  const { logOut, isLoggingOut } = useAuthContext();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>
        <h1>This is Home</h1>
      </div>

      <button
        onClick={logOut}
        className="border-none px-4 h-[45px] w-32 bg-orange-600 rounded-3xl text-white mt-2"
      >
        {isLoggingOut ? "logging out..." : "Log out"}
      </button>
    </div>
  );
};

export default Home;
