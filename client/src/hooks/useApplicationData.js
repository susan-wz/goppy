import React, { useState, useEffect } from "react";
import Lobby from "../components/Lobby.js";
import SingleGame from "../components/SingleGame/Index.js";
import MultiGame from "../components/MultiGame/Index.js";
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    gameInfo: {}
  })

  useEffect(() => {
    axios.get('/gametypes')
    .then(function (response) {
      setState(prev => ({
        ...prev, 
        gameInfo: response.data[0]
      }))
    })
      .catch(function (error) {
        console.log(error);
      });  
  }, [])

  const links = [
    {
      name: "Lobby",
      path: "/lobby",
      component: <Lobby gameInfo={state.gameInfo} />
    },
    {
      name: "Single Player Game",
      path: "/single-player-game",
      component: <SingleGame />
    },
    {
      name: "Multi Player Game",
      path: "/multi-player-game",
      component: <MultiGame />
    }
  ];

  return { state, links };
}