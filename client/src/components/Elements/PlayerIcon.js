import React from 'react';
import styled from 'styled-components'

const PlayerName = styled.p`
  font-family: 'Luckiest Guy', cursive;
  margin: 10px 0px 0px 0px;
`;

const PlayerImg = styled.div`
  background-color: white;
  border-radius: 50%;
  padding: 10px;
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

export default function PlayerIcon(props) {
  return (
    <div>
      <PlayerImg>
        <img
          src={props.image}
          height={"80"}
        />
      </PlayerImg>
      <PlayerName>{props.name}</PlayerName>
    </div>
  );
}