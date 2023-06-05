import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { ProductCatalog } from "./pages/ProductCatalog";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Home } from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { Landing } from "./pages/Landing";
import { Categories } from "./pages/Categories";
import { Discount } from "@mui/icons-material";
import { Checkout } from "./pages/Checkout";
import Orders from "./pages/Orders";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/products",
        element: <ProductCatalog />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/discounts",
        element: <Discount />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
