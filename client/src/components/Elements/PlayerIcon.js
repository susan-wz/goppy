import React from 'react';
import styled from 'styled-components'

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

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
`;

export default function PlayerIcon(props) {
  return (
    <CenterDiv>
      <PlayerImg>
        <img
          src={props.image}
          height={"80"}
          alt={props.name}
        />
      </PlayerImg>
      <PlayerName>{props.name}</PlayerName>
    </CenterDiv>
  );
}