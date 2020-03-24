export const initialiseGame = (game) => {
  return {
    type: "INITIALISE_GAME",
    game: game
  }
}

export const startGame = (gameData, roundData) => {
  return {
    type: "START_GAME",
    game: gameData,
    round: roundData
  }
}

export const dealCards = (playerState, robotState, dealstack, cards) => {
  return {
    type: "DEAL_CARDS",
    player_state: playerState,
    robot_state: robotState,
    dealstack: dealstack,
    cards: cards
  }
}