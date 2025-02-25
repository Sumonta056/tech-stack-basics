import Button from "@/components/Button";
import { useState } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

type AuthUser = {
  name: string;
  email: string;
};

const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginInfo, setLoginInfo] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setLoggedIn(true);
    setLoginInfo({ name: "Sumonta", email: "sumonta@gmail.com" });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setLoginInfo(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white border rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
          Logging with <span className="text-blue-500">useState</span>
        </h1>

        <div className="flex justify-center gap-4">
          <Button
            icon={<FaSignInAlt />}
            name="Login"
            bgColor="bg-blue-500"
            padding="px-4 py-2"
            onClick={handleLogin}
          />
          <Button
            icon={<FaSignOutAlt />}
            name="Logout"
            bgColor="bg-red-500"
            padding="px-4 py-2"
            size="medium"
            onClick={handleLogout}
          />
        </div>

        <div className="mt-6 text-center">
          <h2
            className={`text-lg font-semibold ${
              loggedIn ? "text-green-500" : "text-red-500"
            }`}
          >
            {loggedIn ? "✅ Logged In" : "❌ Logged Out"}
          </h2>

          {loggedIn ? (
            <div className="p-4 mt-4 border rounded-lg shadow-sm bg-gray-50">
              <p className="flex items-center gap-2 text-gray-700">
                {loginInfo?.name}
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                {loginInfo?.email}
              </p>
            </div>
          ) : (
            <p className="mt-4 text-gray-500">No Information: Please Login!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
