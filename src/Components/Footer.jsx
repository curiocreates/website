import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; // Icons for Instagram and Gmail

const FooterContainer = styled.footer`
  background-color: #2c2f3d;
  color: #f1f1f1;
  text-align: center;
  padding: 4rem 2rem;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const FooterHeading = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #FFD700;
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #f1f1f1;
`;

const SocialLinks = styled.div`
  margin: 2rem 0;
  font-size: 2rem;

  a {
    color: #FFD700;
    margin: 0 1rem;
    text-decoration: none;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      color: #fff;
      transform: scale(1.2);
    }
  }
`;

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
      color: #40E0D0;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterHeading>Curio Crates</FooterHeading>
        <FooterText>© {new Date().getFullYear()} Curio Crates. All Rights Reserved.</FooterText>
      </div>

      <SocialLinks>
        <a href="https://www.instagram.com/curio_crates?igsh=MW9qemx5YWtkaHRtZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:curiocratessurprises@gmail.com">
          <FaEnvelope />
        </a>
      </SocialLinks>

      <ContactSection>
        <h4>Contact Us</h4>
        <FooterText>Merchant Name: Raghavendra Palaparthi</FooterText>
        <FooterText>Registered Address: 6-72/1, Indhira nagar first lane, Annojiguda, K.V. Rangareddy district, Hyderabad, Telangana, PIN: 500088</FooterText>
        <FooterText>Telephone No: <a href="tel:8328413800">8328413800</a></FooterText>
        <FooterText>E-Mail: <a href="mailto:curiocratescustomization@gmail.com">curiocratescustomization@gmail.com</a></FooterText>
        <FooterText>Instagram: <a href="https://www.instagram.com/curio_crates?igsh=MW9qemx5YWtkaHRtZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">curio_crates <FaInstagram /></a></FooterText>
      </ContactSection>
    </FooterContainer>
  );
};

export default Footer;
