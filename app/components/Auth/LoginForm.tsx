"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  email: z.string().email("Invalid email address").max(50),
  password: z.string().min(5, "Password must be at least 5 characters long").max(50),
});

const LoginForm = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (status === "authenticated") {
      localStorage.setItem("user", JSON.stringify(session.user));
      localStorage.setItem("token", "authenticated");
      router.push("/dashboard");
    }
  }, [status, session, router]);

  const onSubmit = async (user: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post("/api/login", user);
      if (res.data.status === 200 || res.data.status === 201) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        toast({
          title: "User login successful",
          description: new Date().toDateString(),
        });
        router.push("/dashboard");
      } else {
        let errorMessage = "An error occurred";
        if (res.data.status === 400) {
          errorMessage = "Invalid username or password";
        } else if (res.data.status === 404) {
          errorMessage = "User not found";
        }
        toast({
          title: errorMessage,
          variant: "destructive",
          description: new Date().toDateString(),
        });
      }
    } catch (error) {
      toast({
        title: "Login failed",
        variant: "destructive",
        description: "Please check your email and password",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-6 flex flex-col gap-1">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your Email"
                  {...field}
                  className="focus-visible:ring-transparent border-2 border-cyan-800"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                  className="focus-visible:ring-transparent border-2 border-cyan-800"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="my-2">
          Login
        </Button>
        <Link href="/api/auth/signin">
          <Button variant="outline" className="w-full">
            Sign In With Google
          </Button>
        </Link>
      </form>
    </Form>
  );
};

export default LoginForm;
