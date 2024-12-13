import React from 'react';
import styled from 'styled-components';
//import { Link } from 'react-router-dom';

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

const TermsAndConditions = () => {
  return (
    <TermsContainer>
      <Title>Terms and Conditions</Title>
      
      <Paragraph><strong>Effective Date:</strong> November 30, 2024</Paragraph>
      <Paragraph><strong>Last Updated:</strong> November 30, 2024</Paragraph>
      
      <SectionTitle>1. General Use of the Website</SectionTitle>
      <Paragraph>1.1. This website provides interactive content and enables users to make online purchases through payment gateways like Cashfree.</Paragraph>
      <Paragraph>1.2. By providing your personal information during transactions (such as email and payment details), you consent to its use in accordance with our Privacy Policy.</Paragraph>
      <Paragraph>1.3. You agree not to misuse this website, including attempting to hack or disrupt services.</Paragraph>
      
      <SectionTitle>2. Products and Purchases</SectionTitle>
      <Paragraph>2.1. Our website offers various mystery boxes for sale. Prices, product details, and images are provided for illustrative purposes. Actual contents may vary.</Paragraph>
      <Paragraph>2.2. All payments must be made through supported payment gateways such as Cashfree. You are responsible for ensuring your payment details are accurate.</Paragraph>
      <Paragraph>2.3. Shipping costs and times may vary. We are not responsible for any third-party shipping delays.</Paragraph>
      <Paragraph>2.4. Returns and exchanges are not allowed unless products are defective. Please contact us within 3 days if you receive a damaged item.</Paragraph>

      <SectionTitle>3. Payment Terms</SectionTitle>
      <Paragraph>3.1. All transactions are securely processed through our integrated payment gateway (Cashfree). We do not store any sensitive payment information.</Paragraph>
      <Paragraph>3.2. If your payment fails or there are discrepancies, please report the issue immediately via our customer support at curiocratessurprises@gmail.com.</Paragraph>
      
      <SectionTitle>4. QuickQuiz</SectionTitle>
      <Paragraph>4.1. Participation in the QuickQuiz is optional and helps us improve user experience. Your responses will be stored according to our Privacy Policy.</Paragraph>
      <Paragraph>4.2. We may use quiz results to personalize our offerings, but will not share your information with third parties unless permitted.</Paragraph>

      <SectionTitle>5. Privacy and Data Protection</SectionTitle>
      <Paragraph>5.1. We respect your privacy and are committed to protecting your personal data. All information provided is processed according to our Privacy Policy.</Paragraph>
      <Paragraph>5.2. You are responsible for maintaining the confidentiality of your account details, and you agree to notify us of any unauthorized access to your account.</Paragraph>

      <SectionTitle>6. Intellectual Property</SectionTitle>
      <Paragraph>6.1. All content on this website, including images, text, and designs, is owned by Curiocrates and is protected by intellectual property laws.</Paragraph>
      <Paragraph>6.2. Unauthorized use or reproduction of this content is strictly prohibited.</Paragraph>

      <SectionTitle>7. Limitations of Liability</SectionTitle>
      <Paragraph>7.1. Our website and its contents are provided "as is" without any warranty of any kind, either express or implied.</Paragraph>
      <Paragraph>7.2. We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or its services.</Paragraph>

      <SectionTitle>8. Modifications to Terms</SectionTitle>
      <Paragraph>8.1. We may update these Terms and Conditions at any time. Your continued use of the website after such updates implies your acceptance of the new terms.</Paragraph>

      <SectionTitle>9. Governing Law and Disputes</SectionTitle>
      <Paragraph>These Terms and Conditions are governed by the laws of Andhra Pradesh and Telangana, India. Any disputes will be resolved under the jurisdiction of the courts in Hyderabad, Telangana.</Paragraph>

      <SectionTitle>10. Contact Us</SectionTitle>
      <Paragraph>If you have any questions, please contact us via the following methods:</Paragraph>
      <Paragraph><strong>Email:</strong> curiocratessurprises@gmail.com</Paragraph>
      <Paragraph><strong>Instagram:</strong> curio_crates</Paragraph>
    </TermsContainer>
  );
};

export default TermsAndConditions;
