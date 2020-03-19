import React from 'react';
import CardButton from '../Elements/CardButton.js';
import CardShow from '../Elements/CardShow.js';
import CardBack from '../Elements/CardBacks.js';
import PlayerIcon from '../Elements/PlayerIcon.js';
import styled from 'styled-components'

const ScoreDiv = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  width: 20vw;
  padding: 1rem;
  h3 {
    margin: 0.25rem;
  };
  p {
    margin: 0.25rem;
  };
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RobotDiv = styled.div`
  display: flex;
  align-items: center;
`;

const CardsDiv = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  padding-left:50px;
`;

const Table = styled.div`
  border-radius: 10px;
`;

const TableSection = styled.div`
  display: flex;
  height: 8rem;
  justify-content: center;
`;

const TableMiddle = styled.div`
  display: flex;
  height: 8rem;
  justify-content: space-between;
`;

const PlayPage = styled.div`
  width: 75vw;
`;

const PlayerHandSection = styled.div`
  display: flex;
`;

function Play(props) {

  // gets robot's cards - this first line is repetitive now
  const robotCards = Object.keys(props.robot_state).filter(key => props.robot_state[key] === true)
  const robotCardImgs = [...Array(robotCards.length)].map((x, index) => {
    return <CardBack
      src={"https://res.cloudinary.com/susanwz/image/upload/v1583528920/Cards/Yellow_back_dqgro5.jpg"}
      alt={"cardback"}
      key={index} />
  })

  // gets dealstacks
  const numberOfDealerCards = Object.values(props.dealstack).filter(element => element === true).length
  const dealstack = [...Array(numberOfDealerCards)].map((x, index) => {
    return <CardBack
      src={"https://res.cloudinary.com/susanwz/image/upload/v1583528920/Cards/Red_back_z8c7hz.jpg"}
      alt={"cardback"}
      key={index} />
  })

  // gets player's cards
  const playerCardValues = Object.keys(props.player_state).filter(key => props.player_state[key] === true).map(card => {
    return parseInt(card.slice(5))
  })
  const allCardsInPlayerSuit = props.cards.filter(card => card.suit === props.player_state.suit)
  const playerCards = allCardsInPlayerSuit.filter(card => playerCardValues.includes(card.value)).map((card, index) => {
    return <CardButton src={card.img_url} handleClick={props.handleCardClick} index={index} value={card.value} />
  })

  const dealerCardImg = <CardShow src={props.dealerCard.img_url} alt={props.dealerCard.name} key={props.dealerCard.id} />
  const robotCardImg = <CardShow src={props.cardRobotPlayed.img_url} alt={props.cardRobotPlayed.name} key={props.cardRobotPlayed.id} />
  const playerCardImg = <CardShow src={props.cardPlayerPlayed.img_url} alt={props.cardPlayerPlayed.name} key={props.cardPlayerPlayed.id} />

  return (
    <PlayPage>
      <TopDiv>
        <RobotDiv>
          <PlayerIcon name={"Mr. Robot"} image={"https://res.cloudinary.com/susanwz/image/upload/v1584569887/robot_1_nnkph7.svg"} />
          <CardsDiv>
            {robotCardImgs}
          </CardsDiv>
        </RobotDiv>
        <ScoreDiv>
          {props.round.round_in_game === 14 ? <h3></h3> : <h3>Round: {props.round.round_in_game}</h3>}
          <p>Your Score: {props.player_state.score}</p>
          <p>Mr. Robot's Score: {props.robot_state.score}</p>
        </ScoreDiv>
      </TopDiv>
      <Table>
        <TableSection>
          {robotCardImg}
        </TableSection>
        <TableMiddle>
          <CardsDiv>
            {dealstack}
          </CardsDiv>
          {dealerCardImg}
          <div></div>
        </TableMiddle>
        <TableSection>
          {playerCardImg}
        </TableSection>
      </Table>
      <p>{props.message}</p>
      <PlayerHandSection>
        <PlayerIcon name={"You"} image={"https://res.cloudinary.com/susanwz/image/upload/v1584575407/hairstyle_sm5noy.svg"} />
        {playerCards}
      </PlayerHandSection>
    </PlayPage>
  );
}

export default Play;
