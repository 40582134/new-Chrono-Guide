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
              key !== "stats03" &&
              key !== "stats04" &&
              key !== "castEffectLine01" &&
              key !== "castEffectLine02" &&
              key !== "castEffectLine03" &&
              key !== "castEffectLine04" &&
              key !== "castEffectLine05" &&
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
        {hoveredTerm === "Absurdity" && (
          <div className="term-explanation">
            <p>
              Attack: +15% | Healing Power: +33%.
              <br />
              Active until the end of the battle.
            </p>
          </div>
        )}
        {hoveredTerm === "AmplifyEvesAttack" && (
          <div className="term-explanation">
            <p>
              Eve Doll's Pincer attack: Additional damege: 5.
              <br />
              Active until the end of the battle.
            </p>
          </div>
        )}
        {hoveredTerm === "Aggro" && (
          <div className="term-explanation">
            <p>
              Aggro Defines the liklyhood of being attacked, the exact numbers
              behind this are unavailable to the player base but it has a
              noticible effect.
            </p>
          </div>
        )}
        {hoveredTerm === "ArmorReducedMC" && (
          <div className="term-explanation">
            <p>
              Debuff - Armour: - 33%.
              <br />
              Active until all stacks are removed.
              <br /> 1 Stack is removed on recieving a hit.
            </p>
          </div>
        )}
        {hoveredTerm === "ArmorReduced" && (
          <div className="term-explanation">
            <p>
              Debuff - Armour: - 25%.
              <br />
              Active for the specified number of turns.
              <br />
              Does not Stack.
            </p>
          </div>
        )}
        {hoveredTerm === "BioticField" && (
          <div className="term-explanation">
            <p>
              Healing per stack - 4 <br /> Active until the end of the battle.
              <br /> Heals at the start of the turn. <br /> Does not Stack.
            </p>
          </div>
        )}
        {hoveredTerm === "Bleeding" && (
          <div className="term-explanation">
            <p>
              Damage per stack - 7 <br /> Active for 2 turns
            </p>
          </div>
        )}
        {hoveredTerm === "Bloodthirst" && (
          <div className="term-explanation">
            <p>
              Attack: +33% - Received Healing: +33%. <br /> Active for a
              specified turn interval.
            </p>
          </div>
        )}
        {hoveredTerm === "Burnt" && (
          <div className="term-explanation">
            <p>
              Damage Per Stack: 4. <br /> Active for 3 turns.
            </p>
          </div>
        )}
        {hoveredTerm === "CannotBeFixed" && (
          <div className="term-explanation">
            <p>
              Cannot be fixed: Cast Illusion Sword skills on all enemies equal
              to 90% of the cost of skills with Illusion Sword.
            </p>
          </div>
        )}
        {hoveredTerm === "CelestialWing" && (
          <div className="term-explanation">
            <p>
              Critical Hit Chance +25% | Evade: +5% <br /> Make a Prophecy
              whenever you draw after exchanging a skill.
            </p>
          </div>
        )}
        {hoveredTerm === "ChainHeal" && (
          <div className="term-explanation">
            <p>
              Healing that exceeds the target's healing gauge will also heal the
              lowest health ally.
              <br />
              Otherwise, you cannot overheal yourself.
            </p>
          </div>
        )}
        {hoveredTerm === "Critical" && (
          <div className="term-explanation">
            <p>Doubles the attached skill's Crit Rate %</p>
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
        {hoveredTerm === " DeathsDoorImmunity" && (
          <div className="term-explanation">
            <p>At 2 stacks, prevents Health from falling bellow 1 once.</p>
          </div>
        )}
        {hoveredTerm === "DetectWeakness" && (
          <div className="term-explanation">
            <p>
              Debuff per stack - Armour: -19% - Evade: - 7.5% <br /> All stacks
              of this debuff are removed when the afflicated receives an attack
            </p>
          </div>
        )}
        {hoveredTerm === "Discard" && (
          <div className="term-explanation">
            <p>
              Moved from the hand to the discard pile within a specified turn
              limit
            </p>
          </div>
        )}
        {hoveredTerm === "DismantleArmor" && (
          <div className="term-explanation">
            <p>
              Armour - 50%. <br /> Active until all stacks are removed. <br /> 1
              stack removed when the afflicted recieves damage.
            </p>
          </div>
        )}
        {hoveredTerm === "Embrittlement" && (
          <div className="term-explanation">
            <p>
              Debuff Per Stack:
              <br />
              Critical Hit Rate: -4% <br /> Debuff Resist: -20% <br /> Active
              for 4 turns
            </p>
          </div>
        )}
        {hoveredTerm === "EnhancedProphecy" && (
          <div className="term-explanation">
            <p>The next skill drawn by Prophecy costs 1 less Mana.</p>
          </div>
        )}
        {hoveredTerm === "EvadeReduced" && (
          <div className="term-explanation">
            <p>
              Debuff per stack - Evade: -4% <br /> Active for three turns
            </p>
          </div>
        )}
        {hoveredTerm === "EveDollAttack" && (
          <div className="term-explanation">
            <p>
              When Sizz's Eve doll is equiped to a collegue that launches a
              single attack, Eve follows up with her own.
            </p>
          </div>
        )}
        {hoveredTerm === "EvesProtection" && (
          <div className="term-explanation">
            <p>
              Buff per stack - Protects Healing Guage. <br /> Active until Eve
              Doll switches ally.
            </p>
          </div>
        )}
        {hoveredTerm === "Exclude" && (
          <div className="term-explanation">
            <p>
              If used, exchanged, or discarded, remove from the deck for this
              battle.
            </p>
          </div>
        )}
        {hoveredTerm === "Fear" && (
          <div className="term-explanation">
            <p>
              Debuff per stack - Armour: -10 - Evade: -10% - Speed: -1 -
              Recieving Critical Chance +15% <br /> This debuff is active for
              three turns 3
            </p>
          </div>
        )}
        {hoveredTerm === "FlameBarrier" && (
          <div className="term-explanation">
            <p>
              When attacked, this buff is removed and applies Grievous Burn to
              the attacker. <br /> Active until removed. <br /> Grievous Burn -
              Success Rate: 108%.
            </p>
          </div>
        )}
        {hoveredTerm === "GrievousBurn" && (
          <div className="term-explanation">
            <p>
              Debuff per stack - Pain Resist: -14%.
              <br>Damage per stack: 4.</br>
              Active until all stacks are removed. <br /> 1 Stack is removed at
              the end of the turn. <br /> Damage is inflicted at the end of the
              turn.
            </p>
          </div>
        )}
        {hoveredTerm === "HealingGuageProtection" && (
          <div className="term-explanation">
            <p>
              Buff that prevents the target's HP guage from being reduced for a
              specified interval.
            </p>
          </div>
        )}
        {hoveredTerm === "HealingVapor" && (
          <div className="term-explanation">
            <p>
              Buff per stack - Heal 3 <br /> Active until the end of the battle.
              <br />
              Heals at the start of the turn. <br /> Does not Stack.
            </p>
          </div>
        )}
        {hoveredTerm === "HeartPierce" && (
          <div className="term-explanation">
            <p>
              Upon Recieving a CC debuff, take 21 damage and remove this debuff
              <br /> Active for 3 turns. <br /> Does not trigger on expiry.
            </p>
          </div>
        )}
        {hoveredTerm === "HinderingAttack" && (
          <div className="term-explanation">
            <p>
              Eve Doll's Additional Attack: Crit Up - 100%. <br /> Active until
              the end of the turn.
            </p>
          </div>
        )}
        {hoveredTerm === "Hungry" && (
          <div className="term-explanation">
            <p>
              When Phoenix goes below 1 HP, instead of hitting Death's Door, he
              becomes Hungry <br /> Restoring Phoenixes HP above 0 removes
              Hungry. <br /> If Phoenix is Hungry, then he will elicit different
              harmful effects from his skills, most of which are harmful to his
              team.
            </p>
          </div>
        )}
        {hoveredTerm === "IgnoreTaunt" && (
          <div className="term-explanation">
            <p>Can target an enemy regardless of taunt.</p>
          </div>
        )}
        {hoveredTerm === "IllusionSword" && (
          <div className="term-explanation">
            <p>
              If you use or discard a skill with this buff, create a 0 cost
              Illusiopn Sword attack in your hand.
            </p>
          </div>
        )}
        {hoveredTerm === "IncreasedHealingRecieved" && (
          <div className="term-explanation">
            <p>
              Buff per stack - Increased received healing: 33%. <br /> Removes
              1/1 stack after recieving a heal. <br /> If applied with a healing
              skill, the buff resolves first and then the heal is applied. stack
              after heal.
            </p>
          </div>
        )}
        {hoveredTerm === "Innate" && (
          <div className="term-explanation">
            <p>
              If you set this skill as a fixed ability, it can be used
              regardless of another character casting their fixed ability.
              <br /> Its cooldown is also reduced by 1 turn.
            </p>
          </div>
        )}
        {hoveredTerm === "Intoxication" && (
          <div className="term-explanation">
            <p>
              Debuff Per Stack: <br /> Damage: 4. <br /> Active for 3 turns.
              <br /> Damage takes effect at the end of the turn.
            </p>
          </div>
        )}
        {hoveredTerm === "MaxHealthIncreased" && (
          <div className="term-explanation">
            <p>
              Buff per stack - maximum Health +20%. <br /> Active until the end
              of the battle.
            </p>
          </div>
        )}
        {hoveredTerm === "Once" && (
          <div className="term-explanation">
            <p>If attached skill is used, remove from deck for this battle.</p>
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
              guage.
            </p>
          </div>
        )}
        {hoveredTerm === "PincerAttack" && (
          <div className="term-explanation">
            <p>
              Buff per stack - Eve & Eve Doll Attack: +20%. <br /> Active until
              all stacks are removed.
              <br /> 1 stack is removed when the owner resolves a single target
              attack.
            </p>
          </div>
        )}
        {hoveredTerm === "Preparation" && (
          <div className="term-explanation">
            <p>
              Whenever an enemy targets an ally, attack before the enemy and
              deal 11 damage to them. <br /> 1 stack is removed when activated.
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
        {hoveredTerm === "Prophecy" && (
          <div className="term-explanation">
            <p>
              The Prophecy Buff is applied to elligible cards when Pressel uses
              one of her skills or her passive to search the top cards of her
              deck and retireve the target card to hand. <br /> Skills with the
              Prophecy buff unlock unique effects.
            </p>
          </div>
        )}
        {hoveredTerm === "RecievingCritUp" && (
          <div className="term-explanation">
            <p>
              Debuff per stack - Recieving Crit Chance Up: 10%. <br /> Active
              for 4 turns.
            </p>
          </div>
        )}
        {hoveredTerm === "RegenerationJ" && (
          <div className="term-explanation">
            <p>
              Healing per stack - 4. <br /> Active until the end of the battle.
              <br /> Heals at the start of the turn. <br /> Does not Stack.
            </p>
          </div>
        )}
        {hoveredTerm === "Regeneration" && (
          <div className="term-explanation">
            <p>
              Overhealing per stack - 2. <br /> Loses a stack at the end of the
              turn. <br />
              Heals at the start of the turn.
            </p>
          </div>
        )}
        {hoveredTerm === "RelentlessSwipe" && (
          <div className="term-explanation">
            <p>
              Debuff per stack - Evade: -7% | Receiving Critical Chance: 15%
              <br /> Active for 3 turns.
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
        {hoveredTerm === "Screach" && (
          <div className="term-explanation">
            <p>
              Maximum Health: +20% - Aggro Increased. <br /> Active until the
              end of the battle. <br /> Does not Stack.
            </p>
          </div>
        )}
        {hoveredTerm === "ShiningAura" && (
          <div className="term-explanation">
            <p>Skills in hand that cost 0 mana gain 100% Critical Rate.</p>
          </div>
        )}
        {hoveredTerm === "StrikeBack" && (
          <div className="term-explanation">
            <p>
              Eve Doll counter attacks when an ally with Eve Doll recieves an
              attack.
              <br /> Removes Buff after triggering once.
            </p>
          </div>
        )}
        {hoveredTerm === "Stun" && (
          <div className="term-explanation">
            <p>
              Cannot take action <br /> Active for 2 turns
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
              Healing Guage Protection <br /> 1 protection per stack. Attacks
              recieved remove 1 stack each.
            </p>
          </div>
        )}
        {hoveredTerm === "Taunt" && (
          <div className="term-explanation">
            <p>
              Only the afflicted member can be targetted for attacks by the
              opposing team. <br /> Active for a specified number of turns.
            </p>
          </div>
        )}
        {hoveredTerm === "Taunted" && (
          <div className="term-explanation">
            <p>
              Target is taunted by the skill's caster. <br /> Removed when
              another colleague attacks the afflicted.
              <br /> Active for 4 turns or until stacks are removed. <br /> 1
              stack is removed when the afflicted launches an attack agianst the
              skills caster.
            </p>
          </div>
        )}
        {hoveredTerm === "UndyingSanctuary" && (
          <div className="term-explanation">
            <p>All allies health cannot fall bellow 0.</p>
          </div>
        )}
        {hoveredTerm === "VeiliedSword" && (
          <div className="term-explanation">
            <p>
              Armour: +33% <br />
              When attacked, remove 1 stack and cast Illusion Sword to all
              enemies for 7 damage each.
            </p>
          </div>
        )}
        {hoveredTerm === "WhatchaLookinAt" && (
          <div className="term-explanation">
            <p>
              Attack: +33% | Critical Hit Chance: -100% | Accuracy: -50% <br />
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
        <p className="targetting-skills">{selectedSkill.targetting}</p>
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
        {renderDetails()}
        <p className="skill-stats">{selectedSkill.stats01}</p>
        <p className="skill-stats">{selectedSkill.stats02}</p>
        <p className="skill-stats">{selectedSkill.stats03}</p>
        <p className="skill-stats">{selectedSkill.stats04}</p>
        <p className="cast-effect">{selectedSkill.castEffectLine01}</p>
        <p className="cast-effect">{selectedSkill.castEffectLine02}</p>
        <p className="cast-effect">{selectedSkill.castEffectLine03}</p>
        <p className="cast-effect">{selectedSkill.castEffectLine04}</p>
        <p className="cast-effect">{selectedSkill.castEffectLine05}</p>
        {renderTermExplanations()}
      </div>
    </div>
  );
};

export default SkillDetails;
