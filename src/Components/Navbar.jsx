import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


// Styled components for Navbar
const Nav = styled.nav`
  display: flex;
  height: 60px;
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
  font-family: 'Cinzel Decorative', cursive;
  color: #FFD700;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #FFD700;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #40E0D0; /* Turquoise hover */
    }
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
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);

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
    transition: all 0.3s ease;
  }

  /* Hamburger animation */
  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Navbar Component
const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // if (location.pathname === "/MysticGiftingBox") {
  //   return null;
  // }

  return (
    <Nav>
      <Logo>
        <Link to="/" onClick={closeMenu}>Curiocrates</Link>
      </Logo>
      <Hamburger onClick={toggleMenu} className={menuOpen ? 'open' : ''}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavLinks isOpen={menuOpen}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/Boxes" onClick={closeMenu}>Mystery-Boxes</Link>
        <Link to="/valentine-boxes" onClick={closeMenu}>Mystic Love-Boxes</Link>
        <Link to="/MysticGiftingBox" onClick={closeMenu}>Mystic Gifting-Boxes</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
        <Link to="/Contact" onClick={closeMenu}>Contact Us</Link>
        <Link to="/terms" onClick={closeMenu}>Terms and Conditions</Link>

      </NavLinks>
    </Nav>
  );
};

export default Navbar;