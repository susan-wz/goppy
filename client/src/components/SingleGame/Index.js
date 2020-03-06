import React from 'react';
import { withRouter, useLocation } from "react-router";

function SingleGame() {
  const gameId = useLocation().pathname.substring(20)
  console.log("what's gameId", gameId)

  return (
    <div>
      <h1>Single Player Game</h1>
    </div>
  );
}

export default SingleGame;
