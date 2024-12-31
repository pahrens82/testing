const NA = "N/A";
const FOES = [
    {
        name: "Goblin Scout",
        movement: 6,
        damageBonus: NA,
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
        damageBonus: NA,
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
        damageBonus: NA,
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
        damageBonus: NA,
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
    {
        name: "Satyr",
        movement: 5,
        damageBonus: NA,
        hp: 10,
        wp: 12,
        skills: "Bluff 10, Dodge 10, Performance 14, Persuasion 12",
        armor: "Boiled Leather (2)",
        weapons: [
            "Short Spear (10), 2d4 + 1d4, Durability 9",
        ],
    },
]

export const Foes = () => {
    return (
        <section className={"container"}>
            <section className={"row"}>
                <section className={"col"}>
                    <h1 className={"mt-3"}>
                        Foes
                    </h1>
                </section>
            </section>
            <section className={"row"}>
                <section className={"col"}>
                    {FOES.map((foe, index) => {
                        return (
                            <div
                                key={foe.name.replace(" ", "-")}
                                className={"card w-auto p-2 mt-3"}
                            >
                                <details>
                                    <summary className={"fw-bold"}>
                                        {foe.name}
                                    </summary>
                                    <ul className={"m-0 list-unstyled"}>
                                        <li>Speed: {foe.movement}</li>
                                        <li>Damage Bonus: {foe.damageBonus}</li>
                                        <li>HP: {foe.hp}</li>
                                        <li>WP: {foe.wp}</li>
                                        <li>Skills: {foe.skills}</li>
                                        <li>Armor: {foe.armor}</li>
                                        <li>Weapons
                                            <ol>
                                                {foe.weapons.map((weapon, index) => {
                                                    return <li>{weapon}</li>
                                                })}
                                            </ol>
                                        </li>
                                    </ul>
                                </details>
                                
                            </div>
                        )
                    })}
                </section>
            </section>
        </section>
    )
}