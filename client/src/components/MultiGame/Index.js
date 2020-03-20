import React from 'react';
import useVisualMode from "../../hooks/useVisualMode.js";
import { withRouter, useLocation } from "react-router";
import axios from 'axios';
import LoadingCircle from "../Elements/LoadingCircle.js";
import styled from 'styled-components';
import Play from "./Play.js";

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
  const gameId = useLocation().pathname.substring(20)
  const { mode, transition } = useVisualMode("loading");

  return (
    <CenterMain>
      <CenterDiv>
        <h1>MultiGame</h1>
        {mode === "loading" && <LoadingCircle />}
        {mode === "loading" && <Play />}
      </CenterDiv>
    </CenterMain>
  );
}

export default MultiGame;
