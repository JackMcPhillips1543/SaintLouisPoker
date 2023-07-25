import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import PlayerData from "./routes/PlayerData";
import App from "./routes/App";
import BigHands from "./routes/BigHands";
import Navbar from "./components/Navbar";
import "./App.css";
import PreviousGames from "./routes/PreviousGames";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "PlayerData",
        element: <PlayerData />,
      },
      {
        path: "BigHands",
        element: <BigHands />,
      },
      {
        path: "PreviousGames",
        element: <PreviousGames />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);