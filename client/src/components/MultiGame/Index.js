import React, { useEffect } from 'react';
import useVisualMode from "../../hooks/useVisualMode.js";
import { withRouter, useLocation } from "react-router";
import axios from 'axios';
import LoadingCircle from "../Elements/LoadingCircle.js";
import styled from 'styled-components';
import Play from "./Play.js";
import Ready from "./Ready.js";
import { useSelector, useDispatch } from 'react-redux';
import { setPlayerName } from "../../actions/index.js";

const CenterMain = styled.main`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const CenterDiv = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function MultiGame() {
  const dispatch = useDispatch();
  const gameId = useLocation().pathname.substring(20)
  const { mode, transition } = useVisualMode("ready");

  const playerName = useSelector(state => state.playerName)

  useEffect(() => {
    axios.get(`/players/1`)
    .then(function (response) {
      dispatch(setPlayerName(response.data.username))
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  // runs when the initial start button is pressed to initialise game variables
  const handleStart = () => {
    transition("play")
  }

  return (
    <CenterMain>
      <CenterDiv>
        <h1>Multi Player Game</h1>
        {mode === "loading" && <LoadingCircle />}
        {mode === "ready" && <Ready handleStart={handleStart} playerName={playerName} />}
        {mode === "play" && <Play />}
      </CenterDiv>
    </CenterMain>
  );
}

export default MultiGame;
