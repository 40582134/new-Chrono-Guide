// ../src/encyclopedia/Skills.jsx
import React, { useState, useEffect } from "react";
import Breadcrumbs from "../Breadcrumbs";
import mainBanner from "../assets/banners/mainBanner.png";
import SkillEntry from "./gridEntries/SkillEntry";
import SkillDetails from "./gridEntries/SkillDetails";
import skills from "./gridEntries/SkillsData";

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeSynergies, setActiveSynergies] = useState([]);
  const [synergySuggestions, setSynergySuggestions] = useState([]);
  const [hoveredTerm, setHoveredTerm] = useState(null);

  // Filter skills based on search term and active synergies
  const filteredSkills = skills.filter((skill) => {
    const nameMatch = skill.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const synergyMatch = activeSynergies.every((synergy) =>
      skill.synergies.includes(synergy)
    );
    return nameMatch && synergyMatch;
  });

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
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
      // Generate synergy suggestions based on search term
      const suggestions = Array.from(
        new Set(
          skills
            .flatMap((skill) => skill.synergies)
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

  const renderCastEffect = (castEffect) => {
    const parts = castEffect.split("Illusion Sword");
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index !== parts.length - 1 && (
              <span
                className="hoverable-term"
                onMouseEnter={() => setHoveredTerm("illusionSword")}
                onMouseLeave={() => setHoveredTerm(null)}
              >
                Illusion Sword
              </span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <main className="main-skills">
      <div className="skills">
        <Breadcrumbs location={location} />
        <div className="banner-image">
          <img src={mainBanner} alt="Banner" />
        </div>
        <h2 className="skills-section-title">Skills</h2>

        <SkillDetails
          selectedSkill={selectedSkill}
          activeSynergies={activeSynergies}
          handleSynergyClick={handleSynergyClick}
          hoveredTerm={hoveredTerm}
          setHoveredTerm={setHoveredTerm}
          renderCastEffect={renderCastEffect}
        />

        <hr className="skillz horizontal-divider" />

        <div className="skill-grid-section">
          <div className="search-bar-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search skills and filter by synergies..."
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

          <div className="skill-grid">
            {filteredSkills.map((skill) => (
              <SkillEntry
                key={skill.id}
                skill={skill}
                handleSkillClick={handleSkillClick}
                activeSynergies={activeSynergies}
                handleSynergyClick={handleSynergyClick}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
