import React, { useState, useEffect } from "react";
import skills from "./SkillsData";

const CharacterDescription = ({
  selectedCharacter,
  renderSkills,
  activeSynergies,
  handleSynergyClick,
  handleSkillClick,
}) => {
  const [characterImage, setCharacterImage] = useState(null);

  useEffect(() => {
    if (selectedCharacter) {
      import(`${selectedCharacter.image}`)
        .then((image) => {
          setCharacterImage(image.default);
        })
        .catch((error) => {
          console.error(
            `Failed to load image: ${selectedCharacter.image}`,
            error
          );
        });
    }
  }, [selectedCharacter]);

  if (!selectedCharacter) {
    return null;
  }

  const characterSkills = skills.filter(
    (skill) => skill.character === selectedCharacter.name
  );

  return (
    <div className="character-description">
      <div className="character-portrait">
        <img src={selectedCharacter.image} alt={selectedCharacter.name} />
      </div>
      <div className="character-synergies-description">
        <h4>Synergies</h4>
        <ul>
          {selectedCharacter.synergies.map((synergy, index) => (
            <li
              key={index}
              className={`synergy-button-description ${
                activeSynergies.includes(synergy) ? "active" : ""
              }`}
              onClick={() => handleSynergyClick(synergy)}
            >
              {synergy}
            </li>
          ))}
        </ul>
      </div>
      <div className="character-details">
        <h3>{selectedCharacter.name}</h3>
        <p>{selectedCharacter.description}</p>
        <div className="character-strengths">
          <h4>Strengths</h4>
          <ul>
            {selectedCharacter.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>
        <div className="character-weaknesses">
          <h4>Weaknesses</h4>
          <ul>
            {selectedCharacter.weaknesses.map((weakness, index) => (
              <li key={index}>{weakness}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDescription;
