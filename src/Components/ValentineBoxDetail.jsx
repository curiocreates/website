import React, { useState } from "react";
import { useParams,Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Thumbs } from "swiper/modules";
import emailjs from "emailjs-com";

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
import FourSoaps from "../assets/Soaps/Four-Soaps.JPG";


import Redbox from "../assets/Loveboxes/LoveBox-her-Red.JPEG";
import Brownbox from "../assets/Loveboxes/LoveBox-her-Brown.JPEG";
import Biegebox from "../assets/Loveboxes/LoveBox-her-Biege.JPEG";
import Bluebox from "../assets/Loveboxes/LoveBox-her-Blue.JPEG";
import Pinkbox from "../assets/Loveboxes/LoveBox-her-Pink.JPEG";





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

const Title1 = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: rgb(128, 0, 128);
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


const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;


const CustomizationSection = styled.section`
  background-color: white;
  padding: 4rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  display: block;
  margin: 1rem 0 0.5rem;
  color: #333;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;



const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
`;



const ValentineBoxDetail = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [userName, setUserName] = useState("");
  const [personalizedNote, setPersonalizedNote] = useState("");
  const [selectedTeddy, setSelectedTeddy] = useState("Red colour Teddy");
  const [selectedSoap, setSelectedSoap] = useState("Rose Soap");
  const [beltColor, setBeltColor] = useState("Black");
  const [walletColor, setWalletColor] = useState("Brown");
  const [braceletColor, setBraceletColor] = useState("Silver");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const products = {
    "love-her": {
      title: "Mystic Love Box - For Her",
      subTitle: "ITEMS IN THE BOX ARE:",
      images: [LoveBoxHer, Redbox,Brownbox,Biegebox,Bluebox,Pinkbox,Mirrors1,Mirrors2,FourSoaps, RoseSoap, GoatmilkSoap, RedSandalSoap,CharcoalSoap,],
      description: [
        "🌸 A Premium Perfume",
        "🍫 A Heart shape box with Hersheys Kisses chocolates",
        "✨ Any one Round beautiful makeup mirror",
        "🛁 One Handmade natural soap",
        "🔑 A Beautiful keychain",
        "📒 A Chocolate notebook",
        "🧸 A Small teddy",
      ],
      price: "₹1099",
      originalPrice: "₹1500",
      buyLink: "/payment-Gateway-issue",
      outOfStock: false,
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
      price: "₹1099",
      originalPrice: "₹1500",
      buyLink: "/payment-Gateway-issue",
      outOfStock: true,
    },
  };
    const handleProceed = () => {
      if (!userName) {
        alert("Please enter your name.");
        return;
      }
      setIsSubmitting(true);
      const formData = {
        user_name: userName,
        personalized_note: personalizedNote,
        box_type: id === "love-her" ? "Mystic Love Box - For Her" : "Mystic Love Box - For Him",
        ...(id === "love-her"
          ? { teddy: selectedTeddy, soap: selectedSoap }
          : { belt_color: beltColor, wallet_color: walletColor, bracelet_color: braceletColor }),
      };
  

    emailjs.send('service_66e2uo9', 'template_ndb777t', formData, 'b5F6NgNmYXKTreTna')
    .then(() => {
      window.location.href = products[id].buyLink;
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert("Failed to send customization details. Please try again.");
    })
    .finally(() => setIsSubmitting(false));
};
  const product = products[id]
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
      <CustomizationSection>
       <Title1>{id === "love-her" ? " You can Customize Your Box Here" : " You can Customize Here"}</Title1>
      <Label>Your Name:</Label>
      <Input type="text"  placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
      
      {id === "love-her" ? (
        <> 
          <Label>Select a Teddy:</Label>
          <Select value={selectedTeddy} onChange={(e) => setSelectedTeddy(e.target.value)}>
            <option>Red colour Teddy</option>
            <option>Blue colour Teddy</option>
            <option>Brown colour Teddy</option>
            <option>Yellow colour Teddy</option>
            <option>Pink colour Teddy</option>
            <option>Biege colour Teddy</option>
          </Select>

          <Label>Select a Handmade Soap:</Label>
          <Select value={selectedSoap} onChange={(e) => setSelectedSoap(e.target.value)}>
            <option>Rose Soap</option>
            <option>Charcoal Soap</option>
            <option>Goatmilk Soap</option>
            <option>Red Sandal Soap</option>
          </Select>
        </>
      ) : (
        <>
        <Label>Select Belt Color:</Label>
        <Select value={beltColor} onChange={(e) => setBeltColor(e.target.value)}>
          <option value="">Select</option>
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
          <option value="Tan">Tan</option>
        </Select>
      
        <Label>Select Wallet Color:</Label>
        <Select value={walletColor} onChange={(e) => setWalletColor(e.target.value)}>
          <option value="">Select</option>
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
          <option value="Tan">Tan</option>
        </Select>
      
        <Label>Select Bracelet Color:</Label>
        <Select value={braceletColor} onChange={(e) => setBraceletColor(e.target.value)}>
          <option value="">Select</option>
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
\        </Select>
      </>
      
      )}
      
      <Label>Add a Personalized Note (Optional):</Label>
      <TextArea value={personalizedNote} onChange={(e) => setPersonalizedNote(e.target.value)} />
          </CustomizationSection>
          <SubTitle>{product.subTitle}</SubTitle>
          <DescriptionList>
            {product.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </DescriptionList>
          <StockStatus style={{ color: product.outOfStock ? "gold" : "lightgreen" }}>
            {product.outOfStock ? "Out of Stock, Will be Available Soon...." : "In Stock"}
          </StockStatus>

          <OfferTag>Limited Time Offer</OfferTag>
          <PriceTag>
            <span className="original">{product.originalPrice}</span> {product.price}
          </PriceTag>
          <BuyButton onClick={handleProceed} disabled={product.outOfStock || isSubmitting} style={{ background: product.outOfStock ? "orange" : "gold" }}>
          {product.outOfStock ? "Out of Stock " : isSubmitting ? "Processing..." : "Confirm and Proceed"}
          </BuyButton>

        </DetailsContainer>
        
      </ProductSection>
    </Container>
  );
};

export default ValentineBoxDetail;
