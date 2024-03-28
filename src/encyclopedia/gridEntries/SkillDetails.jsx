// ../src/encyclopedia/gridEntries/SkillDetails.jsx
import React from "react";

const SkillDetails = ({
  selectedSkill,
  activeSynergies,
  handleSynergyClick,
  hoveredTerm,
  setHoveredTerm,
  renderCastEffect,
}) => {
  if (!selectedSkill) {
    return null;
  }

  const renderDetails = () => {
    return (
      <p className="hoverable-skills-details">
        {Object.entries(selectedSkill)
          .filter(
            ([key]) =>
              key !== "id" &&
              key !== "character" &&
              key !== "name" &&
              key !== "image" &&
              key !== "targetting" &&
              key !== "cost" &&
              key !== "stats01" &&
              key !== "stats02" &&
              key !== "castEffectLine01" &&
              key !== "castEffectLine02" &&
              key !== "castEffectLine03" &&
              key !== "synergies"
          )
          .map(([key, value]) => (
            <span
              key={key}
              className="hoverable-term"
              onMouseEnter={() => setHoveredTerm(key)}
              onMouseLeave={() => setHoveredTerm(null)}
            >
              {value}
            </span>
          ))
          .reduce((prev, curr) => [prev, " || ", curr])}
      </p>
    );
  };

  const renderTermExplanations = () => {
    return (
      <div className="term-explanations">
        {hoveredTerm === "Bloodthirst" && (
          <div className="term-explanation">
            <p>
              Attack: +33% - Received Healing: +33%. | Accute buff for the
              duration of the skill that inflicted it.
            </p>
          </div>
        )}
        {hoveredTerm === "Cannot be fixed" && (
          <div className="term-explanation">
            <p>
              Cannot be fixed: Cast Illusion Sword skills on all enemies equal
              to 90% of the cost of skills with Illusion Sword.
            </p>
          </div>
        )}
        {hoveredTerm === "Countdown" && (
          <div className="term-explanation">
            <p>
              Countdown: This skill will cast if X amount of skills are played
              or if you end turn. Works the same way as enemy action count.
            </p>
          </div>
        )}
        {hoveredTerm === "DetectWeakness" && (
          <div className="term-explanation">
            <p>
              Armour: -38% - Evade: - 15% | All stacks of this debuff are
              removed when the afflicated receives an attack
            </p>
          </div>
        )}
        {hoveredTerm === "Fear" && (
          <div className="term-explanation">
            <p>
              Armour: -10 - Evade: -10% - Speed: -1 - Receiving Critical Chance
              +15% | This debuff is active for three turns 3
            </p>
          </div>
        )}
        {hoveredTerm === "IgnoreTaunt" && (
          <div className="term-explanation">
            <p>Can target an enemy regardless of taunt.</p>
          </div>
        )}
        {hoveredTerm === "Once" && (
          <div className="term-explanation">
            <p>If used, remove from deck for this battle</p>
          </div>
        )}
        {hoveredTerm === "Overload" && (
          <div className="term-explanation">
            <p>Increases the mana cost of all non Swiftness Skills.</p>
          </div>
        )}
        {hoveredTerm === "Overheal" && (
          <div className="term-explanation">
            <p>Restores targets' hit points as well as their healing guage.</p>
          </div>
        )}
        {hoveredTerm === "PainDamage" && (
          <div className="term-explanation">
            <p>
              A form pf damage that ignores Armour and does not consume healing
              guage
            </p>
          </div>
        )}
        {hoveredTerm === "PriorityLowHP" && (
          <div className="term-explanation">
            <p>
              Prioritise the lowest hp ally/enemy as the target of this skill.
            </p>
          </div>
        )}
        {hoveredTerm === "RestoreHealingGauge" && (
          <div className="term-explanation">
            <p>
              Heals the targets hit points up to their healing guage cuttoff
              point. Increasing healing recieved passed that cuttoff requires
              overhealing, which restores the guage as well as the targets hit
              points.
            </p>
          </div>
        )}
        {hoveredTerm === "Swiftness" && (
          <div className="term-explanation">
            <p>Ignores enemy action count. Does not Overload.</p>
          </div>
        )}
        {hoveredTerm === "Tenacity" && (
          <div className="term-explanation">
            <p>
              Healing Guage Protection | 1 protection per stack. Attacks
              recieved remove 1 stack each.
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="skill-description">
      <h2 className="skill-title">{selectedSkill.name}</h2>
      <div className="skill-portrait-row">
        <div className="skill-portrait">
          <img
            className="skills-description-img"
            src={selectedSkill.image}
            alt={selectedSkill.name}
          />
        </div>
      </div>
      <div className="skill-details">
        <p className="targetting">{selectedSkill.targetting}</p>
        <p className="skill-cost">{selectedSkill.cost}</p>
        <div className="skill-synergies">
          {selectedSkill.synergies.map((synergy, index) => (
            <span
              key={index}
              className={`synergy-tag ${
                activeSynergies.includes(synergy) ? "active" : ""
              }`}
              onClick={() => handleSynergyClick(synergy)}
            >
              {synergy}
            </span>
          ))}
        </div>
        <p className="skill-stats">{selectedSkill.stats01}</p>
        <p className="skill-stats">{selectedSkill.stats02}</p>
        {renderDetails()}
        <p className="cast-effect">{selectedSkill.castEffectLine01}</p>
        <p className="cast-effect">{selectedSkill.castEffectLine02}</p>
        <p className="cast-effect">{selectedSkill.castEffectLine03}</p>
        {renderTermExplanations()}
      </div>
    </div>
  );
};

export default SkillDetails;
