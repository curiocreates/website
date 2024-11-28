import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  padding: 2rem;
  background-color: #4B0082;
  color: #FFD700;
  text-align: center;
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 600px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  select {
    padding: 0.8rem;
    font-size: 1rem;
    border: 2px solid #FFD700;
    border-radius: 5px;
    background-color: #4B0082;
    color: #FFD700;
    outline: none;

    &:focus {
      border-color: #40E0D0;
    }
  }

  button {
    padding: 0.8rem 1.5rem;
    background-color: #40E0D0;
    color: #4B0082;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #FFD700;
      color: #4B0082;
    }
  }
`;

const ErrorMessage = styled.p`
  color: #ff5555;
  font-size: 0.9rem;
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

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate the form
  const validate = () => {
    const newErrors = {};
    const mobileRegex = /^[6-9]\d{9}$/; // Mobile number must start with 6-9 and be 10 digits
    const pincodeRegex = /^\d{6}$/; // Pincode must be exactly 6 digits

    if (!formData.name) newErrors.name = "Name is required.";
    if (!mobileRegex.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!pincodeRegex.test(formData.pincode))
      newErrors.pincode = "Enter a valid 6-digit pincode.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.state) newErrors.state = "State is required.";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Data Submitted:", formData);
      alert("Shipping details submitted successfully!");
      // Reset form
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
    }
  };

  return (
    <FormContainer>
      <h2>Shipping Address</h2>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

        <input
          type="tel"
          name="mobile"
          placeholder="+91 Enter mobile number"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}

        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <input
          type="text"
          name="address"
          placeholder="Flat / House No, Building, Colony"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}

        <input
          type="text"
          name="locality"
          placeholder="Locality / Area (optional)"
          value={formData.locality}
          onChange={handleChange}
        />

        <input
          type="text"
          name="landmark"
          placeholder="Landmark (optional)"
          value={formData.landmark}
          onChange={handleChange}
        />

        <input
          type="text"
          name="pincode"
          placeholder="Enter pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
        {errors.pincode && <ErrorMessage>{errors.pincode}</ErrorMessage>}

        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}

        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select state</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Maharashtra">Maharashtra</option>
          {/* Add other states */}
        </select>
        {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}

        <button type="submit">Submit</button>
      </Form>
    </FormContainer>
  );
};

export default ShippingForm;
