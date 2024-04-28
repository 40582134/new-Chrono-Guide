import React, { useState, useEffect, useRef } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 20;
  const skillsSectionTitleRef = useRef(null);

  // Filter skills based on search term, character, and active synergies
  const filteredSkills = skills.filter((skill) => {
    const nameMatch = skill.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const characterMatch = skill.character
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const synergyMatch = activeSynergies.every((synergy) =>
      skill.synergies.includes(synergy)
    );
    return (nameMatch || characterMatch) && synergyMatch;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredSkills.length / entriesPerPage);

  // Get current page entries
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredSkills.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    skillsSectionTitleRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSynergyClick = (synergy) => {
    if (activeSynergies.includes(synergy)) {
      setActiveSynergies(activeSynergies.filter((s) => s !== synergy));
    } else {
      setActiveSynergies([...activeSynergies, synergy]);
      setCurrentPage(1); // Reset to the first page when a synergy tag is added
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCurrentPage(1); // Reset to the first page when the search term changes

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
      setCurrentPage(1); // Reset to the first page when a synergy suggestion is clicked
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

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="main-skills">
      <div className="skills">
        <Breadcrumbs location={location} />
        <div className="banner-image">
          <img src={mainBanner} alt="Banner" />
        </div>
        <h2 className="skills-section-title" ref={skillsSectionTitleRef}>
          Skills
        </h2>

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
            {currentEntries.map((skill) => (
              <SkillEntry
                key={skill.id}
                skill={skill}
                handleSkillClick={handleSkillClick}
                activeSynergies={activeSynergies}
                handleSynergyClick={handleSynergyClick}
              />
            ))}
          </div>
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <input
              type="number"
              value={currentPage}
              onChange={(e) => handlePageChange(Number(e.target.value))}
              min="1"
              max={totalPages}
            />
            <span>/ {totalPages}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
