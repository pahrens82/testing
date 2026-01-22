export const Draconians = () => {
    let draconians = [
        {
            name: "Aurak",
            movement: 6,
            damageBonus: "STR + 1d4",
            hp: 18,
            wp: 15,
            skills: "Perception: 12, Dodge 14",
            armor: "Natural (4)",
            weapons: [
                "Bite (12), 1d6 + 1d4",
                "Claws (12), 1d4 + 1d4",
            ],
            abilities: [
                "Infravision 60'",
                "3 x day, teleport up to 12 hexes away.",
                "3 x day, imitate the appearance of any humanoid they have seen.",
                "Boon to saves vs magic.",
                "At will, as an action, use Suggestion to influence a target's behavior.",
                "Once per day, use Mind Control on one target with lower WP. The target gets a WIL save against this ability. Failure means the Draconian takes control of the target for 2d6 rounds.",
                "Spell Casting",
            ],
            deathEffect: "When an Aurak draconian is reduced to 0 HP, they burst into green flames. Anyone adjacent to the draconian suffers 1d6 fire damage.",
            quantity: 1,
        },
        {
            name: "Baaz",
            movement: 6,
            damageBonus: "NA",
            hp: 9,
            wp: 9,
            skills: "Perception: 8, Dodge 12, Spears 10",
            armor: "Natural (1)",
            weapons: [
                "Bite (10), 1d6",
                "Claws (10), 1d4",
                "Short Spear (10), 2d4",
            ],
            abilities: [
                "Infravision 60'",
            ],
            deathEffect: "When a Baaz draconian is slain, it turns into a stone-like substance. A successful weapons check prevents the weapon from being stuck in the statue for 1d6 rounds, after which the stone crumbles to dust.",
            quantity: 4,
        },
        {
            name: "Bozak",
            movement: 6,
            damageBonus: "STR + 1d4",
            hp: 15,
            wp: 12,
            skills: "Perception: 8, Dodge 12, Swords 12",
            armor: "Natural (3)",
            weapons: [
                "Bite (10), 1d6 + 1d4",
                "Claws (10), 1d4 + 1d4",
                "Scimitar (12), 2d6 + 1d4",
            ],
            abilities: [
                "Infravision 60'",
                "Spell casting.",
                "Boon to all saves."
            ],
            deathEffect: "When a Bozak draconian is slain, the corpse begins vibrating. On the corpse's next turn it explodes, causing 1d6 damge in a 10-foot radius.",
            quantity: 4,
        },
        {
            name: "Kapak",
            movement: 6,
            damageBonus: "STR + 1d3",
            hp: 12,
            wp: 9,
            skills: "Perception: 8, Dodge 12, Swords 12",
            armor: "Natural (2)",
            weapons: [
                "Bite (10), 1d6 + 1d4 + Paralytic Poison Potency 12",
                "Claws (10), 1d4 + 1d3",
                "Scimitar (12), 2d6 + 1d4",
            ],
            abilities: [
                "Infravision 60'",
            ],
            deathEffect: "When a Kapak draconian is slain, the body dissolves into a 10' pool of acid. Anyone who touches the acid takes 1d8 damage. The acid evaporates after 1d6 rounds.",
            quantity: 4,
        },
        {
            name: "Sivak",
            movement: 6,
            damageBonus: "STR + 1d8",
            hp: 21,
            wp: 9,
            skills: "Perception: 8, Dodge 12, Swords 14",
            armor: "Natural (3)",
            weapons: [
                "Bite (12), 1d6 + 1d8",
                "Claws (12), 1d4 + 1d8",
                "Falchion (14), 2d8 + 1d8",
            ],
            abilities: [
                "Infravision 60'",
            ],
            deathEffect: "When a Sivak draconian is slain, it takes on the form of the person who slew it. This lasts for 3 days, after which the corpse bursts into flames, dealing 2d4 damage to all within 10",
            quantity: 2,
        },
    ];

    return (
        <details className={"border rounded p-1 mt-2 bg-dark-subtle"}>
            <summary className={"fw-bold"}>
                Draconians
            </summary>
            {draconians.map((draconian) => {
                return (
                    <details
                        className={"border rounded ps-2 py-1 bg-white"}
                        key={draconian.name}
                    >
                        <summary className={"fst-italic fw-bold"}>
                            {draconian.name}
                        </summary>
                        <div className={"d-flex gap-4"}>
                            <ul className={"list-unstyled small"}>
                                <li className={"mb-1"}>
                                    <strong>Quantity:</strong> {draconian.quantity}
                                </li>
                                <li className={"mb-1"}>
                                    <strong>Movement:</strong> {draconian.movement}
                                </li>
                                <li className={"mb-1"}>
                                    <strong>HP:</strong> {draconian.hp}
                                </li>
                            </ul>
                            <ul className={"list-unstyled small"}>
                                <li className={"mb-1"}>
                                    <strong>WP:</strong> {draconian.wp}
                                </li>
                                <li className={"mb-1"}>
                                    <strong>Skills:</strong> {draconian.skills}
                                </li>
                                <li className={"mb-1"}>
                                    <strong>Armor:</strong> {draconian.armor}
                                </li>
                            </ul>
                        </div>
                        <ul className={"list-unstyled small"}>
                            <li className={"mb-1"}>
                                <strong>Weapons</strong>
                                <ul>
                                    {draconian.weapons.map((weapon) => {
                                        return (
                                            <li key={draconian.name + weapon.replaceAll(" ", "-")}>
                                                {weapon}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                            <li className={"mb-1"}><strong>Abilities</strong>
                                <ul>
                                    {draconian.abilities.map((ability) => {
                                        return (
                                            <li key={draconian.name + ability.replaceAll(" ", "-")}>
                                                {ability}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                            <li className={"mb-1"}>
                                <strong>Death Effect:</strong> {draconian.deathEffect}
                            </li>
                        </ul>
                    </details>
                )
            })}
        </details>
    );
};
