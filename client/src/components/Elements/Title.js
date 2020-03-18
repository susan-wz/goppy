import React from 'react';
import styled from 'styled-components'

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const TitleText = styled.h1`
  height: 6rem;
  position: fixed;
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