"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/register`, {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        alert("Registration successful");
        router.push("/qrcode");
      } else {
        alert("user not registered");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col max-w-md gap-5 p-10 m-auto mt-10 border-4 border-black rounded-lg">
      <h1>Register</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="px-3 py-1 bg-blue-400 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
}
