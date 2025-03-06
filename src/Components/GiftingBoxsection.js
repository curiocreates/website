import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoveBoxHer from "../assets/form-image.jpg";
import LoveBoxHim from "../assets/form-image.jpg";
import loading from "../assets/loading image.jpg";

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

const GiftingBoxsection = () => {
  const boxes = [
    {
      id: "love-her",
      images: [LoveBoxHer, LoveBoxHer], // Multiple images for the slider
      title: "Mystic Gifting Box - Platinum",
      desc: "A perfect surprise !",
      discountedPrice: "₹999",
    },
    {
      id: "love-him",
      images: [LoveBoxHim, LoveBoxHim,loading],
      title: "Mystic Gifting Box - Gold",
      desc: "A mystery-filled surprise !",
      discountedPrice: "₹699",
    },
  ];

  return (
    <Section id="Gifting-boxes">
      <h2 style={{ color: "#FFD700" }}>Gifting Special</h2>
      <Grid>
        {boxes.map((box, index) => (
          <Link key={index} to={`/MysticGiftingBox`} style={{ textDecoration: "none" }}>
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

export default GiftingBoxsection;
