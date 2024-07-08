// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #264653; /* Updated color */
  color: #e9c46a; /* Updated color */
  padding: 1rem;
  text-align: center;
  ${'' /* position: fixed; */}
  margin-top:20px;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2024 ShopMate</p>
        </FooterContainer>
    );
};

export default Footer;
