"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5  w-[80vw] md:w-[30vw] text-gray-300 items-center justify-center "
    >
      {/* <p className="text-center">
        Lorem antium ullam quibusdam hic necessitatibus dolorum.
      </p> */}
      <div className="flex flex-col gap-2 w-full">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="text-gray-800 outline-none p-3 rounded-lg w-full"
        />
      </div>
      <div className=" flex flex-col gap-2 w-full">
        {" "}
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="text-gray-800  outline-none p-3 rounded-lg w-full"
        />
      </div>
      <div className="w-1/2 p-3 bg-slate-600 rounded-lg flex items-center justify-center mt-3">
        <button type="submit">Login</button>
      </div>
      {/* <div className="w-1/2 p-3 bg-slate-600 rounded-lg flex items-center justify-center "> */}
      <Link href="api/auth/signin">
        Sign In With Google
      </Link>
      {/* </div> */}
    </form>
  );
};

export default LoginForm;
