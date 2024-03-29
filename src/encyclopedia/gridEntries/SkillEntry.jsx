import React, { useState, useEffect } from "react";

const SkillEntry = ({
  skill,
  handleSkillClick,
  activeSynergies,
  handleSynergyClick,
}) => {
  const [skillImage, setSkillImage] = useState(null);

  useEffect(() => {
    import(`${skill.image}`)
      .then((image) => {
        setSkillImage(image.default);
      })
      .catch((error) => {
        console.error(`Failed to load image: ${skill.image}`, error);
      });
  }, [skill.image]);

  return (
    <div
      key={skill.id}
      className="skill-item"
      onClick={() => handleSkillClick(skill)}
    >
      <div className="skill-image">
        <img src={skill.image} alt={skill.name} />
      </div>
      <h3 className="grid-skill-title">{skill.name}</h3>
      <div className="skill-synergies">
        {skill.synergies.map((synergy, index) => (
          <span
            key={index}
            className={`synergy-tag ${
              activeSynergies.includes(synergy) ? "active" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handleSynergyClick(synergy);
            }}
          >
            {synergy}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillEntry;
