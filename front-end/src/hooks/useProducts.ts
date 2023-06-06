import axios from "axios";
import { useState, useEffect } from "react";
import { useStore } from "../Store";
import { Product } from "../Store";

export function useProducts(category: String) {
  const [products, setProducts] = useState<Product[]>([]);
  const categoryString = category ? `${category}` : "";

  const getProducts = async () => {
    const response = await axios.get(`api/products/${categoryString}`);
    console.log(response.data);
    const data = await response.data.produits;

    let prods: Product[] = data.map(
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
          image: elt.thumbnail,
          rating: elt.ratingt,
          stock: elt.stock,
          category: elt.categoryp_id,
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
