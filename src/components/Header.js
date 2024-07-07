// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2a9d8f; /* Updated color */
  color: #f4a261; /* Updated color */
  padding: 1rem;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>ShopMate</h1> {/* Added shop name */}
    </HeaderContainer>
  );
};

export default Header;
