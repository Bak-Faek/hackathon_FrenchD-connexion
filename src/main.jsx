import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/Home";
import Matthieu from "./components/shaman/Matthieu/Matthieu";
// import MainPage from "./components/mainPage/MainPage";
import Pomodoro from "./pages/Pomodoro";
import MainPageTest from "./components/mainPage/MainPageTest";
import ImagesPage from "./pages/ImagesPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        // element: <MainPage />,
        element: <MainPageTest />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/shaman',
        element: <Matthieu />,
      },
      {
        path: '/relaxation',
        element: <Pomodoro />,
      },
      {
        path: '/images',
        element: <ImagesPage />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
