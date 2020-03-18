import React from 'react';
import Button from '../Elements/Button';
import styled from 'styled-components'

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function Ready(props) {
  return (
    <CenterDiv>
      <h3>Ready to play?</h3>
      <Button text={"Start"} handleClick={props.handleStart} />
    </CenterDiv>
  );
}