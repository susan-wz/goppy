import React from 'react';
import Confetti from '../Elements/Confetti.js';
import styled from 'styled-components';

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function GameOver(props) {

  return (
    <CenterDiv>
      <h2>Game Over!</h2>
      {props.message === "You won!" ? <div><Confetti /><h4>You won, congrats!</h4></div> : <h4>Good game! Play again?</h4>}
    </CenterDiv>
  );
}

export default GameOver;