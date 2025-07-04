import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/HeroSection';
import BoxesSection from './Components/BoxCard';
import Footer from './Components/Footer';
import QuickLinks from './Components/Quicklinks';
import AboutUs from './Components/AboutUs'; // About Us page component
import QuickQuiz from './Components/QuickQuiz'; // Quick Quiz component
import TermsAndConditions from './Components/TermsAndConditions'; // Terms and Conditions page
import { AppContainer } from './AppStyles';
import AboutBox from './Components/AboutBox'; // AboutBox component for each box detail
import PaymentSuccess from './Components/PaymentSuccess'; // Import the PaymentSuccess component
import RefundPolicy from './Components/RefundAndCancellationsPolicy';
import PrivacyPolicy from './Components/PrivacyPolicy'; // Import PrivacyPolicy component
import ShippingAndExchange from './Components/ShippingAndExchange'; // Import ShippingAndExchange component
import CustomizeBoxPage from './Components/CustomizeBoxPage';
import ValentineBoxesSection from "./Components/ValentineBoxesSection";
import ValentineBoxDetail from "./Components/ValentineBoxDetail";
import MysticGiftingBox from './Components/MysticGiftingBox';
import PaymentIssueNotice from './Components/PaymentIssueNotice';
import WalletCrateDetail from './Components/WalletCrateDetail';
import WalletCrateSection from './Components/WalletCrateSection';

import AnimeLovers from './Components/AnimeLovers';
import Explorenow from './Components/Explorenow';

import WhatsAppButton from './Components/WhatAppButton';
import ShippingForm from './Components/ShippingForm';


// Array of boxes with details
const boxes = [
  {
    title: 'Treasure Chest Box',
    description: 'A chest full of surprises!',

    des:'The Classic Treasure Chest Box is packed with exciting and valuable surprises that are worth way more than the price! ',
    des2:'For just ₹299, you will find 3-4 amazing items that will surprise and delight you.',
    
    ulh:'Inside, you’ll get: ',
    ph1:'Cool Gadgets: ',
    ph2:'Collectible Trinkets: ',
    ph3:'Fun Accessories: ',
    ph4:'Surprise Goodies: ',

    p1:'Useful and fun gadgets that you didn’t even know you needed.',
    p2:'Small, unique items that are perfect for your collection.',
    p3:'Items like keychains, stickers, or small toys to add a touch of fun to your day.',
    p4:'A few hidden treasures that will make you smile.',

    des3:'We’ve carefully selected each item to give you more value than what you paid for! Whether you’re treating yourself or giving it as a gift, this box is a fun adventure waiting to happen.',
    
  },
  {
    title: 'Ultimate Surprise Box',
    description: 'The ultimate thrill of mystery.',
    des:'Get Ready for the Ultimate Thrill – More Than Just Surprises!',
    des2:'For just ₹499, the Ultimate Surprise Box brings you 3-4 awesome items that will make your day! Each box is packed with unexpected goodies that are sure to excite and delight.',

    ulh:'Inside, you’ll find:',
    ph1:'Fun Gadgets: ',
    ph2:'Cool Accessories: ',
    ph3:'Unique Collectibles: ',
    ph4:'Mystery Surprises: ',

    p1:'Practical and exciting gadgets that you’ll use daily.',
    p2:'Trendy items like sunglasses, wristbands, or phone accessories.',
    p3:'Special items that add a fun touch to your collection.',
    p4:'Hidden gems that will leave you guessing and excited.',
      
    
  },
  {
    title: 'Gold Premium Box',
    description: 'Elegance meets mystery.',
    des:'For ₹999, the Gold Premium Box is packed with luxurious and high-end surprises that will make you feel special! Inside this box.',
    des2:'you will find 3-4 premium items that are as exciting as they are luxurious.',

    ulh:'What’s inside:',
    ph1:'High-End Gadgets: ',
    ph2:'Luxury Accessories: ',
    ph3:'Exclusive Collectibles: ',
    ph4:'Surprise Luxuries: ',

    p1:'Quality electronics and gadgets to elevate your lifestyle.',
    p2:'Elegant items like watches, jewelry, or premium bags.',
    p3:'Rare, high-quality items that are perfect for collectors.',
    p4:'Items that are perfect for pampering yourself or gifting someone who deserves the best.',
    
  },
  {
    title: 'Exclusive Custom Box',
    description: 'Personalized just for you.',
    des:'For ₹1499, the Exclusive Custom Box is all about YOU! This box is uniquely designed with your preferences in mind.',
    des2:'so you get 3-4 items that you will absolutely love.',

    ulh:'Inside, you’ll find:',
    ph1:'Personalized Items: ',
    ph2:'Exclusive Collectibles: ',
    ph3:'Special Surprises: ',
    ph4:'Curated Gifts: ',

    p1:'Things that match your style and interests, chosen just for you.',
    p2:'Rare items that are handpicked based on your preferences.',
    p3:'Fun and thoughtful goodies that you’ll enjoy every day.',
    p4:'Items that make the box feel like a special gift made just for you.',

  },
  {
    title: 'Premium Enigma Box',
    description: 'The enigma awaits.',
    des:'For ₹2999, the Premium Enigma Box is packed with extraordinary and rare items that you won’t find anywhere else.',
    des2:'Inside, you’ll get 3-4 jaw-dropping surprises that will leave you speechless!',

    ulh:'Rare Collectibles:',
    ph1:'Luxury Gadgets: ',
    ph2:'Exclusive Collectibles: ',
    ph3:'Special Surprises: ',
    ph4:'Exclusive Treasures: ',

    p1:'Unique items that are hard to find and perfect for collectors.',
    p2:'High-quality gadgets that offer a premium experience.',
    p3:'Items that are mysterious and exciting, adding to the thrill of unboxing.',
    p4:'One-of-a-kind items that make this box truly special.',
   
  },
];

function App() {
  const [showQuiz, setShowQuiz] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuiz(false);
    }, 200000); // 5 minutes

    return () => clearTimeout(timer);
  }, []);

  const closeQuiz = () => {
    setShowQuiz(false);
  };

  return (
    <Router>
      <AppContainer>
        <Navbar />


        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* {showQuiz && <QuickQuiz closeQuiz={closeQuiz} />} */}
                <Hero />
                <Explorenow />
                {/* <BoxesSection boxes={boxes} /> */}
                <Footer />
              </>
            }
          />
          <Route path="/Home" element={<Hero />} />
          <Route path="/Contact" element={<Footer />} />
          <Route path="/Curiocrates" element={<Hero />} />
          <Route path="/Boxes" element={<BoxesSection boxes={boxes} />} />
          <Route path="/customize-box/:index" element={<CustomizeBoxPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/refunds" element={<RefundPolicy />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-and-exchange" element={<ShippingAndExchange />} />
          <Route path="/customize/:index" element={<CustomizeBoxPage />} />
          <Route path="/about-box/:title" element={<AboutBox boxes={boxes} />} />
          <Route path="/valentine-boxes" element={<ValentineBoxesSection />} />
          <Route path="/valentine-box/:id" element={<ValentineBoxDetail />} />
          <Route path="/Leather-Wallets" element={<WalletCrateSection />} />
          <Route path="/Leather-Wallets/:id" element={<WalletCrateDetail />} />
          <Route path="/MysticGiftingBox" element={<MysticGiftingBox />} />
          <Route path="/payment-Gateway-issue" element={<PaymentIssueNotice />} />
          <Route path="/AnimeLovers" element={<AnimeLovers />} />
          <Route path="/Explorenow" element={<Explorenow />} />
          <Route path="/Deliverydetails" element={<ShippingForm/>} />
        </Routes>
      </AppContainer>
      
        {/* QuickLinks appears on every page */}
        <WhatsAppButton />
        <QuickLinks />
    </Router>
    
  );
}


export default App;