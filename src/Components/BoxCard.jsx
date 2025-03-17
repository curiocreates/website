import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import treasureBox from '../assets/MysteryBoxes/Treasure-chest-Box.jpg';
import surpriseBox from '../assets/MysteryBoxes/ultimate-surprise-box.jpg';
import goldBox from '../assets/MysteryBoxes/gold-premium-box.jpg';
import customBox from '../assets/MysteryBoxes/exclusive-custom-box.jpg';
import enigmaBox from '../assets/MysteryBoxes/premium-enigma-box.jpg';

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
  position: relative;
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
  margin: 10px ;
  margin-top:-20px;
`;

const OriginalPrice = styled.div`
  display: inline-block;
  text-decoration: line-through;
  font-size: 1.2rem;
  color: #A9A9A9; /* Light gray for strikethrough */
  
`;

const DiscountedPrice = styled.div`
  display: inline-block;
  color: yellow; /* Royal Purple */
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 20px;
  font-family: 'Cinzel Decorative', serif;
`;

const Button = styled.a`
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

const HoverButton = styled.div`
  position: absolute;
  top: 20px; /* Positioned at the top */
  right: 20px; /* Positioned at the right */
  background-color: rgba(255, 215, 0, 0.8); /* Gold with transparency */
  color: #4B0082;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 25px;
  display: none;
  cursor: pointer;
  font-family: 'Cinzel Decorative', serif;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.5); /* Gold Glow */

  &:hover {
    background-color: #FFD700;
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(64, 224, 208, 0.8);
  }
`;

const BoxContainer = styled(Box)`
  &:hover ${HoverButton} {
    display: block;
  }
`;

const BoxesSection = () => {
  const boxes = [
    { img: treasureBox, title: "Treasure Chest Box", desc: "A chest full of surprises!", name: "Buy Now", price: "399 ₹", discountedPrice: "299 ₹", about: "click here to know more" ,click:'Click on the box to know more', externalLink: 'https://rzp.io/rzp/treasure-chest-box'},
    { img: surpriseBox, title: "Ultimate Surprise Box", desc: "The ultimate thrill of mystery.", name: "Buy Now", price: "599 ₹", discountedPrice: "499 ₹", about: "click here to know more" ,click:'Click on the box to know more', externalLink: 'https://rzp.io/rzp/ultimate-surprise-box'},
    { img: goldBox, title: "Gold Premium Box", desc: "Elegance meets mystery.", name: "Buy Now", price: "1199 ₹", discountedPrice: "999 ₹", about: "click here to know more" ,click:'Click on the box to know more', externalLink: 'https://rzp.io/rzp/gold-premium-box'},
    { img: customBox, title: "Exclusive Custom Box", desc: "Personalized just for you.", name: "Buy Now", price: "1799 ₹", discountedPrice: "1499 ₹", about: "click here to know more" ,click:'Click on the box to know more', externalLink: 'https://rzp.io/rzp/exclusive-custom-box'},
    { img: enigmaBox, title: "Premium Enigma Box", desc: "The enigma awaits.", name: "Buy Now", price: "3599 ₹", discountedPrice: "2999 ₹", about: "click here to know more",click:'Click on the box to know more', externalLink: 'https://rzp.io/rzp/premium-enigma-box'},
  ];

  return (
    <Section id="boxes">
      <h2 style={{ color: "#FFD700" }}>Our Boxes</h2>
      <Grid>
        {boxes.map((box, index) => (
          <BoxContainer key={index}>
            <Link to={`/customize-box/${index}`}>
            <Image src={box.img} alt={box.title} />
            </Link>
            <Title>{box.title}</Title>
            <Description>{box.desc}</Description>
            <PriceContainer>
              <OriginalPrice>{box.price}</OriginalPrice>
              <DiscountedPrice>{box.discountedPrice}</DiscountedPrice>
              <p>{box.click}</p>
            </PriceContainer>
            <Button as={Link} to={`/customize-box/${index}`}>
              customize Now
            </Button>
            <HoverButton>
              <Link to={`/about-box/${box.title}`} style={{ color: "#4B0082", textDecoration: "none" }}>
              ℹ️ know more
              </Link>
            </HoverButton>
            {/* <Button href={box.externalLink} target="_blank" rel="noopener noreferrer">
              {box.name}
            </Button><br /> */}
          </BoxContainer>
        ))}
      </Grid>
    </Section>
  );
};

export default BoxesSection;