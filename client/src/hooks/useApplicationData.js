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
    axios.request({
      url: 'http://localhost:3001/gametypes',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': true
      },
      withCredentials: true
    }).then(function (response) {
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

  return { state, links };
}