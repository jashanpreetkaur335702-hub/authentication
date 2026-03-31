"use client";

import { useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { data: session } = useSession();
const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [generalError, setGeneralError] = useState<string>("");

  
useEffect(() => {
  if (session) {
    router.push("/dashboard");
  }
}, [session]);
  const validate = () => {
    let valid = true;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Minimum 6 characters required");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  
  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailError) validate();
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (passwordError) validate();
  };

  
  const handleSubmit = async  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGeneralError("");

    if (!validate()) return;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setGeneralError("Invalid email or password");
    } else {
  
    router.push("/dashboard"); 
  }

  };

  return (
    <div className="flex flex-col items-center mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
       
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          className={`border p-2 rounded ${
            emailError ? "border-red-500" : "border-gray-300"
          }`}
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

       
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          className={`border p-2 rounded ${
            passwordError ? "border-red-500" : "border-gray-300"
          }`}
        />
        {passwordError && (
          <p className="text-red-500 text-sm">{passwordError}</p>
        )}

       
        {generalError && <p className="text-red-600 text-sm">{generalError}</p>}

        
        <button
          type="submit"
          className="cursor-pointer bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

      
        <button
          type="button"
          onClick={() => signIn("google", { prompt: "select_account" })}
          className="cursor-pointer bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Google Login
        </button>
      </form>
    </div>
  );
}
