import { createContext, useEffect, useState } from "react";
import { ID } from "react-native-appwrite";
import { account } from "../lib/appwrite";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error) {
      throw Error(error.message);
    }
  }
  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      throw Error(error.message);
    }
  }
  async function logout() {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      throw Error(error.message);
    }
  }
  const getCurrentUser = async () => {
    try {
      const response = await account.get();
      setUser(response);
    } catch (error) {
      setUser(null);
      console.log(error);
    } finally {
      setAuthChecked(true);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, login, register, logout, authChecked }}
    >
      {children}
    </UserContext.Provider>
  );
};
