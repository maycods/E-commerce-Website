import axios from "axios";
import { useEffect } from "react";

export const useInsertProducts = () => {
  async function insert() {
    const response = await axios.get("https://dummyjson.com/products");
    if (response.data.products.length > 0) {
      let data = response.data.products;
      data.map(
        async (elt: {
          title: any;
          price: any;
          description: any;
          category: any;
          rating: any;
          thumbnail: any;
        }) => {
          console.log(elt);
          await axios.post("/api/postproducts/", {
            title: elt.title,
            price: elt.price,
            description: elt.description,
            categoryp: elt.category,
            ratingt: elt.rating,
            stock: 10,
            thumbnail: elt.thumbnail,
          });
        }
      );
    }
  }

  useEffect(() => {
    insert();
  }, []);
};
