const SET_GAME = "SET_GAME";
const SET_ROUND = "SET_ROUND";
const SET_PLAYER_STATE = "SET_PLAYER_STATE";
const SET_ROBOT_STATE = "SET_ROBOT_STATE";
const SET_DEALSTACK = "SET_DEALSTACK";
const SET_CARDS = "SET_CARDS";
const SET_CURRENT_DEALER_CARD = "SET_CURRENT_DEALER_CARD";
const SET_CARD_ROBOT_PLAYED = "SET_CARD_ROBOT_PLAYED";
const SET_MESSAGE = "SET_MESSAGE";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_GAME:
      return {...state, game: action.game }
    case SET_ROUND:
      return {...state, round: action.round }
    case SET_PLAYER_STATE:
      return {...state, player_state: action.player_state }
    case SET_ROBOT_STATE:
      return {...state, robot_state: action.robot_state }
    case SET_DEALSTACK:
      return {...state, dealstack: action.dealstack }
    case SET_CARDS:
      return {...state, cards: action.cards }
    case SET_CURRENT_DEALER_CARD:
      return {...state, current_dealer_card: action.current_dealer_card }
    case SET_CARD_ROBOT_PLAYED:
      return {...state, card_robot_played: action.card_robot_played }
    case SET_MESSAGE:
      return {...state, message: action.message }
  }
}