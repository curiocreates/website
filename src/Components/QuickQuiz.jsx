import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Define a mysterious, dark theme with immersive features
const GameModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/path-to-mystical-background.jpg") no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  font-family: "Poppins", sans-serif;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const GameContent = styled.div`
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 40px 30px;
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  text-align: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.9);
  position: relative;
  animation: ${fadeIn} 1s ease-in;
  margin: 20px;
  //  margin-left: 10%;

  @media (max-width: 600px) {
    max-width: 90%;
    padding: 25px;
    margin: 15px;
    margin-right: 10%; 
    margin-left: -1%;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #ffd700;
  margin-bottom: 20px;
  font-weight: bold;
  animation: ${fadeIn} 1s ease-in;
  text-shadow: 0 0 10px #ffd700;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const GameMessage = styled.p`
  font-size: 1.4rem;
  color: #40e0d0;
  margin-bottom: 30px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  animation: ${fadeIn} 1s ease-in;
  text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3);
  white-space: pre-wrap;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const SkipButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: #ffd700;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #fff;
  }
`;

const OptionButton = styled.button`
  background-color: #8b00ff;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease-in-out;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
  margin: 15px 5px;

  &:hover {
    background-color: #6a00b1;
    transform: scale(1.05);
  }
`;

const Game = ({ closeGame }) => {
  const [stage, setStage] = useState(1);
  const [choices, setChoices] = useState([]);

  const stages = [
    {
      title: "Welcome to Crate Quest!",
      message: `Embark on a journey filled with mystery and adventure.
Are you ready to uncover hidden treasures?`,
      options: ["Start the Adventure"],
    },
    {
      title: "The Mystic Portal",
      message: `You discover a glowing portal.
It hums with an ancient energy. 
Do you step inside, or explore the surroundings?`,
      options: ["Enter the Portal", "Search the Surroundings"],
    },
    {
      title: "The Enchanted Forest",
      message: `Through the portal, you find a magical forest.
Glowing plants light your path.
You see a fork in the road. 
Which way will you go?`,
      options: ["Follow the Bright Path", "Enter the Dark Woods"],
    },
    {
      title: "The Guardian’s Riddle",
      message: `A mystical guardian blocks your way. 
It says, 'To pass, answer this:
I speak without a mouth and hear without ears. 
I have no body, but I come alive with the wind.
What am I?'`,
      options: ["An Echo", "A Whisper"],
    },
    {
      title: "The Hidden Chamber",
      message: `You solve the riddle and reach a hidden chamber.
Inside, you see strange symbols glowing on the walls.
A door lies ahead. 
What do you do?`,
      options: ["Inspect the Symbols", "Open the Door"],
    },
    {
      title: "The Final Challenge",
      message: `Before you is a final challenge. 
The voice whispers: 'I am not alive, but I can grow. 
I do not have lungs, but I need air.
What am I?'`,
      options: ["A Fire", "A Shadow"],
    },
    {
      title: "The Treasure Room",
      message: `You have conquered all challenges! 
The treasure chamber opens before you.
It's time to claim your reward.`,
      options: ["Pick Your Mystery Box"],
    },
  ];

  const handleChoice = (choice) => {
    setChoices([...choices, choice]);
    if (stage === stages.length) {
      window.location.href = "/Boxes"; // Redirect after game completion
    } else {
      setStage((prevStage) => prevStage + 1);
    }
  };

  const currentStage = stages[stage - 1];

  return (
    <GameModal>
      <GameContent>
        <SkipButton onClick={closeGame}>Skip</SkipButton>
        <Heading>{currentStage.title}</Heading>
        <GameMessage>{currentStage.message}</GameMessage>
        {currentStage.options.map((option) => (
          <OptionButton key={option} onClick={() => handleChoice(option)}>
            {option}
          </OptionButton>
        ))}
      </GameContent>
    </GameModal>
  );
};

const App = () => {
  const [isGameOpen, setIsGameOpen] = useState(true);

  const closeGame = () => setIsGameOpen(false);

  return <>{isGameOpen && <Game closeGame={closeGame} />}</>;
};

export default App;
