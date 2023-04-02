import { create } from "zustand";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  quantity: number;
  category: string;
  thumbnail: string;
}
interface CartProduct {
  id: number;
  title: String;
  price: number;
  category: string;
  quantity: Number;
}

export interface ProductState {
  nbItems: number;
  cart: CartProduct[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: CartProduct) => void;
  category: string;
  setCategory: (category: string) => void;
  resetCategory: () => void;
}

export const useStore = create<ProductState>((set) => ({
  nbItems: 0,
  cart: [],
  category: "",
  addToCart: (product: Product, quantity: number) =>
    set((state) => {
      if (state.cart.find((p) => p.id === product.id)) {
        return state;
      }
      return {
        cart: [
          ...state.cart,
          {
            id: product.id,
            category: product.category,
            price: product.price,
            quantity: quantity,
            title: product.title,
          },
        ],
        nbItems: state.nbItems + 1,
      };
    }),
  removeFromCart: (product: CartProduct) =>
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
