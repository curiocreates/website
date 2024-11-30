import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importing React Icons for Instagram and Gmail
import { Link } from 'react-router-dom';

// Styling for the footer container
const FooterContainer = styled.footer`
  background-color: #4B0082; /* Dark Purple background */
  color: #FFD700; /* Gold color for text */
  text-align: center;
  padding: 2rem 0;
`;

// Styling for the social media links
const SocialLinks = styled.div`
  margin: 1rem 0;
  font-size: 2rem; /* Increasing the size of icons */
  
  a {
    color: #FFD700; /* Gold color for icons */
    margin: 0 1rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff; /* Change icon color on hover */
    }
  }
`;

// Footer component
const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h3>Curio Crates</h3> {/* Display your store's name */}
        <p>© {new Date().getFullYear()} Curio Crates. All Rights Reserved.</p>
      </div>

      {/* Social media links with icons */}
      <SocialLinks>
        <a href="https://www.instagram.com/curio_crates?igsh=MW9qemx5YWtkaHRtZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> {/* Instagram icon */}
        </a>
        <a href="mailto:curiocratessurprises@gmail.com">
          <FaEnvelope /> {/* Gmail icon */}
        </a>
      </SocialLinks>

      {/* Contact details */}
      <div>
        <h4>Contact Us</h4>
        <p>E-Mail: curiocratessurprises@gmail.com</p>
        <p>Call us: loading...</p>
        <p>Whatsapp: Loading...</p>
        <p>Annojiguda, Hyderabad, 500088</p>
        <Link to="/terms" style={{ color: '#FFD700', textDecoration: 'none', marginTop: '1rem', display: 'inline-block' }}>
          Terms and Conditions
        </Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
