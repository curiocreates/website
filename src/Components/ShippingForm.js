import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

import enigmaBox from '../assets/MysteryBoxes/premium-enigma-box.jpg';


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  max-width: 1000px;
  margin: 3rem auto;
  padding: 2rem;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
  object-fit: contain;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: bold;
    font-size: 0.95rem;
    margin-bottom: 0.2rem;
        color: black;

  }

  input,
  select {
    padding: 0.7rem;
    font-size: 0.95rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;

    &:focus {
      border-color: #007185;
    }
  }

  button {
    padding: 0.8rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: #f0c14b;
    border: 1px solid #a88734;
    color: #111;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: #e2b33c;
    }
  }
`;
const Row = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const ErrorMessage = styled.p`
  color: #b00020;
  font-size: 0.85rem;
  margin: 0;
`;

const ShippingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    locality: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const mobileRegex = /^[6-9]\d{9}$/;
    const pincodeRegex = /^\d{6}$/;

    if (!formData.name) newErrors.name = "Name is required.";
    if (!mobileRegex.test(formData.mobile))
      newErrors.mobile = "Valid 10-digit number required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!pincodeRegex.test(formData.pincode))
      newErrors.pincode = "6-digit pincode required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.state) newErrors.state = "State is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .send("service_quff5rq", "template_k0t9cge", formData, "FAukxrpq7mLi1q4MK")
      .then(() => {
        alert("Shipping details submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          address: "",
          locality: "",
          landmark: "",
          pincode: "",
          city: "",
          state: "",
        });
        setErrors({});
      })
      .catch((error) => {
        alert("Failed to send details. Please try again.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <Wrapper>
      <FormContainer>
        <h2>Shipping Address</h2>
        <Form onSubmit={handleSubmit}>
  <Row>
    <div style={{ flex: 1 }}>
      <label>Full Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
    </div>

    <div style={{ flex: 1 }}>
      <label>Mobile Number</label>
      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
      />
      {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}
    </div>
  </Row>

  <label>Email</label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
  />
  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

  <label>Flat / House / Building</label>
  <input
    type="text"
    name="address"
    value={formData.address}
    onChange={handleChange}
  />
  {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}

  <label>Locality (optional)</label>
  <input
    type="text"
    name="locality"
    value={formData.locality}
    onChange={handleChange}
  />
  <Row>
  <label>Landmark (optional)</label>
  <input
    type="text"
    name="landmark"
    value={formData.landmark}
    onChange={handleChange}
  />
      <div style={{ flex: 1 }}>
      <label>state</label>
      <input
        type="text"
        name="State"
        value={formData.city}
        onChange={handleChange}
      />
      {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
    </div>
    </Row>
  <Row>
    <div style={{ flex: 1 }}>
      <label>Pincode</label>
      <input
        type="text"
        name="pincode"
        value={formData.pincode}
        onChange={handleChange}
      />
      {errors.pincode && <ErrorMessage>{errors.pincode}</ErrorMessage>}
    </div>

    <div style={{ flex: 1 }}>
      <label>City</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
    </div>
  </Row>
  {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}

  <button type="submit">Submit</button>
</Form>
      </FormContainer>
    </Wrapper>
  );
};

export default ShippingForm;
