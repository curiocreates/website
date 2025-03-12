import React, { useState } from "react";
import { useParams,Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Thumbs } from "swiper/modules";

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





// Styled components
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgb(128, 0, 128), rgb(218, 165, 32));
  color: white;
  min-height: 100vh;
`;

const ProductSection = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  gap: 2rem;
  background: rgba(198, 37, 37, 0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;

  img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    max-width: 125%;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    border: 2px solid transparent;
  }

  img:hover {
    border-color: gold;
    transform: scale(1.1);
  }
`;

const DetailsContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffd700;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-top: 1rem;
`;

const DescriptionList = styled.ul`
  font-size: 1.2rem;
  margin: 1rem 0;
  color: white;
  list-style-type: disc;
  padding-left: 20px;
`;

const StockStatus = styled.p`
  color: lightgreen;
  font-size: 1.3rem;
  font-weight: bold;
`;

const PriceTag = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  color: white;

  .original {
    text-decoration: line-through;
    color: #ccc;
    font-size: 1.5rem;
  }
`;

const OfferTag = styled.div`
  background: gold;
  color: black;
  font-weight: bold;
  padding: 8px 15px;
  display: inline-block;
  border-radius: 10px;
  margin-top: 10px;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #f0a500;
  color: black;
  font-size: 1rem;
  padding: 10px 18px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ffd700;
    transform: scale(1.05);
  }
`;

const BuyButton = styled.a`
  display: inline-block;
  background: gold;
  color: black;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 15px 35px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background:rgba(230, 197, 14, 0.83);
    transform: scale(1.05);
  }
`;

const WalletCrateDetail = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const products = {
    TommyBlack: {
      images: [TommyHilfiger, TommyBlack1, TommyBlack2, TommyBlack3, TommyBlack4, TommyBlack5],
      title: "Tommy - Black",
      subTitle: "Premium Leather Wallet",
      description: ["A sophisticated and sleek premium leather wallet designed for modern lifestyles",
                     "Multiple Card Slots for seamless organization", 
                     " A compact yet spacious design for everyday convenience",
                     " Timeless black finish, perfect for formal and casual occasions"],
      originalPrice: "₹799",
      price: "₹599",
      buyLink: "/buy/TommyBlack",
    },
    TedBaker: {
      images: [Tedbaker1, Tedbaker2, Tedbaker3, Tedbaker4, Tedbaker5],
      title: "Tedbaker - Brown",
      subTitle: "Elegant and Stylish Wallet",
      description: ["Soft Leather Finish", 
                    "Spacious compartments to store essentials effortlessly", 
                    "A slim and lightweight design for ultimate comfort"],
      originalPrice: "₹799",
      price: "₹599",
      buyLink: "/buy/TedBaker",
    },
    TommyTan: {
      images: [TommyHilfiger, TommyTan1, TommyTan2, TommyTan3, TommyTan4, TommyTan5],
      title: "Tommy - Tan",
      subTitle: "Classic Tan Leather Wallet",
      description: ["A timeless tan leather wallet that blends durability with elegance",
                    "An elegant and stylish look to complement any outfit",
                    "A perfect gifting option for those who appreciate quality and sophistication"],
      originalPrice: "₹799",
      price: "₹599",
      buyLink: "/buy/TommyTan",
    },
  };
  

  const product = products[id];

  if (!product) {
    return <Container>Product not found!</Container>;
  }

  return (
    <Container>
      <BackButton to="/Leather-Wallets"> ← Back  </BackButton>
      <ProductSection>
        <ImageContainer>
          <Swiper navigation={true} loop={true} lazy={true} modules={[Navigation, Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`${product.title} - ${index}`} loading="lazy" style={{ width: "100%", borderRadius: "10px" }} />
              </SwiperSlide>
            ))}
          </Swiper>

          <ThumbnailContainer>
            <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={3} watchSlidesProgress>
              {product.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`Thumbnail ${index}`} loading="lazy" />
                </SwiperSlide>
              ))}
            </Swiper>
          </ThumbnailContainer>
        </ImageContainer>

        <DetailsContainer>
          <Title>{product.title}</Title>
          <SubTitle>{product.subTitle}</SubTitle>
          <DescriptionList>
            {product.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </DescriptionList>
          <StockStatus>In Stock</StockStatus>
          <OfferTag>Limited Time Offer</OfferTag>
          <PriceTag>
            <span className="original">{product.originalPrice}</span> {product.price}
          </PriceTag>
          <BuyButton href={product.buyLink}>Buy Now</BuyButton>
        </DetailsContainer>
      </ProductSection>
       <Nav>
            <Logo>
              <Link to="/" onClick={closeMenu}>Curiocrates</Link>
            </Logo>
            <Hamburger onClick={toggleMenu} className={menuOpen ? 'open' : ''}>
              <span></span>
              <span></span>
              <span></span>
            </Hamburger>
            <NavLinks isOpen={menuOpen}>
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/Boxes" onClick={closeMenu}>Mystery-Boxes</Link>
              <Link to="/valentine-boxes" onClick={closeMenu}>Mystic Love-Boxes</Link>
              <Link to="/MysticGiftingBox" onClick={closeMenu}>Build your own Boxes</Link>
              <Link to="/Leather-Wallets" onClick={closeMenu}>Leather Wallet Crates</Link>
              <Link to="/about" onClick={closeMenu}>About Us</Link>
              <Link to="/Contact" onClick={closeMenu}>Contact Us</Link>
              <Link to="/terms" onClick={closeMenu}>Terms and Conditions</Link>
      
            </NavLinks>
          </Nav>
    </Container>
  );
};

export default WalletCrateDetail;
