"use client";

import { useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AppCard from "@/components/common/AppCard";
import InputField from "@/components/common/InputField";
import AppButton from "@/components/common/AppButton";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit}>
        
        <AppCard title="Login" className="">
        <div className="space-y-4">
          {/* Email */}
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: any) => handleEmailChange(e.target.value)}
            error={emailError}
          />
  
          {/* Password */}
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e: any) => handlePasswordChange(e.target.value)}
            error={passwordError}
          />
  
          {/* General Error */}
          {generalError && (
            <p className="text-red-600 text-sm">{generalError}</p>
          )}
  
          {/* Login */}
          <AppButton type="submit">
            Login
          </AppButton>
  
          {/* Social Logins */}
          <AppButton
            type="button"
            className="bg-red-500 hover:bg-red-600 w-full"
            onClick={() => signIn("google", { prompt: "select_account" })}
          >
            Google Login
          </AppButton>
  
          <AppButton
            type="button"
            className="bg-blue-600 hover:bg-blue-700  w-full"
            onClick={() => signIn("facebook")}
          >
            Facebook Login
          </AppButton>
  
          <AppButton
            type="button"
            variant="secondary"
            className=" w-full"
            onClick={() => signIn("github")}
          >
            GitHub Login
          </AppButton>
  </div>
        </AppCard>
  
      </form>
    </div>
  );
}
