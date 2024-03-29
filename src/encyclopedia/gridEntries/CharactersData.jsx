import heinImage from "../../assets/characterImgs/hein.png";
import joeyImage from "../../assets/characterImgs/joey.png";
import sizzImage from "../../assets/characterImgs/sizz.png";
import trishaImage from "../../assets/characterImgs/trisha.png";
import missChainImage from "../../assets/characterImgs/miss-Chain.png";
import azarImage from "../../assets/characterImgs/azar.png";

import lianImage from "../../assets/characterImgs/lian.png";
import phoenixImage from "../../assets/characterImgs/phoenix.png";
import presselImage from "../../assets/characterImgs/pressel.png";
import ironheartImage from "../../assets/characterImgs/ironheart.png";
import charonImage from "../../assets/characterImgs/charon.png";
import silversteinImage from "../../assets/characterImgs/silverstein.png";
import huzImage from "../../assets/characterImgs/huz.png";
import heliaImage from "../../assets/characterImgs/helia.png";
import selenaImage from "../../assets/characterImgs/selena.png";
import narhanImage from "../../assets/characterImgs/narhan.png";
import johanImage from "../../assets/characterImgs/johan.png";
import ilyaImage from "../../assets/characterImgs/ilya.png";
import lerynImage from "../../assets/characterImgs/leryn.png";

const characters = [
  {
    id: 1,
    name: "Hein",
    image: heinImage,
    description:
      "Hein is a one track minded damage dealer that capitalises on debuffs and hp lost to clear the field before getting overwhelmed himself",
    strengths: ["High burst damage", "Good AOE", "High HP Pool"],
    weaknesses: [
      "Underwhelming utility options",
      "Relient on enemies meeting certain conditions",
      "High mana cost skills",
    ],
    synergies: [
      "Attack",
      "Debuff",
      "HP Condition",
      "Ignore Taunt",
      "Attack Up",
      "Additional Damage",
      "Pain Damage",
    ],
  },
  {
    id: 2,
    name: "Joey",
    image: joeyImage,
    description:
      "Joey is your generalist healer who provides AOE sustain while peppering enemies with useful debuffs such as intoxication and stun",
    strengths: ["Great Aoe Healing", "Good offensive utility", "Self Reliant"],
    weaknesses: [
      "Lackluster damage output",
      "No access to Overhealing for HP guage restoration",
      "No access to Healing Guage protection",
    ],
    synergies: ["Heal", "Chain-Heal", "Debuff", "Pain Damage", "Stun"],
  },
  {
    id: 3,
    name: "Sizz",
    image: sizzImage,
    description:
      "Joey is a utility character that relies on good timing in order to heal & empower her teammates while chipping away at enemeies with her Eve Doll stacks.",
    strengths: [
      "0 cost automatic attacks",
      "Minor healer",
      "Mana pool manipulation",
    ],
    weaknesses: [
      "Lackluster damage output",
      "Healing is lwo impact compared to othe rmore dedicated support units",
      "Sizz is spread a bit too thin across roles, leading to a lack of excellence in any particular role.",
    ],
    synergies: ["Heal", "Crit Rate", "Attack Up", "Buff", "Mana Manipulation"],
  },
  {
    id: 4,
    name: "Trisha",
    image: trishaImage,
    description:
      "Trisha is a tempo damage dealer that relies on setting up the correct hand and enemy debuff conditions to capitalise on free skill usage oppertunities that allow her to land big critical hits and conditional damage side effects",
    strengths: [
      "Big crit hits",
      "Debuff conditional damage",
      "Mana cost reduction",
    ],
    weaknesses: [
      "She will always be an auxilary damage unit as she can't keep up with other dedicated dpsers",
      "She is quite reliant on setup",
      "She needs quite a few specific cards to get her engine running properly",
    ],
    synergies: [
      "Attack",
      "Crit Up",
      "Ignore Taunt",
      "Additional Damage",
      "Mana Manipulation",
    ],
  },
  {
    id: 5,
    name: "Miss Chain",
    image: missChainImage,
    description:
      "Miss Chain is a tank unit that relies on her healing guage protection and large hp pool to soak up all the enemy damage while ensuring she can heal it back up again, she also had an offensive slant top her based on applying grievous burn and healing the team/herself",
    strengths: [
      "Significant HP pool and self-healing options",
      "Decent auxilary damage through grievous burn application, armour reduction application, and high cost healing on hit skills",
      "Near permenant healing guage protection",
    ],
    weaknesses: [
      "High cost skills",
      "Certain skill effects are locked behind Burnnn! and remaining HP conditions",
      "She needs quite a few specific cards to get her engine running properly",
    ],
    synergies: [
      "Burnnn!",
      "Attack",
      "Heal",
      "Healing Guage Protection",
      "Armour Reduction",
      "Taunt",
      "Debuff",
      "Grievous Burn",
      "Pain Damage",
    ],
  },
  {
    id: 6,
    name: "Azar",
    image: azarImage,
    description:
      "Azar is pure dps unit that revolves around generating illusion swords in order to proc his other attack skills abilities before finishing off with the illusion sword spam.",
    strengths: ["Really High damage ceiling", "Self Reliant"],
    weaknesses: [
      "Outputs nothing aside from damage",
      "Can jam up hand size and miss timing if you don't think through your playes",
    ],
    synergies: [
      "Illusion Sword",
      "Attack",
      "Healing Guage Protection",
      "Armour Reduction",
      "Taunt",
      "Debuff",
      "Grievous Burn",
      "Pain Damage",
    ],
  },
  {
    id: 7,
    name: "Lian",
    image: lianImage,
    description:
      "Lian's shtick is counteroffensive damage dealing, wherin she sets up a parry and countdown attack on an enemy, should that enemy attack an ally, she will redirect to herself, reducing that damage, and immediately countercasting her countdown attack in retaliation.",
    strengths: [
      "Decent redirect tanking capabilities",
      "Good damage",
      "Decent offensive buffing",
      "Mana manipulation",
    ],
    weaknesses: [
      "Even though she has good damage reduction, her HP pool isn't as large as to where she is safe from getting taken out herself",
      "Her counteroffensive strategy is highly dependent on enemy attack initiative, if no attack comes, she wastes resources",
    ],
    synergies: [
      "Parry",
      "Attack",
      "Crit Up",
      "Taunt",
      "Countdown",
      "Stun",
      "Healing Guage Protection",
      "Debuff",
    ],
  },
  {
    id: 8,
    name: "Phoenix",
    image: phoenixImage,
    description:
      "This little birdie kind of just does their own thing. Their gimmick is that they can't be killed until the rest of the party is wiped. He has some decent stand alone effects like restoring healing guage and a -50% accuracy taunt, but no overarching synergy to speak off.",
    strengths: [
      "Very high hp pool",
      "Few useful buff/defuff skills",
      "Can't hit Death's Door",
    ],
    weaknesses: [
      "Aimless skill set that lacks a coheasive direction or ability to play off eachother significantly",
      "Instead of hitting deaths door, he will damage his teammates in it's stead",
    ],
    synergies: [
      "Attack",
      "Heal",
      "Taunt",
      "Countdown",
      "Stun",
      "Healing Guage Protection",
      "Debuff",
    ],
  },
  {
    id: 9,
    name: "Pressel",
    image: presselImage,
    description:
      "Presel is a dedicated support that manipulates card draw in order to imbue her skills with bonus effects",
    strengths: [
      "Strong healing and decent barriers",
      "Access to Overheals",
      "Decent damage utility",
    ],
    weaknesses: [
      "Incumberingly expensive offensive skills",
      "Overheals are conditional",
      "No healing guage protection",
      "Majorly nerfed if she can't capitalise on card draw manipulation",
    ],
    synergies: ["Prophecy", "Heal", "Overheal", "Card Draw"],
  },
  {
    id: 10,
    name: "Ironheart",
    image: ironheartImage,
    description:
      "Ironheart is a barrier generating machine that lives to protect the party. He spends the rest of his time taunting and debuffing the enemies attack.",
    strengths: [
      "Strong barriers",
      "Great Tankiness",
      "Option to consume barrier in order to enhance and launch all out attacks",
    ],
    weaknesses: [
      "Outside of all outs, his damage is negligible",
      "If barriers go down, he is dependent on a dedicated healer to make good on the damage",
      "His taunts are mild and he doesn't really benefit from getting hit like someone like Lian does ",
    ],
    synergies: ["Barrier", "Taunt", "Debuff", "Evade Down", "Attack Down"],
  },
  {
    id: 11,
    name: "Charon",
    image: charonImage,
    description:
      "Charon doubles as a pain stack debuffer and a healer/damage dealer who uses those pain stacks to amplify the potency his healing/damage dealing skills",
    strengths: [
      "Strong heals",
      "Strong pain debuff synergy",
      "Good sustain that scales with enemy slaying speed",
    ],
    weaknesses: [
      "His pain debuffs damage the ally team",
      "his big payoff cards require some setting up",
      "No overhealing",
    ],
    synergies: ["Heal", "Pain Damage", "Encroachment", "debuff"],
  },
  {
    id: 12,
    name: "Silverstein",
    image: silversteinImage,
    description:
      "Silverstein is an auxilary damage dealer that benefits from party members that can generate multiple attacks per turn",
    strengths: [
      "Noticible damage contribution",
      "Good utility for dealing with targetting, has the ability to ignore taunt and specify target priority for the whole team on otherwise random enemy attacks",
      "Has a 2 turn stun (1 for bosses)",
    ],
    weaknesses: [
      "Unable to occupy a dedicated role due to lack of specific proficiency",
      "Reliant on having a multi attack cating team composition",
    ],
    synergies: [
      "Silversteins Mark",
      "Special Bullet",
      "Attack",
      "Taunt",
      "Stun",
      "Additional Damage",
    ],
  },
  {
    id: 13,
    name: "Huz",
    image: huzImage,
    description:
      "Huz is a power house healer that grants healing guage protrection and overheal by attaching a flat heal/damage rate alongside the healing wounds curse to her allies.",
    strengths: [
      "Unmatched healing potential",
      "Solid offensive skills with conditionaly increased damage conditions",
      "Decent Debuff applications on attacks",
    ],
    weaknesses: [
      "She can kill her allies",
      "I mean, she is pretty over powered atm.",
    ],
    synergies: [
      "Healing Wound",
      "Heal",
      "Overheal",
      "Healing Guage Protection",
      "Ignore Taunt",
      "Debuff",
      "Additional Damage",
      "Pain Damage",
    ],
  },
  {
    id: 14,
    name: "Helia",
    image: heliaImage,
    description:
      "Helia & Selena are sisters, and these two colleagues are a package deal, you choose both for the party or neither. The reward for this is that they have synergystic decks and boosted survivability. Helia here applies her solar flame debuff and attacks with condictional damage based on the cost of the top card in the deck in order to destroy the enemy, she also tinkers with the positioning of cards in the deck to facilitate this",
    strengths: [
      "Good damage outputting attacks",
      "High damage pain debuffs",
      "Decent Deck manipulation",
    ],
    weaknesses: [
      "She is dependednt on her sisters Lunar Curtain buff being present to activate her own effects",
      "She is dependent on skill positioning in the deck being set-up to reach her high damage ceiling",
    ],
    synergies: [
      "Solar Flame",
      "Lunar Curtain",
      "Attack",
      "Additional Damage",
      "Ignore Taunt",
      "Debuff",
      "Pain Damage",
      "Draw Order",
    ],
  },
  {
    id: 15,
    name: "Selena",
    image: selenaImage,
    description:
      "Helia & Selena are sisters, and these two colleagues are a package deal, you choose both for the party or neither. The reward for this is that they have synergystic decks and boosted survivability. Selena focuses on healing her allies while setting up her sister with her Lunar Curtain and deck draw order maniplulation. She also has a noticible damage contribution as the discard pile increases and the topmost card in it has a high cost.",
    strengths: [
      "Good healing output",
      "High auxilary damage contribution, in some cases even being main dps worthy",
      "Great Deck manipulation",
    ],
    weaknesses: [
      "She is dependednt on her sisters Solar Flame being present to activate her own effects (although, way less so than her sister is dependent on her Lunar Curtain)",
      "She is dependent on skill positioning in the discard pile being set-up to reach her high damage ceiling",
    ],
    synergies: [
      "Solar Flame",
      "Lunar Curtain",
      "Heal",
      "Attack",
      "Additional Damage",
      "Ignore Taunt",
      "Debuff",
      "Pain Damage",
      "Draw Order",
    ],
  },
  {
    id: 16,
    name: "Narhan",
    image: narhanImage,
    description:
      "Narhan is predominantly a crowd control unit that specialises in gat5hering information on enemy intent and binding them up to the best of his abilities to minimise their effectiveness with enemy stuns and team barriers/healing.",
    strengths: [
      "Identifies enemy intent",
      "Excelent stun repetoire",
      "Solid shielding skills",
      "Mediocre healing auxilary",
    ],
    weaknesses: [
      "If the fight draws out then Narhans stuns lose effectivness as enemy crowd control resistance incerases, at which point he becomes pretty innefective and clogs the hand with immediately useless cards",
      "Conditional healing dependent on enemy intent",
    ],
    synergies: [
      "Identified!",
      "Heal",
      "Barrier",
      "Additional Damage",
      "Debuff",
      "Stun",
    ],
  },
  {
    id: 17,
    name: "Johan",
    image: johanImage,
    description:
      "Johan is a pure damage dealer that revolves around activating his default fixed ability in order to pepper the opponent while enabling even bigger damage dealing cards that scale based on current hand size and teh amount of times that Johans fixed ability is activated per turn",
    strengths: [
      "Excellent damage outputting attacks",
      "Decent offensive utility",
    ],
    weaknesses: [
      "Requires a team composition that generates mana and spends it frugaly",
      "Requires a team that retains a large hand while still having moves to play that make the most of their turn.",
    ],
    synergies: [
      "Close-Range Shot",
      "Attack",
      "Pain Damage",
      "Additional Damage",
      "Debuff",
      "Ignore Taunt",
    ],
  },
  {
    id: 18,
    name: "Ilya",
    image: ilyaImage,
    description:
      "A damage dealer that revolves around activating skills taht discard other skills with the sheathe effect, when such cards are discarded they activate as if played normally. Generally the card played will damage an enemy, and the discarded card will hit them again.",
    strengths: [
      "Excellent damage outputting attacks",
      "Substantial frostbite pain damage",
      "Skills repertoire boasts versatility that compliments many team compositions",
    ],
    weaknesses: [
      "Suffers from the team not maintaining a small had size",
      "No support skills",
    ],
    synergies: [
      "Sheathe",
      "Frostbite",
      "Discard",
      "Attack",
      "Pain Damage",
      "Additional Damage",
      "Crit Up",
    ],
  },
  {
    id: 19,
    name: "Leryn",
    image: lerynImage,
    description:
      "Leryn is a barrier generation focused unit first and auxilary healer/damage dealer second. Her skillset revolve around scaling effectivness by reducing hand size in order to incerase skill potency.",
    strengths: [
      "Excellent barriers",
      "healing guage protection",
      "hand size control",
    ],
    weaknesses: [
      "Requires a team that doesn't rely on large hand sizes",
      "No overheal",
    ],
    synergies: [
      "Sheathe",
      "Frostbite",
      "Discard",
      "Attack",
      "Pain Damage",
      "Additional Damage",
      "Crit Up",
    ],
  },
];

export default characters;
