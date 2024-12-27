import React, { useState } from "react";
import styled from "styled-components";

const GameContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: #fdf6e3;
  border-radius: 10px;
  max-width: 700px;
  margin: 20px auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #d2691e;
  margin-bottom: 10px;
`;

const StoryText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
`;

const OptionButton = styled.button`
  background: #ff9800;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #ffa726;
  }
`;

const SummaryContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const MysteryTreasureHunt = ({ onComplete }) => {
  const [stage, setStage] = useState(1);
  const [choices, setChoices] = useState([]);

  const handleChoice = (choice) => {
    setChoices([...choices, choice]);
    setStage(stage + 1);
  };

  const handleCompletion = () => {
    const summary = {
      journey: choices,
    };
    onComplete(summary);
    setStage(5);
  };

  return (
    <GameContainer>
      {stage === 1 && (
        <div>
          <Title>Welcome to the Mystery Treasure Hunt!</Title>
          <StoryText>
            You find yourself at the entrance of an ancient cave. Inside, a treasure awaits—but beware, the path is full of surprises!
          </StoryText>
          <OptionButton onClick={() => handleChoice("Enter the cave")}>
            Enter the Cave
          </OptionButton>
          <OptionButton onClick={() => handleChoice("Look around for clues")}>
            Look Around for Clues
          </OptionButton>
        </div>
      )}

      {stage === 2 && (
        <div>
          <Title>The Cave of Choices</Title>
          <StoryText>
            The cave is dark, but you see two paths ahead. One seems well-traveled, while the other is overgrown and mysterious.
          </StoryText>
          <OptionButton onClick={() => handleChoice("Take the well-traveled path")}>
            Take the Well-Traveled Path
          </OptionButton>
          <OptionButton onClick={() => handleChoice("Venture into the mysterious path")}>
            Venture into the Mysterious Path
          </OptionButton>
        </div>
      )}

      {stage === 3 && (
        <div>
          <Title>A Surprising Encounter</Title>
          <StoryText>
            You encounter a wise old traveler who offers you a choice: take a key or a map. Each could help you find the treasure.
          </StoryText>
          <OptionButton onClick={() => handleChoice("Take the key")}>
            Take the Key
          </OptionButton>
          <OptionButton onClick={() => handleChoice("Take the map")}>
            Take the Map
          </OptionButton>
        </div>
      )}

      {stage === 4 && (
        <div>
          <Title>The Treasure Awaits</Title>
          <StoryText>
            After making your choices, you stand before the treasure chest. It’s time to open it and see what’s inside!
          </StoryText>
          <OptionButton onClick={handleCompletion}>Open the Chest</OptionButton>
        </div>
      )}

      {stage === 5 && (
        <SummaryContainer>
          <Title>Congratulations!</Title>
          <StoryText>
            You completed the Mystery Treasure Hunt! Here’s a summary of your journey:
          </StoryText>
          <ul>
            {choices.map((choice, index) => (
              <li key={index}>{choice}</li>
            ))}
          </ul>
          <StoryText>Click below to claim your customized mystery box!</StoryText>
          <OptionButton onClick={() => (window.location.href = "/customize")}>
            Claim My Box
          </OptionButton>
        </SummaryContainer>
      )}
    </GameContainer>
  );
};

export default MysteryTreasureHunt;
