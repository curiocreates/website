

import React, { useState} from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

// ... (styles remain unchanged)
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
    margin-left: -30px;
    margin-top: 30px;
    width: 80%;
    border-radius: 15px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: purple;
  margin-bottom: 20px;
  font-weight: bold;
`;

const StartMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const StartButton = styled.button`
  background: #6a0572;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background: #4b0251;
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
  width: 95%;
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

  @media (max-width: 600px) {
    width: 85%;
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
  const [step, setStep] = useState(-1); // Start screen state
  const [answers, setAnswers] = useState({});
  const [additionalQuestion, setAdditionalQuestion] = useState(null);
  

  const questions = [
    { question: 'What is your name?', type: 'text', key: 'name' },
    { question: 'What is your gender?', options: ['Male', 'Female', 'Other'], type: 'radio', key: 'gender' },
    { question: 'What is your age group?', options: ['Under 18', '18-24', '25-34', '35+'], type: 'radio', key: 'age' },
    { question: 'What is your Profession?', options: ['Student', 'Working Professional', 'TFI Banisa'], type: 'radio', key: 'Profession' },
    { question: 'What is your occasion', options: ['Birthday', 'Aniversary','Gifing someone', 'Just because of'], type: 'radio', key: 'occasion' },    {
      question: 'What are your top interests?',
      options: ['Tech', 'Fashion', 'Gaming', 'Anime', 'Beauty and Health Care', 'Grooming Essentials', 'Books'],
      type: 'checkbox',
      key: 'interests',
    },
    { question: 'What is your email?', type: 'text', key: 'email' },
  ];

  const handleInputChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (key === 'interests' && value.includes('Anime')) {
      setAdditionalQuestion({ question: 'What is your favorite anime?', key: 'favoriteAnime' });
    } else if (key === 'interests' && value.includes('Gaming')) {
      setAdditionalQuestion({ question: 'What is your favorite game?', key: 'favoriteGame' });
    } else {
      setAdditionalQuestion(null);
    }
  };

  const handleSubmit = () => {
    if (!/\S+@\S+\.\S+/.test(answers.email)) {
      alert('Please provide a valid email.');
      return;
    }

    closeQuiz();

    const emailData = {
      service_id: 'service_edbt7zp',
      template_id: 'template_972f8sw',
      user_id: 'yjg3HZpZru2uEP3WF',
      template_params: {
        to_email: 'curiocratessurprises@gmail.com',
        subject: 'QuickQuiz Submission',
        text: `QuickQuiz Data: ${JSON.stringify(answers)}`,
      },
    };

    emailjs
      .send(emailData.service_id, emailData.template_id, emailData.template_params, emailData.user_id)
      .then(() => {
        
        
        
        setStep(-1); // Reset the step to hide the quiz form immediately after submission
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Something went wrong! Please try again later.');
      });  };

  

  if (step === -1) {
    return (
      <QuizModal>
        <QuizContent>
          <Heading>QuickQuiz</Heading>
          <SkipButton onClick={closeQuiz}>Skip</SkipButton>
          <StartMessage>Let's take a QuickQuiz to help us get to know you better!</StartMessage>
          <StartButton onClick={() => setStep(0)}>Start</StartButton>
        </QuizContent>
      </QuizModal>
    );
  }

  const currentQuestion = step === 'additional' ? additionalQuestion : questions[step];

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
                  onChange={() =>
                    setAnswers((prev) => ({
                      ...prev,
                      [currentQuestion.key]: prev[currentQuestion.key]?.includes(option)
                        ? prev[currentQuestion.key].filter((item) => item !== option)
                        : [...(prev[currentQuestion.key] || []), option],
                    }))
                  }
                />
                {option}
              </Option>
            ))}
          {currentQuestion.type === 'text' && (
            <InputBox
              type="text"
              placeholder="Type your answer here..."
              value={answers[currentQuestion.key] || ''}
              onChange={(e) => handleInputChange(currentQuestion.key, e.target.value)}
            />
          )}
        </OptionsContainer>
        <NavButtonContainer>
          <Button onClick={() => setStep((prev) => prev - 1)} disabled={step === 0}>
            Previous
          </Button>
          {step === questions.length - 1 && !additionalQuestion ? (
            <Button onClick={handleSubmit} >Submit</Button>
          ) : (
            <Button onClick={() => setStep((prev) => prev + 1)} disabled={!answers[currentQuestion.key]}>
              Next
            </Button>
          )}
        </NavButtonContainer>
      </QuizContent>
    </QuizModal>
  );
};

export default QuickQuiz;
