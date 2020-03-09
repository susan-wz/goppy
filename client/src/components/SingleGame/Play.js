import React from 'react';

function Play(props) {

  const numberOfRobotCards = Object.values(props.robot_state).filter(element => element === true).length

  const robotCards = [...Array(numberOfRobotCards)].map((x, index) => {
    return <img src={"https://res.cloudinary.com/susanwz/image/upload/v1583528920/Cards/Yellow_back_dqgro5.jpg"} alt={"cards"} height={"60"} key={index} />
  })

  return (
    <div>
      <h1>Play</h1>
      <h3>Round: {props.round.id}</h3>
      <h3>Current score</h3>
      <p>Player: {props.player_state.score}</p>
      <p>Robot: {props.robot_state.score}</p>
      <h2>Robot Hand</h2>
      {robotCards}
      <h2>Your Hand</h2>
    </div>
  );
}

export default Play;
