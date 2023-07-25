import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Player Data",
    path: "/PlayerData",
    icon: <BsIcons.BsFillPersonFill />,
    cName: "nav-text",
  },
  {
    title: "Big Hands",
    path: "/BigHands",
    icon: <FaIcons.FaMoneyBillWave />,
    cName: "nav-text",
  },
  {
    title: "Previous Games",
    path: "/PreviousGames",
    icon: <FaIcons.FaHistory />,
    cName: "nav-text",
  }
];
