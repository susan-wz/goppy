import React, { useEffect } from "react";
import { withRouter, useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import useVisualMode from "../../hooks/useVisualMode.js";
import LoadingCircle from "../Elements/LoadingCircle.js";
import Title from '../Elements/Title.js';
import Play from "./Play.js";
import Ready from "./Ready.js";
import GameOver from "./GameOver.js";
import styled from 'styled-components';
import Confetti from '../Elements/Confetti.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  initialiseGame,
  startGame,
  dealCards,
  updateRound,
  updateMessage,
  updateRobotScore,
  updatePlayerScore,
  playCards
} from "../../actions/index.js";

const CenterMain = styled.main`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const CenterDiv = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function SingleGame() {
  const dispatch = useDispatch();

  let history = useHistory();
  const gameId = useLocation().pathname.substring(20)
  const { mode, transition } = useVisualMode("loading");

  const game = useSelector(state => state.game)
  const round = useSelector(state => state.round)
  const player_state = useSelector(state => state.player_state)
  const robot_state = useSelector(state => state.robot_state)
  const dealstack = useSelector(state => state.dealstack)
  const cards = useSelector(state => state.cards)
  const currentDealerCard = useSelector(state => state.currentDealerCard)
  const cardRobotPlayed = useSelector(state => state.cardRobotPlayed)
  const cardPlayerPlayed = useSelector(state => state.cardPlayerPlayed)
  const message = useSelector(state => state.message)

  console.log("state", game)

  // runs before game starts to initialise a game
  useEffect(() => {
    axios.get(`/games/${gameId}`)
      .then(function (response) {
        dispatch(initialiseGame(response.data))
        transition("ready")
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [gameId])

  // runs when state is change to deal a new prize card or end the game if there's no prize cards left
  useEffect(() => {
    const remainingCards = Object.keys(dealstack).filter(key => dealstack[key] === true)
    const dealPrizeCard = () => {
      if (cards.length > 0) {
        const randomCard = remainingCards[Math.floor(Math.random() * remainingCards.length)]
        const allCardsInDealerSuit = cards.filter(card => card.suit === dealstack.suit)
        let currentDealerCard = allCardsInDealerSuit.find(card => card.value === parseInt(randomCard.slice(5)))
        dispatch(dealPrizeCard(currentDealerCard, randomCard))
      }
    }

    const endGame = () => {
      axios.patch(`/games/${gameId}?status=ended`)
        .then(function (response) {
          if (player_state.score > robot_state.score) {
            dispatch(endGame(response.data, "You won!"))
            // post to player table an extra point for their profile
            Promise.all([
              axios.put(`/players/${player_state.player_id}`),
              axios.patch(`/games/${gameId}?winner=${player_state.player_id}`)
            ]).catch((error) => console.log(error))
          } else if (player_state.score > robot_state.score) {
            dispatch(endGame(response.data, "You and your opponent tied!"))
          } else {
            dispatch(endGame(response.data, "Your opponent won"))
          }
        })
        .catch((error) => console.log(error))
    }

    setTimeout(() => {
      if (remainingCards.length > 0) {
        dealPrizeCard()
      } else if (Object.keys(dealstack).length > 0) {
        endGame()
      }
    }, 1000)
  }, [round, cards])

  // runs each round to send data to the backend
  useEffect(() => {
    const sendRoundData = () => {
      if (Object.keys(player_state).length > 0 && Object.keys(cardRobotPlayed).length > 0) {
        const newRoundNumber = round.round_in_game + 1
        axios.post(`rounds?game_id=${game.id}&round_in_game=${newRoundNumber}`)
          .then((function (response) {
            const fieldToRemove1 = "id";
            const fieldToRemove2 = "updated_at";
            const fieldToRemove3 = "created_at";
            const { [fieldToRemove1]: removed1, [fieldToRemove2]: removed2, [fieldToRemove3]: removed3, ...dealstackParams } = dealstack
            const { [fieldToRemove1]: removed4, [fieldToRemove2]: removed5, [fieldToRemove3]: removed6, ...playerStateParams } = player_state
            const { [fieldToRemove1]: removed7, [fieldToRemove2]: removed8, [fieldToRemove3]: removed9, ...robotStateParams } = robot_state
            dealstackParams.round_id = response.data.id
            playerStateParams.round_id = response.data.id
            robotStateParams.round_id = response.data.id
            dispatch(updateRound(response.data))
            Promise.all([
              axios.request({ url: '/dealstacks', method: "post", params: { ...dealstackParams } }),
              axios.request({ url: '/player_states', method: "post", params: { ...playerStateParams } }),
              axios.request({ url: '/player_states', method: "post", params: { ...robotStateParams } })
            ]).then((function () {
              // nothing happens here ok
            })).catch((function (error) {
              console.log(error)
            }))
          }))
      }
    }
    sendRoundData()
  }, [player_state])

  // runs when the initial start button is pressed to initialise game variables
  const handleStart = () => {
    Promise.all([
      axios.patch(`/games/${gameId}?status=started`),
      axios.post(`/rounds?game_id=${gameId}`),
      axios.post(`/games_players?game_id=${gameId}&player_id=1`),
      axios.post(`/games_players?game_id=${gameId}&player_id=2`)
    ]).then(function (response) {
      dispatch(startGame(response[0].data, response[1].data))
      Promise.all([
        axios.post(`/player_states?player_id=1&round_id=${response[1].data.id}&suit=Hearts`),
        axios.post(`/player_states?player_id=2&round_id=${response[1].data.id}&suit=Spades`),
        axios.post(`/dealstacks?suit=Diamonds&round_id=${response[1].data.id}`),
        axios.get('/cards')
      ]).then(function (response) {
        dispatch(dealCards(response[0].data, response[1].data, response[2].data, response[3].data))
        transition("play")
      })
    })
      .catch(function (error) {
        console.log(error);
      })
  }

  const robotCards = Object.keys(robot_state).filter(key => robot_state[key] === true)
  const handleCardClick = (value) => {
    // indicates the card you've chosen - haven't done this yet, but css
    // triggers the robot to respond with a random card and indicates it. 
    // removes both your card and the robot's card from respective hands in the database
    const randomCard = robotCards[Math.floor(Math.random() * robotCards.length)]
    const randomCardValue = parseInt(randomCard.slice(5));
    const allCardsInRobotSuit = cards.filter(card => card.suit === robot_state.suit)
    const allCardsInPlayerSuit = cards.filter(card => card.suit === player_state.suit)
    const cardClicked = `card_${value}`;
    const cardRobotPlayed = allCardsInRobotSuit.find(card => card.value === randomCardValue)
    const cardPlayerPlayed = allCardsInPlayerSuit.find(card => card.value === value)
    dispatch(playCards(cardRobotPlayed, cardPlayerPlayed, randomCard, cardClicked))
    // calculates who won using value and randomCardValue and updates score
    let plural = ""
    if (currentDealerCard.value !== 1) {
      plural = "s"
    }
    if (value > randomCardValue) {
      const newScore = player_state.score += currentDealerCard.value
      dispatch(updatePlayerScore(newScore, `You won ${currentDealerCard.value} point${plural}!`))
    } else if (value === randomCardValue) {
      // no one wins the card right now, might change rules later
      dispatch(updateMessage(`You and your appointment tied; no one gets points`))
    } else {
      const newScore = robot_state.score += currentDealerCard.value
      dispatch(updateRobotScore(newScore, `Your opponent won ${currentDealerCard.value} point${plural}!`))
    }
    // starts a new round and triggers dealer to put down a new card with useEffect
  }

  const restartGame = () => {
    transition("ready")
    dispatch(restartGame())
    axios.post(`/games?gametype_id=1&status=not_started`)
      .then(function (response) {
        history.push(`/single-player-game/${response.data.id}`)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <CenterMain>
        <CenterDiv>
          <Title />
          {mode === "loading" && <LoadingCircle />}
          {mode === "ready" && <Ready handleStart={handleStart} />}
          {mode === "play" && <Play
            player_state={player_state}
            robot_state={robot_state}
            dealstack={dealstack}
            round={round}
            cards={cards}
            dealerCard={currentDealerCard}
            handleCardClick={handleCardClick}
            cardRobotPlayed={cardRobotPlayed}
            cardPlayerPlayed={cardPlayerPlayed}
            message={message} />}
          <GameOver game={game} message={message} restartGame={restartGame} />
          {message === "You won!" ? <Confetti /> : <div></div>}
        </CenterDiv>
      </CenterMain>
    </div>
  );
}

export default SingleGame;
