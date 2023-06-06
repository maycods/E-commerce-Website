import axios from "axios";
import { useState, useEffect } from "react";
import { useStore, useUserState } from "../Store";
import { Product } from "../Store";
import { ElderlyTwoTone } from "@mui/icons-material";

export interface Order {
  id: number;
  product: string;
  quantity: number;
  total: number;
  client: any;
  price: number;
  rating: number;
  date: string;
}
export function useOrders() {
  const user = useUserState((state) => state.user);
  const [products, setProducts] = useState<Order[]>([]);

  const getProducts = async () => {
    const response = await axios.get(`/api/orders/`);
    let data = await response.data.orders;
    data = data.filter((elt) => elt.customerref_id === user.id);
    setProducts(data);
    // data.forEach(async (element) => {
    //   const product = await axios.get(`/api/products/${element.produitref_id}`);
    //   setProducts((prev) => [
    //     ...prev,
    //     { ...element, product: product.data.produit.title },
    //   ]);
    // });

    // console.log(products);
    // setProducts(data);
    // let prods: Product[] = data.products.map(
    //   (elt: {
    //     title: any;
    //     id: any;
    //     price: any;
    //     description: any;
    //     images: any[];
    //     rating: any;
    //     stock: any;
    //     category: any;
    //     thumbnail: any;
    //   }) => {
    //     return {
    //       id: elt.id,
    //       title: elt.title,
    //       price: elt.price,
    //       description: elt.description,
    //       image: elt.thumbnail,
    //       rating: elt.rating,
    //       stock: elt.stock,
    //       category: elt.category,
    //       thumbnail: elt.thumbnail,
    //     };
    //   }
    // );
    // setProducts(prods);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return products;
}
