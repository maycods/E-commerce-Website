import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  stock: number;
  category: string;
  thumbnail: string;
}

export interface ProductState {
  nbItems: number;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

const useStore = create<ProductState>((set) => ({
  nbItems: 0,
  cart: [],
  addToCart: (product: Product) =>
    set((state) => ({
      cart: [...state.cart, product],
      nbItems: state.nbItems + 1,
    })),
  removeFromCart: (product: Product) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== product.id),
      nbItems: state.nbItems - 1,
    })),
}));
