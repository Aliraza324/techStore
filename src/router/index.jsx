import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout.jsx";
import { Home } from "../pages/Home.jsx";
import { Products } from "../pages/Products.jsx";
import { ProductDetail } from "../pages/ProductDetail.jsx";
import { Cart } from "../pages/Cart.jsx";
import { NotFound } from "../pages/NotFound.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

