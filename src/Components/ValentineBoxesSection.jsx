import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import LoveBoxHer from "../assets/Loveboxes/LoveBox-her.jpg";
import LoveBoxHim from "../assets/Loveboxes/LoveBox-him.jpg";
import loading from "../assets/BasicImages/loading image.jpg";



const Grid = styled.div`
  display: grid;
  gap: 2rem;
`;

const Box = styled.div`
  background: #4B0082;
  border: 2px solid #FFD700;
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  padding-bottom: 1rem;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(64, 224, 208, 0.6);
  }
`;

const Section = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background-color: #4B0082;
  position: relative; /* Ensures BackButton is positioned relative to this */
`;

const BackButton = styled.button`
  background: #f0a500;
  position: absolute; /* Ensures it's placed within Section */
  top: 10px; /* Moves it to the top */
  left: 10px; /* Moves it to the left */
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: black;
  padding: 8px 15px;
  border-radius: 15px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #FFD700;
  margin: 1rem 0;
`;

const Description = styled.p`
  color: #E6E6FA;
  padding: 0 1rem 1rem;
`;

const PriceContainer = styled.div`
  margin: 10px;
  margin-top: -20px;
`;

const DiscountedPrice = styled.div`
  color: yellow;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 20px;
  font-family: 'Cinzel Decorative', serif;
`;


const ValentineBoxesSection = () => {
const navigate = useNavigate();

  const boxes = [
    {
      id: "love-her",
      images: [LoveBoxHer, LoveBoxHer], // Multiple images for the slider
      title: "Mystic Love Box - For Her",
      desc: "A perfect surprise for her!",
      discountedPrice: "₹1099",
    },
    {
      id: "love-him",
      images: [LoveBoxHim, LoveBoxHim,loading],
      title: "Mystic Love Box - For Him",
      desc: "A mystery-filled surprise for him!",
      discountedPrice: "₹999",
    },
  ];

  return (
    <Section id="valentine-boxes">
<BackButton onClick={() => navigate("/home")}> ← Back </BackButton>
<h2 style={{ color: "#FFD700" }}>Valentine's Special</h2>
      <Grid>
        {boxes.map((box, index) => (
          <Link key={index} to={`/valentine-box/${box.id}`} style={{ textDecoration: "none" }}>
            <Box>
              <Image src={box.images[0]} alt={box.title} />
              <Title>{box.title}</Title>
              <Description>{box.desc}</Description>
              <PriceContainer>
                <DiscountedPrice>{box.discountedPrice}</DiscountedPrice>
              </PriceContainer>
            </Box>
          </Link>
        ))}
      </Grid>
    </Section>
  );
};

export default ValentineBoxesSection;
