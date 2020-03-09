import React, { useState } from 'react';
import CardButton from '../Elements/CardButton.js';
import CardShow from '../Elements/CardShow.js';

function Play(props) {
  const [state, setState] = useState({
    cardRobotPlayed: {}
  })

  // gets robot's cards
  const robotCards = Object.keys(props.robot_state).filter(key => props.robot_state[key] === true)
  const robotCardImgs = [...Array(robotCards.length)].map((x, index) => {
    return <CardShow
      src={"https://res.cloudinary.com/susanwz/image/upload/v1583528920/Cards/Yellow_back_dqgro5.jpg"}
      alt={"cardback"}
      key={index} />
  })

  // gets dealstacks
  const numberOfDealerCards = Object.values(props.dealstack).filter(element => element === true).length - 1
  const dealstack = [...Array(numberOfDealerCards)].map((x, index) => {
    return <CardShow
      src={"https://res.cloudinary.com/susanwz/image/upload/v1583528920/Cards/Red_back_z8c7hz.jpg"}
      alt={"cardback"}
      key={index} />
  })

  const handleCardClick = () => {
    // indicates the card you've chosen
    // triggers the robot to respond with a random card and indicates it
    const randomCard = robotCards[Math.floor(Math.random() * robotCards.length)]
    const allCardsInRobotSuit = props.cards.filter(card => card.suit === props.robot_state.suit)
    setState(prev => ({
      ...prev, 
      cardRobotPlayed: allCardsInRobotSuit.find(card => card.value === parseInt(randomCard.slice(5)))
    }))
    // calculates who won
    // removes both your card and the robot's card from respective hands in the database
    // updates your score
    // updates the robot's score
    // starts a new round
    // triggers dealer to put down a new card
  }

  // gets player's cards
  const playerCardValues = Object.keys(props.player_state).filter(key => props.player_state[key] === true).map(card => {
    return parseInt(card.slice(5))
  })
  const allCardsInPlayerSuit = props.cards.filter(card => card.suit === props.player_state.suit)
  const playerCards = allCardsInPlayerSuit.filter(card => playerCardValues.includes(card.value)).map((card, index) => {
    return <CardButton src={card.img_url} handleClick={handleCardClick} index={index} />
  })

  const dealerCardImg = <CardShow src={props.dealerCard.img_url} alt={props.dealerCard.name} key={props.dealerCard.id} />
  const robotCardImg = <CardShow src={state.cardRobotPlayed.img_url} alt={state.cardRobotPlayed.name} key={state.cardRobotPlayed.id} />

  return (
    <div>
      <h1>Play</h1>
      <h3>Round: {props.round.round_in_game}</h3>
      <h3>Current score</h3>
      <p>Player: {props.player_state.score}</p>
      <p>Robot: {props.robot_state.score}</p>
      <h2>Robot Hand</h2>
      {robotCardImgs}
      <h2>Remaining Dealer Cards</h2>
      {dealstack}
      <h2>Current Dealer Card</h2>
      {dealerCardImg}
      <h2>Card Robot Played</h2>
      {robotCardImg}
      <h2>Your Hand</h2>
      {playerCards}
    </div>
  );
}

export default Play;
