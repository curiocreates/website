import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/HeroSection';
import BoxesSection from './Components/BoxCard';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
//import ShippingForm from './Components/ShippingForm';
import { AppContainer } from './AppStyles';

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <BoxesSection />
                <Footer />
              </>
            } 
          />
          {/* Shipping Form Page */}
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Home" element={<Hero />} />
          <Route path="/Contact" element={<Footer />} />
          <Route path="/Curiocrates" element={<Hero />} />
          <Route path="/Boxes" element={<BoxesSection />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
