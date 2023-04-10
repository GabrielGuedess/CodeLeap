import { createContext, useEffect, useState } from 'react';

import { userStorage } from 'storage/userStorage';

type AuthContextDataProps = {
  username: string;
  isLoading: boolean;
  signIn: (username: string) => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function signIn(newUsername: string) {
    try {
      setIsLoading(true);

      localStorage.setItem(userStorage, JSON.stringify(newUsername));
      setUsername(newUsername);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function loadUser() {
    try {
      setIsLoading(true);

      const user = localStorage.getItem(userStorage);

      setUsername(user ? JSON.parse(user) : '');
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function signOut() {
    try {
      setIsLoading(true);
      localStorage.removeItem(userStorage);

      setUsername('');
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ username, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
