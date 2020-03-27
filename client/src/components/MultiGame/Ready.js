import React, { useEffect } from 'react';
import Button from '../Elements/Button';
import styled from 'styled-components'

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PlayersDiv = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  width: 20vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 0.25rem;
  };
  p {
    font-size: 0.75rem;
    margin: 0.25rem;
  };
`;

export default function Ready(props) {
  
  let players;
  if (props.playerNames) {
    players = props.playerNames.map(name => {
      return <li>{name}</li>
    })
  }

  return (
    <CenterDiv>
      <PlayersDiv>
        <h3>Players Joined</h3>
        <ul>
          {players}
        </ul>
        <p>As long as there are at least two players in the game, you can press start!</p>
        <Button text={"Start"} handleClick={props.handleStart} />
      </PlayersDiv>
    </CenterDiv>
  );
}