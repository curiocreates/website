import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Thumbs } from "swiper/modules";

// Import box images
import LoveBoxHer from "../assets/LoveBox-her.jpg";
import LoveBoxHim from "../assets/LoveBox-him.jpg";
import loading from "../assets/loading image.jpg";


// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 2rem;
  background-color: #fff;
  color: #800080;
  min-height: 100vh;
`;

const ProductSection = styled.div`
  display: flex;
  width: 80%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    color: #800080;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    border: 2px solid transparent;
  }

  img:hover {
    border-color: #800080;
    transform: scale(1.1);
  }
`;

const DetailsContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #800080;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin: 1rem 0;
  color: Black;
`;

const StockStatus = styled.p`
  color: green;
  font-size: 1.2rem;
  font-weight: bold;
`;

const PriceTag = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1rem;
  color: Black;

  .original {
    text-decoration: line-through;
    color: #555;
    font-size: 1.3rem;
  }
`;

const OfferTag = styled.div`
  background: #800080;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 5px;
  margin-top: 10px;
`;

const BuyButton = styled.a`
  display: inline-block;
  background: #800080;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 12px 30px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #800080;
  }
`;

const ValentineBoxDetail = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const products = {
    "love-her": {
      title: "Mystic Love Box - For Her",
      images: [LoveBoxHer,loading,LoveBoxHer,LoveBoxHer],
      description: [
        "ITEMS IN THE BOX ARE",

        "✨ Round beautiful makeup mirror",
        "🌸 Premium floral attar",
        "🛁 Handmade natural soap from Sparsh Organics",
        "🔑 Beautiful keychain",
        "📒 Chocolate notebook",
        "💎 Elegant jhumkas",
        "🧸 Small teddy",
        "💖 A perfect surprise filled with handpicked luxurious and mysterious items! Perfect for gifting."
      ],
      price: "₹999",
      originalPrice: "₹1500",
      buyLink: "https://rzp.io/rzp/Mystic-Love-Box-For-Her",
    },
    "love-him": {
      title: "Mystic Love Box - For Him",
      images: [LoveBoxHim,loading,LoveBoxHim,loading,LoveBoxHim],
      description: [
        "ITEMS IN THE BOX ARE",
        
        "🪢 Genuine leather belt",
        "💼 Genuine leather wallet",
        "🧴 Premium men's attar",
        "🔑 Stylish keychain",
        "⌚ Leather bracelet",
        "🎁 A mystery-filled surprise with exclusive and exciting gifts!"
      ],
      price: "₹999",
      originalPrice: "₹1500",
      buyLink: "https://rzp.io/rzp/Mystic-Love-Box-For-Him",
    },
  };
  
  

  const product = products[id];

  if (!product) {
    return <Container>Product not found!</Container>;
  }

  return (
    <Container>
      <ProductSection>
        {/* Image Section */}
        <ImageContainer>
          <Swiper navigation={true} modules={[Navigation, Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`${product.title} - ${index}`} style={{ width: "100%", borderRadius: "10px" }} />
              </SwiperSlide>
            ))}
          </Swiper>

          <ThumbnailContainer>
            <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={3} watchSlidesProgress>
              {product.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`Thumbnail ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ThumbnailContainer>
        </ImageContainer>

        {/* Details Section */}
        <DetailsContainer>
          <Title>{product.title}</Title>
          <Description>{product.description.map((point, index) => (
                      <li key={index}>{point}</li>))}
          </Description>
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