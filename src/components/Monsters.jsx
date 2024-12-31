const TRAITS = {
    alcoholTolerance: "These creatures can drink copious amounts of alcohol without getting particularly drunk.",
    aquatic: "Aquatic creatures have unique means of moving and breathing under water. They can stay above the surface for one Stretch without any problems, but after that they suffer 1D6 damage per Stretch spent on land.",
    greedy: "These creatures love collecting anything that glitters. This makes them prone to bribery or distraction.",
    illusion: "At any time, these creatures can conjure an illusion that blends them in completely with their surroundings. The next time the creature performs an action, the illusion is broken.",
    immunity: {
        piercing: "These creatures are immune to all forms of piercing attacks, whether mundane or magical.",
    },
    impulsive: "These creatures are impatient and rarely think before they act. In combat they draw an extra initiative card and keep the [their Ferocity] lowest.",
    invisibility: "As an action, one of these creatures can become invisible except for its shadow. If an invisible creature performs an action that affects another creature, it immediately becomes visible and cannot become invisible again for one Stretch.",
    regeneration: "These creatures automatically heal 1d8 HP per turn in combat.",
    resistance: {
        bludgeoning: "These creatures take half damage from bludgeoning attacks",
        fire: "These creatures take half damage from fire.",
        mundane: "THese creatures take half damage from non-magical weapons and attacks.",
        piercing: "These creatures take half damage from piercing attacks",
        slashing: "These creatures take half damage from slashing attacks",
    },
    stench: "These creatures reek of rot and decay. This makes them easier to detect, but it also means that anyone who comes within 30' must make a CON roll to avoid becoming Dazed.",
    stride: "These creatures are capable of travelling at up to 35 mph over land, and never tire from travelling.",
    swarm: "These creatures fight together and some of their attacks are performed as a group. Such attacks still only use up the turn in the round for one fairy. Once half of the creatures have suffered damage, they flee, but will likely come back for revenge later.",
    trollSensitivity: "When in direct sunlight, trolls suffer 1d6 damage per round, and cannot regenerate. A troll that reaches 0 HP because of this turns to stone. Dense foliage, thick clouds, and even clothing are enough to avoid this effect.",
    vulnerability: {
        fire: "These creatures take double damage from fire, and will do everything they can to stop opponents using fire.",
    },
    wings: "These creatures fly around in erratic patterns. They always attack from the air and can only be attacked with ranged weapons or melee weapons with React.",
    
    
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
    {
        name: "Tree Kin",
        ferocity: 2,
        movement: 6,
        size: "Large",
        armor: 6,
        hp: 64,
        traits: [
            TRAITS.illusion,
            TRAITS.vulnerability.fire,
            TRAITS.resistance.piercing,
            TRAITS.resistance.bludgeoning,
            TRAITS.stride,
        ],
        gear: "",
        attacks: [
            "The tree kin speaks commanding words of power from ancient times. Everyone within 30' is shaken by its thunderous words and must make a WIL roll to resist fear.",
            "A swarm of small birds swoops down on all opponents within 30'. All victims suffer 1D8 damage and lose their next turn in the round, if it has not already passed.",
            "The creature shapes a long branch into a spear and thrusts it at a victim, inflicting 2D10 piercing damage. The attack can be parried.",
            "The tree kin gathers all its strength and slams its thickest branch into the head of a target, who suffers 2D10 bludgeoning damage and is knocked down.",
            "The monster grabs the victim and hurls it 1D8 hexes. The attack inflicts an equal amount of bludgeoning damage and the victim lands prone.",
            "The tree kin extends a long branch and wraps it around an opponent's neck. The attack inflicts 2D6 bludgeoning damage and an additional 2D6 whenever it is the victim's turn. The victim cannot move or perform actions that require body movement, except trying to break free which requires a STR roll with a Bane (action). Others can help.",
        ]
    },
    {
        name: "Troll",
        ferocity: 2,
        movement: 6,
        size: "Large",
        armor: 2,
        hp: 44,
        traits: [
            TRAITS.greedy,
            TRAITS.illusion,
            TRAITS.regeneration,
            TRAITS.stench,
            TRAITS.trollSensitivity,
        ],
        gear: "",
        attacks: [
            "The troll grabs a [suitable object] and brings it down on its opponents. Two victims adjacent to each other suffer 3D6 bludgeoning damage each and are knocked down.",
            "The troll blows its foul breath at an opponent within 10'. The victim becomes Sickly and must succeed with a CON roll (now with a Bane) or lose their turn in the round (if it has not already passed).",
            "With a gesture, the troll calls forth roots from the ground that snare a character within 30'. The victim becomes unable to move or perform actions that require movement. Breaking free requires a successful STR roll (counts as an action). Others can help.",
            "The troll flails wildly at all adjacent opponents. The attack inflicts 2D6 bludgeoning damage and knocks the victims down.",
            "With a [suitable object], the troll aims its strongest blow at an opponent. The victim suffers 4D6 bludgeoning damage and becomes Dazed.",
            "The troll thrusts its horns at an enemy. The victim suffers 2D10 bludgeoning damage and is knocked down.",
        ]
    },
    {
        name: "Basilisk",
        ferocity: 2,
        movement: 8,
        size: "Large",
        armor: 6,
        hp: 38,
        traits: [
            TRAITS.fear.chickens,
        ],
        gear: "",
        attacks: [
            "The basilisk slashes its terrible claws at two player characters within 10' of each other. Each attack inflicts 2D8 slashing damage.",
            "The beast thrusts its vile bird's head forward and pecks at a haracter with its razor-sharp beak. The attack inflicts 3D8 piercing damage.",
            "The basilisk lets out a cacophonous crow that makes the characters' ears bleed. Everyone within 30' must make a CON roll. On failure, a victim falls to the ground, becomes Dazed, and loses their turn in the round (if it has not already passed).",
            "The basilisk uses its snake-like tail as a whip in a sweeping attack against all adventurers within 10'. Each attack inflicts D10 bludgeoning damage, and anyone hit is knocked down.",
            "The basilisk spews a greenish-yellow cloud that reeks of poison and corrosive stomach acids. Everyone within 30' is affected by a lethal poison with Potency 15.",
            "A glow lights up in the basilisk's eyes as it turns its vicious bird's head towards the character who currently has the highest HP. If the victim can see (i.e., is not blind or blind-folded), they must make a WIL roll (not an action). On failure, their body turns to stone and the victim can no longer move or perform any actions whatsoever, but also cannot take damage. A petrified victim dies after 2D6 rounds, but the petrifaction can be reversed with a successful WIL roll. While still alive, the victim may roll WIL once per turn. The DISPEL spell can also undo the petrifaction, but only if the victim is still alive.",
        ]
    },
    {
        name: "Brooke Horse",
        ferocity: 2,
        movement: 12,
        size: "Large",
        armor: 0,
        hp: 34,
        traits: [
            "The brook horse can appear as an ordinary horse and is able to keep its instincts under control when hunting. It lures its victims into the water and tricks them into mounting it. If they do, the brook horse immediately gallops towards the deepest part of the water to throw the victim off and attack them by any means at its disposal. Seeing through a brook horse's facade requires a successful Beast Lore check.",
        ],
        gear: "",
        attacks: [
            "The brook horse kicks back at an opponent. The victim is thrown 1D8 hexes, lands prone, and takes an equal amount of bludgeoning damage.",
            "The brook horse bites an opponent with its sharp teeth. The victim suffers 2D10 slashing damage.",
            "The brook horse rears up and strikes with its hooves at two opponents within 10' of each other. Each victim suffers 2D6 bludgeoning damage and must make a WIL roll to resist Fear.",
            "The brook horse fixes its gaze on a character within 30' and focuses all its hatred on them. The victim must make a WIL roll with a Bane to resist Fear.",
            "The brook horse pulls an opponent into the deep and the victim immediately begins to Drown. The victim cannot move or perform actions that require movement, except trying to break free, which requires a STR roll with a Bane. Others can help.",
            "The brook horse lures an opponent to climb onto its back. Resisting requires a WIL roll with a Bane. On failure, the beast rides off with the victim at breakneck speed (up to twice its movement, i.e. 24 hexes), leaving the victim Exhausted and inflicting 1D6 damage (armor has no effect). This is repeated each round on the brook horse's turn, instead of rolling another monster attack, until the victim reaches zero HP or manages to jump off. On their turn, the victim can roll WIL again to throw themselves off the horse; on success, they take 2D6 bludgeoning damage from the fall (armor has no effect).",
        ]
    },
    {
        name: "Calydon",
        ferocity: 2,
        movement: 8,
        size: "Large",
        armor: 0,
        hp: 52,
        traits: [
            TRAITS.resistance.fire,
        ],
        gear: "",
        attacks: [
            "The calydon charges an opponent and rams them hard. The victim is thrown 1D6 hexes backwards, takes an equal amount of bludgeoning damage, and is knocked down.",
            "The calydon thrusts its tusks at an opponent, inflicting 1D12 piercing damage.",
            "The calydon rears up and kicks an opponent with its hooves. The victim suffers 2D8 bludgeoning damage and is knocked down.",
            "The calydon catches an opponent with its tusks and hurls the victim 1D4 hexes. The victim suffers an equal amount of bludgeoning damage (armor has no effect) and becomes Dazed.",
            "The calydon lets out a grunt filled with hatred and malice. Everyone within 30' must make a WIL roll to resist Fear.",
            "The calydon takes a deep breath and blasts its enemies with a 20' cone of fire. Anyone hit by the flames suffer 2D10 damage. Armor has no effect.",
        ]
    },
    {
        name: "Chimera",
        ferocity: 3,
        movement: 8,
        size: "Large",
        armor: 0,
        hp: 42,
        traits: [
            "Having three heads, a chimera is difficult to surprise. Attempts to use Stealth around a chimera are rolled with a Bane.",
        ],
        gear: "",
        attacks: [
            "The chimera lunges at an opponent, tearing at them with its sharp claws. The attack inflicts 2D8 slashing damage and knocks the victim down.",
            "The lion's head opens its great jaws and bites an opponent with its big, sharp fangs. The attack inflicts 2D10 slashing damage.",
            "The chimera jumps up to an opponent and butts the victim with its goat head. The attack deals 2D6 bludgeoning damage and leaves the victim Dazed.",
            "The snake head lashes out at an opponent within 10' and delivers a venomous bite, inflicting 1D8 piercing damage. If the victim takes damage, they are also injected with a Lethal poison with Potency 15.",
            "The chimera pounces on an opponent and directs all its attacks at the unfortunate victim. The attack deals 2D10 slashing damage, 2D6 bludgeoning damage, and 1D8 piercing damage. Armor protects against each of these. If the piercing damage penetrates the armor, the victim is injected with a lethal poison with Potency 15.",
            "The chimera roars, bleats, and hisses in a deafening cacophony. Everyone within 30' must make a WIL roll to resist Fear.",
        ]
    },
    {
        name: "Ooze",
        ferocity: 2,
        movement: 4,
        size: "Large",
        armor: 0,
        hp: 64,
        traits: [
            TRAITS.resistance.mundane,
            TRAITS.immunity.piercing,
            TRAITS.vulnerability.fire,
            "Oozes are corrosive. Anyone who touches or is touched by the ooze is exposed to a Paralytic poison, Potency 9.",
        ],
        gear: "",
        attacks: [
            "The ooze forms tentacles that strike at all adjacent characters. The victims suffer 1D10 bludgeoning damage and risk being exposed to the ooze's corrosive poison (see above).",
            "Twisted faces appear on the surface of the shapeless body mass: floating by, dissolving, or morphing into something else, in a mocking imitation of intelligent life. All opponents within 30' must make a WIL roll to resist Fear.",
            "The slimy creature launches a long tentacle at an enemy within 20', snatching a weapon from the victim's hand. The weapon is absorbed by the ooze's body and can only be recovered by killing the beast.",
            "From the depths of its gelatinous being, the ooze spits a disgusting ball of slime at an opponent within 30'. The victim suffers 1D8 bludgeoning damage and risks being exposed to the monster's corrosive poison.",
            "The ooze gathers its strength and emits a stinking cloud of poison that affects everyone within 30'. The victims become Dazed and are exposed to a paralyzing poison with potency 12.",
            "The monster sends out tentacles towards an opponent, enveloping their body and pulling them into its slimy interior. Once inside the ooze, the victim is immediately exposed to its corrosive poison (see above) and suffers 1D6 damage (armor has no effect). The victim takes an additional 1D6 damage per turn but can continue to attack the ooze from within. The victim gets out when the ooze is dead.",
        ]
    },
    {
        name: "Giant Spider",
        ferocity: 2,
        movement: 16,
        size: "Normal",
        armor: 0,
        hp: 36,
        traits: [
            "A single strand of giant spider web is as thick as a dwarven thumb. It can only be destroyed with slashing weapons, fire, or magic. Each strand has durability 9. 2d4 strands must be cut in a web to allow passage of a medium-sized creature.",
        ],
        gear: "",
        attacks: [
            "The spider's serrated mandibles swish through the air like scimitars. The attack inflicts 2D8 slashing damage on an opponent.",
            "The famished spider lunges at its victims, frantically attacking with its multitude of hairy, barbed legs. All adjacent opponents suffer 1D8 piercing damage.",
            "The monstrous arachnid stares at its victims with a terrifying multitude of eyes. Everyone within 30' must make a WIL roll to resist Fear.",
            "The eight-legged horror raises its rear end and attacks a victim with a poisonous stinger that shoots out of its repulsive body. The attack inflicts 1D10 piercing damage, and a victim who sustains at least 1 point of damage is also injected with a paralyzing poison with potency 16. The attack can be parried.",
            "The spider fixes its numerous eyes on the opponent with the highest STR. The next moment it spits sticky spider web at the victim, who must make an Dodge roll (not an action). On failure, the victim is caught in the web and unable to move or perform actions that require movement. It takes a successful STR roll with a Bane (action) to break free. Others can help.",
            "With a great leap, the giant spider launches its massive body at an opponent. The attack inflicts 2D6 bludgeoning damage and knocks the victim down.",
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