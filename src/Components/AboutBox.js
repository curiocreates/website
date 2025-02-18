import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// Example styled components
const Section = styled.section`
  padding: 0rem 2rem;
  text-align: center;
  background-color: #f4f4f4;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #4B0082;
  margin-bottom: 1rem;
`;

const UlHeading =styled.p`
  font-size: 1.1rem;
  color: #4B0082;

`

const Eachhead =styled.span`
  font-size: 1.1rem;
  color: #4B0082;
  margin-bottom:10px;

`

const EachP =styled.span`
    font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
`
const UlDiv =styled.div`
   display:flex;
   flex-direction:column;
   align-item:start;
`
const Content = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 0rem;
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
      <Content>{boxDetails.des || boxDetails.description}
        <p>{boxDetails.price}</p>
        
      </Content>

      <Content>{boxDetails.des2}</Content>

      <UlHeading>{boxDetails.ulh}</UlHeading>
      <UlDiv>
      <Eachhead>{boxDetails.ph1}<EachP>{boxDetails.p1}</EachP></Eachhead>
      <Eachhead>{boxDetails.ph2}<EachP>{boxDetails.p2}</EachP></Eachhead>
      <Eachhead>{boxDetails.ph3}<EachP>{boxDetails.p3}</EachP></Eachhead>
      <Eachhead>{boxDetails.ph4}<EachP>{boxDetails.p4}</EachP></Eachhead>
      </UlDiv>

      <Content>{boxDetails.des3}</Content>

    </Section>
  );
};

export default AboutBox;