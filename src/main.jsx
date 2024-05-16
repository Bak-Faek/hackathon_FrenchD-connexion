import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/Home";
import QuizzPage from "./pages/Quizz";
import Matthieu from "./components/shaman/Matthieu/Matthieu";
import MainPage from "./components/mainPage/MainPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/Quiz",
        element: <QuizzPage />,
      },
      {
        path: "/shaman",
        element: <Matthieu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
