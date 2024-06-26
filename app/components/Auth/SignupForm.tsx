"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

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

const formSchema = z.object({
  username: z.string().min(5).max(50),
  email: z.string().min(5).max(50),
  password: z.string().min(5).max(50),
});

const SignupForm = () => {
  const { toast } = useToast();

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (user: z.infer<typeof formSchema>) => {
    try {
      if (!user.username || !user.email || !user.password) {
        return;
      }
      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!emailRegex.test(user.email)) {
        return;
      }
      const res = await axios.post("/api/register", user);
      console.log(res.data);
      if (res.data.status == 200 || res.data.status == 201) {
        console.log("user added successfully");
        toast({
          title: "User created sussefully",
          description: new Date().toDateString().toString(),
        });
        // localStorage.setItem('user', JSON.stringify(res.data.user));  
        // localStorage.setItem('token', res.data.token);        
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else if (res.data.status == 400) {
        toast({
          variant: "destructive",
          title: `user email ${user.email} already exsist`,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: `"Enter a valid mail"`,
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-6 flex flex-col gap-1"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your username"
                  {...field}
                  className="focus-visible:ring-transparent border-2 border-cyan-800"
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
              <FormDescription>
                Your password must be at least 5 characters long.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="my-2">
          Sign Up
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

export default SignupForm;
