import React, { useState, useEffect } from "react";
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
  let history = useHistory();
  const gameId = useLocation().pathname.substring(20)
  const { mode, transition } = useVisualMode("loading");
  const [state, setState] = useState({
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
  })
  console.log("state", state)
  console.log("mode", mode)

  // runs before game starts to initialise a game
  useEffect(() => {
    axios.get(`/games/${gameId}`)
      .then(function (response) {
        setState(prev => ({
          ...prev,
          game: response.data
        }))
        transition("ready")
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [gameId])

  // runs when state is change to deal a new prize card or end the game if there's no prize cards left
  useEffect(() => {
    const remainingCards = Object.keys(state.dealstack).filter(key => state.dealstack[key] === true)
    const dealPrizeCard = () => {
      if (state.cards.length > 0) {
        const randomCard = remainingCards[Math.floor(Math.random() * remainingCards.length)]
        const allCardsInDealerSuit = state.cards.filter(card => card.suit === state.dealstack.suit)
        setState(prev => ({
          ...prev,
          currentDealerCard: allCardsInDealerSuit.find(card => card.value === parseInt(randomCard.slice(5))),
          dealstack: {
            ...prev.dealstack,
            [randomCard]: false
          },
          cardRobotPlayed: {},
          cardPlayerPlayed: {},
          message: ""
        }))
      }
    }

    const endGame = () => {
      axios.patch(`/games/${gameId}?status=ended`)
        .then(function (response) {
          if (state.player_state.score > state.robot_state.score) {
            setState(prev => ({
              ...prev,
              game: response.data,
              message: `You won!`
            }))
            // post to player table an extra point for their profile
            Promise.all([
              axios.put(`/players/${state.player_state.player_id}`),
              axios.patch(`/games/${gameId}?winner=${state.player_state.player_id}`)
            ]).catch((error) => console.log(error))
          } else if (state.player_state.score > state.robot_state.score) {
            setState(prev => ({
              ...prev,
              game: response.data,
              message: `You and your opponent tied`
            }))
          } else {
            setState(prev => ({
              ...prev,
              game: response.data,
              message: `Your opponent won`
            }))
          }
        })
        .catch((error) => console.log(error))
    }

    setTimeout(() => {
      if (remainingCards.length > 0) {
        dealPrizeCard()
      } else if (Object.keys(state.dealstack).length > 0) {
        endGame()
      }
    }, 1000)
  }, [state.round, state.cards])

  // runs each round to send data to the backend
  useEffect(() => {
    const sendRoundData = () => {
      if (Object.keys(state.player_state).length > 0 && Object.keys(state.cardRobotPlayed).length > 0) {
        const newRoundNumber = state.round.round_in_game + 1
        axios.post(`rounds?game_id=${state.game.id}&round_in_game=${newRoundNumber}`)
          .then((function (response) {
            const fieldToRemove1 = "id";
            const fieldToRemove2 = "updated_at";
            const fieldToRemove3 = "created_at";
            const { [fieldToRemove1]: removed1, [fieldToRemove2]: removed2, [fieldToRemove3]: removed3, ...dealstackParams } = state.dealstack
            const { [fieldToRemove1]: removed4, [fieldToRemove2]: removed5, [fieldToRemove3]: removed6, ...playerStateParams } = state.player_state
            const { [fieldToRemove1]: removed7, [fieldToRemove2]: removed8, [fieldToRemove3]: removed9, ...robotStateParams } = state.robot_state
            dealstackParams.round_id = response.data.id
            playerStateParams.round_id = response.data.id
            robotStateParams.round_id = response.data.id
            setState(prev => ({
              ...prev,
              round: response.data
            }))
            Promise.all([
              axios.request({ url: '/dealstacks', method: "post", params: { ...dealstackParams } }),
              axios.request({ url: '/player_states', method: "post", params: { ...playerStateParams } }),
              axios.request({ url: '/player_states', method: "post", params: { ...robotStateParams } })
            ]).then((function (response) {
              // nothing happens here ok
            })).catch((function (error) {
              console.log(error)
            }))
          }))
      }
    }
    sendRoundData()
  }, [state.player_state])

  // runs when the initial start button is pressed to initialise game variables
  const handleStart = () => {
    Promise.all([
      axios.patch(`/games/${gameId}?status=started`),
      axios.post(`/rounds?game_id=${gameId}`)
    ]).then(function (response) {
      setState(prev => ({
        ...prev,
        game: response[0].data,
        round: response[1].data
      }))
      Promise.all([
        axios.post(`/player_states?player_id=1&round_id=${response[1].data.id}&suit=Hearts`),
        axios.post(`/player_states?player_id=2&round_id=${response[1].data.id}&suit=Spades`),
        axios.post(`/dealstacks?suit=Diamonds&round_id=${response[1].data.id}`),
        axios.get('/cards')
      ]).then(function (response) {
        setState(prev => ({
          ...prev,
          player_state: response[0].data,
          robot_state: response[1].data,
          dealstack: response[2].data,
          cards: response[3].data
        }))
        transition("play")
      })
    })
      .catch(function (error) {
        console.log(error);
      })
  }

  const robotCards = Object.keys(state.robot_state).filter(key => state.robot_state[key] === true)
  const handleCardClick = (value) => {
    // indicates the card you've chosen - haven't done this yet, but css
    // triggers the robot to respond with a random card and indicates it. 
    // removes both your card and the robot's card from respective hands in the database
    const randomCard = robotCards[Math.floor(Math.random() * robotCards.length)]
    const randomCardValue = parseInt(randomCard.slice(5));
    const allCardsInRobotSuit = state.cards.filter(card => card.suit === state.robot_state.suit)
    const allCardsInPlayerSuit = state.cards.filter(card => card.suit === state.player_state.suit)
    const cardClicked = `card_${value}`;
    setState(prev => ({
      ...prev,
      cardRobotPlayed: allCardsInRobotSuit.find(card => card.value === randomCardValue),
      cardPlayerPlayed: allCardsInPlayerSuit.find(card => card.value === value),
      robot_state: {
        ...prev.robot_state,
        [randomCard]: false
      },
      player_state: {
        ...prev.player_state,
        [cardClicked]: false
      }
    }))
    // calculates who won using value and randomCardValue and updates score
    let plural = ""
    if (state.currentDealerCard.value !== 1) {
      plural = "s"
    }
    if (value > randomCardValue) {
      const newScore = state.player_state.score += state.currentDealerCard.value
      setState(prev => ({
        ...prev,
        player_state: {
          ...prev.player_state,
          score: newScore
        },
        message: `You won ${state.currentDealerCard.value} point${plural}!`
      }))
    } else if (value === randomCardValue) {
      // no one wins the card right now, might change rules later
      setState(prev => ({
        ...prev,
        message: `You and your appointment tied; no one gets points`
      }))
    } else {
      const newScore = state.robot_state.score += state.currentDealerCard.value
      setState(prev => ({
        ...prev,
        robot_state: {
          ...prev.robot_state,
          score: newScore,
        },
        message: `Your opponent won ${state.currentDealerCard.value} point${plural}!`
      }))
    }
    // starts a new round and triggers dealer to put down a new card with useEffect
  }

  const restartGame = () => {
    setState(() => ({
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
      }))
    axios.post(`/games?gametype_id=1&status=not_started`)
    .then(function (response) {
      history.push(`/single-player-game/${response.data.id}`)
      transition("ready")
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
            player_state={state.player_state}
            robot_state={state.robot_state}
            dealstack={state.dealstack}
            round={state.round}
            cards={state.cards}
            dealerCard={state.currentDealerCard}
            handleCardClick={handleCardClick}
            cardRobotPlayed={state.cardRobotPlayed}
            cardPlayerPlayed={state.cardPlayerPlayed}
            message={state.message} />}
            <GameOver game={state.game} message={state.message} restartGame={restartGame} />
            {state.message === "You won!" ? <Confetti /> : <div></div>}
        </CenterDiv>
      </CenterMain>
    </div>
  );
}

export default SingleGame;
