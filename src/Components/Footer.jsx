// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #4B0082;
  color: #FFD700;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Curiocrates. All Rights Reserved.
    </FooterContainer>
  );
};

export default Footer;
