import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// Example styled components
const Section = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background-color: #f4f4f4;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #4B0082;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

const AboutBox = ({ boxes }) => {
  const { title } = useParams(); // Get title from the URL
  const boxDetails = boxes.find(box => box.title === title);

  // Check if boxDetails is found
  if (!boxDetails) {
    return <Content>Box not found</Content>;
  }

  return (
    <Section>
      <Title>{boxDetails.title}</Title>
      <Content>{boxDetails.longDescription || boxDetails.description}
        <p>{boxDetails.price}</p>
        
      </Content>
    </Section>
  );
};

export default AboutBox;
