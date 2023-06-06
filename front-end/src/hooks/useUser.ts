import axios from "axios";
import { useState, useEffect } from "react";
import { useUserState } from "../Store";

export const useUser = () => {
  const usrState = useUserState((state) => state);
  const getUser = async () => {
    const usr = Math.floor(Math.random() * 10);
    const response = (await axios.get(`api/clients/`)).data.clients[usr];
    // setUser(response);
    usrState.setUser(response);
  };

  useEffect(() => {
    getUser();
  }, []);

  return usrState.user;
};
