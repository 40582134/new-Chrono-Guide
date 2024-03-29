import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../Breadcrumbs";
import mainBanner from "../assets/banners/mainBanner.png";
import SkillModal from "./gridEntries/SkillModal";
import skills from "./gridEntries/SkillsData";
import characters from "./gridEntries/CharactersData";
import CharacterGrid from "./gridEntries/CharacterGrid";
import CharacterDescription from "./gridEntries/CharacterDescription";

const Characters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [activeSynergies, setActiveSynergies] = useState([]);
  const [synergySuggestions, setSynergySuggestions] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [currentSkillPage, setCurrentSkillPage] = useState(1);
  const skillsPerPage = 8;
  const [characterImage, setCharacterImage] = useState(null);
  const charactersTitleRef = useRef(null);

  const filteredCharacters = characters.filter((character) => {
    const nameMatch = character.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const synergyMatch = activeSynergies.every((synergy) =>
      character.synergies.includes(synergy)
    );
    return nameMatch && synergyMatch;
  });

  const characterSkills = skills.filter((skill) => skill.character === "Hein");

  useEffect(() => {
    const characterGrid = document.getElementById("character-grid");
    characterGrid.scrollIntoView({ behavior: "smooth" });
  }, [activeSynergies]);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    setCharacterImage(null);

    import(`${character.image}`)
      .then((image) => {
        setCharacterImage(image.default);
      })
      .catch((error) => {
        console.error(`Failed to load image: ${character.image}`, error);
      });

    charactersTitleRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSynergyClick = (synergy) => {
    if (activeSynergies.includes(synergy)) {
      setActiveSynergies(activeSynergies.filter((s) => s !== synergy));
    } else {
      setActiveSynergies([...activeSynergies, synergy]);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      setSynergySuggestions([]);
    } else {
      const suggestions = Array.from(
        new Set(
          characters
            .flatMap((character) => character.synergies)
            .filter((synergy) =>
              synergy.toLowerCase().startsWith(value.toLowerCase())
            )
        )
      ).slice(0, 5);
      setSynergySuggestions(suggestions);
    }
  };

  const handleSynergySuggestionClick = (suggestion) => {
    setSearchTerm("");
    setSynergySuggestions([]);
    if (!activeSynergies.includes(suggestion)) {
      setActiveSynergies([...activeSynergies, suggestion]);
    }
  };

  const handleSynergyTagClick = (synergy) => {
    if (activeSynergies.includes(synergy)) {
      setActiveSynergies(activeSynergies.filter((s) => s !== synergy));
    } else {
      setActiveSynergies([...activeSynergies, synergy]);
    }
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeSkillModal = () => {
    setSelectedSkill(null);
  };

  const handleSkillPageChange = (page) => {
    setCurrentSkillPage(page);
  };

  const renderSkills = () => {
    const startIndex = (currentSkillPage - 1) * skillsPerPage;
    const endIndex = startIndex + skillsPerPage;
    const currentSkills = characterSkills.slice(startIndex, endIndex);
    const totalPages = Math.ceil(characterSkills.length / skillsPerPage);

    return (
      <div className="character-skills">
        <h3>Skills</h3>
        <div className="skill-grid">
          {Array.from(
            { length: Math.ceil(currentSkills.length / 2) },
            (_, rowIndex) => (
              <div key={rowIndex} className="skill-row">
                {currentSkills
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((skill, index) => (
                    <div
                      key={index}
                      className="skill-item"
                      onClick={() => handleSkillClick(skill)}
                    >
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                  ))}
              </div>
            )
          )}
        </div>
        <div className="skill-pagination">
          <button
            className="pagination-arrow"
            onClick={() => handleSkillPageChange(currentSkillPage - 1)}
            disabled={currentSkillPage === 1}
          >
            &lt;
          </button>
          <span>
            Page {currentSkillPage}/{totalPages}
          </span>
          <button
            className="pagination-arrow"
            onClick={() => handleSkillPageChange(currentSkillPage + 1)}
            disabled={currentSkillPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    );
  };

  return (
    <main className="main-characters">
      <div className="characters">
        <Breadcrumbs location={location} />
        <div className="banner-image">
          <img src={mainBanner} alt="Banner" />
        </div>
        <h2 className="characters-title" ref={charactersTitleRef}>
          Characters
        </h2>
        <CharacterDescription
          selectedCharacter={selectedCharacter}
          characterImage={characterImage}
          activeSynergies={activeSynergies}
          handleSynergyClick={handleSynergyClick}
        />
        <hr className="horizontal-divider" />
        <div className="character-grid-section">
          <div className="search-bar-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search characters and filter by synergies..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {synergySuggestions.length > 0 && (
                <ul className="synergy-suggestions">
                  {synergySuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSynergySuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="active-synergies">
              {activeSynergies.map((synergy, index) => (
                <span
                  key={index}
                  className="active-synergy"
                  onClick={() => handleSynergyClick(synergy)}
                >
                  {synergy} <span className="remove-synergy">x</span>
                </span>
              ))}
            </div>
          </div>
          <CharacterGrid
            filteredCharacters={filteredCharacters}
            activeSynergies={activeSynergies}
            handleCharacterClick={handleCharacterClick}
            handleSynergyTagClick={handleSynergyTagClick}
          />
        </div>
        <SkillModal
          isOpen={selectedSkill !== null}
          onRequestClose={closeSkillModal}
          selectedSkill={selectedSkill}
        />
      </div>
    </main>
  );
};

export default Characters;
