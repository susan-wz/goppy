import React, { useState, useEffect } from "react";
import { withRouter, useLocation } from "react-router";
import axios from 'axios';
import Button from '../Elements/Button';
import useVisualMode from "../../hooks/useVisualMode.js";
import LoadingCircle from "../Elements/LoadingCircle.js";
import Play from "./Play.js"

function SingleGame() {
  const gameId = useLocation().pathname.substring(20)
  const { mode, transition } = useVisualMode("loading");
  const [state, setState] = useState({
    game: {}
  })
  console.log(state)

  useEffect(() => {
    axios.request({
      url: `http://localhost:3001/games/${gameId}`,
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
        game: response.data
      }))
      transition("ready")
    })
      .catch(function (error) {
        console.log(error);
      });  
  }, [gameId])

  const handleStart = () => {
    // set game status to started
    // create a round
    // create two player states
    // pull initial hands from player states into maybe state or maybe just a variable
  }

  return (
    <div>
      <h1>Single Player Game</h1>
      {mode === "loading" && <LoadingCircle /> }
      {mode === "ready" && <Button text={"Start"} handleClick={handleStart} /> }
      {mode === "play" && <Play /> }
    </div>
  );
}

export default SingleGame;
