import axios from "axios";
import { useState, useEffect } from "react";
import { Product } from "../Store";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const getProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const data = await response.data;
    let prods: Product[] = data.products.map(
      (elt: {
        title: any;
        id: any;
        price: any;
        description: any;
        images: any[];
        rating: any;
        stock: any;
        category: any;
        thumbnail: any;
      }) => {
        return {
          id: elt.id,
          title: elt.title,
          price: elt.price,
          description: elt.description,
          image: elt.images[0],
          rating: elt.rating,
          stock: elt.stock,
          category: elt.category,
          thumbnail: elt.thumbnail,
        };
      }
    );
    setProducts(prods);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return products;
}
