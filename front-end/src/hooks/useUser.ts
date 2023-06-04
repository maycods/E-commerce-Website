import axios from "axios";
import { useState, useEffect } from "react";

export const useUser = () => {
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    image: "",
  });
  const getUser = async () => {
    const usr = Math.floor(Math.random() * 10);
    const response = await axios.get(`https://dummyjson.com/users/${usr}`);
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user };
};
