import React, { useState, useEffect } from "react";
import { getUserAccount } from "../services/userService";

const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    token: "",
    account: {},
  });

  // Login updates the user data with a name parameter
  const loginContext = (userData) => {
    setUser(userData);
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };

  const fetchUser = async () => {
    let data = await getUserAccount();
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
