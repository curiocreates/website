import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/HeroSection';
import BoxesSection from './Components/BoxCard';
import Footer from './Components/Footer';
import { AppContainer } from './AppStyles';

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <BoxesSection />
      <Footer />
    </AppContainer>
  );
}

export default App;

