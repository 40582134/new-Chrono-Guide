import consumable01FairysBlessing from "../../assets/consumablesImgs/consumable01-Fairys-Blessing.png";
import consumable02HealingPotion from "../../assets/consumablesImgs/consumable02-Healing-Potion.png";
import consumable03WeakeningPotion from "../../assets/consumablesImgs/consumable03-Weakening-Potion.png";
import consumable04HolyWater from "../../assets/consumablesImgs/consumable04-Holy-Water.png";
import consumable05PotionOfToughSkin from "../../assets/consumablesImgs/consumable05-Potion-Of-Tough-Skin.png";
import consumable06ManaPotion from "../../assets/consumablesImgs/consumable06-Mana-Potion.png";
import consumable07StunPotion from "../../assets/consumablesImgs/consumable07-Stun-Potion.png";
import consumable08EnergyDrink from "../../assets/consumablesImgs/consumable08-Energy-Drink.png";
import consumable09DoshiLeafTea from "../../assets/consumablesImgs/consumable09-Doshi-leaf-Tea.png";
import consumable10WarriorsPotion from "../../assets/consumablesImgs/consumable10-Warriors-Potion.png";
import consumable11HealersPotion from "../../assets/consumablesImgs/consumable11-Healers-Potion.png";
import consumable12MarkPotion from "../../assets/consumablesImgs/consumable12-Mark-Potion.png";
import consumable13DuplicatingPotion from "../../assets/consumablesImgs/consumable13-Duplicating-Potion.png";
import consumable14RecyclingPotion from "../../assets/consumablesImgs/consumable14-Recycling-Potion.png";
import consumable15PurifyingPotion from "../../assets/consumablesImgs/consumable15-Purifying-Potion.png";
import consumable16GuardiansPotion from "../../assets/consumablesImgs/consumable16-Guardians-Potion.png";
import consumable17IdentificationScroll from "../../assets/consumablesImgs/consumable17-Identification-Scroll.png";
import consumable18MappingScroll from "../../assets/consumablesImgs/consumable18-Mapping-Scroll.png";
import consumable19ItemScroll from "../../assets/consumablesImgs/consumable19-Item-Scroll.png";
import consumable20EnchantingScroll from "../../assets/consumablesImgs/consumable20-Enchanting-Scroll.png";
import consumable21SwiftnewssScroll from "../../assets/consumablesImgs/consumable21-Swiftnewss-Scroll.png";
import consumable22LiftingScroll from "../../assets/consumablesImgs/consumable22-Lifting-Scroll.png";
import consumable23PurificationScroll from "../../assets/consumablesImgs/consumable23-Purification-Scroll.png";
import consumable24TeleportScroll from "../../assets/consumablesImgs/consumable24-Teleport-Scroll.png";
import consumable25TransferScroll from "../../assets/consumablesImgs/consumable25-Transfer-Scroll.png";
import consumable26VitalityScroll from "../../assets/consumablesImgs/consumable26-Vitality-Scroll.png";
import consumable27ScrollOfMidas from "../../assets/consumablesImgs/consumable27-Scroll-Of-Midas.png";
import consumable28Herb from "../../assets/consumablesImgs/consumable28-Herb.png";
import consumable29Tablet from "../../assets/consumablesImgs/consumable29-Tablet.png";
import consumable30SmallBarrierGenerator from "../../assets/consumablesImgs/consumable30-Small-Barrier-Generator.png";
import consumable31Bread from "../../assets/consumablesImgs/consumable31-Bread.png";
import consumable32GoldenApple from "../../assets/consumablesImgs/consumable32-Golden-Apple.png";
import consumable33RewindingGear from "../../assets/consumablesImgs/consumable33-Rewinding-Gear.png";
import consumable34SkillBook from "../../assets/consumablesImgs/consumable34-Skill-Book.png";
import consumable35GoldenSkillBook from "../../assets/consumablesImgs/consumable35-Golden-Skill-Book.png";
import consumable36ShopKeepersSpecialPackage from "../../assets/consumablesImgs/consumable36-Shop-Keepers-Special-Package.png";
import consumable37MysteriousSkillBook from "../../assets/consumablesImgs/consumable37-Mysterious-Skill-Book.png";
import consumable38SkillBookHealing101 from "../../assets/consumablesImgs/consumable38-Skill-Book-Healing-101.png";
import consumable39GoldenBread from "../../assets/consumablesImgs/consumable39-Golden-Bread.png";
import consumable40InfiniteSkillBook from "../../assets/consumablesImgs/consumable40-Infinite-Skill-Book.png";
import consumable42Celestial from "../../assets/consumablesImgs/consumable42Celestial.png";
import consumable43IlysVodka from "../../assets/consumablesImgs/consumable43-Ilys-Vodka.png";
import consumable44GlowingCrismonHerb from "../../assets/consumablesImgs/consumable44-Glowing-Crismson-Herb.png";
import consumable45Smokescreen from "../../assets/consumablesImgs/consumable45-Smokescreen.png";

const consumables = [
  {
    id: 1,
    name: "Fairys Blessing",
    image: consumable01FairysBlessing,
    type: "Potion",
    targetting: "Target: Team",
    effect01: "Cast 1 random skill from a random investigator on the team",
  },
  {
    id: 2,
    name: "Healing Potion",
    image: consumable02HealingPotion,
    type: "Potion",
    targetting: "Target: Potion - Ally",
    effect01: "Overheal an ally by 12",
    effect02: "Can be used outside of battle",
    Overheal: "Overheal",
  },
  {
    id: 3,
    name: "Weakening Potion",
    image: consumable03WeakeningPotion,
    type: "Potion",
    targetting: "Target: Potion - Enemy",
    duration: "Duration: 6 turns",
    effect01: "Selected enemy gains the Receiving Crit debuff",
    RecievingCritUp: "Receiving Ctit Up",
  },
  {
    id: 4,
    name: "Holy Water",
    image: consumable04HolyWater,
    type: "Potion",
    targetting: "Target: Potion - All Allies",
    duration: "Duration: 2 turns",
    effect01: "Grants Healing Gauge Protection",
    HealingGaugeProtection: "Healing Gauge Protection",
  },
  {
    id: 5,
    name: "Potion Of Tough Skin",
    image: consumable05PotionOfToughSkin,
    type: "Potion",
    targetting: "Target: Ally",
    effect01: "Applies 16 barrier",
  },
  {
    id: 6,
    name: "Mana Potion",
    image: consumable06ManaPotion,
    type: "Potion",
    targetting: "Target: Team",
    effect01: "Gain 2 mana",
    elaboration01: "Remove Overload this turn",
    Overload: "Overload",
  },
  {
    id: 7,
    name: "Stun Potion",
    image: consumable07StunPotion,
    type: "Potion",
    targetting: "Target: Enemy",
    effect01: "Apply Stun",
    Stun: "Stun",
  },
  {
    id: 8,
    name: "Energy Drink",
    image: consumable08EnergyDrink,
    type: "Potion",
    targetting: "Target: Single Ally",
    effect01:
      "The next skill card played from hand by this college is played twice",
    effect02:
      "The next heal this colleague recieves is converted to pain damage instead",
    PainDamage: "Pain Damage",
  },
  {
    id: 9,
    name: "Doshi Leaf Tea",
    image: consumable09DoshiLeafTea,
    type: "Potion",
    targetting: "Target: Single Ally",
    effect01: "Add one of the target's rare skills to hand",
  },
  {
    id: 10,
    name: "Warriors Potion",
    image: consumable10WarriorsPotion,
    type: "Potion",
    targetting: "Target: Single Attack Role Ally Only",
    effect01:
      "View 3 random class skills from the target and choose 1 to add to hand",
    elaboration01:
      "The selected skill costs 1 less mana for the duration of this battle.",
  },
  {
    id: 11,
    name: "Healers Potion",
    image: consumable11HealersPotion,
    type: "Potion",
    targetting: "Target: Single Healer Role Ally Only",
    effect01:
      "View 5 random class skills from the target and choose 2 to add to hand",
    elaboration01:
      "The selected skill costs 1 less mana and are excluded at the end of the turn.",
    Exclude: "Exclude",
  },
  {
    id: 12,
    name: "Mark Potion",
    image: consumable12MarkPotion,
    type: "Potion",
    targetting: "Target: Single Enemy",
    duration: "Duration: 6 turns",
    effect01: "Aflict target with the proceeding pain, weakening, & CC debuff",
    elaboration01:
      "Debuff effects: 3 pain damage | 5% armour reduction | Can be targeted regardless of active taunts",
    effect02: "Ignores Taunt",
    Taunt: "Taunt",
  },
  {
    id: 13,
    name: "Duplicating Potion",
    image: consumable13DuplicatingPotion,
    type: "Potion",
    targetting: "Target: Hand",
    effect01: "Duplicate a selected card in had twice",
    elaboration01: "Cannot target Rare Skills",
    elaboration02: "Cannot target Lucy Skills",
  },
  {
    id: 14,
    name: "Recycling Potion",
    image: consumable14RecyclingPotion,
    type: "Potion",
    targetting: "Target: Hand",
    effect01: "Gain 3 extra exchanges this turn",
  },
  {
    id: 15,
    name: "Purifying Potion",
    image: consumable15PurifyingPotion,
    type: "Potion",
    targetting: "Target: Single Ally",
    effect01: "Remove all debuffs from the target",
  },
  {
    id: 16,
    name: "Guardians Potion",
    image: consumable16GuardiansPotion,
    type: "Potion",
    targetting: "Target: Potion - Single Defence Role Ally Only",
    effect01:
      "View 3 random defence cards from the target and add all of them to hand",
    elaboration01:
      "These selected skills cost 1 less mana and are excluded at the end of the turn",
    Exclude: "Exclude",
  },
  {
    id: 17,
    name: "Identification Scroll",
    image: consumable17IdentificationScroll,
    type: "Scroll",
    targetting: "Target: Scroll - Item",
    effect01: "Identify target items hidden properties",
  },
  {
    id: 18,
    name: "Mapping Scroll",
    image: consumable18MappingScroll,
    type: "Scroll",
    targetting: "Target: Map",
    effect01: "Dispell Hidden Walls from nearby tiles",
  },
  {
    id: 19,
    name: "Item Scroll",
    image: consumable19ItemScroll,
    type: "Scroll",
    targetting: "Target: Inventory",
    effect01: "Generate a random loot into your inventory",
    elaboration01:
      "Loot can consist of consumables, potions, other scrolls, or money",
  },
  {
    id: 20,
    name: "Enchanting Scroll",
    image: consumable20EnchantingScroll,
    type: "Scroll",
    targetting: "Target: Single Equipment",
    effect01: "Enchant target equipment",
    Enchant: "Enchant",
  },
  {
    id: 21,
    name: "Swiftnewss Scroll",
    image: consumable21SwiftnewssScroll,
    type: "Scroll",
    targetting: "Target: Ally Team",
    effect01:
      "Increase the speed of all allied party members until the end of the stage",
    elaboration01: "Speed dictates turn order",
  },
  {
    id: 22,
    name: "Lifting Scroll",
    image: consumable22LiftingScroll,
    type: "Scroll",
    targetting: "Target: Equipment AND Map",
    effect01: "Remove all curses from the parties equiped items",
    effect02: "Dispell Hidden Walls from nearby tiles",
    CursedEquipment: "Cursed Equipment",
    HiddenWalls: "Hidden Walls",
  },
  {
    id: 23,
    name: "Purification Scroll",
    image: consumable23PurificationScroll,
    type: "Scroll",
    targetting: "Target: Equipment AND Map",
    effect01: "Remove all curses from the parties equiped items",
    effect02: "Remove all possible encounters from near tiles",
    effect03: "Dispell Hidden Walls from nearby tiles",
    elaboration01: "",
  },
  {
    id: 24,
    name: "Teleport Scroll",
    image: consumable24TeleportScroll,
    type: "Scroll",
    targetting: "Target: Map",
    effect01: "Teleport to a random tile outside of combat",
    elaboration01: "Completely Useless",
  },
  {
    id: 25,
    name: "Transfer Scroll",
    image: consumable25TransferScroll,
    type: "Scroll",
    targetting: "Target: Map",
    effect01: "Spawns a Relic Display Stand on the map outside of combat",
    RelicDisplayStand: "Relic Display Stand",
  },
  {
    id: 26,
    name: "Vitality Scroll",
    image: consumable26VitalityScroll,
    type: "Scroll",
    targetting: "Target: Next Battle",
    effect01:
      " At the start of the next battle, randomly cast one of Lucy's skills",
  },
  {
    id: 27,
    name: "Scroll Of Midas",
    image: consumable27ScrollOfMidas,
    type: "Scroll",
    targetting: "Target: Single Inventory Item",
    effect01: "Transform target item into gold",
    elaboration01: "Gold recieved increases with item rarity",
  },
  {
    id: 28,
    name: "Herb",
    image: consumable28Herb,
    type: "Consumable",
    targetting: "Target: Single Ally",
    effect01: "Remove all pain debuffs from the target.",
  },
  {
    id: 29,
    name: "Tablet",
    image: consumable29Tablet,
    type: "Consumable",
    targetting: "Target: Single Ally",
    effect01: "Remove all CC and Weakening debuff sfrom the target",
  },
  {
    id: 30,
    name: "Small Barrier Generator",
    image: consumable30SmallBarrierGenerator,
    type: "Consumable",
    targetting: "Target: Ally Team",
    effect01: "create a team barrier of 12",
  },
  {
    id: 31,
    name: "Bread",
    image: consumable31Bread,
    type: "Consumable",
    targetting: "Target: Single Ally OR Campfire",
    effect01: "Used on Ally - Restore 20% of the targets Max HP to the target",
    effect02:
      "Used at Campfire - Restore 20% of party members Max HP to their respective party members",
  },
  {
    id: 32,
    name: "Golden Apple",
    image: consumable32GoldenApple,
    type: "Consumable",
    targetting: "Target: Single Ally OR Campfire",
    effect01: "Used on Single Ally: Overheal 25 HP",
    effect02:
      "Used at Capfire - Reforge: Substitutes a reforge component of matching rarity to the other sacrifice",
    effect03:
      "Used in Campfire: Increase all current and future team members Accuracy & Critical Hit Rate by 4%",
    Overheal: "Overheal",
    Reforge: "Reforge",
  },
  {
    id: 33,
    name: "Rewinding Gear",
    image: consumable33RewindingGear,
    type: "Consumable",
    targetting: "Target: ",
    effect01: "",
    elaboration01: "",
  },
  {
    id: 34,
    name: "Skill Book",
    image: consumable34SkillBook,
    type: "Consumable",
    targetting: "Target: Used Skills",
    effect01: "Recast 8 skills used this battle at no cost",
  },
  {
    id: 35,
    name: "Golden Skill Book",
    image: consumable35GoldenSkillBook,
    type: "Consumable",
    targetting: "Target: Ally Team",
    effect01:
      "View 1 random class skill from each party member and choose one to learn",
  },
  {
    id: 36,
    name: "Shop Keepers Special Package",
    image: consumable36ShopKeepersSpecialPackage,
    type: "Consumable",
    targetting: "Target: Inventory",
    effect01: "Add 3 pieces of cursed gear into the inventory",
    effect02:
      "Using this box is the only way to unlock both Selena and Helia as playable colleagues",
    elaboration02:
      "Colleague Unlock Condition: Completing a run by beating 3 bosses with all 3 cursed items equiped, and no colleague deaths",
    CursedEquipment: "Cursed Equipment",
  },
  {
    id: 37,
    name: "Mysterious Skill Book",
    image: consumable37MysteriousSkillBook,
    type: "Consumable",
    targetting: "Target: Lucy",
    effect01: "View 2 random Lucy Rare Skills and choose one to learn",
  },
  {
    id: 38,
    name: "Skill Book Healing 101",
    image: consumable38SkillBookHealing101,
    type: "Consumable",
    targetting: "Target: Single Support Ally Only",
    effect01: "View all target's class skills and choose 1 to learn",
    elaboration01: "",
  },
  {
    id: 39,
    name: "Golden Bread",
    image: consumable39GoldenBread,
    type: "Consumable",
    targetting: "Target: Single Ally OR Campfire",
    effect01:
      "Used on Ally: Restore 50% of target's Max HP and cure faint status",
    elaboration01: "The health restored is considered an overheal from 0 HP",
    effect02:
      "Used in Campfire: Increase all current and future team members Max HP by 3",
    Overheal: "Overheal",
    FaintStatus: "Faint Status",
  },
  {
    id: 40,
    name: "Infinite Skill Book",
    image: consumable40InfiniteSkillBook,
    type: "Consumable",
    targetting: "Target: Ally Team",
    effect01:
      "View 5 random class skills of each current ally and choose 1 to learn",
    elaboration01: "",
  },
  {
    id: 42,
    name: "Celestial",
    image: consumable42Celestial,
    type: "Consumable",
    targetting: "Target: Ally Team",
    effect01: "Show 1 Synergy Upgrade per ally and select 1 skill to upgrade",
    elaboration01: "Only shows upgrades that the deck can currently accomodate",
    SynergyUpgrade: "Synergy Upgrade",
  },
];

export default consumables;
