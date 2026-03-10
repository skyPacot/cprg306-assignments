"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Shopping List App</h1>
      
      {!user ? (
        // User is NOT logged in
        <button 
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login with GitHub
        </button>
      ) : (
        // User IS logged in
        <div>
          <p className="text-lg mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <div className="flex flex-col gap-2">
            <Link href="/week-8/shopping-list" className="text-blue-500 hover:underline">
              Go to Shopping List
            </Link>
            <button 
              onClick={handleLogout}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-fit"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}