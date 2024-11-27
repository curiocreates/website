import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for Navbar
const Nav = styled.nav`
  display: flex;
  height:50px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #4B0082;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const Logo = styled.h1`
  font-size: 30px;
  color: #FFD700;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #FFD700;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #4B0082;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);

    a {
      font-size: 1rem;
      padding: 10px 0;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: #FFD700;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Navbar Component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Nav>
      <Logo>Curiocrates</Logo>
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavLinks isOpen={menuOpen}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#boxes" onClick={() => setMenuOpen(false)}>Boxes</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
