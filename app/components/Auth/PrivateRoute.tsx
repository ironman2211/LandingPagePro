'use client'
import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  return <>{children}</>;
};

export default PrivateRoute;
