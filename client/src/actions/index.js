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

export const clearState = () => {
  return {
    type: "CLEAR_STATE"
  }
}

export const endGameAction = (game, message) => {
  return {
    type: "END_GAME",
    game: game,
    message: message,
  }
}

export const updateRound = (round) => {
  return {
    type: "UPDATE_ROUND",
    round: round
  }
}

export const updatePlayerScore = (playerScore, message) => {
  return {
    type: "UPDATE_PLAYER_SCORE",
    score: playerScore,
    message: message
  }
}

export const updateRobotScore = (robotScore, message) => {
  return {
    type: "UPDATE_ROBOT_SCORE",
    score: robotScore,
    message: message
  }
}

export const updateMessage = (message) => {
  return {
    type: "UPDATE_MESSAGE",
    message: message
  }
}

export const dealPrizeCardAction = (dealerCard, randomCard) => {
  return {
    type: "DEAL_PRIZE_CARD",
    dealerCard: dealerCard,
    randomCard: randomCard
  }
}

export const playCards = (cardRobotPlayed, cardPlayerPlayed, randomCard, cardClicked) => {
  return {
    type: "PLAY_CARDS",
    cardRobotPlayed: cardRobotPlayed,
    cardPlayerPlayed: cardPlayerPlayed,
    randomCard: randomCard,
    cardClicked: cardClicked
  }
}