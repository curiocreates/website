import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Tedbaker1 from "../assets/Wallets/Tedbaker-1.JPG";
import Tedbaker2 from "../assets/Wallets/Tedbaker-2.JPG";
import Tedbaker3 from "../assets/Wallets/Tedbaker-3.JPG";
import Tedbaker4 from "../assets/Wallets/Tedbaker-4.JPG";
import Tedbaker5 from "../assets/Wallets/Tedbaker-5.JPG";
import TommyBlack1 from "../assets/Wallets/Tommy-black-1.JPG";
import TommyBlack2 from "../assets/Wallets/Tommy-black-2.JPG";
import TommyBlack3 from "../assets/Wallets/Tommy-black-3.JPG";
import TommyBlack4 from "../assets/Wallets/Tommy-black-4.JPG";
import TommyBlack5 from "../assets/Wallets/Tommy-black-5.JPG";
import TommyTan1 from "../assets/Wallets/Tommy-Tan-1.JPG";
import TommyTan2 from "../assets/Wallets/Tommy-Tan-2.JPG";
import TommyTan3 from "../assets/Wallets/Tommy-Tan-3.JPG";
import TommyTan4 from "../assets/Wallets/Tommy-Tan-4.JPG";
import TommyTan5 from "../assets/Wallets/Tommy-Tan-5.JPG";
import TommyHilfiger from "../assets/Wallets/TommyHilfiger.JPG";




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


const LeatherWalletCrate = () => {
const navigate = useNavigate();

const boxes = [
  {
    id: "TommyBlack",
    images: [TommyHilfiger, TommyBlack1, TommyBlack2, TommyBlack3, TommyBlack4, TommyBlack5],
    title: "Tommy - Black",
    description: ["Genuine Leather", "Multiple Card Slots", "Compact Design"],
    discountedPrice: "₹599",
  },
  {
    id: "TedBaker",
    images: [Tedbaker1, Tedbaker2, Tedbaker3, Tedbaker4, Tedbaker5],
    title: "Tedbaker - Brown",
    description: ["Soft Leather Finish", "Spacious Compartments", "Slim Design"],
    discountedPrice: "₹599",
  },
  {
    id: "TommyTan",
    images: [TommyHilfiger, TommyTan1, TommyTan2, TommyTan3, TommyTan4, TommyTan5],
    title: "Tommy - Tan",
    description: ["Durable Build", "Elegant Look", "Perfect for Gifting"],
    discountedPrice: "₹599",
  },
  
];

  return (
    <Section id="Leather-Wallets">
<BackButton onClick={() => navigate("/home")}> ← Back </BackButton>
<h2 style={{ color: "#FFD700" }}>Leather Wallet Crates</h2>
      <Grid>
        {boxes.map((box, index) => (
          <Link key={index} to={`/Leather-Wallets/${box.id}`} style={{ textDecoration: "none" }}>
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

export default LeatherWalletCrate;
