import { useContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const AppContext = React.createContext();

const url = "https://6199ee819022ea0017a7af87.mockapi.io/api/v1/users";

const AppProvider = ({ children }) => {
  const preventSubmit = (event) => {
    event.preventDefault();
  };

  const fetchUsers = async () => {
    try {
      const users = await axios.get(url);
      setUserData(users.data);
    } catch (error) {
      console.log("Error while fetching errors: ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const [userData, setUserData] = useState([]);

  return (
    <AppContext.Provider value={{ userData, setUserData, preventSubmit, fetchUsers }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
