import React, { useState } from "react";
import { useParams,Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Thumbs } from "swiper/modules";

// Import box images
import LoveBoxHer from "../assets/Loveboxes/LoveBox-her.jpg";
import LoveBoxHim from "../assets/Loveboxes/LoveBox-him.jpg";
import loading from "../assets/BasicImages/loading image.jpg";
import Mirrors1 from"../assets/Mirrors/Mirrors-1.JPG";
import Mirrors2 from"../assets/Mirrors/Mirrors-2.JPG";

import CharcoalSoap from "../assets/Soaps/Charcoal-Soap.JPG";
import GoatmilkSoap from "../assets/Soaps/Goatmilk-Soap.JPG";
import RedSandalSoap from "../assets/Soaps/Red-Sandal-Soap.JPG";
import RoseSoap from "../assets/Soaps/Rose-Soap.JPG";





// Styled components
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgb(64, 224, 208), rgb(128, 0, 128), rgb(218, 165, 32));
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
  top: 2px;
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
    background: #ffd700;
    transform: scale(1.05);
  }
`;


const ValentineBoxDetail = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const products = {
    "love-her": {
      title: "Mystic Love Box - For Her",
      subTitle: "ITEMS IN THE BOX ARE:",
      images: [LoveBoxHer, Mirrors1,Mirrors2, RoseSoap, GoatmilkSoap, RedSandalSoap,CharcoalSoap,],
      description: [
        "🌸 Two Premium floral Perfumes",
        "✨ Round beautiful makeup mirror",
        "🛁 One Handmade natural soap",
        "🔑 A Beautiful keychain",
        "✨ A leather Diary",
        "📒 A Chocolate notebook",
        "🧸 A Small teddy",
      ],
      price: "₹999",
      originalPrice: "₹1500",
      buyLink: "/payment-Gateway-issue",
    },
    "love-him": {
      title: "Mystic Love Box - For Him",
      subTitle: "ITEMS IN THE BOX ARE:",
      images: [LoveBoxHim, loading, CharcoalSoap, loading, LoveBoxHim],
      description: [
        "💼 Genuine leather wallet",
        "🪢 Genuine leather belt",
        "🛁 Handmade charcoal soap",
        "🧴 Premium men's Fragrance",
        "✨ Stylish keychain",
        "✨ Leather bracelet",
      ],
      price: "₹999",
      originalPrice: "₹1500",
      buyLink: "/payment-Gateway-issue",
    },
  };

  const product = products[id];

  if (!product) {
    return <Container>Product not found!</Container>;
  }

  return (
    <Container>
      <BackButton to="/valentine-boxes"> ← Back  </BackButton>
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
    </Container>
  );
};

export default ValentineBoxDetail;
