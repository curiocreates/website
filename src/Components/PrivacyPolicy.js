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
  color: #4B0082;
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  margin: 0.5rem 0;
`;

const EmailLink = styled.a`
  color: #4B0082;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PrivacyPolicy = () => {
  return (
    <PolicyContainer>
      <Title>Privacy Policy</Title>
      <Paragraph><strong>Effective Date:</strong> 25-November-2024</Paragraph>

      <SectionTitle>1. Information We Collect</SectionTitle>
      <Paragraph>
        We collect personal information such as your name, email address, shipping address, and payment details when you place an order. We may also collect non-personal information such as your browsing activity on our website, IP address, and device information.
      </Paragraph>

      <SectionTitle>2. How We Use Your Information</SectionTitle>
      <Paragraph>
        We use your personal information to process and fulfill your orders, send you updates and promotional offers (if you opt in), and improve our website and customer experience.
      </Paragraph>

      <SectionTitle>3. Data Security</SectionTitle>
      <Paragraph>
        We use industry-standard security protocols to protect your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure.
      </Paragraph>

      <SectionTitle>4. Sharing Your Information</SectionTitle>
      <Paragraph>
        We do not sell, rent, or trade your personal information. We may share it with third-party service providers for order fulfillment or as required by law.
      </Paragraph>

      <SectionTitle>5. Cookies</SectionTitle>
      <Paragraph>
        We use cookies to enhance your experience on our website. You can disable cookies in your browser settings if you prefer not to have them.
      </Paragraph>

      <SectionTitle>6. Your Rights</SectionTitle>
      <Paragraph>
        You can access, update, or delete your personal information by contacting us. If you do not wish to receive promotional emails, you can opt out at any time.
      </Paragraph>

      <SectionTitle>7. Changes to This Privacy Policy</SectionTitle>
      <Paragraph>
        We may update this policy from time to time. Any changes will be posted on this page with the updated date.
      </Paragraph>

      <SectionTitle>8. Contact Us</SectionTitle>
      <Paragraph>If you have any questions regarding your personal data, please contact us at:</Paragraph>
      <Paragraph>
        <strong>Email:</strong> <EmailLink href="mailto:curiocratessurprises@gmail.com">curiocratessurprises@gmail.com</EmailLink>
      </Paragraph>
    </PolicyContainer>
  );
};

export default PrivacyPolicy;
