import relic01VigilOfAnOldHero from "../../assets/relicImgs/relic01-Vigil-Of-An-Old-Hero.png";
import relic03LastFlame from "../../assets/relicImgs/relic03-Last-Flame.png";
import relic05WhiteMoonlight from "../../assets/relicImgs/relic05-White-Moonlight.png";
import relic06BlackMoonlight from "../../assets/relicImgs/relic06-Black-Moonlight.png";
import relic07AncientShield from "../../assets/relicImgs/relic07-Ancient-Shield.png";
import relic09ManaFlare from "../../assets/relicImgs/relic09-Mana-Flare.png";
import relic11PurificationStone from "../../assets/relicImgs/relic11-Purification-Stone.png";
import relic15ShadowOrb from "../../assets/relicImgs/relic15-Shadow-Orb.png";
import relic16RemnantOfMaddness from "../../assets/relicImgs/relic16-Remnant-Of-Maddness.png";
import relic17GlowingStine from "../../assets/relicImgs/relic17-Glowing-Stine.png";
import relic20WitchesCurse from "../../assets/relicImgs/relic20-Witches-Curse.png";
import relic21AtomicReactor from "../../assets/relicImgs/relic21-Atomic-Reactor.png";
import relic22FirecrackerCannonBall from "../../assets/relicImgs/relic22-Firecracker-Cannon-Ball.png";
import relic23PurifyingCrystal from "../../assets/relicImgs/relic23-Purifying-Crystal.png";
import relic24BlackRabbitDoll from "../../assets/relicImgs/relic24-Black-Rabbit-Doll.png";
import relic25TheJocker from "../../assets/relicImgs/relic25-The-Jocker.png";
import relic26MindsEye from "../../assets/relicImgs/relic26-Minds-Eye.png";
import relic28SkeletonKey from "../../assets/relicImgs/relic28-Skeleton-Key.png";
import relic37SharkFin from "../../assets/relicImgs/relic37-Shark-Fin.png";
import relic39FrozenFan from "../../assets/relicImgs/relic39-Frozen-Fan.png";
import relic44WisdomToothJar from "../../assets/relicImgs/relic44-Wisdom-Tooth-Jar.png";
import relic45FogTotem from "../../assets/relicImgs/relic45-Fog-Totem.png";
import relic46DarkMagiciansSkull from "../../assets/relicImgs/relic46-Dark-Magicians-Skull.png";
import relic47ThornyStem from "../../assets/relicImgs/relic47-Thorny-Stem.png";
import relic48CheeseCake from "../../assets/relicImgs/relic48-Cheese-Cake.png";
import relic49Hipsack from "../../assets/relicImgs/relic49-Hipsack.png";
import relic52RedCheerryBlossom from "../../assets/relicImgs/relic52-Red-Cheery-Blossom.png";
import relic61BattleFlag from "../../assets/relicImgs/relic61-Battle-Flag.png";
import relic62FlamingOilBarrel from "../../assets/relicImgs/relic62-Flaming-Oil-Barrel.png";
import relic63CCBadge from "../../assets/relicImgs/relic63-CC-Badge.png";
import relic63PainBadge from "../../assets/relicImgs/relic63-Pain-Badge.png";
import relic64IVBag from "../../assets/relicImgs/relic64-IV-Bag.png";
import relic66WeaponCase from "../../assets/relicImgs/relic66-Weapon-Case.png";
import relic68MagicCrystal from "../../assets/relicImgs/relic68-Magic-Crystal.png";
import relic69DarkFlag from "../../assets/relicImgs/relic69-Dark-Flag.png";
import relic70Superconductor from "../../assets/relicImgs/relic70-Superconductor.png";
import relic71WitheredBranch from "../../assets/relicImgs/relic71-Withered-Branch.png";
import relic75AngelsPotion from "../../assets/relicImgs/relic75-Angels-Potion.png";
import relic76MarkOfDeath from "../../assets/relicImgs/relic76-Mark-Of-Death.png";
import relic78GoldLeaf from "../../assets/relicImgs/relic78-Gold-Leaf.png";
import relic81SacredCross from "../../assets/relicImgs/relic81-Sacred-Cross.png";
import relic85ReapersTiara from "../../assets/relicImgs/relic85-Reapers-Tiara.png";

const relics = [
  {
    id: 1,
    name: "Vigil of an Old Hero",
    image: relic01VigilOfAnOldHero,
    effect01:
      "Activation Condition - Whenever the party has 4 Investigators in the party while this relic is in the Relic Stand",
    effect02: "View all class skills of all party members and learn 2",
    UnrecoverableRelic: "Unrecoverable Relic",
  },
  {
    id: 3,
    name: "Last Flame",
    image: relic03LastFlame,
    effect01: "Increase Investigators Faint Resist by 33%",
    effect02: "Heal up to 10 HP when an investigator receives lethel damage",
    elaboration02: "The heal effect activates once per battle",
    FaintStatus: "Faint Status",
    FaintResist: "Faint Resist",
  },
  {
    id: 5,
    name: "White Moonlight",
    image: relic05WhiteMoonlight,
    effect01: "Ally Debuff application Success Rate +15%",
    effect02: "Ally Accuracy +3%",
  },
  {
    id: 6,
    name: "Black Moonlight",
    image: relic06BlackMoonlight,
    effect01: "Ally Debuff Resistance +15%",
    effect02: "Ally Evade +3%",
  },
  {
    id: 7,
    name: "Ancient Shield",
    image: relic07AncientShield,
    effect01: "Create a team barrier of 7",
    effect02:
      "Increase the value of that barrier by 3 for every boss defeated in this run",
  },
  {
    id: 9,
    name: "Mana Flare",
    image: relic09ManaFlare,
    effect01: "Gain 2 Mana at the start of every battle",
  },
  {
    id: 11,
    name: "Purification Stone",
    image: relic11PurificationStone,
    effect01: "Equipment can no longer become Cursed",
    effect02: "Incerase the chance of finding enchanted equipment",
    CursedEquipment: "Cursed Equipment",
    Enchant: "Enchant",
  },
  {
    id: 15,
    name: "Shadow Orb",
    image: relic15ShadowOrb,
    effect01:
      "If there are 2=< skills in hand when you cast a skill from hand, draw another one",
  },
  {
    id: 16,
    name: "Remnant Of Maddness",
    image: relic16RemnantOfMaddness,
    effect01:
      "Whenever damage to an enemy exceeds their remaining health, store that remaining value and add it to the next attack or healing skill played from hand",
    elaboration01: "The stored value cannot exceed 50.",
  },
  {
    id: 17,
    name: "Glowing Stone",
    image: relic17GlowingStine,
    effect01: "Nulify Pain Damage and enemy speed gained from Black Fog",
    PainDamage: "Pain Damage",
    BlackFog: "Black Fog",
  },
  {
    id: 22,
    name: "Firecracker Cannon Ball",
    image: relic22FirecrackerCannonBall,
    effect01:
      "Deal 40 damage to all enemies the first time that the Black Fog is invoked during a battle",
    BlackFog: "Black Fog",
  },
  {
    id: 23,
    name: "Purifying Crystal",
    image: relic23PurifyingCrystal,
    effect01:
      "At the start of boss battles, gain a Lucy Skill that overheals an ally for 50% of their Max HP and dispells all their debuffs",
    Overheal: "Overheal",
  },
  {
    id: 24,
    name: "Black Rabbit Doll",
    image: relic24BlackRabbitDoll,
    effect01: "Obtain 80% of unused Gold from previous playthroughs",
    elaboration01: "using this relic resets the accumulated Gold",
    UnrecoverableRelic: "UnrecoverableRelic",
  },
  {
    id: 26,
    name: "Minds Eye",
    image: relic26MindsEye,
    effect01: "Remove Accuracy cap from allies",
    effect02: "Apply a 90% Accuracy cap to all enemies",
    AccuracyCap: "Accuracy Cap",
  },
  {
    id: 28,
    name: "Skeleton Key",
    image: relic28SkeletonKey,
    effect01: "Recieve 5 Keys",
  },
  {
    id: 37,
    name: "Shark Fin",
    image: relic37SharkFin,
    effect01: "View 5 Purple Tier equipment and select 1 to obtain",
    UnrecoverableRelic: "UnrecoverableRelic",
  },
  {
    id: 39,
    name: "Frozen Fan",
    image: relic39FrozenFan,
    effect01: "At the start of every battle, all 1=< cost skills gain 5 damage",
    elaboration01: "This damage is revoked at the end of the battle",
  },
  {
    id: 44,
    name: "Wisdom Tooth Jar",
    image: relic44WisdomToothJar,
    effect01: "All Allies Debuff Accuracy -33%",
    effect01:
      "When an enemy resists a Pain Debuff, inflict the equivalent damage total over the applicable turns immediately to the enemy",
    elaboration01:
      "Example: Pain Damage Debuff -6 hp over 3 turns = 18 damage total",
    PainDamage: "Pain Damage",
  },
  {
    id: 45,
    name: "Fog Totem",
    image: relic45FogTotem,
    effect01:
      "When the Fog Arrives, Restore all allies healing gauge and grant them Healing Gauge Protection",
    HealingGaugeProtection: "Healing Gauge Protection",
  },
  {
    id: 46,
    name: "Dark Magicians Skull",
    image: relic46DarkMagiciansSkull,
    effect01: "Black Fog Invocation turn requirement is halved",
    effect02:
      "Enemies recieve 25% more damage from all sources while Black Fog is active",
    BlackFog: "Black Fog",
  },
  {
    id: 47,
    name: "Thorny Stem",
    image: relic47ThornyStem,
    effect01:
      "Whenever you apply a Stun Debuff to an enemy, additionally Apply a 50% increased Damage Recieved Debuff to them for 1 damage instance",
    Stun: "Stun",
  },
  {
    id: 48,
    name: "Cheese Cake",
    image: relic48CheeseCake,
    effect01: "Increase all allies Max HP by 6",
    UnrecoverableRelic: "UnrecoverableRelic",
  },
  {
    id: 49,
    name: "Hipsack",
    image: relic49Hipsack,
    effect01: "At the start of every battle, draw 1 additional card",
    effect02:
      "Whenever 20 or more skills get shuffled from the discard pile, draw a card",
  },
  {
    id: 52,
    name: "Red Cheery Blossom",
    image: relic52RedCheerryBlossom,
    effect01:
      "At the start of the 4th turn of a battle, add a random Lucy Rare Skill to hand",
  },
  {
    id: 61,
    name: "Battle Flag",
    image: relic61BattleFlag,
    effect01:
      "At the start of battle, apply cost reduced by 1 to all fixed abilities for one use each",
  },
  {
    id: 62,
    name: "Flaming Oil Barrel",
    image: relic62FlamingOilBarrel,
    effect01:
      "Enemies take 1 damege per weakening debuff stack applied to them",
  },
  {
    id: 63,
    name: "Pain Badge",
    image: relic63PainBadge,
    effect01: "Restore 4 health whenever an ally Pain Debuff is removed",
    PainDamage: "Pain Debuff",
  },
  {
    id: 64,
    name: "CC Badge",
    image: relic63CCBadge,
    effect01:
      "Whenever an ally CC Debuff is removed, choose to either restore 1 Mana or Draw 1 card",
    effect02: "At the start of every turn, invoke a random effect",
  },
  {
    id: 65,
    name: "IV pack",
    image: relic64IVBag,
    effect01: "Whenever an ally escapes Death's Door, Overheal 4",
    Overheal: "Death's Door",
    Overheal: "Overheal",
  },
  {
    id: 67,
    name: "Weapon Case",
    image: relic66WeaponCase,
    effect01:
      "At the start of every battle, create a third equipment slot for every Ally",
    effect02: "Fill every slot with a random equiment item",
    effect03: "Equipment stats are halved and Speed is not applied",
    elaboration03:
      "Additional slots and equipment are removed at the end of battle",
  },
  {
    id: 69,
    name: "Magic Crystal",
    image: relic68MagicCrystal,
    effect01:
      "At the start of the third turn of every stage, reduce the cost of all allied skills currently in hand by 1 until the end if the stage",
  },
  {
    id: 70,
    name: "Dark Flag",
    image: relic69DarkFlag,
    effect01: "Apply Armour -10% to all enemy Taunt Buffs",
    Taunt: "Taunt",
  },
  {
    id: 71,
    name: "Superconductor",
    image: relic70Superconductor,
    effect01:
      "On turn end, deal 2*x damage to a random enemy, wherein x is the number of cards short from max hand size",
    elaboration01: "Max hand size = 10",
  },
  {
    id: 72,
    name: "Withered Branch",
    image: relic71WitheredBranch,
    effect01:
      "At the start of the turn, apply a 400% Success Rate Pain debuff to all enemies that do not already have this debuff from Withered Branch",
    effect02: "Pain Debuff = 3 damage at the start of every turn",
    elaboration01: "This Debuff lasts until the end of the stage",
  },
  {
    id: 76,
    name: "Angels Potion",
    image: relic75AngelsPotion,
    effect01: "Every 13th card draw, remove 1 debuff from each ally",
  },
  {
    id: 77,
    name: "Mark Of Death",
    image: relic76MarkOfDeath,
    effect01:
      "After playing 10 cards, the next card played from hand recieves an 80% damage incerase.",
  },
  {
    id: 79,
    name: "Gold Leaf",
    image: relic78GoldLeaf,
    effect01:
      "At the end of every other turn, recast the last card played from hand",
    elaboration01:
      "Ignores skills from fainted allies, Lucy skills, and Rare skills",
  },
  {
    id: 82,
    name: "Sacred Cross",
    image: relic81SacredCross,
    effect01:
      "Once per turn, when gaining a barrier buff, apply and additional 9 barrier",
    elaboration01: "",
  },
  {
    id: 86,
    name: "Reapers Tiara",
    image: relic85ReapersTiara,
    effect01: "View 12 random Relics and choose 1 to obtain",
    UnrecoverableRelic: "Unrecoverable Relic",
  },
];

export default relics;
