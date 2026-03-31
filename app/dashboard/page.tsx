"use client";

import { useSession, signOut } from "next-auth/react";

import AppCard from "@/components/common/AppCard";
import AppButton from "@/components/common/AppButton";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <AppCard title={`Welcome, ${session.user?.name}`}>
        
        <div className="space-y-4 text-center">
          
          <p className="text-gray-500">
            {session.user?.email}
          </p>

          <AppButton
            variant="destructive"
            className="w-full"
            onClick={() =>
              signOut({
                callbackUrl: "/login",
              })
            }
          >
            Logout
          </AppButton>

        </div>

      </AppCard>

    </div>
  );
}