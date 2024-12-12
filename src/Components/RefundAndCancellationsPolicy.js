import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
  padding: 2rem;
  background-color: #FFFFFF;
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

const RefundPolicy = () => {
  return (
    <TermsContainer>
      <Title>Refund and Cancellation Policy</Title>
      
      <SectionTitle>1. General Refund Policy</SectionTitle>
      <Paragraph>1.1. We do not offer refunds or exchanges for products purchased through the website, as the items are mystery boxes and their contents are unknown until opened.</Paragraph>
      <Paragraph>1.2. However, if you receive a damaged or defective product, please contact us within 3 days of receiving the order. We will either replace the product or issue a full refund for defective items.</Paragraph>
      
      <SectionTitle>2. Cancellation Policy</SectionTitle>
      <Paragraph>2.1. Orders once placed cannot be canceled, as the items are unique and prepared for shipment immediately after purchase.</Paragraph>
      <Paragraph>2.2. In case of any cancellation request, please reach out to our support team at curiocratessurprises@gmail.com. Cancellations may be considered only if the product has not yet been shipped or processed.</Paragraph>
      
      <SectionTitle>3. Payment Issues</SectionTitle>
      <Paragraph>3.1. In case of any payment-related issues, such as double charges, transaction failures, or other payment discrepancies, please report them immediately to Cashfree's customer support or contact our team at curiocratessurprises@gmail.com for assistance.</Paragraph>
      <Paragraph>3.2. If a payment fails due to an error from our end, we will investigate the matter and process a full refund to the original payment method, if applicable.</Paragraph>
      
      <SectionTitle>4. How to Request a Refund</SectionTitle>
      <Paragraph>4.1. If you receive a damaged or defective product, please contact us at curiocratessurprises@gmail.com within 3 days of receiving your order. Provide your order number, and we will guide you through the refund or replacement process.</Paragraph>
      
      <SectionTitle>5. Shipping Costs</SectionTitle>
      <Paragraph>5.1. Shipping costs for returning defective items will be covered by us. However, the customer will be responsible for any shipping costs related to cancellations or non-defective returns.</Paragraph>
    </TermsContainer>
  );
};

export default RefundPolicy;
