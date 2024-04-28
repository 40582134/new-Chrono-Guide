import React from "react";

const renderTermExplanationsGlobal = (hoveredTerm) => {
  return (
    <div className="term-explanations">
      {hoveredTerm === "Absurdity" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Attack: +15% | Healing Power: +33%.
            </li>
            <br />
            <li className="modal-bullet01">
              Active until the end of the battle.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "AccuracyCap" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Defines the maximum Accuracy attainable for skills
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "AmplifyEvesAttack" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Eve Doll's Pincer attack: Additional damege: 5.
            </li>
            <br />
            <li className="modal-bullet01">
              Active until the end of the battle.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Aggro" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Aggro Defines the liklyhood of being attacked, the exact numbers
              behind this are unavailable to the player base but it has a
              noticible effect.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "ArmorReducedMC" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Debuff - Armour: - 33%.</li>
            <br />
            <li className="modal-bullet01">
              Active until all stacks are removed.
            </li>
            <br />
            <li className="modal-bullet01">
              1 Stack is removed on recieving a hit.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "ArmorReduced" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Debuff - Armour: - 25%.</li>
            <br />
            <li className="modal-bullet01">
              Active for the specified number of turns.
            </li>
            <br />
            <li className="modal-bullet01">Does not Stack.</li>
          </p>
        </div>
      )}
      {hoveredTerm === "BioticField" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Healing per stack - 4</li>
            <br />
            <li className="modal-bullet01">
              Active until the end of the battle.
            </li>
            <br />
            <li className="modal-bullet01">Heals at the start of the turn.</li>
            <br />
            <li className="modal-bullet01">Does not Stack.</li>
          </p>
        </div>
      )}
      {hoveredTerm === "BlackFog" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Black fog is invoked if a battle isnt concluded within a specified
              number of turns
            </li>
            <br />
            <li className="modal-bullet01">
              Black Fog's presence causes turn based pain damage to all
              investigators and affords the enemy party greater speed
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Bleeding" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Damage per stack - 7</li>
            <br />
            <li className="modal-bullet01">Active for 2 turns</li>
          </p>
        </div>
      )}
      {hoveredTerm === "Bloodthirst" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Attack: +33% - Received Healing: +33%.
            </li>
            <br />
            <li className="modal-bullet01">
              Active for a specified turn interval.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Burnt" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Damage Per Stack: 4.</li>
            <br />
            <li className="modal-bullet01">Active for 3 turns.</li>
          </p>
        </div>
      )}
      {hoveredTerm === "CannotBeFixed" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Cannot be fixed: Cast Illusion Sword skills on all enemies equal
              to 90% of the cost of skills with Illusion Sword.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "CannotUnnequip" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Once equiped to an investigator, cannot be unequiped by any means
            </li>
            <br />
            <li className="modal-bullet01">Applies to Equipment items only</li>
          </p>
        </div>
      )}
      {hoveredTerm === "CelestialWing" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Critical Hit Chance +25% | Evade: +5%
            </li>
            <br />
            <li className="modal-bullet01">
              Make a Prophecy whenever you draw after exchanging a skill.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "ChainHeal" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Healing that exceeds the target's healing gauge will also heal the
              lowest health ally.
            </li>
            <br />
            <li className="modal-bullet01">
              Otherwise, you cannot overheal yourself.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Critical" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Doubles the attached skill's Crit Rate %
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "ContinousRegenerationREVISE" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Healing per stack - 4.</li>
            <br />
            <li className="modal-bullet01">
              Active until the end of the battle.
            </li>
            <br />
            <li className="modal-bullet01">Heals at the start of the turn.</li>
            <br />
            <li className="modal-bullet01">Does not Stack.</li>
          </p>
        </div>
      )}
      {hoveredTerm === "Countdown" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Countdown: This skill will cast if X amount of skills are played
              or if you end turn. Works the same way as enemy action count.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "CursedEquipment" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              An attribute that attaches to equipment and negatively impacts the
              weilder.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === " DeathsDoor" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Deaths Door activates when an investigators health falls to 0 and
              below.
            </li>
          </p>
          <br />
          <p>
            <li className="modal-bullet01">
              At Deaths Door, an Ally can faint upon recieving damage from any
              source.
            </li>
          </p>
          <br />
          <p>
            <li className="modal-bullet01">
              Death's Door is escaped when an afflicated Ally's HP is elevated
              above 0.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === " DeathsDoorImmunity" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              At 2 stacks, prevents Health from falling bellow 1 once.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "DetectWeakness" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Debuff per stack - Armour: -19% - Evade: - 7.5%
            </li>
            <br />
            <li className="modal-bullet01">
              All stacks of this debuff are removed when the afflicated receives
              an attack
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Discard" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Moved from the hand to the discard pile within a specified turn
              limit
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "DismantleArmor" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Armour - 50%.</li>
            <br />
            <li className="modal-bullet01">
              Active until all stacks are removed.
            </li>
            <br />
            <li className="modal-bullet01">
              1 stack removed when the afflicted recieves damage.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Embrittlement" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Debuff Per Stack:</li>
            <br />
            <li className="modal-bullet01">Critical Hit Rate: -4%</li>
            <br />
            <li className="modal-bullet01">Debuff Resist: -20%</li>
            <br />
            <li className="modal-bullet01">Active for 4 turns</li>
          </p>
        </div>
      )}
      {hoveredTerm === "Enchant" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Apply a positive attribute to a piece of equipment,
            </li>
            <br />
            <li className="modal-bullet01">
              if an enchantment already exists, then overwrite it
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "EnhancedProphecy" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              The next skill drawn by Prophecy costs 1 less Mana.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "EvadeReduced" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Debuff per stack - Evade: -4%</li>
            <br />
            <li className="modal-bullet01">Active for three turns</li>
          </p>
        </div>
      )}
      {hoveredTerm === "EveDollAttack" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              When Sizz's Eve doll is equiped to a collegue that launches a
              single attack, Eve follows up with her own.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "EvesProtection" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Buff per stack - Protects Healing Guage.
            </li>
            <br />
            <li className="modal-bullet01">
              Active until Eve Doll switches ally.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Exclude" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              If used, exchanged, or discarded, remove from the deck for this
              battle.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "FaintResist" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              An investigator stat that decreases the liklyhood of fainting when
              hit at or below 0 HP
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "FaintStatus" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Faint status is potentially invoked whenever an investigartor is
              damaged by any means when at or below 0
            </li>
            <br />
            <li className="modal-bullet01">
              Fainted allies cannot act and are remomved from the party at the
              end of the current fight if not restored from it
            </li>
            <br />
            <li className="modal-bullet01">
              Faints occurance is determined by the investigators faint resist
              stat vs the base faint probability.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Fear" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Debuff per stack - Armour: -10 - Evade: -10% - Speed: -1 -
              Recieving Critical Chance +15%
            </li>
            <br />
            <li className="modal-bullet01">
              This debuff is active for three turns
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "FlameBarrier" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              When attacked, this buff is removed and applies Grievous Burn to
              the attacker.
            </li>
            <br />
            <li className="modal-bullet01">Active until removed.</li>
            <br />
            <li className="modal-bullet01">
              Grievous Burn -Success Rate: 108%.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "GrievousBurn" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Debuff per stack - Pain Resist: -14%.
            </li>
            <br />
            <li className="modal-bullet01">Damage per stack: 4.</li>
            <br />
            <li className="modal-bullet01">
              Active until all stacks are removed.
            </li>
            <br />
            <li className="modal-bullet01">
              1 Stack is removed at the end of the turn.
            </li>
            <br />
            <li className="modal-bullet01">
              Damage is inflicted at the end of the turn.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "HealingGaugeProtection" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Buff that prevents the target's HP guage from being reduced for a
              specified interval.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "HealingVapor" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Buff per stack - Heal 3</li>
            <br />
            <li className="modal-bullet01">
              Active until the end of the battle.
            </li>
            <br />
            <li className="modal-bullet01">Heals at the start of the turn.</li>
            <br />
            <li className="modal-bullet01">Does not Stack.</li>
          </p>
        </div>
      )}
      {hoveredTerm === "HeartPierce" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Upon Recieving a CC debuff, take 21 damage and remove this debuff
            </li>
            <br />
            <li className="modal-bullet01">Active for 3 turns.</li>
            <br />
            <li className="modal-bullet01">Does not trigger on expiry.</li>
          </p>
        </div>
      )}
      {hoveredTerm === "HiddenWalls" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Occassionaly are present on the map outside of combat
            </li>
            <br />
            <li className="modal-bullet01">If dispelled will reveal rewards</li>
            <br />
            <li className="modal-bullet01">
              Can currently be dispelled with Lifting Scrolls, Purification
              Scrolls, & Mapping Scrolls
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "HinderingAttack" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Eve Doll's Additional Attack: Crit Up - 100%.
            </li>
            <br />
            <li className="modal-bullet01">
              Active until the end of the turn.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Hungry" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              When Phoenix goes below 1 HP, instead of hitting Death's Door, he
              becomes Hungry
            </li>
            <br />
            <li className="modal-bullet01">
              Restoring Phoenixes HP above 0 removes Hungry.
            </li>
            <br />
            <li className="modal-bullet01">
              If Phoenix is Hungry, then he will elicit different harmful
              effects from his skills, most of which are harmful to his team.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "IgnoreTaunt" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Can target an enemy regardless of taunt.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "IllusionSword" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              If you use or discard a skill with this buff, create a 0 cost
              Illusiopn Sword attack in your hand.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "IncreasedHealingRecieved" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Buff per stack - Increased received healing: 33%.
            </li>
            <br />
            <li className="modal-bullet01">
              Removes 1/1 stack after recieving a heal.
            </li>
            <br />
            <li className="modal-bullet01">
              If applied with a healing skill, the buff resolves first and then
              the heal is applied.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Innate" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              If you set this skill as a fixed ability, it can be used
              regardless of another character casting their fixed ability.
            </li>
            <br />
            <li className="modal-bullet01">
              Its cooldown is also reduced by 1 turn.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Intoxication" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Debuff Per Stack:</li>
            <br />
            <li className="modal-bullet01">Damage: 4.</li>
            <br />
            <li className="modal-bullet01">Active for 3 turns.</li>
            <br />
            <li className="modal-bullet01">
              Damage takes effect at the end of the turn.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "MaxHealthIncreased" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Buff per stack - maximum Health +20%.
            </li>
            <br />
            <li className="modal-bullet01">
              Active until the end of the battle.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Once" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              If attached skill is used, remove from deck for this battle.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Overload" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Increases the mana cost of all non Swiftness Skills.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Overheal" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Restores targets' hit points as well as their healing guage.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "PainDamage" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              A form pf damage that ignores Armour and does not consume healing
              guage.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "PincerAttack" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Buff per stack - Eve & Eve Doll Attack: +20%.
            </li>
            <br />
            <li className="modal-bullet01">
              Active until all stacks are removed.
            </li>
            <br />
            <li className="modal-bullet01">
              1 stack is removed when the owner resolves a single target attack.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Preparation" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Whenever an enemy targets an ally, attack before the enemy and
              deal 11 damage to them.
            </li>
            <br />
            <li className="modal-bullet01">
              1 stack is removed when activated.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "PriorityLowHP" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Prioritise the lowest hp ally/enemy as the target of this skill.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Prophecy" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              The Prophecy Buff is applied to elligible cards when Pressel uses
              one of her skills or her passive to search the top cards of her
              deck and retireve the target card to hand.
            </li>
            <br />
            <li className="modal-bullet01">
              Skills with the Prophecy buff unlock unique effects.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "RecievingCritUp" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Debuff per stack - Recieving Crit Chance Up: 10%.
            </li>
            <br />
            <li className="modal-bullet01">Active for 4 turns.</li>
          </p>
        </div>
      )}
      {hoveredTerm === "RegenerationJ" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Healing per stack - 4.</li>
            <br />
            <li className="modal-bullet01">
              Active until the end of the battle.
            </li>
            <br />
            <li className="modal-bullet01">Heals at the start of the turn.</li>
            <br />
            <li className="modal-bullet01">Does not Stack.</li>
          </p>
        </div>
      )}
      {hoveredTerm === "Reforge" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">A campfire facility.</li>
            <br />
            <li className="modal-bullet01">
              Allows for sacrrificing two pieces of equipment to create a new
              on.
            </li>
            <br />
            <li className="modal-bullet01">
              The produced equipment will match the rarity of the lowest tier
              sacrifice
            </li>
            <br />
            <li className="modal-bullet01">
              Sacrrificed equipments are removed from the inventory
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Regeneration" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Overhealing per stack - 2.</li>
            <br />
            <li className="modal-bullet01">
              Loses a stack at the end of the turn.
            </li>
            <br />
            <li className="modal-bullet01">Heals at the start of the turn.</li>
          </p>
        </div>
      )}
      {hoveredTerm === "RelentlessSwipe" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Debuff per stack - Evade: -7% | Receiving Critical Chance: 15%
            </li>
            <br />
            <li className="modal-bullet01">Active for 3 turns.</li>
          </p>
        </div>
      )}
      {hoveredTerm === "RelicDisplayStand" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              A stantionary facility on the map typically encountered before
              boss fights
            </li>
            <br />
            <li className="modal-bullet01">
              Allows for activating the effects of relics
            </li>
            <br />
            <li className="modal-bullet01">
              Activate relic effects by placing them in the stall
            </li>
            <br />
            <li className="modal-bullet01">The stall has limited spaces</li>
          </p>
        </div>
      )}
      {hoveredTerm === "RestoreHealingGauge" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Heals the targets hit points up to their healing guage cuttoff
              point. Increasing healing recieved passed that cuttoff requires
              overhealing, which restores the guage as well as the targets hit
              points.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Screach" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Maximum Health: +20% - Aggro Increased.
            </li>
            <br />
            <li className="modal-bullet01">
              Active until the end of the battle.
            </li>
            <br />
            <li className="modal-bullet01">Does not Stack.</li>
          </p>
        </div>
      )}
      {hoveredTerm === "ShiningAura" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Skills in hand that cost 0 mana gain 100% Critical Rate.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "StrikeBack" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Eve Doll counter attacks when an ally with Eve Doll recieves an
              attack.
            </li>
            <br />
            <li className="modal-bullet01">
              Removes Buff after triggering once.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Stun" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Cannot take action</li>
            <br />
            <li className="modal-bullet01">Active for 2 turns</li>
          </p>
        </div>
      )}
      {hoveredTerm === "Swiftness" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Ignores enemy action count. Does not Overload.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "SynergyUpgrade" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Synergy Upgrades pertain to a selected skill and serves to enhance
              them in varied ways dependiong on the upgrade applied.
            </li>
            <br />
            <li className="modal-bullet01">
              Invoking a Syenergy Upgrade provides a choice of 2 upgrades to
              select from and apply to the selected skill.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Tenacity" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Healing Guage Protection</li>
            <br />
            <li className="modal-bullet01">
              1 protection per stack. Attacks recieved remove 1 stack each.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Taunt" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Only the afflicted member can be targetted for attacks by the
              opposing team.
            </li>
            <br />
            <li className="modal-bullet01">
              Active for a specified number of turns.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "Taunted" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Target is taunted by the skill's caster.
            </li>
            <br />
            <li className="modal-bullet01">
              Removed when another colleague attacks the afflicted.
            </li>
            <br />
            <li className="modal-bullet01">
              Active for 4 turns or until stacks are removed.
            </li>
            <br />
            <li className="modal-bullet01">
              1 stack is removed when the afflicted launches an attack agianst
              the skills caster.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "UndyingSanctuary" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              All allies health cannot fall bellow 0.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "UnrecoverableRelic" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Relic Attribute specifying that onc eit is placed in any Relic
              Stand, it cannot be removed by any means from that spot
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "VeiliedSword" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">Armour: +33%</li>
            <br />
            <li className="modal-bullet01">
              When attacked, remove 1 stack and cast Illusion Sword to all
              enemies for 7 damage each.
            </li>
          </p>
        </div>
      )}
      {hoveredTerm === "WhatchaLookinAt" && (
        <div className="term-explanation">
          <p>
            <li className="modal-bullet01">
              Attack: +33% | Critical Hit Chance: -100% | Accuracy: -50%
            </li>
            <br />
          </p>
        </div>
      )}
    </div>
  );
};

export default renderTermExplanationsGlobal;
