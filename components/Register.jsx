"use client";

import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <>
      <p>Register</p>
      <button
        onClick={handleRegister}
        className="px-3 py-1 bg-blue-400 rounded-lg">
        Register
      </button>
    </>
  );
}
