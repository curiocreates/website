import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com'; // Import EmailJS SDK

const QuizModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const QuizContent = styled.div`
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  padding: 30px;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
  font-family: 'Arial', sans-serif;
  position: relative;

  @media (max-width: 600px) {
    padding: 20px;
    border-radius: 15px;
  }
`;

const SkipButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: #333;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: bold;
`;

const Question = styled.h3`
  font-size: 1.8rem;
  color: ${({ color }) => (color === 'turquoise' ? '#40e0d0' : '#800080')};
  margin-bottom: 20px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Option = styled.label`
  background-color: #e9ecef;
  border: 2px solid #ccc;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #dee2e6;
    border-color: #adb5bd;
  }

  input {
    margin-right: 10px;
  }
`;

const InputBox = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #888;
    outline: none;
  }
`;

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const QuickQuiz = ({ closeQuiz }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    name: '',
    gender: '',
    age: '',
    interests: [],
    occupation: '',
    occasion: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = [
    { question: 'What is your name?', type: 'text', key: 'name' },
    { question: 'What is your gender?', options: ['Male', 'Female', 'Other'], type: 'radio', key: 'gender' },
    { question: 'What is your age group?', options: ['Under 18', '18-24', '25-34', '35-44', '45-54', '55+'], type: 'radio', key: 'age' },
    {
      question: 'What are your top interests?',
      options: ['Technology', 'Gaming', 'Anime', 'Books', 'Beauty and Health Care', 'Fashion', 'Grooming Essentials'],
      type: 'checkbox',
      key: 'interests',
    },
    { question: 'What is your occupation?', options: ['Student', 'Professional', 'Homemaker', 'Other'], type: 'radio', key: 'occupation' },
    { question: 'What is the occasion?', options: ['Birthday', 'Anniversary', 'Holiday', 'Just Because'], type: 'radio', key: 'occasion' },
    { question: 'What is your email?', type: 'text', key: 'email' },
  ];

  const currentQuestion = questions[step];

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrevious = () => setStep((prev) => prev - 1);

  const handleInputChange = (key, value) => setAnswers((prev) => ({ ...prev, [key]: value }));

  const handleCheckboxChange = (key, value) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: prev[key].includes(value) ? prev[key].filter((item) => item !== value) : [...prev[key], value],
    }));
  };

  const handleSubmit = () => {
    if (!/\S+@\S+\.\S+/.test(answers.email)) {
      alert('Please provide a valid email.');
      return;
    }

    // Prepare the email data for EmailJS
    const emailData = {
      service_id: 'service_edbt7zp', // Your EmailJS service ID
      template_id: 'template_972f8sw', // Your EmailJS template ID
      user_id: 'yjg3HZpZru2uEP3WF', // Your EmailJS user ID
      template_params: {
        to_email: 'curiocratessurprises@gmail.com', // Your email address to receive the data
        subject: 'QuickQuiz Submission',
        text: `QuickQuiz Data: ${JSON.stringify(answers)}`,
      },
    };

    // Send the email using EmailJS API
    emailjs.send('service_edbt7zp', 'template_972f8sw', emailData.template_params, 'yjg3HZpZru2uEP3WF')
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setIsSubmitted(true);
          closeQuiz();
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  if (isSubmitted) return null;

  return (
    <QuizModal>
      <QuizContent>
        <SkipButton onClick={closeQuiz}>Skip</SkipButton>
        <Question color="purple">{currentQuestion.question}</Question>
        <OptionsContainer>
          {currentQuestion.type === 'radio' &&
            currentQuestion.options.map((option) => (
              <Option key={option}>
                <input
                  type="radio"
                  name={currentQuestion.key}
                  value={option}
                  checked={answers[currentQuestion.key] === option}
                  onChange={(e) => handleInputChange(currentQuestion.key, e.target.value)}
                />
                {option}
              </Option>
            ))}
          {currentQuestion.type === 'checkbox' &&
            currentQuestion.options.map((option) => (
              <Option key={option}>
                <input
                  type="checkbox"
                  value={option}
                  checked={answers[currentQuestion.key]?.includes(option)}
                  onChange={() => handleCheckboxChange(currentQuestion.key, option)}
                />
                {option}
              </Option>
            ))}
          {currentQuestion.type === 'text' && (
            <InputBox
              type="text"
              value={answers[currentQuestion.key] || ''}
              placeholder="Type your answer here..."
              onChange={(e) => handleInputChange(currentQuestion.key, e.target.value)}
            />
          )}
        </OptionsContainer>
        <NavButtonContainer>
          {step > 0 && <Button onClick={handlePrevious}>← Previous</Button>}
          {step < questions.length - 1 ? (
            <Button onClick={handleNext} disabled={!answers[currentQuestion.key]}>Next →</Button>
          ) : (
            <Button onClick={handleSubmit}>Submit</Button>
          )}
        </NavButtonContainer>
      </QuizContent>
    </QuizModal>
  );
};

export default QuickQuiz;
