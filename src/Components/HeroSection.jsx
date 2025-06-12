import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/BasicImages/bg-2.jpg';
import mystery from '../assets/icons/mystery.png';
import love from '../assets/icons/love.png';
import gift from '../assets/icons/gift.png';
import anime from '../assets/icons/anime.png';
import wallet from '../assets/icons/wallet.png';

import '@fortawesome/fontawesome-free/css/all.min.css';


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
  margin-bottom: 0.5rem;
  animation: fadeInScale 1.2s ease-in-out;
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const FilterImage = styled.img`
  width: 100px;
  height: 80px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 80px;
    height: 60px;
  }
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  padding: 10px;
  gap: 0.5rem;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.46);
  &::-webkit-scrollbar {
    display: none;
     height: 5px; 
  }
  &::-webkit-scrollbar-thumb {
    background: orange; /* Customize scrollbar color */
    border-radius: 10px;
  }
`;

const FilterItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: none;
  background: transparent;
  border-radius: 8px;
  transition: background 0.3s ease-in-out;
  padding: 5px;
  color: #FFD700; /* Gold text */
  
  &:hover {
    background: rgba(126, 63, 198, 0.71);
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
const Subheading =styled.h3`
 padding-top: 10px;
  font-family: 'Cinzel Decorative', cursive;
  text-shadow: 3px 3px 8px rgba(75, 0, 130, 0.9);
  font-weight: 700;
  margin-bottom: 1rem;
  animation: fadeInScale 1.2s ease-in-out;
  
`;

const WhatsAppButton = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 1000;

  .icon-container {
    background-color: #25D366;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    i {
      color: white;
      font-size: 28px;
    }
  }

  .label {
    margin-top: 5px;
    font-size: 0.85rem;
    color: #ffffff;
    background-color: #4CAF50;
    padding: 3px 10px;
    border-radius: 12px;
    font-family: 'Cinzel Decorative', cursive;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    white-space: nowrap;
  }
`;





const products = [
  { name: 'Mystery Boxes', href: '/boxes', image: mystery },
  { name: 'Love Boxes', href: '/valentine-boxes', image: love },
  { name: 'Gifting Boxes', href: '/MysticGiftingBox', image: gift },
  { name: 'Anime Boxes', href: '/AnimeLovers', image: anime },
  { name: 'Wallet Crates', href: '/Leather-Wallets', image: wallet }
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroContainer id="home">
        <FilterBar>
          {products.map((product, index) => (
            <FilterItem key={index} onClick={() => navigate(product.href)}>
              <FilterImage src={product.image} alt={product.name} />
              <span>{product.name}</span>
            </FilterItem>
          ))}
        </FilterBar>
        <Heading>Welcome to Curiocrates</Heading>
        <Subheading>Discover the most mysterious and luxurious boxes ever!</Subheading> 
         {/* Properly using ButtonContainer here */}
       <ButtonContainer>
        <Button href="/Explorenow">Explore Now</Button>
      </ButtonContainer>

    <WhatsAppButton
    onClick={() => {
    const message = "Hey! I'm interested in your mystery boxes on Curiocrates.";
    const phone = "918328413800";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    }}
    >
    <div className="icon-container">
    <i className="fab fa-whatsapp"></i>
    </div>
    <div className="label">Chat with us</div>
    </WhatsAppButton>

    </HeroContainer>

    </>
  );
};

export default Hero;
