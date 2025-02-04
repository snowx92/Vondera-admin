"use client"

import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    router.push("/login");
  };

  return (
    <div className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Welcome, Admin</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
