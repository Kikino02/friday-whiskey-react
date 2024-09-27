import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import "./fontAwesome.js";
import App from "./App.jsx";

import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Concerts from "./routes/Concerts.jsx";
import Photos from "./routes/Photos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
