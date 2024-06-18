"use client";
import React, { createContext, useContext } from "react";

// Define the shape of your user object
export interface User {
  name: string;
  isAuthenticated: boolean;
  token: string;
}

// Define the shape of your context data
interface UserContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

// Create a default context value
const defaultValue: UserContextProps = {
  user: {
    name: "",
    isAuthenticated: false,
    token: "",
  },
  setUser: () => {},
};

// Create the context
export const UserContext = createContext<UserContextProps>(defaultValue);

// Custom hook to simplify accessing the context
export const useUserContext = () => useContext(UserContext);
