// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import heroBg from '../assets/BasicImages/bg-2.jpg';

const HeroContainer = styled.section`
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  
  height: 100vh;
  display: flex;
  flex-direction: column;
 
  align-items: center;
  text-align: center;
  color: #FFD700;
`;

const Heading = styled.h1`
  padding-top: 10px;
  font-family: 'Cinzel Decorative', cursive;
  text-shadow: 3px 3px 8px rgba(75, 0, 130, 0.9);
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem; /* Space between buttons */
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Button = styled.a`
  background: linear-gradient(90deg, #40E0D0, #FFD700); /* Turquoise to Gold */
  color: #4B0082; /* Royal Purple */
  padding: 0.8rem 2rem;
  text-decoration: none;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  min-width: 200px; /* Ensures both buttons are the same width */
  text-align: center;

  &:hover {
    background: linear-gradient(90deg, #FFD700, #40E0D0); /* Reverse gradient */
    box-shadow: 0px 6px 12px rgba(255, 215, 0, 0.6); /* Gold glow */
  }
`;



const Hero = () => {
  return (
    <HeroContainer id="home">
      <Heading>Welcome to Curiocrates</Heading>
      {/* <Subheading>Discover the most mysterious and luxurious boxes ever!</Subheading> */}
      
       {/* Properly using ButtonContainer here */}
       <ButtonContainer>
        <Button href="/boxes">Our Mystery Boxes</Button>
        <Button href="valentine-boxes">Our Mystic Love Boxes🎁</Button>
        <Button href="/MysticGiftingBox">Build Your Own Gifting Box</Button>
        <Button href="/Leather-Wallets">Our Leather Wallet Crates</Button>

      </ButtonContainer>
    </HeroContainer>
  );
};

export default Hero;