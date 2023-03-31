import { create } from "zustand";

export interface Product {
  id: number;
  title: string;
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
  category: string;
  setCategory: (category: string) => void;
  resetCategory: () => void;
}

export const useStore = create<ProductState>((set) => ({
  nbItems: 0,
  cart: [],
  category: "",
  addToCart: (product: Product) =>
    set((state) => {
      if (state.cart.find((p) => p.id === product.id)) {
        return state;
      }
      return {
        cart: [...state.cart, product],
        nbItems: state.nbItems + 1,
      };
    }),
  removeFromCart: (product: Product) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== product.id),
      nbItems: state.nbItems - 1,
    })),
  setCategory: (category: string) =>
    set((state) => ({
      category: category,
    })),
  resetCategory: () =>
    set((state) => ({
      category: "",
    })),
}));
