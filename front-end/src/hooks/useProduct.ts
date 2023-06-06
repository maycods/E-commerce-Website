import axios from "axios";
import { useState, useEffect } from "react";
import { Product } from "../Store";
import { useParams } from "react-router-dom";

export function useProduct() {
  const { productId } = useParams();

  const [product, setProduct] = useState<Product>({
    id: NaN,
    title: "",
    price: 0,
    description: "",
    image: "",
    rating: 0,
    quantity: 0,
    category: "",
    thumbnail: "",
  });
  // useEffect(() => {
  //   // Fetch the product data from your backend server using the productId parameter
  //   fetch(`/api/articles/${productId}`)
  //     .then((response) => response.json())
  //     .then((data) => setProduct(data))
  //     .catch((error) => console.error(error));
  // }, [productId]);
  async function getProduct() {
    const url = `http://localhost:8000/product/${productId}`;
    const response = await axios.get("/api/product/" + productId);

    const elt = await response.data.produit;

    let prods: Product = {
      id: elt.id,
      title: elt.title,
      price: elt.price,
      description: elt.description,
      image: elt.thumbnail,
      rating: elt.ratingt,
      quantity: elt.stock,
      category: elt.category,
      thumbnail: elt.thumbnail,
    };
    setProduct(prods);
  }

  useEffect(() => {
    // Fetch the product data from your backend server using the productId parameter
    getProduct();
  }, [productId]);

  return product;
}
