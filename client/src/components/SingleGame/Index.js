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
    cards: {}
  })

  let dealerCardImg = <img />

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

  useEffect(() => {
    if (state.cards.length > 0) {
      const remainingCards = Object.keys(state.dealstack).filter(key => state.dealstack[key] === true)
      const randomCard = remainingCards[Math.floor(Math.random() * remainingCards.length)]
      const allCardsInDealerSuit = state.cards.filter(card => card.suit === state.dealstack.suit)
      const dealerCard = allCardsInDealerSuit.find(card => card.value === parseInt(randomCard.slice(5)))
      dealerCardImg = <img
        src={dealerCard.img_url}
        alt={dealerCard.name}
        height={"90"}
        key={dealerCard.id} />
        console.log(dealerCardImg)
    }
  }, [state.dealstack, state.cards])

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
        dealerCard={dealerCardImg} />}
    </div>
  );
}

export default SingleGame;
