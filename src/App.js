import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/HeroSection';
import BoxesSection from './Components/BoxCard';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import AboutUs from './Components/AboutUs'; // About Us page component
import QuickQuiz from './Components/QuickQuiz'; // Quick Quiz component
import TermsAndConditions from './Components/TermsAndConditions'; // Terms and Conditions page
import { AppContainer } from './AppStyles';
import AboutBox from './Components/AboutBox'; // AboutBox component for each box detail

// Array of boxes with details
const boxes = [
  {
    title: 'Treasure Chest Box',
    description: 'A chest full of surprises!',
    longDescription: `
      **Classic Treasure Chest Box - ₹299**  
      *A Box Full of Fun Surprises – More Value Than ₹299!*

      The Classic Treasure Chest Box is packed with exciting and valuable surprises that are worth way more than the price! For just ₹299, you'll find 3-4 amazing items that will surprise and delight you.

      Inside, you’ll get:
      - **Cool Gadgets**: Useful and fun gadgets that you didn’t even know you needed.
      - **Collectible Trinkets**: Small, unique items that are perfect for your collection.
      - **Fun Accessories**: Items like keychains, stickers, or small toys to add a touch of fun to your day.
      - **Surprise Goodies**: A few hidden treasures that will make you smile.

      We’ve carefully selected each item to give you more value than what you paid for! Whether you’re treating yourself or giving it as a gift, this box is a fun adventure waiting to happen.
    `
  },
  {
    title: 'Ultimate Surprise Box',
    description: 'The ultimate thrill of mystery.',
    longDescription: `
      **Ultimate Surprise Box - ₹499**  
      *Get Ready for the Ultimate Thrill – More Than Just Surprises!*

      For just ₹499, the Ultimate Surprise Box brings you 3-4 awesome items that will make your day! Each box is packed with unexpected goodies that are sure to excite and delight.

      Inside, you’ll find:
      - **Fun Gadgets**: Practical and exciting gadgets that you’ll use daily.
      - **Cool Accessories**: Trendy items like sunglasses, wristbands, or phone accessories.
      - **Unique Collectibles**: Special items that add a fun touch to your collection.
      - **Mystery Surprises**: Hidden gems that will leave you guessing and excited.
    `
  },
  {
    title: 'Gold Premium Box',
    description: 'Elegance meets mystery.',
    longDescription: `
      **Gold Premium Box - ₹999**  
      *Experience Luxury and Excitement – Worth Every Penny!*

      For ₹999, the Gold Premium Box is packed with luxurious and high-end surprises that will make you feel special! Inside this box, you'll find 3-4 premium items that are as exciting as they are luxurious.

      What’s inside:
      - **High-End Gadgets**: Quality electronics and gadgets to elevate your lifestyle.
      - **Luxury Accessories**: Elegant items like watches, jewelry, or premium bags.
      - **Exclusive Collectibles**: Rare, high-quality items that are perfect for collectors.
      - **Surprise Luxuries**: Items that are perfect for pampering yourself or gifting someone who deserves the best.
    `
  },
  {
    title: 'Exclusive Custom Box',
    description: 'Personalized just for you.',
    longDescription: `
      **Exclusive Custom Box - ₹1499**  
      *A Box Made Just for You – The Ultimate Personalized Experience!*

      For ₹1499, the Exclusive Custom Box is all about YOU! This box is uniquely designed with your preferences in mind, so you get 3-4 items that you will absolutely love.

      Inside, you’ll find:
      - **Personalized Items**: Things that match your style and interests, chosen just for you.
      - **Exclusive Collectibles**: Rare items that are handpicked based on your preferences.
      - **Special Surprises**: Fun and thoughtful goodies that you’ll enjoy every day.
      - **Curated Gifts**: Items that make the box feel like a special gift made just for you.
    `,
  },
  {
    title: 'Premium Enigma Box',
    description: 'The enigma awaits.',
    longDescription: `
      **Premium Enigma Box - ₹2999**  
      *The Ultimate Mystery Experience – Worth Every Penny!*

      For ₹2999, the Premium Enigma Box is packed with extraordinary and rare items that you won’t find anywhere else. Inside, you’ll get 3-4 jaw-dropping surprises that will leave you speechless!

      Inside the box:
      - **Rare Collectibles**: Unique items that are hard to find and perfect for collectors.
      - **Luxury Gadgets**: High-quality gadgets that offer a premium experience.
      - **Special Surprises**: Items that are mysterious and exciting, adding to the thrill of unboxing.
      - **Exclusive Treasures**: One-of-a-kind items that make this box truly special.
    `
  },
];

function App() {
  // State to control quiz visibility
  const [showQuiz, setShowQuiz] = useState(true);

  // Set timer to automatically close quiz after 5 minutes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuiz(false);
    }, 300000); // 5 minutes

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Function to close quiz manually
  const closeQuiz = () => {
    setShowQuiz(false);
  };

  return (
    <Router>
      <AppContainer>
        {/* Show QuickQuiz if enabled */}
        {showQuiz && <QuickQuiz closeQuiz={closeQuiz} />}
        
        {/* Navbar always visible */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          {/* Home Page */}
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <BoxesSection boxes={boxes} /> {/* Pass the boxes array to BoxesSection */}
                <Footer />
              </>
            } 
          />
          
          {/* Contact Form Page */}
          <Route path="/ContactForm" element={<ContactForm />} />

          {/* Other routes */}
          <Route path="/Home" element={<Hero />} />
          <Route path="/Contact" element={<Footer />} />
          <Route path="/Curiocrates" element={<Hero />} />
          <Route path="/Boxes" element={<BoxesSection boxes={boxes} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />

          {/* Dynamic AboutBox page for each box */}
          <Route path="/about-box/:title" element={<AboutBox boxes={boxes} />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
