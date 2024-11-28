import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

// Color Palette
const purple = "#6A0DAD";
const turquoise = "#30D5C8";
const gold = "#FFD700";
//const lightGray = "#f5f5f5";

// Styled-components for the form design
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(145deg, ${purple}, ${turquoise});
  padding: 20px;
`;

const FormContainer = styled.div`
  background-color: white; /* White background for the form */
  color: #333;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  width: 100%;
  max-width: 550px; /* Limit the width of the form */
  text-align: center;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: ${gold};
    border-radius: 12px 12px 0 0;
  }
`;

const Heading = styled.h2`
  font-family: "Arial", sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${purple}; /* Premium purple color */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1.1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${turquoise};
    background-color: #fff;
    box-shadow: 0 0 10px rgba(30, 144, 255, 0.5);
  }

  &::placeholder {
    color: #bbb;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1.1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  resize: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${turquoise};
    background-color: #fff;
    box-shadow: 0 0 10px rgba(30, 144, 255, 0.5);
  }

  &::placeholder {
    color: #bbb;
  }
`;

const Select = styled.select`
  padding: 1rem;
  font-size: 1.1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${turquoise};
    background-color: #fff;
    box-shadow: 0 0 10px rgba(30, 144, 255, 0.5);
  }
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: ${purple};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${turquoise};
    transform: translateY(-3px);
  }
`;

const SuccessMessage = styled.p`
  color: #28a745; /* Green color for success */
  font-weight: bold;
  margin-top: 1.5rem;
  font-size: 1.1rem;
`;

const ErrorMessage = styled.p`
  color: #e74c3c; /* Red color for errors */
  font-size: 0.9rem;
  margin-top: -1rem;
`;

const ContactForm = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    let newErrors = {};
    if (!/^\d{10}$/.test(data.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
    }
    if (!/^\d{6}$/.test(data.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits.";
    }
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Validate form before submission
    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // Send Email using EmailJS
    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        e.target,
        "your_user_id" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSuccess(true);
          e.target.reset(); // Clear the form after submission
        },
        (error) => {
          console.log(error.text);
          setFormSuccess(false);
        }
      );
  };

  return (
    <PageWrapper>
      {/* Form Container */}
      <FormContainer>
        <Heading>Shipping Details</Heading>
        <Form onSubmit={sendEmail}>
          <Input type="text" name="name" placeholder="Name" required />
          <Select name="gender" required>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Select>
          <Input
            type="number"
            name="age"
            placeholder="Age"
            min="18"
            required
          />
          <Input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            pattern="[0-9]{10}"
            required
          />
          {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}
          <Input type="text" name="address" placeholder="Address" required />
          <Input
            type="text"
            name="pincode"
            placeholder="Pincode"
            pattern="[0-9]{6}"
            required
          />
          {errors.pincode && <ErrorMessage>{errors.pincode}</ErrorMessage>}
          <TextArea
            name="interests"
            placeholder="Interests (e.g., tech, anime, skincare)"
            rows="4"
          ></TextArea>
          <Button type="submit">Submit</Button>
        </Form>
        {formSuccess && (
          <SuccessMessage>Form submitted successfully!</SuccessMessage>
        )}
      </FormContainer>
    </PageWrapper>
  );
};

export default ContactForm;
