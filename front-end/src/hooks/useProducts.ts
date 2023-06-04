import axios from "axios";
import { useState, useEffect } from "react";
import { useStore } from "../Store";
import { Product } from "../Store";

export function useProducts(category: String) {
  const [products, setProducts] = useState<Product[]>([]);
  const categoryString = category ? `category/${category}` : "";

  const getProducts = async () => {
    const response = await axios.get(`api/products/${categoryString}`);
    const data = await response.data;
    console.log(data);

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
  }, [category]);
  return products;
}
