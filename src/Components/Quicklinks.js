import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinksContainer = styled.div`
  background-color: #2c2f3d;
  padding: 2rem 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;

  h4 {
    font-size: 1.3rem;
    color: #FFD700;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }

  a {
    color: #f1f1f1;
    margin: 0.5rem 1rem;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #40E0D0;
    }
  }
`;



const QuickLinks = () => {
  return (
    <LinksContainer>
      <h4>Quick Links</h4>
      <Link to="/">Home</Link>
      <Link to="/Boxes">Boxes</Link>
      <Link to="/Contact">Contact Us</Link>
      <Link to="/about">About Us</Link>
      <Link to="/terms">Terms and Conditions</Link>
      <Link to="/refunds">Refund and Cancellations Policy</Link>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/shipping-and-exchange">Shipping and Exchange Policy</Link>
    </LinksContainer>
  );
};

export default QuickLinks;
