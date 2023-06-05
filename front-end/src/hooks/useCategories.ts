import axios from "axios";
import { useEffect, useState } from "react";

export const useCategories = (searchTerm: string) => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  function handleSearch(searchTerm: String, categories: string[]): string[] {
    let cats = categories.filter((category) =>
      category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return cats;
  }

  const getCategories = async (searchTerm: String) => {
    // const response = await axios.get("api/categories");
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    let data = await response.data;
    let res = handleSearch(searchTerm, data);
    //map every element to an object with an id
    data = res.map((elt: any, idx: any) => ({ id: idx, name: elt }));
    setCategories(data);
  };
  useEffect(() => {
    getCategories(searchTerm);
  }, [searchTerm]);

  return categories;
};
