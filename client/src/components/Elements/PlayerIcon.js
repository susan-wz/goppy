import React from 'react';
import styled from 'styled-components'

const PlayerName = styled.p`
  font-family: 'Luckiest Guy', cursive;
  margin: 0px;
`;

export default function PlayerIcon(props) {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/susanwz/image/upload/v1584569887/robot_1_nnkph7.svg"
        height={"80"} 
        />
        <PlayerName>{props.name}</PlayerName>
    </div>
  );
}