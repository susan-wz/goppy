import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import styled from 'styled-components'

const ImageMargin = styled.img`
  margin-right: 4px;
`;

export default function CardButton(props) {

  return (
    <ButtonBase
      key={props.index}
      onClick={() => props.handleClick(props.value)}
    >
      <ImageMargin
        src={props.src}
        alt={"cards"}
        height={"90"}
      />
    </ButtonBase>
  );
}