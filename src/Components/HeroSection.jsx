// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import heroBg from '../assets/bg-2.jpg';

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

const Subheading = styled.p`
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 6px rgba(75, 0, 130, 0.8);
  font-size: 1.7rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
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

  &:hover {
    background: linear-gradient(90deg, #FFD700, #40E0D0); /* Reverse gradient */
    box-shadow: 0px 6px 12px rgba(255, 215, 0, 0.6); /* Gold glow */
  }
`;



const Hero = () => {
  return (
    <HeroContainer id="home">
      <Heading>Welcome to Curiocrates</Heading>
      <Subheading>Discover the most mysterious and luxurious boxes ever!</Subheading>
      
      <Button href="#boxes">Explore Now</Button>
    </HeroContainer>
  );
};

export default Hero;
