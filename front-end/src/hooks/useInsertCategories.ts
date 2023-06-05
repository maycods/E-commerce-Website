import axios from "axios";
import { useEffect } from "react";

export const useInsertCategories = () => {
  async function insert() {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    if (response.data.length > 0) {
      console.log(response.data);
    }
  }

  useEffect(() => {
    insert();
  }, []);
};
