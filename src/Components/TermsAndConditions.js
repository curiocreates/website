import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
  padding: 2rem;
  background-color: rgb(246, 246, 248); 
  color: #4B0082;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
`;

const Title = styled.h1`
  text-align: center;
  color:rgb(128, 64, 120); 
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  color:rgb(27, 30, 30);
  margin-top: 1rem;
`;

const Paragraph = styled.p`
  margin: 0.5rem 0;
`;

const TermsAndConditions = () => {
  return (
    <TermsContainer>
      <Title>Terms and Conditions</Title>
      
      <Paragraph><strong>Last Updated:</strong> March 9, 2025</Paragraph>
      
      <SectionTitle>1. General Use of the Website</SectionTitle>
      <Paragraph>1.1. By using our website and services, you agree to these terms. We reserve the right to modify them anytime.</Paragraph>
      <Paragraph>1.2. You must provide accurate information and are responsible for all activities under your account.</Paragraph>
      <Paragraph>1.3. We do not guarantee the accuracy, completeness, or suitability of any information on this website.</Paragraph>
      <Paragraph>1.4. Unauthorized use of the website may lead to legal action.</Paragraph>
      
      <SectionTitle>2. Products and Purchases</SectionTitle>
      <Paragraph>2.1. Our mystery boxes contain surprise items. Product images are illustrative; actual contents may vary.</Paragraph>
      <Paragraph>2.2. Payments must be made via supported gateways like Cashfree.</Paragraph>
      <Paragraph>2.3. Shipping times vary. We are not responsible for third-party shipping delays.</Paragraph>
      <Paragraph>2.4. Returns are only allowed for defective items reported within 3 days of receipt.</Paragraph>
      
      <SectionTitle>3. Payment Terms</SectionTitle>
      <Paragraph>3.1. All transactions are securely processed through Cashfree.</Paragraph>
      <Paragraph>3.2. Refunds are only applicable if we fail to deliver the product as per our policy.</Paragraph>
      
      <SectionTitle>4. Privacy and Data Protection</SectionTitle>
      <Paragraph>4.1. Your information is handled per our Privacy Policy.</Paragraph>
      <Paragraph>4.2. You are responsible for keeping your account credentials secure.</Paragraph>
      
      <SectionTitle>5. Intellectual Property</SectionTitle>
      <Paragraph>5.1. All content on this website is owned by CurioCrates. Unauthorized use is prohibited.</Paragraph>
      
      <SectionTitle>6. Liability and Disclaimers</SectionTitle>
      <Paragraph>6.1. We do not guarantee uninterrupted website access and are not liable for any indirect damages.</Paragraph>
      <Paragraph>6.2. Force majeure events may prevent us from fulfilling obligations.</Paragraph>
      
      <SectionTitle>7. Governing Law and Dispute Resolution</SectionTitle>
      <Paragraph>7.1. These Terms are governed by Indian law.</Paragraph>
      <Paragraph>7.2. Any disputes will be resolved in Hyderabad, Telangana.</Paragraph>
      
      <SectionTitle>8. Contact Us</SectionTitle>
      <Paragraph><strong>Legal Entity Name:</strong> RAGHAVENDRA PALAPARTHI</Paragraph>
      <Paragraph><strong>Registered Address:</strong> 6-72/A, Annojiguda, Hyderabad, Telangana, PIN: 500088</Paragraph>
      <Paragraph><strong>Email:</strong> curiocratescustomization@gmail.com</Paragraph>
      <Paragraph><strong>Phone:</strong> 8328413800</Paragraph>
    </TermsContainer>
  );
};

export default TermsAndConditions;
