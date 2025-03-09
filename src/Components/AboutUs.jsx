import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: rgb(255, 255, 255);
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #4B0082;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 800px;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 40px;
`;

const Highlight = styled.span`
  color: #40E0D0;
  font-weight: bold;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
  text-align: center;
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #000000;
`;

const ImageContainer = styled.div`
  margin-top: 30px;
  max-width: 100%;
  height: 300px;
  background-color:#40E0D0;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <Title>✨🔮 Discover the Magic of Curiocrates! 🔮✨</Title>
      <Description>
        Welcome to <Highlight>Curiocrates</Highlight>, where we bring fun, surprises, and creativity together! We specialize in <strong>premium mystery boxes</strong>, filled with exciting and unique products that are sure to put a smile on your face. Each box contains surprises worth much more than what you pay, making every unboxing a thrilling experience!
      </Description>

      <Title>🎁 Our Mystery Boxes:</Title>
      <List>
        <ListItem><strong>Classic Treasure Chest Box - ₹299:</strong>Explore hidden surprises and cool treasures.</ListItem>
        <ListItem><strong>Ultimate Surprise Box - ₹499:</strong> Enjoy the excitement of unexpected goodies.</ListItem>
        <ListItem><strong>Gold Premium Box - ₹999:</strong> Feel special with luxurious surprises inside.</ListItem>
        <ListItem><strong>Exclusive Custom Box - ₹1499:</strong> A box designed just for you, with your favorite items!</ListItem>
        <ListItem><strong>Premium Enigma Box - ₹2999:</strong> The ultimate box, packed with extraordinary items you won’t find anywhere else.</ListItem>
      </List>

      <Description>
        At <Highlight>Curiocrates</Highlight>, we believe that the joy of opening a mystery box is a treasure on its own. Every box is carefully put together to spark your curiosity and make you smile. Whether you're treating yourself or gifting someone, our boxes bring endless fun and unforgettable moments.
      </Description>

      <Title>🕵️‍♂️ Carefully Curated Surprises:</Title>
      <Description>
        Our team picks the best products to include in every box, from everyday items to rare treasures. Every product is chosen to make your experience exciting and leave you wanting more!
      </Description>

      <Title>🛒 Ready for Your Adventure? ✨</Title>
      <Description>
        Join us at <Highlight>Curiocrates</Highlight>, where surprises await in every box! Explore our range today and start your own mystery adventure.
      </Description>

      <ImageContainer />
    </AboutContainer>
  );
};

export default AboutUs;
