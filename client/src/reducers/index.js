const INITIALISE_GAME = "INITIALISE_GAME";
const START_GAME = "START_GAME";
const DEAL_CARDS = "DEAL_CARDS";
const RESTART_GAME = "RESTART_GAME";
const UPDATE_ROUND = "UPDATE_ROUND";
const UPDATE_PLAYER_SCORE = "UPDATE_PLAYER_SCORE";
const UPDATE_ROBOT_SCORE = "UPDATE_ROBOT_SCORE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const DEAL_PRIZE_CARD = "DEAL_PRIZE_CARD";
const PLAY_CARDS = "PLAY_CARDS"
const END_GAME = "END GAME"

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
      return { ...state, game: action.game }
    case START_GAME:
      return { ...state, game: action.game, round: action.round }
    case DEAL_CARDS:
      return {
        ...state,
        player_state: action.player_state,
        robot_state: action.robot_state,
        dealstack: action.dealstack,
        cards: action.cards
      }
    case RESTART_GAME:
      return { ...initialState }
    case UPDATE_ROUND:
      return { ...state, round: action.round }
    case UPDATE_PLAYER_SCORE:
      return {
        ...state,
        player_state: {
          ...state.player_state,
          score: action.score
        },
        message: action.message
      }
    case UPDATE_ROBOT_SCORE:
      return {
        ...state,
        robot_state: {
          ...state.robot_state,
          score: action.score
        },
        message: action.message
      }
    case UPDATE_MESSAGE:
      return { ...state, current_dealer_card: action.current_dealer_card }
    case DEAL_PRIZE_CARD:
      return {
        ...state,
        currentDealerCard: action.dealerCard,
        dealstack: {
          ...state.dealstack,
          [action.randomCard]: false
        },
        cardRobotPlayed: {},
        cardPlayerPlayed: {},
        message: ""
      }
    case PLAY_CARDS:
      return {
        ...state,
        cardRobotPlayed: action.cardRobotPlayed,
        cardPlayerPlayed: action.cardPlayerPlayed,
        robot_state: {
          ...state.robot_state,
          [action.randomCard]: false
        },
        player_state: {
          ...state.player_state,
          [action.cardClicked]: false
        }
      }
    case END_GAME:
      return {
        ...state, 
        game: action.game,
        message: action.message
      }
    default:
      return state;
  }
}