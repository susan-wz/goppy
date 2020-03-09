import React from 'react';

export default function CardButton(props) {

  return (
    <img
      key={props.key}
      src={props.src}
      alt={props.alt}
      height={"100"}
    />
  );
}