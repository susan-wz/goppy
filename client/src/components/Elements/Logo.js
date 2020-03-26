import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const LogoImg = styled.img`
  height: 6rem;
  position: fixed;
  margin-left: 1rem;
`;

export default function Logo() {
  return (
    <Link to="/lobby">
      <LogoImg
        src="https://res.cloudinary.com/susanwz/image/upload/v1584553992/black-jack_bz453q.svg"
      />
    </Link>
  );
}