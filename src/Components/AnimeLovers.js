import React, { useState } from "react";
import styled from "styled-components";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import loading from "../assets/BasicImages/loading image.jpg";
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom';
import Footer from "../Components/Footer"
import banner from "../assets/BasicImages/banner.jpg"

import Gokufigure from "../assets/Actionfigures/Goku.JPEG";
import Luffy from "../assets/Actionfigures/Luffy.JPEG";
import LuffyHat from "../assets/Actionfigures/Luffy-Hat.JPEG";
import Naruto from "../assets/Actionfigures/Naruto.JPEG";

import Doraemon from "../assets/BobbleHeads/Doraemon.JPEG";
import GokuBobbleHead from "../assets/BobbleHeads/Goku.JPEG";
import Hermione from "../assets/BobbleHeads/Hermione.JPEG";
import Jerry from "../assets/BobbleHeads/Jerry.JPEG";
import Pikachu from "../assets/BobbleHeads/Pikachu.JPEG";
import Shinchan from "../assets/BobbleHeads/Shinchan.JPEG";
import ShinchanKiss from "../assets/BobbleHeads/Shinchan-Kiss.JPEG";
import Spiderman from "../assets/BobbleHeads/Spiderman.JPEG";
import Tom from "../assets/BobbleHeads/Tom.JPEG";

import HarryPotterSet from "../assets/MiniActionFigures/HarryPotterSet.JPEG";
import NarutoSet1 from "../assets/MiniActionFigures/NarutoSet1.JPEG";
import NarutoSet2 from "../assets/MiniActionFigures/NarutoSet2.JPEG";
import NarutoSet3 from "../assets/MiniActionFigures/NarutoSet3.JPEG";
import NarutoSet4 from "../assets/MiniActionFigures/NarutoSet4.JPEG";
import ShinchanSet1 from "../assets/MiniActionFigures/ShinchanSet1.JPEG";
import ShinchanSet2 from "../assets/MiniActionFigures/ShinchanSet2.JPEG";


import HarryPotterClock from "../assets/PocketWatches/HarryPotter-Clock.JPEG";

import ItachiKunaiWeapon from "../assets/Keychains/Itachi-Kunai-Weapon.JPEG";
import DoubleFaceKunaiWeapon from "../assets/Keychains/Double-Face-Kunai-Weapon.JPEG";


import HarryPotter from "../assets/Keychains/HarryPotter.JPEG";
import ItachiUchihaNaruto from "../assets/Keychains/Itachi-Uchiha-Naruto.JPEG";
import KakashiHatakeNaruto from "../assets/Keychains/Kakashi-Hatake-Naruto.JPEG";
import NarutoFaceMetal from "../assets/Keychains/Naruto-Face-Metal.JPEG";
import Goku from "../assets/Keychains/Goku.JPEG";
import UzumakiNaruto from "../assets/Keychains/Uzumaki-Naruto.JPEG";

// import KaitanSword from "..assets/AnimeWeapons/KaitanSword.JPEG";
import KusanagiSword from "../assets/AnimeWeapons/KusanagiSword.JPEG";
import MedievalSword from "../assets/AnimeWeapons/MedievalSword.JPEG";
import MerrimentKarambitBlue from "../assets/AnimeWeapons/MerrimentKarambitBlue.JPEG";
import MerrimentKarambitRed from "../assets/AnimeWeapons/MerrimentKarambitRed.JPEG";
import SpartanSentinelMetalSword from "../assets/AnimeWeapons/SpartanSentinelMetalSword.JPEG";
// import SwordOfDestinyMetal from "../assets/AnimeWeapons/SwordOfDestiny.JPEG";
import ZoroMiniKatana from "../assets/AnimeWeapons/ZoroMiniKatana.JPEG";




const products =[
  { id: 1, name: "Naruto Uzumaki", price: 999, category: "Action Figures", images: [Naruto], inStock: true },
  { id: 2, name: "Goku", price: 799, category: "Action Figures", images: [Gokufigure], inStock: true },
  { id: 3, name: "Luffy", price: 599, category: "Action Figures", images: [Luffy], inStock: true },
  { id: 4, name: "Luffy with Hat", price: 599, category: "Action Figures", images: [LuffyHat], inStock: true },

  
  { id: 5, name: "Doraemon Bobblehead", price: 599, category: "Bobbleheads", images: [Doraemon], inStock: true },
  { id: 6, name: "Goku Bobblehead", price: 599, category: "Bobbleheads", images: [GokuBobbleHead], inStock: true },
  { id: 7, name: "Hermione Bobblehead", price: 599, category: "Bobbleheads", images: [Hermione], inStock: true },
  { id: 8, name: "Jerry Bobblehead", price: 599, category: "Bobbleheads", images: [Jerry], inStock: true },
  { id: 9, name: "Pikachu Bobblehead", price: 599, category: "Bobbleheads", images: [Pikachu], inStock: true },
  { id: 10, name: "Shinchan Bobblehead", price: 599, category: "Bobbleheads", images: [Shinchan], inStock: true },
  { id: 11, name: "Shinchan-Kiss Bobblehead", price: 599, category: "Bobbleheads", images: [ShinchanKiss], inStock: true },
  { id: 29, name: "Spiderman Bobblehead", price: 599, category: "Bobbleheads", images: [Spiderman], inStock: true },
  { id: 30, name: "Tom Bobblehead", price: 599, category: "Bobbleheads", images: [Tom], inStock: true },




  { id: 12, name: "Harry Potter Clock", price: 399, category: "Pocket Watches", images: [HarryPotterClock], inStock: true },



  { id: 14, name: "Itachi Kunai Weapon", price: 349, category: "Anime Weapons", images: [ItachiKunaiWeapon], inStock: true },
  { id: 15, name: "Double Face Kunai Weapon", price: 249, category: "Anime Weapons", images: [DoubleFaceKunaiWeapon], inStock: true },
  // { id: 16, name: "Kaitan Sword - Metal", price: 899, category: "Anime Weapons", images: [KaitanSword], inStock: true },
  { id: 17, name: "Kusanagi Sword", price: 799, category: "Anime Weapons", images: [KusanagiSword], inStock: true },
  { id: 18, name: "Medieval Sword", price: 949, category: "Anime Weapons", images: [MedievalSword], inStock: true },
  { id: 19, name: "Merriment Karambit - Blue", price: 699, category: "Anime Weapons", images: [MerrimentKarambitBlue], inStock: true },
  { id: 20, name: "Merriment Karambit - Red", price: 699, category: "Anime Weapons", images: [MerrimentKarambitRed], inStock: true },
  { id: 21, name: "Spartan Sentinel Metal Sword", price: 999, category: "Anime Weapons", images: [SpartanSentinelMetalSword], inStock: true },
  // { id: 22, name: "Sword of Destiny - Metal", price: 979, category: "Anime Weapons", images: [SwordOfDestinyMetal], inStock: true },
  { id: 13, name: "Zoro Mini Katana", price: 949, category: "Anime Weapons", images: [ZoroMiniKatana], inStock: true },

  { id: 23, name: "Goku Keychain", price: 279, category: "Keychains", images: [Goku], inStock: true },
  { id: 24, name: "Itachi Uchiha - Naruto Keychain", price: 279, category: "Keychains", images: [ItachiUchihaNaruto], inStock: true},
  { id: 25, name: "Kakashi Hatake - Naruto Keychain", price: 279, category: "Keychains", images: [KakashiHatakeNaruto], inStock: true },
  { id: 26, name: "Naruto Face Metal Keychain", price: 349, category: "Keychains", images: [NarutoFaceMetal], inStock: true },
  { id: 27, name: "Harry Potter Keychain", price: 299, category: "Keychains", images: [HarryPotter], inStock: true },
  { id: 28, name: "Uzumaki - Naruto Keychain", price: 299, category: "Keychains", images: [UzumakiNaruto], inStock: true },

  { id: 31, name: "Harry Potter Set", price: 899, category: "Merchandise Sets", images: [HarryPotterSet], inStock: true },
  { id: 32, name: "Naruto Set 1", price: 699, category: "Merchandise Sets", images: [NarutoSet1], inStock: true },
  { id: 33, name: "Naruto Set 2", price: 699, category: "Merchandise Sets", images: [NarutoSet2], inStock: true },
  { id: 34, name: "Naruto Set 3", price: 699, category: "Merchandise Sets", images: [NarutoSet3], inStock: true },
  { id: 35, name: "Naruto Set 4", price: 699, category: "Merchandise Sets", images: [NarutoSet4], inStock: true },
  { id: 36, name: "Shinchan Set 1", price: 899, category: "Merchandise Sets", images: [ShinchanSet1], inStock: true },
  { id: 37, name: "Shinchan Set 2", price: 899, category: "Merchandise Sets", images: [ShinchanSet2], inStock: true }
]


const Banner = styled.div`
  background: url(${banner}) center/cover no-repeat;
  color: white;
  padding: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  width: 100%;
  height: 100px;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative; /* or absolute if needed */
  gap: 5px;
  overflow-x: auto; /* Enables horizontal scrolling */
  white-space: nowrap;
  padding: 10px;
  scrollbar-width: 5px; /* Optional: Adjust scrollbar appearance */
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
  
  &::-webkit-scrollbar {
    height: 5px; /* Adjust scrollbar height */
  }

  &::-webkit-scrollbar-thumb {
    background: orange; /* Customize scrollbar color */
    border-radius: 10px;
  }
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: ${(props) => (props.active ? "#ff9800" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  &:hover {
    background: rgb(58, 32, 72);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Ensures proper centering */
  padding: 10px; /* Increased padding for better spacing */
  margin: auto;
  background: rgb(16, 16, 16);
  color: white;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden; /* Prevents unwanted horizontal scroll */
  position: relative;

  @media (max-width: 600px) {
    padding: 5px; /* Reduce padding on small screens */
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 0.25rem;
  left:0;
  right:0;
  justify-content: center;
  align-items: stretch;
  width: 100%; 

  @media (min-width: 601px) { 
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Adjust for desktop */
  }
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Card = styled.div`
  background:rgb(58, 32, 72);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  width: 170px; /* Increased card size */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemTitle = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
  color:#08080;
`;

const Price = styled.p`
  font-size: 1rem;
  margin: 0.25rem 0;
  margin-bottom : 0.25rem;
  margin-top: 0.25rem;
  color: #08080;
  
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  background: ${(props) => (props.selected ? "#ff9800" : "#f0f0f0")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`;
const BackButton = styled.button`
  background:  #f0a500;
  position: absolute;
  top: 0.5px;
  left: 30px;
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

// const StepsContainer = styled.p`
//   background:rgb(78, 34, 104);
//   padding: 15px;
//   border-radius: 8px;
//   margin-top: 20px;
//   font-size: 16px;
// `;
const OfferBox = styled.div`
  
  text-align: center;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: auto;
`;

const OfferText = styled.h4`
  margin: 0;
  font-size: 28px;
  color: beige;
  font-weight: bold;
  display: center;
  
  
`;

// const SubText = styled.span`
//   display: block;
//   font-size: 16px;
//   color:rgb(246, 240, 240);
//   margin-top: 5px;
//   font-size: 16px;
// `;
const FixedBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 5px;
  right: 5px;
  width: (100px); /* Adjust for left/right margins */
  border-radius: 10px;
  background: rgb(22, 22, 22);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 10px 10px rgba(255, 255, 255, 0.1);
  min-height: 100px;
  padding: 10px 10px; /* Ensure padding consistency */
  text-align: center;
  max-width: 1200px; /* Prevent stretching on larger screens */
  margin: 0 auto;

  @media (min-width: 768px) {
  min-height: 120px; /* Adjust height for better visibility on desktop */
  padding: 15px 20px; /* Ensure proper spacing */
}

`;


const ProgressContainer = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const ProgressBar = styled.div`
  width: 100%;
  background: #eee;
  border-radius: 8px;
  overflow: hidden;
  margin: 8px 0;
`;

const ProgressFill = styled.div`
  width: ${(props) => props.progress}%;
  background: orange;
  height: 8px;
  transition: width 0.3s ease;
`;

const ViewBoxButton = styled.button`
  background: purple;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: darkviolet;
  }
`;

const BuyButton = styled.button`
  background: purple;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: darkviolet;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const ModalContent = styled.div`
  background: linear-gradient(135deg, rgb(128, 0, 128), rgb(218, 165, 32));
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  
`;

const CloseButton = styled.button`
  background: purple;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: darkviolet;
  }
`;

const SelectedItem = styled.div`
  background: black;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  background: purple;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const SortSelect = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  background: white;
  cursor: pointer;
`;
const FixedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgb(16, 16, 16);
  padding: 10px 10px;
  position: sticky;
  top: 0;
  z-index: 1000;
  margin-bottom: 2px;
  padding-bottom:1px;
`;

const FilterWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  white-space: nowrap;
  background: rgb(16, 16, 16); /* Prevents overlap */
`;



const AnimeLovers = () => {
  const [userName, setUserName] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [isViewBoxOpen, setIsViewBoxOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [isNamePopupOpen, setIsNamePopupOpen] = useState(false);


  const handleSort = (option) => {
    setSortBy(option);
  };
  

  // Apply Sorting
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "inStock") return b.inStock - a.inStock; 
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    if (sortBy === "nameAZ") return a.name.localeCompare(b.name);
    if (sortBy === "nameZA") return b.name.localeCompare(a.name);
    return 0;
  });


   // Function to filter products
      const filteredProducts = filter === "All" 
      ? sortedProducts 
      : sortedProducts.filter((p) => p.category === filter);
  
        const navigate = useNavigate();

        const sendEmail = (e) => {
          if (e && e.preventDefault) e.preventDefault(); // Prevent default if event exists
        
          if (selectedItems.length === 0) {
            alert("Please select at least 3 items.");
            return;
          }
        
          if (!userName.trim()) {
            setIsNamePopupOpen(true); // Open name popup if name is empty
            return;
          }
        
          const selectedProducts = selectedItems.map(item => `${item.name} - ₹${item.price}`).join(", ");
          const templateParams = {
            user_name: userName, 
            selected_items: selectedProducts,
            total_price: 1499,
          };
        
          console.log("Sending email with:", templateParams);
        
          emailjs
            .send('service_66e2uo9', 'template_ndb777t', templateParams, 'b5F6NgNmYXKTreTna')
            .then(() => {
              window.location.href = "/payment-Gateway-issue";  // Redirect to checkout
            })
            .catch((error) => {
              console.error("Error sending email:", error);
              alert("Failed to send customization details. Please try again.");
            });
        };        

  const handleSelect = (product) => {
    if (selectedItems.some(item => item.category === product.category)) {
      alert(`You can only select one product from the ${product.category} category. please select product from other category`);
      return;
    }

    if (selectedItems.length < 3 && !selectedItems.some(item => item.id === product.id)) {
      setSelectedItems((prev) => [...prev, product]);
    }
  }; 
  
  const handleRemove = (id) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));
  };
  const [isProcessing, setIsProcessing] = useState(false); // New state for button disable

  return (
    <Container>
      <Banner>
      <BackButton onClick={() => navigate(-1)}> ← Back </BackButton>
      <OfferBox>
      <OfferText>Buy 3 @ ₹ 1499</OfferText>
      {/* <SubText>+ A greeting card free</SubText> */}
      </OfferBox>
      </Banner>

           {/* Fixed Header (Offer Text + Sort By) */}
    <FixedHeader>
      <OfferText>Buy 3 @ ₹ 1499</OfferText>

      <SortSelect onChange={(e) => handleSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="nameAZ">Name: A-Z</option>
        <option value="nameZA">Name: Z-A</option>
      </SortSelect>
    </FixedHeader>

    {/* Scrollable Filter Bar */}
    <FilterWrapper>
      <FilterBar>
        {["All", "Action Figures","Bobbleheads","Merchandise Sets","Anime Weapons","Keychains","Pocket Watches"].map((category) => (
          <FilterButton key={category} active={filter === category} onClick={() => setFilter(category)}>
            {category}
          </FilterButton>
        ))}
      </FilterBar>
    </FilterWrapper>

    <Grid>
        {filteredProducts.map((product) => (
          <Card key={product.id} >
          <Image src={product.images[0]} alt={product.name} />
          <ItemTitle>{product.name}</ItemTitle>
          <Price>₹{product.price}</Price>
          
          {selectedItems.some((item) => item.id === product.id) ? (
            <Button onClick={(e) => { e.stopPropagation(); handleRemove(product.id); }}>
              Remove
            </Button> 
          ) : (
            <Button 
              onClick={(e) => { e.stopPropagation(); handleSelect(product); }} 
              disabled={selectedItems.length >= 3 || !product.inStock} // Corrected condition
            >
              {product.inStock ? "Add to Box" : "Out of Stock"}
            </Button>
          )}
        </Card> 
        ))}
      <FixedBar>
      <ProgressContainer>
        <p>Add {Math.max(0, 3 - selectedItems.length)} more items to unlock Buy Any 3 @ ₹1499</p>
        <ProgressBar>
          <ProgressFill progress={(selectedItems.length / 3) * 100} />
        </ProgressBar>
      </ProgressContainer>
      {/* <FinalPrice>Total ₹1499</FinalPrice> */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <ViewBoxButton onClick={() => setIsViewBoxOpen(true)}>View Box</ViewBoxButton>
      <BuyButton   onClick={() => { 
        if (!userName.trim()) {
        setIsNamePopupOpen(true); // Open name popup
        }   
     }}
      style={{ background: selectedItems.length === 3 ? "orange" : "white",}}disabled={selectedItems.length !==3}> Buy Now
      </BuyButton> 
      </div>
      </FixedBar>
      </Grid>  
      {isViewBoxOpen && (
        <ModalOverlay>
          <ModalContent>
            <h1>Selected Items</h1>
            {selectedItems.length === 0 ? (
              <h3>No items in the box. Please Select the items</h3>
            ) : (
              selectedItems.map((item) => (
                <SelectedItem key={item.id}>
                  <span>{item.name}</span>
                  <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
                </SelectedItem>
              ))
            )}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <CloseButton onClick={() => setIsViewBoxOpen(false)}>Hide Box</CloseButton>
           
            <BuyButton 
            onClick={() => setIsNamePopupOpen(true)} // Only open the name popup
            style={{ background: selectedItems.length === 3 ? "orange" : "white" }}
            disabled={selectedItems.length !== 3}> 
            Buy Now
            </BuyButton>
            </div>

          </ModalContent>
        </ModalOverlay>
      )}
      {/* Name Input Popup */}
    {isNamePopupOpen && (
      <ModalOverlay>
        <ModalContent>
          <h2>Enter Your Name</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              marginBottom: "10px",
            }}
          />
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

          <BuyButton 
            onClick={() => { 
          if (userName.trim()) {
      setIsProcessing(true);
      sendEmail();
    } else {
      alert("Please enter your name.");
    }
        }}
        disabled={isProcessing} 
        style={{ background: isProcessing ? "gray" : "orange" }}
      >
      {isProcessing ? "Processing..." : "Proceed to Buy"}
    </BuyButton>

          </div>
        </ModalContent>
      </ModalOverlay>
    )}
      <Footer/>
      </Container>
  );
};


export default AnimeLovers;
