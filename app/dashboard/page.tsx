"use client";

import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  
  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome, {session.user?.name}
        </h1>

        <p className="text-gray-500 mb-6">
          {session.user?.email}
        </p>

        <button
          className="cursor-pointer w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          onClick={() =>
            signOut({
              callbackUrl: "/login",
            })
          }
        >
          Logout
        </button>

      </div>
    </div>
  );
}