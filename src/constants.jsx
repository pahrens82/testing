import { Location } from "./classes/location.jsx";
import { Link } from "react-router-dom";

export const LINKS = {
    ability: {
        herbalism: <Link to={"/mechanics/abilities#herbalism"}>Herbalism</Link>,
    },
    attribute: <Link to={"/mechanics/attributes"}>attribute</Link>,
    attributes: <Link to={"/mechanics/attributes"}>attributes</Link>,
    condition: <Link to={"/mechanics/conditions"}>condition</Link>,
    conditions: <Link to={"/mechanics/health#conditions"}>conditions</Link>,
    disease: <Link to={"/mechanics/health#disease"}>disease</Link>,
    poison: <Link to={"/mechanics/health#poison"}>poison</Link>,
    push: <Link to={"/mechanics/general#push-your-luck"} > Push Your Luck</Link>,
    // skill: <Link to={"/mechanics/skills/"}>skill</Link>,
    skill: {
        acrobatics: <Link to={"/mechanics/skills#acrobatics"}>Acrobatics</Link>,
        alchemy: <Link to={"/mechanics/skills#alchemy"}>Alchemy</Link>,
        arcane: <Link to={"/mechanics/skills#arcane-casting"}>Arcane Casting</Link>,
        // bartering: <Link to={"/mechanics/skills#bartering"}>Bartering</Link>,
        beast: <Link to={"/mechanics/skills#beast-lore"}>Beast Lore</Link>,
        bluff: <Link to={"/mechanics/skills#bluff"}>Bluff</Link>,
        climbing: <Link to={"/mechanics/skills#climbing"}>Climbing</Link>,
        cooking: <Link to={"/mechanics/skills#cooking"}>Cooking</Link>,
        crafting: <Link to={"/mechanics/skills#crafting"}>Crafting</Link>,
        divine: <Link to={"/mechanics/skills#divine-casting"}>Divine Casting</Link>,
        dodge: <Link to={"/mechanics/skills#dodge"}>Dodge</Link>,
        herbalism: <Link to={"/mechanics/skills#herbalism"}>Herbalism</Link>,
        medicine: <Link to={"/mechanics/skills#medicine"}>Medicine</Link>,
        myths: <Link to={"/mechanics/skills#myths-and-legends"}>Myths and Legends</Link>,
        perception: <Link to={"/mechanics/skills#perception"}>Perception</Link>,
        performance: <Link to={"/mechanics/skills#performance"}>Performance</Link>,
        persuasion: <Link to={"/mechanics/skills#persuasion"}>Persuasion</Link>,
        riding: <Link to={"/mechanics/skills#riding"}>Riding</Link>,
        seamanship: <Link to={"/mechanics/skills#seamanship"}>Seamanship</Link>,
        sleight: <Link to={"/mechanics/skills#sleight-of-hand"}>Sleight Of Hand</Link>,
        stealth: <Link to={"/mechanics/skills#stealth"}>Stealth</Link>,
        survival: <Link to={"/mechanics/skills#survival"}>Survival</Link>,
        swimming: <Link to={"/mechanics/skills#swimming"}>Swimming</Link>,
        tinkering: <Link to={"/mechanics/skills#tinkering"}>Tinkering</Link>,
        tracking: <Link to={"/mechanics/skills#tracking"}>Tracking</Link>,
    },
    skills: <Link to={"/mechanics/skills"}>skills</Link>,
    mechanics: {
        combat: {
            sneakattack: <Link to={"/mechanics/combat#sneak-attack"}>Sneak Attack</Link>,
        }
    }
}

export const SPECIES = [
    "Humans",
    "Half-Elves",
    "Kender",
    "Dwarves",
    "Elves",
];

export const LOCATIONS = [
    new Location(
        {
            name: "Krynn",
            population: 12,
            description: "Its a planet",
        }
    ),
];

export const SKILLS = {
    acrobatics: { attr: "dex", score: 0, name: "Acrobatics", description: "Used for jumping, balancing, and similar physical actions." },
    alchemy: { attr: "int", score: 0, name: "Alchemy", description: "This skill lets you identify alchemical items. With the Alchemist ability and proper equipment and ingredients, you can craft alchemical items as well." },
    arcaneCasting: { attr: "int", score: 0, name: "Arcane Casting", description: "You must be a Mage to use this skill. This skill is used for casting Arcane spells, as well as identifying Arcane spells cast by others. You must be a Mage to have Arcane Casting as a class skill." },
    beastLore: { attr: "int", score: 0, name: "Beast Lore", description: "The world is full of common and rare animals and beasts. Beast Lore is rolled when trying to identify an animal or Monster, or to discern the behaviors, abilities, or weaknesses of an animal you have identified.", },
    bluff: { attr: "cha", score: 0, name: "Bluff", description: "To quickly come up with a convincing lie can be an invaluable skill as an adventurer; that is where this skill comes into play. If your bluff is unconvincing, you gain a Bane on your roll. If your bluff is completely unbelievable, the roll fails automatically, no matter how well you deliver it." },
    climbing: { attr: "str", score: 0, name: "Climbing", description: "The difficulty of climbing depends on the surface being scaled. Climbing a tree or ladder probably doesn't require a roll, while climbing a stone wall without equipment might inflict a Bane, or not be possible at all." },
    cooking: { attr: "int", score: 0, name: "Cooking", description: "Cooking is used to make food safe for consumption. Critical failure yields food that looks safe but is an Emetic Poison. Failure ruins the ingredients. Success yield a regular meal. Critical success creates an excellent meal that adds 1d6 to your healing during your next Long Rest." },
    crafting: { attr: "str", score: 0, name: "Crafting", description: "As an adventurer, you must often repair your gear when it Breaks. Typically, it takes one Shift to repair a Broken item, assuming you have the necessary tools and supplies." },
    divineCasting: { attr: "wil", score: 0, name: "Divine Casting", description: "Divine Casting is used by clerics to wield their deity's power (that is, cast spells). You must be a cleric to have Divine Casting as a class skill." },
    dodge: { attr: "dex", score: 0, name: "Dodge", description: "Dodge is used when attempting to Dodge an attack or flee combat." },
    herbalism: { attr: "int", score: 0, name: "Herbalism", description: "This skill lets you identify plants and herbal items. With the Herbalist ability, proper equipment, and ingredients, you can craft herbal items as well." },
    medicine: { attr: "int", score: 0, name: "Medicine", description: <span>There is significant risk when adventuring. This skill can be used to: <ul><li>Administer Care (During a short rest, increase the HP regained by another character by 1d6. A Healer's Kit is required.)</li><li>First Aid (Stabilize a character that is 0 HP. This check has a Bane unless you have Bandages.)
        </li><li>Treat Disease (Use your Medicine check in place of another character's Con check vs disease. Requires a Healer's Kit.)</li><li>Treat An Injury (Reduces the healing time of an injury by 1 day per treatment. This requires Surgical Tools and one Shift per treatment.).</li></ul></span> },
    mythsAndLegends: { attr: "int", score: 0, name: "Myths and Legends", description: "Myths and Legends is used when trying to recall stories of old times or distant lands, or when trying to understand links to the past." },
    perception: { attr: "int", score: 0, name: "Perception", description: "Perception is used to search for hidden things and creatures, and to notice something out of the corner of your eye." },
    performance: { attr: "cha", score: 0, name: "Performance", description: "Performance is rolled when you attempt to sing a song, recite a poem, deliver a joke, dance, or in some manner entertain a crowd." },
    persuasion: { attr: "cha", score: 0, name: "Persuasion", description: "Persuasion is used when you try to charm, threaten, or reason with an NPC in order to get them to do something, or change their mind about something. If you succeed, the NPC does what you ask, but probably at some cost to you. A critical success means there is no cost. Failure means the NPC doesn't cooperate, and a critical failure means the NPC becomes unfriendly, or even hostile. Persuasion may also be used to Rally a character at 0 HP. A Rallied character must continue making Death Saves, but may continue acting." },
    riding: { attr: "dex", score: 0, name: "Riding", description: "Casually riding a horse, pony, mule, goat, dog, or other mundane animal doesn't require a Riding check. However, galloping, tricks, and combat maneuvers do require Riding checks. Checks receive a Bane if your mount doesn't have appropriate equipment." },
    seamanship: { attr: "int", score: 0, name: "Seamanship", description: "Anyone can row a boat or paddle a canoe slowly, but challenging conditions require a Seamanship check." },
    sleightOfHand: { attr: "dex", score: 0, name: "Sleight of Hand", description: "This skill is used when you are trying to pick a pocket or do tricky things with your hands." },
    stealth: { attr: "dex", score: 0, name: "Stealth", description: "Stealth is used for avoiding detection, and is opposed by Perception." },
    survival: { attr: "int", score: 0, name: "Survival", description: "This skill is used for navigating, fishing, foraging, and locating safe camp sites." },
    swimming: { attr: "str", score: 0, name: "Swimming", description: "Under normal circumstances, characters can float for one Shift without making Swimming checks. Your movement rate is halved while swimming. Ranged attacks are impossible, and melee attacks receive a Bane, while swimming. The frequency at which you must make Swimming checks depends on the environment and your armor." },
    tinkering: { attr: "int", score: 0, name: "Tinkering", description: "Tinkering is not just the domain of Tinker Gnomes; many characters enjoy working on small mechanical devices. This skill is used for picking locks, arming and disarming traps, and similar activities." },
    tracking: { attr: "int", score: 0, name: "Tracking", description: "Tracking is used for locating and following the tracks of animals, people, and Monsters. It is integral to Hunting. Identifying the tracks you are following might require another skill, such as Beast Lore." },
    axes: { attr: "str", score: 0, name: "Axes", description: "A skill used for combat with axes of all kinds, including when thrown." },
    bludgeons: { attr: "str", score: 0, name: "Bludgeons", description: "Used for combat with hammer, clubs, maces, and other blunt weapons." },
    bows: { attr: "dex", score: 0, name: "Bows", description: "A skill for attacks with all types of bows, except crossbows." },
    brawling: { attr: "str", score: 0, name: "Brawling", description: "Used for unarmed combat with fists, feet, teeth, or claws." },
    crossbows: { attr: "dex", score: 0, name: "Crossbows", description: "This skill is used for attacks with all kinds of crossbows." },
    knives: { attr: "dex", score: 0, name: "Knives", description: "This skill is used for combat with knives and daggers, including when thrown." },
    slings: { attr: "dex", score: 0, name: "Slings", description: "This skill is used when attacking with slings of all sorts." },
    spears: { attr: "str", score: 0, name: "Spears", description: "A skill used for combat with spears and tridents, including when thrown. It also covers lances." },
    staves: { attr: "dex", score: 0, name: "Staves", description: "Use this skill when fighting with a staff." },
    swords: { attr: "str", score: 0, name: "Swords", description: "Used for combat with all types of swords." },
};

export const makePricingVerbose = (price) => {
    if (typeof price === "string") {
        return price;
    } else {
        if (Number.isInteger(price)) {
            return `${price} gold`;
        } else {
            let priceAsString = price.toString().split(".");

            let gp = priceAsString[0];
            if (gp === "0") gp = null;

            let sp, cp;
            if (priceAsString[1].length === 2) {
                let decimalsSplit = priceAsString[1].split("");
                sp = decimalsSplit[0];
                if (sp === "0") sp = null;
                cp = decimalsSplit[1];
                if (cp === "0") cp = null;
            } else {
                sp = priceAsString[1];
                if (sp === "0") sp = null;
            }
            let response = "";
            if (gp) response += `${gp} gold `;
            if (sp) response += `${sp} silver `;
            if (cp) response += `${cp} copper `;
            return response;
        }
    }
};

export const FOES = [
    {
        name: "Goblin Scout",
        movement: 6,
        damageBonus: "N/A",
        hp: 9,
        wp: 8,
        skills: "Perception: 10, Dodge: 10, Stealth: 12",
        armor: "None",
        weapons: [
            "Club (10), 1d8, Durability 6",
            "Sling (10), 1d8, Durability 0",
        ],
    },
    {
        name: "Goblin Warrior",
        movement: 6,
        damageBonus: "N/A",
        hp: 10,
        wp: 8,
        skills: "Perception: 10, Dodge: 10, Stealth: 12",
        armor: "Padded (1)",
        weapons: [
            "Short Spear (12), 2d4, Durability 9",
            "Club (12), 1d8, Durability 6",
        ],
    },
    {
        name: "Hobgoblin Scout",
        movement: 6,
        damageBonus: "N/A",
        hp: 9,
        wp: 8,
        skills: "Perception: 12, Dodge: 12, Stealth: 14",
        armor: "Padded (1)",
        weapons: [
            "Hunting Bow (12), 1d10, Durability 3",
            "Dagger (12), 2d4, Durability 9",
        ],
    },
    {
        name: "Hobgoblin Fighter",
        movement: 6,
        damageBonus: "N/A",
        hp: 12,
        wp: 8,
        skills: "Perception: 10, Dodge: 12, Stealth: 10",
        armor: "Boiled Leather (2)",
        weapons: [
            "Hand Axe (12), 1d10, Durability 9",
            "Short Spear (12), 2d4, Durability 9",
        ],
    },
    {
        name: "Hobgoblin Thief",
        movement: 6,
        damageBonus: "DEX + 1d4",
        hp: 7,
        wp: 8,
        skills: "Perception: 12, Dodge: 12, Stealth: 14",
        armor: "Padded (1)",
        weapons: [
            "Dagger (12), 2d4 + 1d4, Durability 9",
            "Sling (12), 1d8 + 1d4, Durability 0",
        ],
    },
    {
        name: "Ogre Warrior",
        movement: 6,
        damageBonus: "STR + 1d6",
        hp: 16,
        wp: 12,
        skills: "Perception: 8, Dodge: 6, Stealth: 6",
        armor: "Natural (1)",
        weapons: [
            "War Club (10), 2d8 + 1d6, Durability 9",
            "Short Spear (10), 2d4 + 1d6, Durability 9",
        ],
    },
    {
        name: "Ogre Chieftan",
        movement: 6,
        damageBonus: "STR + 1d6",
        hp: 24,
        wp: 16,
        skills: "Perception: 12, Dodge: 8, Stealth: 6",
        armor: "Natural (1)",
        weapons: [
            "War Club (10), 2d8 + 1d6, Durability 9",
            "Short Spear (10), 2d4 + 1d6, Durability 9",
        ],
    },
    {
        name: "Lizardfolk Hunter",
        movement: 6,
        damageBonus: "DEX + 1d4",
        hp: 9,
        wp: 8,
        skills: "Perception: 12, Dodge: 12, Stealth: 14",
        armor: "Natural (1)",
        weapons: [
            "Hunting Bow (12), 1d10 + 1d4, Durability 3",
            "Dagger (12), 2d4 + 1d4, Durability 9",
        ],
    },
    {
        name: "Lizardfolk Warrior",
        movement: 6,
        damageBonus: "STR + 1d4",
        hp: 10,
        wp: 8,
        skills: "Perception: 12, Dodge: 12, Stealth: 10",
        armor: "Boiled Leather (2)",
        weapons: [
            "Spiked Club (12), 1d10 + 1d4, Durability 6",
            "Short Spear (12), 2d4 + 1d4, Durability 9",
        ],
    },
];