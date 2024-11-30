import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/HeroSection';
import BoxesSection from './Components/BoxCard';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import AboutUs from './Components/AboutUs'; // Import the About Us component
import QuickQuiz from './Components/QuickQuiz'; // Import the QuickQuiz component
import TermsAndConditions from './Components/TermsAndConditions'; // Import the Terms and Conditions component
import { AppContainer } from './AppStyles';

function App() {
  const [showQuiz, setShowQuiz] = useState(true);

  useEffect(() => {
    // Optionally close the quiz automatically after 5 minutes
    const timer = setTimeout(() => {
      setShowQuiz(false);
    }, 300000); // 5 minutes

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const closeQuiz = () => {
    setShowQuiz(false); // Function to close the quiz
  };

  return (
    <Router>
      <AppContainer>
        {showQuiz && <QuickQuiz closeQuiz={closeQuiz} />} {/* Show QuickQuiz if enabled */}
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
          
          {/* About Us Page */}
          <Route path="/about" element={<AboutUs />} />
          
          {/* Terms and Conditions Page */}
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
