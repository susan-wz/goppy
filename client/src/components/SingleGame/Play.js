import React from 'react';
import CardButton from '../Elements/CardButton.js';
import CardShow from '../Elements/CardShow.js';

function Play(props) {

  // gets robot's cards
  const numberOfRobotCards = Object.values(props.robot_state).filter(element => element === true).length
  const robotCards = [...Array(numberOfRobotCards)].map((x, index) => {
    return <CardShow
      src={"https://res.cloudinary.com/susanwz/image/upload/v1583528920/Cards/Yellow_back_dqgro5.jpg"}
      alt={"cardback"}
      key={index} />
  })

  // gets dealstacks
  const numberOfDealerCards = Object.values(props.dealstack).filter(element => element === true).length
  const dealstack = [...Array(numberOfDealerCards)].map((x, index) => {
    return <CardShow
      src={"https://res.cloudinary.com/susanwz/image/upload/v1583528920/Cards/Red_back_z8c7hz.jpg"}
      alt={"cardback"}
      key={index} />
  })

  const handleCardClick = () => {

  }

  // gets player's cards
  const playerCardValues = Object.keys(props.player_state).filter(key => props.player_state[key] === true).map(card => {
    return parseInt(card.slice(5))
  })
  const allCardsInPlayerSuit = props.cards.filter(card => card.suit === props.player_state.suit)
  const playerCards = allCardsInPlayerSuit.filter(card => playerCardValues.includes(card.value)).map((card, index) => {
    return <CardButton src={card.img_url} index={index} handleClick={handleCardClick} />
  })

  const dealerCardImg = <CardShow
    src={props.dealerCard.img_url}
    alt={props.dealerCard.name}
    key={props.dealerCard.id} />

  return (
    <div>
      <h1>Play</h1>
      <h3>Round: {props.round.round_in_game}</h3>
      <h3>Current score</h3>
      <p>Player: {props.player_state.score}</p>
      <p>Robot: {props.robot_state.score}</p>
      <h2>Robot Hand</h2>
      {robotCards}
      <h2>Remaining Dealer Cards</h2>
      {dealstack}
      <h2>Current Dealer Card</h2>
      {dealerCardImg}
      <h2>Your Hand</h2>
      {playerCards}
    </div>
  );
}

export default Play;
