const INITIALISE_GAME = "INITIALISE_GAME";
const START_GAME = "START_GAME";
const DEAL_CARDS = "DEAL_CARDS";
const SET_ROBOT_STATE = "SET_ROBOT_STATE";
const SET_DEALSTACK = "SET_DEALSTACK";
const SET_CARDS = "SET_CARDS";
const SET_CURRENT_DEALER_CARD = "SET_CURRENT_DEALER_CARD";
const SET_CARD_ROBOT_PLAYED = "SET_CARD_ROBOT_PLAYED";
const SET_MESSAGE = "SET_MESSAGE";

const initialState = {
    game: {},
    round: {},
    player_state: {},
    robot_state: {},
    dealstack: {},
    cards: {},
    currentDealerCard: {},
    cardRobotPlayed: {},
    cardPlayerPlayed: {},
    message: "",
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INITIALISE_GAME:
      return {...state, game: action.game }
    case START_GAME:
      return {...state, game: action.game, round: action.round }
    case DEAL_CARDS:
      return {
        ...state, 
        player_state: action.player_state,
        robot_state: action.robot_state,
        dealstack: action.dealstack,
        cards: action.cards
       }
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

// restart game, start game