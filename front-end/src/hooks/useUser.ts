import axios from "axios";
import { useState, useEffect } from "react";

export const useUser = () => {
  const [user, setUser] = useState({});
  const getUser = async () => {
    const usr = Math.floor(Math.random() * 10);
    const response = (await axios.get(`api/clients/`)).data.clients[usr];
    setUser(response);
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user };
};
