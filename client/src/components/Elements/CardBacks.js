import React from 'react';
import styled from 'styled-components'

const CardsSpan = styled.span`
  margin-left: -45px;
  position: relative;
  overflow: hidden;
`;

export default function CardBack(props) {

  return (
    <CardsSpan>
      <img
        key={props.key}
        src={props.src}
        alt={props.alt}
        height={"90"}
      />
    </CardsSpan>
  );
}