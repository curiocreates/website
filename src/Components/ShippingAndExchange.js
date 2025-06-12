import React from 'react';
import styled from 'styled-components';

const PolicyContainer = styled.div`
  padding: 2rem;
  background-color: #ffffff;
  color: #333333;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
`;

const Title = styled.h1`
  text-align: center;
  color: #222222;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  color: #4B0082; /* Standard link/nav blue */
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  margin: 0.5rem 0;
`;

const Email = styled.strong`
  color: #4B0082;
`;

const ShippingAndExchange = () => {
  return (
    <PolicyContainer>
      <Title>Shipping and Exchange Policy</Title>

      <SectionTitle>1. Shipping Policy</SectionTitle>
      <Paragraph>
        We offer delivery across India for all our boxes, including mystery boxes, anime boxes, love boxes, gifting boxes, and wallet crates.
        Shipping costs are calculated at checkout based on your delivery location.
        Orders are shipped within 3–5 business days. Delivery times may vary depending on your location and the courier service.
      </Paragraph>

      <SectionTitle>2. Order Tracking</SectionTitle>
      <Paragraph>
        Once your order has been dispatched, you will receive an email with a tracking number and a link to track your package.
      </Paragraph>

      <SectionTitle>3. Shipping Costs</SectionTitle>
      <Paragraph>
        Shipping fees are calculated at checkout based on your location.
        We offer free shipping during select promotions, which will be clearly mentioned during checkout.
      </Paragraph>

      <SectionTitle>4. Exchange and Return Policy</SectionTitle>
      <Paragraph>
        We accept exchanges or returns only for defective or damaged items.
        If you receive a defective product, please contact us within 3 days of receiving your order to initiate a return or exchange.
      </Paragraph>

      <SectionTitle>5. Non-Returnable Items</SectionTitle>
      <Paragraph>
        Due to the surprise nature of our boxes, including mystery, anime, love, gifting boxes, and wallet crates,
        we cannot accept returns or exchanges for non-defective items unless they are unopened and unused.
      </Paragraph>

      <SectionTitle>6. Cancellation Policy</SectionTitle>
      <Paragraph>
        Orders cannot be canceled once placed, as they are processed immediately.
        In exceptional cases, cancellations may be considered if the product has not been shipped.
        Please contact us at <Email>curiocratessurprises@gmail.com</Email> for such requests.
      </Paragraph>
    </PolicyContainer>
  );
};

export default ShippingAndExchange;
