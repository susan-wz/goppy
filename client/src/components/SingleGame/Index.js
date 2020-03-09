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
    axios.get(`http://localhost:3001/games/${gameId}`)
    .then(function (response) {
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
    // set game status to started (done)
    // create a round (done)
    // create two player states
    // pull initial hands from player states into maybe state or maybe just a variable
    Promise.all([
    axios.patch(`http://localhost:3001/games/${gameId}?status=started`)
    .then(function (response) {
      setState(prev => ({
        ...prev, 
        game: response.data
      }))
    })
      .catch(function (error) {
        console.log(error);
      }),
      axios.post(`http://localhost:3001/rounds?game_id=${gameId}`)
      .then(function (response) {
        setState(prev => ({
          ...prev, 
          round: response.data
        }))
      })
        .catch(function (error) {
          console.log(error);
        })
    ])
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
