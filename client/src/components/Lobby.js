import React from 'react';
import Button from './Elements/Button.js';

function Lobby(props) {

  return (
    <div>
      <h1>Lobby</h1>
      <h2>Description</h2>
      <p>{props.gameInfo.description}</p>
      <h2>Tutorial</h2>
      <p>{props.gameInfo.tutorial}</p>
      <Button text={"Single-Player"} />
      <Button text={"Multi-Player"} />
    </div>
  );
}

export default Lobby;
