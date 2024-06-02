import { Link } from "react-router-dom";


export const Skills = () => {
    const NON_COMBAT_SKILLS = [
        {
            name: "Acrobatics",
            attribute: "DEX",
            description: "Used for jumping, balancing, and similar physical actions.",
        },
        {
            name: "Alchemy",
            attribute: "INT",
            description: "This skill lets you identify alchemical items. With the Alchemist ability and proper equipment and ingredients, you can craft alchemical items as well.",
        },
        {
            name: "Arcane Casting",
            attribute: "INT",
            description: "You must be a Mage to use this skill. This skill is used for casting Arcane spells, as well as identifying Arcane spells cast by others.",
        },
        {
            name: "Bartering",
            attribute: "CHA",
            description: "You may use this skill when haggling over an item to adjust the price by 20% in your favor. If critically succeed, the adjustment is 50%. if you critically fail, you and your companions are banned from the shop.",
        },
        {
            name: "Beast Lore",
            attribute: "INT",
            description: "The world is full of common and rare animals and beasts. Beast Lore is rolled when trying to identify an animal or Monster, or to discern the behaviors, abilities, or weaknesses of an animal you have identified.",
        },
        {
            name: "Bluff",
            attribute: "CHA",
            description: "To quickly come up with a convincing lie can be an invaluable skill as an adventurer; that is where this skill comes into play. If your bluff is unconvincing, you gain a Bane on your roll. If your bluff is completely unbelievable, the roll fails automatically, no matter how well you deliver it.",
        },
        {
            name: "Climbing",
            attribute: "STR",
            description: "The difficulty of climbing depends on the surface being scaled. Climbing a tree or ladder probably doesn’t require a roll, while climbing a stone wall without equipment might inflict a Bane, or not be possible at all.",
        },
        {
            name: "Cooking",
            attribute: "INT",
            description: "Cooking is used to make food safe for consumption. Critical failure yields food that looks safe but is an Emetic Poison. Failure ruins the ingredients. Success yield a regular meal. Critical success creates an excellent meal that adds 1d6 to your healing during your next Long Rest.",
        },
        {
            name: "Crafting",
            attribute: "STR",
            description: "As an adventurer, you must often repair your gear when it Breaks. Typically, it takes one Shift to repair a Broken item, assuming you have the necessary tools and supplies.",
        },
        {
            name: "Divine Casting",
            attribute: "WIL",
            description: "Divine Casting is used by clerics to wield their deity's power (that is, cast spells).",
        },
        {
            name: "Dodge",
            attribute: "DEX",
            description: "Dodge is used when attempting to Dodge an attack or flee combat.",
        },
        {
            name: "Herbalism",
            attribute: "INT",
            description: "This skill lets you identify plants and herbal items. With the Herbalist ability, proper equipment, and ingredients, you can craft herbal items as well.",
        },
        {
            name: "Medicine",
            attribute: "INT",
            description: "There is significant risk when adventuring. This skill can be used to Administer Care (adds a die to natural healing rolls), Save A Life (stabilize a character at 0 HP), or Treat Disease (use your Medicine skill in place of the infected character's CON).",
        },
        {
            name: "Myths And Legends",
            attribute: "INT",
            description: "Myths and Legends is used when trying to recall stories of old times or distant lands, or when trying to understand links to the past.",
        },
        {
            name: "Perception",
            attribute: "INT",
            description: "Perception is used to search for hidden things and creatures, and to notice something out of the corner of your eye.",
        },
        {
            name: "Performance",
            attribute: "CHA",
            description: "Performance is rolled when you attempt to sing a song, recite a poem, deliver a joke, dance, or in some manner entertain a crowd.",
        },
        {
            name: "Persuasion",
            attribute: "CHA",
            description: "Persuasion is used when you try to charm, threaten, or reason with an NPC in order to get them to do something, or change their mind about something. If you succeed, the NPC does what you ask, but probably at some cost to you. A critical success means there is no cost. Failure means the NPC doesn't cooperate, and a critical failure means the NPC becomes unfriendly, or even hostile.",
        },
        {
            name: "Riding",
            attribute: "DEX",
            description: "Casually riding a horse, pony, mule, goat, dog, or other mundane animal doesn't require a Riding check. However, galloping, tricks, and combat maneuvers do require Riding checks. Checks receive a Bane if your mount doesn't have appropriate equipment.",
        },
        {
            name: "Seamanship",
            attribute: "INT",
            description: "Anyone can row a boat or paddle a canoe slowly, but challenging conditions require a Seamanship check.",
        },
        {
            name: "Sleight of Hand",
            attribute: "DEX",
            description: "This skill is used when you are trying to pick a pocket or do tricky things with your hands.",
        },
        {
            name: "Stealth",
            attribute: "DEX",
            description: "Stealth is used for avoiding detection, and is opposed by Perception.",
        },
        {
            name: "Survival",
            attribute: "INT",
            description: "This skill is used for navigating, fishing, and locating safe camp sites.",
        },
        {
            name: "Swimming",
            attribute: "DEX",
            description: "Under normal circumstances, characters can float for one Shift without making Swimming checks. Your movement rate is halved while swimming. Ranged attacks are impossible, and melee attacks receive a Bane, while swimming. The frequency at which you must make Swimming checks depends on the environment and your armor.",
        },
        {
            name: "Tinkering",
            attribute: "INT",
            description: "Tinkering is not just the domain of Tinker Gnomes; many characters enjoy working on small mechanical devices. This skill is used for picking locks, arming and disarming traps, and similar activities.",
        },
        {
            name: "Tracking",
            attribute: "INT",
            description: "Tracking is used for locating and following the tracks of animals, people, and Monsters. It is integral to Hunting. Identifying the tracks you are following might require another skill, such as Beast Lore.",
        },
    ];

    const COMBAT_SKILLS = [
        {
            name: "Axes",
            attribute: "STR",
            description: "A skill used for combat with axes of all kinds, including when thrown.",
        },
        {
            name: "Bludgeons",
            attribute: "STR",
            description: "Used for combat with hammer, clubs, maces, and other blunt weapons.",
        },
        {
            name: "Bows",
            attribute: "DEX",
            description: "A skill for attacks with all types of bows, except crossbows.",
        },
        {
            name: "Brawling",
            attribute: "STR",
            description: "Used for unarmed combat with fists, feet, teeth, or claws.",
        },
        {
            name: "Crossbows",
            attribute: "DEX",
            description: "This skill is used for attacks with all kinds of crossbows.",
        },
        {
            name: "Knives",
            attribute: "DEX",
            description: "This skill is used for combat with knives and daggers, including when thrown.",
        },
        {
            name: "Slings",
            attribute: "DEX",
            description: "This skill is used when attacking with slings of all sorts.",
        },
        {
            name: "Spears",
            attribute: "STR",
            description: "A skill used for combat with spears and tridents, including when thrown. It also covers lances.",
        },
        {
            name: "Staves",
            attribute: "DEX",
            description: "Use this skill when fighting with a staff.",
        },
        {
            name: "Swords",
            attribute: "STR",
            description: "Used for combat with all types of swords.",
        },
    ];

    return (
        <section className={"contents"}>
            <h1>Skills</h1>
            <section>
                <h3>Non-Combat Skills</h3>
                <ul>
                    {NON_COMBAT_SKILLS.map((skill, index) => {
                        return (
                            <li key={skill.name} id={skill.name.toLocaleLowerCase()}>
                                <strong>{skill.name} ({skill.attribute})</strong>
                                <p>{skill.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section>
                <h3>Combat Skills</h3>
                <ul>
                    {COMBAT_SKILLS.map((skill, index) => {
                        return (
                            <li key={skill.name} id={skill.name.toLocaleLowerCase()}>
                                <strong>{skill.name} ({skill.attribute})</strong>
                                <p>{skill.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </section>
    )
};
