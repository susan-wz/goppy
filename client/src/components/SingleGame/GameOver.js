import React from 'react';
import Confetti from '../Elements/Confetti.js';

function GameOver(props) {

  return (
    <div>
      <h2>Game Over!</h2>
      {props.message === "You won!" ? <div><Confetti /><h4>You won, congrats!</h4></div> : <h4>Good game! Play again?</h4>}
    </div>
  );
}

export default GameOver;