"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LoginSchema } from "@/validation";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: zodResolver(LoginSchema) });

  useEffect(() => {
    const apiKey = localStorage.getItem('API-KEY');
    if (apiKey) {
      router.push('/'); 
    }
  }, [router]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/login", data);
      if (response.status === 200) {
        const apiKey = response.data.api_key;
        toast.success("Login successful");
        localStorage.setItem("API-KEY", apiKey);
        router.push('/'); 
      }
      reset();
    } catch (error) {
      console.error("Server error", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="w-full max-w-lg backdrop-blur-lg">
        <CardHeader className="space-y-3 text-center">
          <CardTitle className="text-2xl font-bold">Log In</CardTitle>
          <CardDescription>Good to see you back here!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2 mt-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                className="focus:border-b-2 border-blue-500 rounded-md"
                {...register("email")}
                required
              />
              {errors.email && (
                <span className="error-message text-right w-full text-sm mb-5 font-semibold text-red-500">
                  *{errors.email.message}
                </span>
              )}
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                className="focus:border-b-2 border-blue-500 rounded-md"
                {...register("password")}
                required
              />
              {errors.password && (
                <span className="error-message text-right w-full text-sm mb-5 font-semibold text-red-500">
                  *{errors.password.message}
                </span>
              )}
            </div>
            <Button type="submit" className="w-full mt-4">
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
