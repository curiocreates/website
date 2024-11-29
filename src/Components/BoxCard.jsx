import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

import treasureBox from '../assets/Treasure-chest-Box.jpg';
import surpriseBox from '../assets/ultimate-surprise-box.jpg';
import goldBox from '../assets/gold-premium-box.jpg';
import customBox from '../assets/exclusive-custom-box.jpg';
import enigmaBox from '../assets/premium-enigma-box.jpg';

const Section = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background-color: #4B0082;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Box = styled.div`
  background: #4B0082; /* Royal Purple */
  border: 2px solid #FFD700; /* Gold Border */
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  padding-bottom: 1rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(64, 224, 208, 0.6); /* Turquoise Glow */
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #FFD700; /* Gold */
  margin: 1rem 0;
`;

const Description = styled.p`
  color: #E6E6FA; /* Soft Lavender for Description */
  padding: 0 1rem 1rem;
`;

const PriceContainer = styled.div`
  margin: 10px 0;
`;

const PriceTag = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #FFD700, #40E0D0); /* Gold to Turquoise Gradient */
  color: #4B0082; /* Royal Purple */
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* Subtle Shadow */
  font-family: 'Cinzel Decorative', serif;
`;

const Button = styled(Link)` // Use Link for routing
  display: inline-block;
  background: #FFD700; /* Gold */
  color: #4B0082; /* Royal Purple */
  font-size: 1.1rem;
  font-weight: bold;
  padding: 12px 30px;
  border: 2px solid #40E0D0; /* Turquoise Border */
  border-radius: 30px;
  cursor: pointer;
  font-family: 'Cinzel Decorative', serif;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.5); /* Gold Glow */
  text-decoration: none;


  &:hover {
    background: linear-gradient(90deg, #FFD700, #40E0D0); /* Gold to Turquoise */
    color: #FFFFFF; /* White Text on Hover */
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(64, 224, 208, 0.8); /* Turquoise Glow */
  }
`;

const BoxesSection = () => {
  const boxes = [
    { img: treasureBox, title: "Treasure Chest Box", desc: "A chest full of surprises!", name: "Buy Now", price: "299 ₹" },
    { img: surpriseBox, title: "Ultimate Surprise Box", desc: "The ultimate thrill of mystery.", name: "Buy Now", price: "499 ₹" },
    { img: goldBox, title: "Gold Premium Box", desc: "Elegance meets mystery.", name: "Buy Now", price: "999 ₹" },
    { img: customBox, title: "Exclusive Custom Box", desc: "Personalized just for you.", name: "Buy Now", price: "1499 ₹" },
    { img: enigmaBox, title: "Premium Enigma Box", desc: "The enigma awaits.", name: "Buy Now", price: "2999 ₹" },
  ];

  return (
    <Section id="boxes">
      <h2 style={{ color: "#FFD700" }}>Our Boxes</h2>
      <Grid>
        {boxes.map((box, index) => (
          <Box key={index}>
            <Image src={box.img} alt={box.title} />
            <Title>{box.title}</Title>
            <Description>{box.desc}</Description>
            <PriceContainer>
              <PriceTag>{box.price}</PriceTag>
            </PriceContainer>
            {/* Button uses Link to navigate to /shipping */}
            <Button ><Link style={{ textDecoration: 'none' }} to="/ContactForm">{box.name}</Link></Button>
            
          </Box>
        ))}
      </Grid>
    </Section>
  );
};

export default BoxesSection;
