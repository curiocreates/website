import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation } from 'react-router-dom';

const StyledWhatsAppButton = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 1000;

  .icon-container {
    background-color: #25D366;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    i {
      color: white;
      font-size: 28px;
    }
  }

  .label {
    margin-top: 2px;
    font-size: 0.85rem;
    color: #ffffff;
    background-color: #4CAF50;
    padding: 3px 5px;
    border-radius: 12px;
    font-family: 'Cinzel Decorative', cursive;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    white-space: nowrap;
  }
`;

const WhatsAppButton = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const message = "Hey! I'm interested in your mystery boxes on Curiocrates.";
  const phone = "918143567802";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <StyledWhatsAppButton onClick={handleClick}>
      <div className="icon-container">
        <i className="fab fa-whatsapp"></i>
      </div>
      <div className="label">{isHomePage ? "Chat with us" : "Ping Us"}</div>
    </StyledWhatsAppButton>
  );
};

export default WhatsAppButton;
