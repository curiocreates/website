import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Footer from "../Components/Footer"

import candle from "../assets/gifting/candle.jpg";
import chocolates from "../assets/gifting/chocolates.jpg";
import mug from "../assets/gifting/mug.jpg";
import frame from "../assets/gifting/frame.jpg";
import soap from "../assets/gifting/soap.jpg";
import keychain from "../assets/gifting/keychain.jpg";

import birthday from "../assets/occasions/birthday.jpg";
import anniversary from "../assets/occasions/Anniversary.jpg";
import congratulations from "../assets/occasions/congratulations.jpg";
import love from "../assets/occasions/love.jpg";

import boxImage from "../assets/Mystery-Gifting-box.JPG";

import dancingGirl from "../assets/Mirrors/dancing-girl.JPG";
import elephant from "../assets/Mirrors/elephant.JPG";
import featherBlue from "../assets/Mirrors/feather-blue.JPG";
import featherGreen from "../assets/Mirrors/feather-green.JPG";
import featherMulticolour from "../assets/Mirrors/feather-multicolour.JPG";
import featherViolet from "../assets/Mirrors/feather-violet.JPG";
import featherVioletYellow from "../assets/Mirrors/feather-violet-yellow.JPG";
import hand from "../assets/Mirrors/hand.JPG";
import haveAGoodTime from "../assets/Mirrors/have-a-good-time.JPG";
import iLoveUnicorn from "../assets/Mirrors/i-love-unicorn.JPG";
import peacocksBeige from "../assets/Mirrors/peacocks-beige.JPG";
import sleeptune from "../assets/Mirrors/sleeptune.JPG";
import teddyBlack from "../assets/Mirrors/teddy-black.JPG";
import teddyBlue from "../assets/Mirrors/teddy-blue.JPG";
import unicornBlue from "../assets/Mirrors/unicorn-blue.JPG";
import unicornMagico from "../assets/Mirrors/unicorn-magico.JPG";

import banner from "../assets/banner.jpg"

import AtomicHabits from "../assets/Books/Atomic-habits.JPG";
import DoEpicShitDone from "../assets/Books/Do-epic-shit-done.JPG";
import IkigaiHardcoverBook from "../assets/Books/Ikigai-hardcover-book.JPG";
import PsychologyOfMoney from "../assets/Books/psychology-of-money.JPG";
import RichDadPoorDad from "../assets/Books/Rich-dad-poor-dad.JPG";
import TheAlchemist from "../assets/Books/The-Alchemist.JPG";
import TheMonkWhoSoldHisFerrari from "../assets/Books/The-monk-who-sold-his-ferrari.JPG";
import ThePowerOfSubconsciousMind from "../assets/Books/The-power-of-subconscious-mind.JPG";

import CharcoalSoap from "../assets/Soaps/Charcoal-Soap.JPG";
import GoatmilkSoap from "../assets/Soaps/Goatmilk-Soap.JPG";
import RedSandalSoap from "../assets/Soaps/Red-Sandal-Soap.JPG";
import RoseSoap from "../assets/Soaps/Rose-Soap.JPG";

// import loading from "../assets/loading image.jpg";


const products = [
  
  { id: 26, name: "Atomic Habits", price: 249, category: "Books and Novels", images: [AtomicHabits] },
  { id: 27, name: "Do Epic Shit Done", price: 249, category: "Books and Novels", images: [DoEpicShitDone] },
  { id: 28, name: "Ikigai HardcoverBook", price: 249, category: "Books and Novels", images: [IkigaiHardcoverBook] },
  { id: 29, name: "Psychology Of Money", price: 249, category: "Books and Novels", images: [PsychologyOfMoney] },
  { id: 30, name: "Rich Dad Poor Dad", price: 249, category: "Books and Novels", images: [RichDadPoorDad] },
  { id: 31, name: "The Alchemist", price: 249, category: "Books and Novels", images: [TheAlchemist] },
  { id: 32, name: "The Monk Who Sold His Ferrari", price: 249, category: "Books and Novels", images: [TheMonkWhoSoldHisFerrari] },
  { id: 33, name: "The Power Of Subconscious Mind", price: 249, category: "Books and Novels", images: [ThePowerOfSubconsciousMind] },

  { id: 34, name: "Charcoal Soap", price: 240, category: "Soaps", images: [CharcoalSoap] },
  { id: 35, name: "Goatmilk Soap", price: 240, category: "Soaps", images: [GoatmilkSoap] },
  { id: 36, name: "RedSandal Soap", price: 240, category: "Soaps", images: [RedSandalSoap] },
  { id: 37, name: "Rose Soap", price: 240, category: "Soaps", images: [RoseSoap] },

  // { id: 38, name: "Classic Leather Wallet", price: 699, category: "Wallet Crates", images: [loading] },
  // { id: 39, name: "Vintage Leather Wallet", price: 699, category: "Wallet Crates", images: [loading] },
  // { id: 40, name: "Slim RFID Wallet", price: 699, category: "Wallet Crates", images: [loading] },
  // { id: 41, name: "Executive Leather Wallet", price: 699, category: "Wallet Crates", images: [loading] },

  // { id: 42, name: "Insulated Steel Bottle", price: 799, category: "Bottles", images: [loading] },
  // { id: 43, name: "Frosted Glass Water Bottle", price: 899, category: "Bottles", images: [loading] },
  // { id: 44, name: "Smart Temperature Bottle", price: 999, category: "Bottles", images: [loading] },
  // { id: 45, name: "Eco-Friendly Bamboo Bottle", price: 799, category: "Bottles", images: [loading] },

  // { id: 46, name: "Luxury Perfume Set", price: 399, category: "Fragrances", images: [loading] },
  // { id: 47, name: "Mystic Oud Fragrance", price: 399, category: "Fragrances", images: [loading] },
  // { id: 48, name: "Floral Bliss Perfume", price: 399, category: "Fragrances", images: [loading] },
  // { id: 49, name: "Woody Musk Essence", price: 399, category: "Fragrances", images: [loading] },

  // { id: 50, name: "Strategy Board Game", price: 399, category: "Board Games", images: [loading] },
  // { id: 51, name: "Classic Chess Set", price: 399, category: "Board Games", images: [loading] },
  // { id: 52, name: "Fast-Paced Card Game", price: 399, category: "Board Games", images: [loading] },
  // { id: 53, name: "Trivia Challenge Game", price: 399, category: "Board Games", images: [loading] },

  // { id: 54, name: "Premium Leather Belt", price: 699, category: "Leather Belts", images: [loading] },
  // { id: 55, name: "Vintage Brown Leather Belt", price: 699, category: "Leather Belts", images: [loading] },
  // { id: 56, name: "Formal Black Leather Belt", price: 699, category: "Leather Belts", images: [loading] },
  // { id: 57, name: "Casual Suede Leather Belt", price: 699, category: "Leather Belts", images: [loading] },


  { id: 1, name: "Dancing Girl - Mirror", price: 299, category: "Beauty Mirrors", images: [dancingGirl] },
  { id: 2, name: "Elephant - Mirror", price: 399, category: "Beauty Mirrors", images: [elephant] },
  { id: 3, name: "Feather - Blue - Mirror", price: 349, category: "Beauty Mirrors", images: [featherBlue] },
  { id: 4, name: "Feather - Green - Mirror", price: 199, category: "Beauty Mirrors", images: [featherGreen] },
  { id: 5, name: "Feather - Multicolour - Mirror", price: 249, category: "Beauty Mirrors", images: [featherMulticolour] },
  { id: 6, name: "Feather - Violet - Mirror", price: 299, category: "Beauty Mirrors", images: [featherViolet] },
  { id: 7, name: "Feather - Violet Yellow - Mirror", price: 349, category: "Beauty Mirrors", images: [featherVioletYellow] },
  { id: 8, name: "Hand - Mirror", price: 199, category: "Beauty Mirrors", images: [hand] },
  { id: 9, name: "Have A Good Time - Mirror", price: 249, category: "Beauty Mirrors", images: [haveAGoodTime] },
  { id: 10, name: "I Love Unicorn - Mirror", price: 299, category: "Beauty Mirrors", images: [iLoveUnicorn] },
  { id: 11, name: "Peacocks - Beige - Mirror", price: 349, category: "Beauty Mirrors", images: [peacocksBeige] },
  { id: 13, name: "Sleeptune - Mirror", price: 249, category: "Beauty Mirrors", images: [sleeptune] },
  { id: 15, name: "Teddy - Black - Mirror", price: 349, category: "Beauty Mirrors", images: [teddyBlack] },
  { id: 16, name: "Teddy - Blue - Mirror", price: 199, category: "Beauty Mirrors", images: [teddyBlue] },
  { id: 17, name: "Unicorn - Blue - Mirror", price: 249, category: "Beauty Mirrors", images: [unicornBlue] },
  { id: 18, name: "Unicorn - Magico - Mirror", price: 299, category: "Beauty Mirrors", images: [unicornMagico] },

  { id: 20, name: "Scented Candle", price: 299, category: "Gifting", images: [candle] },
  { id: 21, name: "Luxury Chocolates", price: 399, category: "Gifting", images: [chocolates] },
  { id: 22, name: "Personalized Mug", price: 349, category: "Gifting", images: [mug] },
  { id: 23, name: "Mini Photo Frame", price: 199, category: "Gifting", images: [frame] },
  { id: 24, name: "Handmade Soap", price: 249, category: "Gifting", images: [soap] },
  { id: 25, name: "Leather Keychain", price: 299, category: "Gifting", images: [keychain] },

];

const occasionCards = [
  { id: 1, name: "Birthday", image: birthday },
  { id: 2, name: "Anniversary", image: anniversary },
  { id: 3, name: "Congratulations", image: congratulations },
  { id: 4, name: " With Love", image: love }

];
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

const StepsContainer = styled.p`
  background:rgb(78, 34, 104);
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 16px;
`;
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
  
`;

const SubText = styled.span`
  display: block;
  font-size: 16px;
  color:rgb(246, 240, 240);
  margin-top: 5px;
  font-size: 16px;
`;
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





const MysticGiftingBox = () => {
  const [selectedBox, setSelectedBox] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isViewBoxOpen, setIsViewBoxOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const handleSort = (option) => {
    setSortBy(option);
  };

  // Apply Sorting
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    if (sortBy === "nameAZ") return a.name.localeCompare(b.name);
    if (sortBy === "nameZA") return b.name.localeCompare(a.name);
    return 0;
  });

    // Function to filter products
    const filteredProducts = filter === "All" ? sortedProducts : sortedProducts.filter((p) => p.category === filter);

      const navigate = useNavigate();

  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (selectedItems.length === 0) return;
  
    const selectedProducts = selectedItems.map(item => `${item.name} - ₹${item.price}`).join(", ");
    const templateParams = {
      occasion: selectedOccasion?.name || "None",
      selected_items: selectedProducts,
      total_price: 999,
    };
  
    console.log("Sending email with:", templateParams);
  
    emailjs
      .send('service_66e2uo9', 'template_ndb777t', templateParams, 'b5F6NgNmYXKTreTna')
      .then(() => {
        window.location.href = "/payment-Gateway-issue"; // Change to actual checkout link
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send customization details. Please try again.");
      });
  };
  
  const handleSelectOccasion = (occasion) => {
    setSelectedOccasion(occasion);
  };

  const handleSelect = (product) => {
    if (selectedItems.length < 5 && !selectedItems.some(item => item.id === product.id)) {
      setSelectedItems((prev) => [...prev, product]);
    }
  };  

  const handleRemove = (id) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));
  };
  const toggleSelection = (productId) => {
     // Ensure gift card is selected first
    setSelectedItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : prev.length < 5
        ? [...prev, productId]
        : prev
    );
  };

  

  return (
    <Container>
       <Banner>
       <BackButton onClick={() => navigate(-1)}> ← Back </BackButton>
       <OfferBox>
      <OfferText>Buy 5 @ ₹ 999</OfferText>
      <SubText>+ A greeting card free</SubText>
      </OfferBox>
      </Banner>

      {!selectedBox ? (
        <>
          <h3>Select Your Gifting Box</h3>
          <Card onClick={() => setSelectedBox(true)}>
          <Image src={boxImage} alt="Mystic Gifting Box" />
            <h3>Mystic Gifting Box @ ₹999</h3>
            <Button>Select</Button>
          </Card>
        <StepsContainer>
        <p><strong>Step 1:</strong> Select Your Gifting Box.</p>
        <p><strong>Step 2:</strong> Select an Occasion Card.</p>
        <p><strong>Step 3:</strong> Add any 5 products to your box.</p>
        <p><strong>Step 4:</strong> Click "Buy Now" to proceed.</p>
        </StepsContainer>  
        </>
      ) :!selectedOccasion ? (
        <>
          <h3>Select an Occasion Card to begin</h3>
          <Grid>
            {occasionCards.map((occasion) => (
              <Card key={occasion.id} onClick={() => handleSelectOccasion(occasion)}>
                <Image src={occasion.image} alt={occasion.name} />
                <h3>{occasion.name}</h3>
              </Card>
            ))}
          </Grid>
        </>
      ) : (
        <>

       {/* Fixed Header (Offer Text + Sort By) */}
    <FixedHeader>
      <OfferText>Buy 5 @ ₹ 999</OfferText>

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
        {["All", "Beauty Mirrors", "Books and Novels", "Handmade-Soaps", "Gifting"].map((category) => (
          <FilterButton key={category} active={filter === category} onClick={() => setFilter(category)}>
            {category}
          </FilterButton>
        ))}
      </FilterBar>
    </FilterWrapper>
        
        <Grid>
        {filteredProducts.map((product) => (
          <Card key={product.id} onClick={() => toggleSelection(product.id)}>
            <Image src={product.images[0]} alt={product.name} />
            <ItemTitle>{product.name}</ItemTitle>
            <Price>₹{product.price}</Price>
            {selectedItems.some((item) => item.id === product.id) ? (
              <Button onClick={(e) => { e.stopPropagation(); handleRemove(product.id); }}>Remove</Button>
            ) : (
              <Button onClick={(e) => { e.stopPropagation(); handleSelect(product); }} disabled={selectedItems.length >= 5}>
                Add to Box
              </Button>
            )}
          </Card>
        ))}
         <FixedBar>
         <ProgressContainer>
        <p>Add {Math.max(0, 5 - selectedItems.length)} more items to unlock Buy Any 5 @ ₹999</p>
        <ProgressBar>
          <ProgressFill progress={(selectedItems.length / 5) * 100} />
        </ProgressBar>
      </ProgressContainer>
      {/* <FinalPrice>Total ₹999</FinalPrice> */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <ViewBoxButton onClick={() => setIsViewBoxOpen(true)}>View Box</ViewBoxButton>
      <BuyButton onClick={sendEmail}
      style={{ background: selectedItems.length === 5 ? "orange" : "white",}}disabled={selectedItems.length !== 5}> Buy Now
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
                  {item.name}
                  <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
                </SelectedItem>
              ))
            )}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <CloseButton onClick={() => setIsViewBoxOpen(false)}>Hide Box</CloseButton>
             <BuyButton onClick={sendEmail}
              style={{ background: selectedItems.length === 5 ? "orange" : "white",}}disabled={selectedItems.length !== 5}> Buy Now
            </BuyButton> 
            </div>

          </ModalContent>
        </ModalOverlay>
      )} 
      <Footer/>
      </>    
        
      )}
     
    </Container>
  );
};

export default MysticGiftingBox;