import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/Home";
import QuizzPage from "./pages/Quizz";
// import MainPage from "./components/mainPage/MainPage";
import Pomodoro from "./pages/Pomodoro";
import MainPageTest from "./components/mainPage/MainPageTest";
import Shaman from "./pages/Shaman";
import Matthieu from "./components/shaman/Matthieu/Matthieu";
import Vivien from "./components/shaman/Vivien/Vivien";
import William from "./components/shaman/William/William";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        // element: <MainPage />,
        element: <MainPageTest />,
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
        element: <Shaman />,
      },

      {
        path: "/shaman/Matthieu",
        element: <Matthieu />,
      },
      {
        path: "/shaman/Vivien",
        element: <Vivien />,
      },
      {
        path: "/shaman/William",
        element: <William />,
      },
      {
        path: "/relaxation",
        element: <Pomodoro />,
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
