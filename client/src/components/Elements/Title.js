import React from 'react';
import styled from 'styled-components'

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  height: 6rem;
`;

const TitleText = styled.h1`
  font-size: 3rem;
  position: fixed;
  font-family: 'Luckiest Guy', cursive;
`;

export default function Title() {
  return (
    <CenterDiv>
      <div></div>
      <TitleText>Goppy</TitleText>
      <div></div>
    </CenterDiv>
  );
}