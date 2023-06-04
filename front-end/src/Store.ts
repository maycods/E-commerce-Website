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
  quantity: number;
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

interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
}
export interface UserState {
  user: User;
  setUser: (user: User) => void;
  resetUser: () => void;
}
// create role enum
export enum Role {
  buyer,
  seller,
}
export interface RoleState {
  role: Role;
  setRole: (role: Role) => void;
}

export const useRole = create<RoleState>((set) => ({
  role: Role.buyer,
  setRole: (r: Role) => set((state) => ({ ...state, role: r })),
}));

export const useUser = create<User>((set) => ({
  id: 0,
  firstName: "",
  lastName: "",
  image: "",
  setUser: (user: User) => set({ user }),
  resetUser: () => set({ id: 0, firstName: "", lastName: "" }),
}));

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

interface Checkout {
  items: { title: String; quantity: number; price: number; category: String }[];
  address: String;
  firstName: String;
  lastName: String;
  email: String;
  zip: String;
  city: String;
  country: String;
  cardName: String;
  cardNumber: String;
  cardExpiry: String;
  cardCvc: String;
}

//chckout store
interface CheckoutState {
  checkout: Checkout;

  setCheckout: (checkout: Checkout) => void;
  reset: () => void;
}

export const useCheckout = create<CheckoutState>((set) => ({
  checkout: {
    items: [],
    address: "",
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
    city: "",
    country: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  },
  setCheckout: (checkout: Checkout) => set({ checkout }),
  reset: () =>
    set({
      checkout: {
        items: [],
        address: "",
        firstName: "",
        lastName: "",
        email: "",
        zip: "",
        city: "",
        country: "",
        cardName: "",
        cardNumber: "",
        cardExpiry: "",
        cardCvc: "",
      },
    }),
}));
