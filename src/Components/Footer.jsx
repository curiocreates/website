import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importing React Icons for Instagram and Gmail
import { Link } from 'react-router-dom';

// Styling for the footer container
const FooterContainer = styled.footer`
  background-color: #2c2f3d; /* Darker background for a more professional feel */
  color: #f1f1f1; /* Light text color */
  text-align: center;
  padding: 4rem 2rem; /* Increased padding for a spacious footer */
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for separation */

  @media (max-width: 768px) {
    padding: 3rem 1rem; /* Adjust padding for mobile */
  }
`;

// Styling for the footer heading and paragraph
const FooterHeading = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #FFD700;
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #f1f1f1; /* Light text color */
`;

// Styling for the social media links
const SocialLinks = styled.div`
  margin: 2rem 0;
  font-size: 2rem; /* Adjust icon size */
  
  a {
    color: #FFD700; /* Gold color for icons */
    margin: 0 1rem;
    text-decoration: none;
    transition: transform 0.3s ease, color 0.3s ease;
    
    &:hover {
      color: #fff; /* Change icon color on hover */
      transform: scale(1.2); /* Slightly larger icon on hover */
    }
  }
`;

// Styling for the contact section
const ContactSection = styled.div`
  margin-top: 3rem;
  font-size: 1.1rem;
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #FFD700;
    font-weight: 500;
  }
  
  p {
    margin: 0.5rem 0;
  }
  
  a {
    color: #FFD700;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      color: #40E0D0; /* Turquoise hover effect */
    }
  }
`;

const QuickLinks = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid #444; /* Subtle divider line */
  padding-top: 2rem;

  h4 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #FFD700;
    width: 100%;
    text-align: center;
  }

  a {
    color: #f1f1f1;
    margin: 0.5rem 1rem;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #40E0D0; /* Turquoise hover effect */
    }
  }
`;

// Footer component
const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterHeading>Curio Crates</FooterHeading>
        <FooterText>© {new Date().getFullYear()} Curio Crates. All Rights Reserved.</FooterText>
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
      <ContactSection>
        <h4>Contact Us</h4>
        <FooterText>E-Mail: <a href="mailto:curiocratessurprises@gmail.com">curiocratessurprises@gmail.com</a></FooterText>
        <FooterText>Instagram: <a href="https://www.instagram.com/curio_crates?igsh=MW9qemx5YWtkaHRtZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          curio_crates <FaInstagram />
        </a></FooterText>
        <p> Annojiguda, Hyderabad-500088 </p>
      </ContactSection>

      <QuickLinks>
        <h4>Quick Links</h4>
        <Link to="/">Home</Link>
        <Link to="/Boxes">Boxes</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
        <Link to="/terms">Terms and Conditions</Link>
        <Link to="/refunds">Refund and Cancellations Policy</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/shipping-and-exchange">Shipping and Exchange Policy</Link>
      </QuickLinks>
    </FooterContainer>
  );
};

export default Footer;
