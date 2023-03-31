import { LteMobiledata } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );

  const getCategories = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    let data = await response.data;
    //map every element to an object with an id
    data = data.map((elt: any, idx: any) => ({ id: idx, name: elt }));
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
};
