import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/BasicImages/bg-2.jpg';
import mystery from '../assets/icons/mystery.png';
import love from '../assets/icons/love.png';
import gift from '../assets/icons/gift.png';
import anime from '../assets/icons/anime.png';
import wallet from '../assets/icons/wallet.png';

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
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const FilterBar = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  padding: 10px;
  gap: 0.5rem;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.46);
  &::-webkit-scrollbar {
    display: none;
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

const FilterImage = styled.img`
  width: 120px;
  height: 80px;
  object-fit: contain;
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
      </HeroContainer>

    </>
  );
};

export default Hero;
