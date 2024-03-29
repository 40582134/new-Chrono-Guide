import React, { useState, useEffect } from "react";

const CharacterGrid = ({
  filteredCharacters,
  activeSynergies,
  handleCharacterClick,
  handleSynergyTagClick,
}) => {
  const [characterImages, setCharacterImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const images = await Promise.all(
        filteredCharacters.map(async (character) => {
          try {
            const imageModule = await import(`${character.image}`);
            return { [character.id]: imageModule.default };
          } catch (error) {
            console.error(`Failed to load image: ${character.image}`, error);
            return { [character.id]: null };
          }
        })
      );
      setCharacterImages(Object.assign({}, ...images));
    };
    loadImages();
  }, [filteredCharacters]);

  return (
    <div className="character-grid" id="character-grid">
      {filteredCharacters.map((character) => (
        <div
          key={character.id}
          className="character-item"
          onClick={() => handleCharacterClick(character)}
        >
          <div className="character-image">
            <img src={character.image} alt={character.name} />
          </div>
          <h3>{character.name}</h3>
          <div className="character-synergies-grid">
            {character.synergies.map((synergy, index) => (
              <span
                key={index}
                className={`synergy-tag-grid ${
                  activeSynergies.includes(synergy) ? "active" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSynergyTagClick(synergy);
                }}
              >
                {synergy}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;
