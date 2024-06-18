"use client";
import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    // const isAuthenticated = localStorage.getItem("token");
    // const status = localStorage.getItem("status");
    console.log();
    
    // if (status !== "authenticated" || !isAuthenticated) {
    //   // router.push("/login");
    // }
  }, [router]);

  return <>{children}</>;
};

export default PrivateRoute;
