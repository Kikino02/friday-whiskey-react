import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import "./fontAwesome.js";
import RootLayout from "./routes/RootLayout.jsx";

import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Concerts from "./components/concerts/Concerts.jsx";
import Photos from "./components/photos/Photos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/concerts", element: <Concerts /> },
      { path: "/photos", element: <Photos /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
