import React, { useState, useEffect } from "react";
import { withRouter, useLocation } from "react-router";
import axios from 'axios';
import Button from '../Elements/Button';
import useVisualMode from "../../hooks/useVisualMode.js";
import LoadingCircle from "../Elements/LoadingCircle.js";
import Play from "./Play.js"

function SingleGame() {
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
    cardRobotPlayed: {}
  })
  console.log("state", state)

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

  const dealPrizeCard = () => {
    if (state.cards.length > 0) {
      const remainingCards = Object.keys(state.dealstack).filter(key => state.dealstack[key] === true)
      const randomCard = remainingCards[Math.floor(Math.random() * remainingCards.length)]
      const allCardsInDealerSuit = state.cards.filter(card => card.suit === state.dealstack.suit)
      setState(prev => ({
        ...prev,
        currentDealerCard: allCardsInDealerSuit.find(card => card.value === parseInt(randomCard.slice(5))),
        dealstack: {
          ...prev.dealstack,
          [randomCard]: false
        }
      }))
    }
  }

  useEffect(() => {
    dealPrizeCard()
  }, [state.cards]) // putting state.dealstack here causes an infinite loop, need solution

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
    const cardClicked = `card_${value}`;
    setState(prev => ({
      ...prev, 
      cardRobotPlayed: allCardsInRobotSuit.find(card => card.value === randomCardValue),
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
    if (value > randomCardValue) {
      const newScore = state.player_state.score += state.currentDealerCard.value
      setState(prev => ({
        ...prev, 
        player_state: {
          ...prev.player_state,
          score: newScore
        }
      }))
    } else if (value === randomCardValue) {
      // no one wins the card right now, might change rules later
    } else {
      const newScore = state.robot_state.score += state.currentDealerCard.value
      setState(prev => ({
        ...prev, 
        robot_state: {
          ...prev.robot_state,
          score: newScore
        }
      }))
    }
    // starts a new round and needs to send data for this round over to backend
    const { id, updated_at, created_at, ...dealstackParams } = state.dealstack
    const newRoundNumber = state.round.round_in_game += 1
    axios.request({ 
      url: '/dealstacks',
      method: "post",
      params: {...dealstackParams} 
    })
    // need to send data to round, dealstack, player_states
    // Promise.all([
    //   axios.post(`/rounds?game_id=${gameId}?round_in_game=${newRoundNumber}`),
    //   axios.post('/dealstacks?'),
    //   axios.post(`/player_states?player_id=1&round_id=${response[1].data.id}&suit=Hearts`),
    //   axios.post(`/player_states?player_id=2&round_id=${response[1].data.id}&suit=Spades`)
    // ])
    // triggers dealer to put down a new card
  }

  return (
    <div>
      <h1>Single Player Game</h1>
      {mode === "loading" && <LoadingCircle />}
      {mode === "ready" && <Button text={"Start"} handleClick={handleStart} />}
      {mode === "play" && <Play
        player_state={state.player_state}
        robot_state={state.robot_state}
        dealstack={state.dealstack}
        round={state.round}
        cards={state.cards}
        dealerCard={state.currentDealerCard}
        handleCardClick={handleCardClick}
        cardRobotPlayed={state.cardRobotPlayed} />}
    </div>
  );
}

export default SingleGame;
