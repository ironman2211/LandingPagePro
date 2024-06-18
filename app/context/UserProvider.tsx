'use client'
import React, { useState } from 'react';
import { User, UserContext } from './UserContext'; // Adjust the import path based on your actual file structure

interface Props {
  children: React.ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }: Props) => {
  const [user, setUser] = useState<User>({
    name: '',
    isAuthenticated: false,
    token: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
