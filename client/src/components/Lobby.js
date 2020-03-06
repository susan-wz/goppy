import React from 'react';

function Lobby(props) {

  return (
    <div>
      <h1>Lobby</h1>
      <h2>Description</h2>
      <p>{props.gameInfo.description}</p>
      <h2>Tutorial</h2>
      <p>{props.gameInfo.tutorial}</p>
    </div>
  );
}

export default Lobby;
