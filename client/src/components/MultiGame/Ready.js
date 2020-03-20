import React from 'react';
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
  h3 {
    margin: 0.25rem;
  };
  p {
    font-size: 0.75rem;
    margin: 0.25rem;
  };
`;

export default function Ready(props) {
  return (
    <CenterDiv>
      <PlayersDiv>
        <h3>Players joined</h3>
        <li></li>
        <p>As long as you have two players, you can start the game!</p>
      </PlayersDiv>
      <Button text={"Start"} handleClick={props.handleStart} />
    </CenterDiv>
  );
}