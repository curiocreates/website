import React from 'react';
import styled from 'styled-components';

const PolicyContainer = styled.div`
  padding: 2rem;
  background-color: #ffffff;
  color: #4B0082;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
`;

const Title = styled.h1`
  text-align: center;
  color: #FFD700;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  color: #40E0D0;
  margin-top: 1rem;
`;

const Paragraph = styled.p`
  margin: 0.5rem 0;
`;

const ShippingAndExchange = () => {
  return (
    <PolicyContainer>
      <Title>Shipping and Exchange Policy</Title>

      <SectionTitle>1. Shipping Policy</SectionTitle>
      <Paragraph>We offer delivery across India. Shipping costs are calculated at checkout based on your delivery location. Orders are shipped within 2-5 business days. Delivery times may vary depending on your location and the courier service.</Paragraph>

      <SectionTitle>2. Order Tracking</SectionTitle>
      <Paragraph>Once your order has been dispatched, you will receive an email with a tracking number and a link to track your package.</Paragraph>

      <SectionTitle>3. Shipping Costs</SectionTitle>
      <Paragraph>Shipping fees are calculated at checkout based on your location. We offer free shipping during certain promotions, which will be clearly mentioned at checkout.</Paragraph>

      <SectionTitle>4. Exchange and Return Policy</SectionTitle>
      <Paragraph>We accept exchanges or returns only for defective or damaged items. If you receive a defective product, please contact us within 3 days of receiving your order to initiate a return or exchange.</Paragraph>

      <SectionTitle>5. Non-Returnable Items</SectionTitle>
      <Paragraph>Due to the nature of our mystery boxes, we cannot accept returns or exchanges for non-defective items unless they are unopened and unused.</Paragraph>

      <SectionTitle>6. Cancellation Policy</SectionTitle>
      <Paragraph>Orders cannot be canceled once placed, as they are processed immediately. In exceptional cases, cancellations may be considered if the product has not been shipped. Please contact us at <strong>curiocratessurprises@gmail.com</strong> for such cases.</Paragraph>
    </PolicyContainer>
  );
};

export default ShippingAndExchange;
