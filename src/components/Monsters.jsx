const TRAITS = {
    alcoholTolerance: "These creatures can drink copious amounts of alcohol without getting particularly drunk.",
    swarm: "These creatures fight together and some of their attacks are performed as a group. Such attacks still only use up the turn in the round for one fairy. Once half of the creatures have suffered damage, they flee, but will likely come back for revenge later.",
    wings: "These creatures fly around in erratic patterns. They always attack from the air and can only be attacked with ranged weapons or melee weapons with React.",
    invisibility: "As an action, one of these creatures can become invisible except for its shadow. If an invisible creature performs an action that affects another creature, it immediately becomes visible and cannot become invisible again for one Stretch.",
    aquatic: "Aquatic creatures have unique means of moving and breathing under water. They can stay above the surface for one Stretch without any problems, but after that they suffer 1D6 damage per Stretch spent on land.",
}

const MONSTERS = [
    {
        name: "Centaur",
        ferocity: 2,
        movement: 12,
        size: "Large",
        armor: "",
        hp: 28,
        traits: [
            TRAITS.alcoholTolerance
        ],
        gear: "Short spear, war bow, quiver",
        attacks: [
            "The centaur kicks back at an opponent. The attack hurls the victim 2D6 meters and inflicts an equal amount of bludgeoning damage. The victim lands prone.",
            "The creature thrusts its short spear at an opponent, inflicting 2D10 piercing damage.The attack can be parried.",
            "The centaur rears up and strikes with its hooves at two opponents within 2 meters of each other.Each victim suffers 2D6 bludgeoning damage.",
            "The creature uses its bow and quickly fires an arrow at an opponent within 30 meters, preferably a mage or another archer. The victim suffers D12 piercing damage.",
            "The creature lunges at an enemy with its full weight.The attack inflicts 2D10 bludgeoning damage and knocks the victim down.",
            "The centaur lets out a burst of deafening and mocking laughter.All enemies within 10 meters must make a WIL roll to not become Angry.Anyone who is already Angry suffers another condition of their choice.",
        ]
    },
    {
        name: "Fairy",
        ferocity: 1,
        movement: 18,
        size: "Tiny",
        armor: "",
        hp: 6,
        traits: [
            TRAITS.swarm,
            TRAITS.wings,
            TRAITS.invisibility,
        ],
        gear: "",
        attacks: [
            "The fairies hurl insults and taunts at their enemies. Everyone within 30' meters must succeed with a WIL roll or gain the Angry condition, or a condition of their choice if they're already Angry.",
            "Several fairies swarm around an opponent and stab them with their needle-sharp daggers. The victim suffers 1d10 damage (armor has no effect) and gains the Dazed condition, or a condition of their choice if they're already Dazed.",
            "A fairy throws a fistful of glitter into the air which may blind anyone within 30'. Those affected must succeed at a Dodge roll or act as if in total darkness for D6 rounds.",
            "A fairy sneaks up behind an opponent and stabs them with the poisonous thorn of an enchanted rose. The victim is injected with a Paralyzing poison with Potency 12.",
            "One of the fairies blows an enchanted kiss at a victim, who must succeed at a Dodge roll or gain the Disheartened condition. Anyone who is already Disheartened gains another condition of their choice.",
            "A fairy fires an enchanted arrow at an enemy within 30'. The victim suffers 1D10 piercing damage and must make a WIL roll to resist Fear.",
        ]
    },
    {
        name: "Harpy",
        ferocity: 1,
        movement: 12,
        size: "Medium",
        armor: "",
        hp: 12,
        traits: [
            TRAITS.swarm,
            TRAITS.wings,
        ],
        gear: "",
        attacks: [
            "The harpies shower the PCs with terrible descriptions of what they will do to them. Everyone within 30' must make a WIL roll to resist Fear.",
            "The harpies flock together and attack the PC who wears the most metal. The attack inflicts 2D6 slashing damage. If damaged, the victim is also lifted into the air and dropped from a height of 1d3 x 10 feet (dealing an additional 1, 2, or 3d6 damage) on the harpies next turn.",
            "The harpies throw rocks and other junk from afar. Everyone within 30' suffers 1D6 bludgeoning damage.",
            "The harpies target an unfortunate PC and try to tear the victim's eyes out with their claws. The attack inflicts 2D6 piercing damage and the victim is blinded and acts as if in total darkness for one Stretch.",
            "The harpies split up and attack a number of player characters within 30' equal to the number of individual harpies. Each attack inflicts 1D8 slashing damage.",
            "The harpies open their cloacae and mouths and release a rain of vomit and excrement on the PCs. Everyone within 30' must gain a Condition. This attack can be Parried with a shield.",
        ]
    },
    {
        name: "Mermaid",
        ferocity: 1,
        movement: 12,
        size: "Medium",
        armor: "",
        hp: 16,
        traits: [
            {
                name: "Lifesaver",
                effect: "",
            },
            TRAITS.aquatic,
        ],
        gear: "Spear, Harpoon, Trident, Net",
        attacks: [
            "The mermaid grabs a whale bone trident from a quiver on its back and throws it with full force at an enemy within 30'. The victim suffers 2D6 piercing damage.",
            "The mermaid thrusts its trident at an opponent. The attack inflicts 2D8 piercing damage and the victim is knocked down.",
            "The mermaid casts a net and swims with powerful tail strokes around all opponents within 15'. The victims must make an Dodge roll (not an action) to escape the net. Those who fail  are unable to move or perform actions that require body movement. Breaking free requires an action and a successful STR roll with a Bane. Others can help.",
            "The mermaid grabs a victim and pulls it into the water. The victim immediately begins to Drown and cannot move or perform actions that require body movement except trying to break free, which requires an action and a successful STR roll with a Bane. Others can help.",
            "The mermaid repeatedly slams its fishtail into the water and produces a powerful wave. All untethered objects and creatures within a 30' cone are pushed 1D6 hexes away and suffer an equal amount of bludgeoning damage.",
            "The mermaid creates a great whirlwind of water. All untethered objects and creatures up to human size within 10' of the mermaid are thrown 1D4 hexes and suffer an equal amount of bludgeoning damage.",
        ]
    },
    {
        name: "Minotaur",
        ferocity: 2,
        movement: 6,
        size: "Large",
        armor: "Natural (1)",
        hp: 32,
        traits: [],
        gear: "Clabbard Sword, Harpoon, Etc.",
        attacks: [
            "A furry fist hits a player character with full force. The attack inflicts 2D6 bludgeoning damage and leaves the victim Dazed, even if their armor prevents any damage.",
            "Using its powerful legs, the minotaur kicks the victim with its hooves. The force of the attack throws the victim 1D6 hexes away and inflicts the same amount of bludgeoning damage. The victim lands prone.",
            "The minotaur lowers its head and rushes toward two enemies within adjacent to each other, hoping to impale them with its sharp horns. Both victims suffer 2D8 piercing damage and are knocked down.",
            "The beast swings its massive sword over its head and brings it down with full force. The attack inflicts 3d12 damage and can be Parried.",
            "The minotaur roars and sweeps its sword in a wide arc, hitting all adjacent enemies. The attack inflicts 2d12.",
            "The minotaur jumps high in the air and comes crashing down on an adventurer, who suffers 2D10 bludgeoning damage and is knocked down.",
        ]
    },
    {
        name: "Naiad",
        ferocity: 2,
        movement: 6,
        size: "Normal",
        armor: "",
        hp: 24,
        traits: [
            TRAITS.enchant,
            TRAITS.invisibility,
            TRAITS.aquatic,
            TRAITS.beautiful,
        ],
        gear: "",
        attacks: [
            "The naiad stretches out its long, strong arms and grabs a victim by the throat. The attack inflicts 1D10 bludgeoning damage and an additional 1D10 whenever it is the victim's turn. The strangled victim cannot move or perform actions that require body movement, except trying to break free, which requires an action and a successful STR roll with a Bane. Others can help.",
            "The naiad waves dismissively at a victim within 30' who suddenly realizes that their love for the creature will never be reciprocated! The victim must make a WIL roll with a Bane to resist Fear.",
            "The naiad claws at an opponent's eyes with its sharp fingernails. The attack inflicts 1D8 slashing damage, and the victim acts as if in total darkness for 1D3 rounds.",
            "The naiad grabs an opponent with its strong arms and pulls it into the water. The victim immediately begins to Drown and cannot move or perform actions that require body movement except trying to break free, which requires an action and a successful STR roll with a Bane. Others can help.",
            "With its sweet voice, the naiad seduces a victim within 30'. The victim must succeed with a WIL roll or immediately perform a movement and an action (must not require WP) of the naiad's(GM's) choosing. The victim also loses its turn in the round, if it has not already passed.",
            "The naiad summons a great wave from a water source within 30'. The area of effect is a 30' long cone emanating from the source. All untethered objects and creatures affected are pushed 1D6 hexes away from the source and suffer an equal amount of bludgeoning damage.",
        ]
    },
]

export const Monsters = () => {
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
                    {SESSIONS.map((session, index) => {
                        return (
                            <div
                                key={session.date}
                                className={"card w-auto p-2 mt-3"}
                            >
                                <p className={"m-0"}>
                                    Date: {session.date}<br />
                                    Host: {session.host} <br />
                                    Address: {session.address} <br />
                                    Start time: {session.startTime}
                                </p>
                            </div>
                        )
                    })}
                </section>
            </section>
        </section>
    )
}