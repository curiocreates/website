import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TermsContainer = styled.div`
  padding: 2rem;
  background-color: #FFFFFF; /* Neutral white for a clean and balanced look */
  color: #4B0082; /* Royal Purple text color for content */
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
`;

const Title = styled.h1`
  text-align: center;
  color: #FFD700; /* Gold */
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  color: #40E0D0; /* Turquoise */
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
      <Paragraph>1.1. This website is intended to provide users with information, interactive content, and the ability to purchase products.</Paragraph>
      <Paragraph>1.2. Access to certain features, including the QuickQuiz and shopping functionality, may require you to provide personal information such as your email. By providing this information, you consent to its use as described in our Privacy Policy.</Paragraph>
      <Paragraph>1.3. You agree not to misuse this website, including attempting to hack or disrupt the services provided.</Paragraph>
      
      <SectionTitle>2. Products and Purchases</SectionTitle>
      <Paragraph>2.1. <strong>Product Information:</strong> The website offers mystery boxes for sale, including the Treasure Chest Box, Ultimate Surprise Box, Gold Premium Box, Exclusive Custom Box, and Premium Enigma Box. Product images and descriptions are for illustrative purposes and may not represent the exact contents of the boxes.</Paragraph>
      <Paragraph>2.2. <strong>Pricing and Payment:</strong> All prices are listed in Indian Rupees (₹). We reserve the right to modify prices at any time without prior notice. Payments must be made through the options provided during checkout.</Paragraph>
      <Paragraph>2.3. <strong>Shipping and Delivery:</strong> Shipping times and costs vary based on location and box type. We are not responsible for delays caused by third-party shipping providers.</Paragraph>
      <Paragraph>2.4. <strong>Returns and Refunds:</strong> Due to the nature of mystery boxes, refunds or exchanges are not permitted unless the product is defective. If you receive a damaged or defective item, contact us within 3 days of delivery at curiocratessurprises@gmail.com.</Paragraph>
      
      <SectionTitle>3. QuickQuiz</SectionTitle>
      <Paragraph>3.1. QuickQuiz is provided for entertainment purposes and to help us understand user preferences.</Paragraph>
      <Paragraph>3.2. Participation is optional, and responses may be used to enhance user experience or tailor our offerings.</Paragraph>
      <Paragraph>3.3. Your quiz responses are subject to our Privacy Policy and will not be shared with third parties without consent.</Paragraph>
      
      <SectionTitle>4. Privacy and Data Protection</SectionTitle>
      <Paragraph>4.1. Personal data collected through the website, including contact forms, purchases, and quizzes, will be handled in accordance with our Privacy Policy.</Paragraph>
      <Paragraph>4.2. You are responsible for keeping your account details secure if applicable.</Paragraph>
      
      <SectionTitle>5. Intellectual Property</SectionTitle>
      <Paragraph>5.1. All content on this website, including text, images, and designs, is the intellectual property of Curiocrates unless otherwise stated.</Paragraph>
      <Paragraph>5.2. Unauthorized reproduction, distribution, or commercial use of our content is prohibited.</Paragraph>
      
      <SectionTitle>6. Limitations of Liability</SectionTitle>
      <Paragraph>6.1. The website and its content are provided "as is" without warranties of any kind.</Paragraph>
      <Paragraph>6.2. We are not liable for any direct, indirect, or incidental damages arising from the use of this website or its services.</Paragraph>
      
      <SectionTitle>7. Modifications to Terms</SectionTitle>
      <Paragraph>7.1. We reserve the right to update these Terms and Conditions at any time.</Paragraph>
      <Paragraph>7.2. Continued use of the website after changes are posted constitutes acceptance of the new terms.</Paragraph>
      
      <SectionTitle>8. Governing Law</SectionTitle>
      <Paragraph>These Terms and Conditions are governed by the laws of Andhra Pradesh and Telangana. Any disputes arising from these terms will be subject to the jurisdiction of the courts in Hyderabad, Telangana.</Paragraph>
      
      <SectionTitle>9. Contact Us</SectionTitle>
      <Paragraph>For questions, concerns, or support, please visit our <Link to="/Contact" style={{ color: '#40E0D0', textDecoration: 'underline' }}>Contact Us</Link> page or reach out to us at:</Paragraph>
      <Paragraph><strong>Email:</strong> curiocratessurprises@gmail.com</Paragraph>
      <Paragraph><strong>Instagram:</strong> curio_crates</Paragraph>
    </TermsContainer>
  );
};

export default TermsAndConditions;
