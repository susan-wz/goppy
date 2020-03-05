import React from "react";
import Lobby from "../components/Lobby.js";
import SingleGame from "../components/SingleGame/Index.js";
import MultiGame from "../components/MultiGame/Index.js";

export default function useApplicationData() {

  const links = [
    {
      name: "Lobby",
      path: "/lobby",
      component: <Lobby />
    },
    {
      name: "Singe Player Game",
      path: "/single-player-game",
      component: <SingleGame />
    },
    {
      name: "Menu",
      path: "/menu",
      requiresAuthentication: true,
      component: <MultiGame />
    }
  ];

  return { links };
}