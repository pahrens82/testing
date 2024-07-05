import React, { useState } from "react";


export const Magic = () => {
    const TYPES = ["Arcane", "Divine", "Both"];
    const RANKS = [1, 2, 3, 4, 5];

    const [selectedRanks, setSelectedRanks] = useState(new Set([1]));
    const [type, setType] = useState(TYPES[2]);

    const rankInputs = [1, 2, 3, 4, 5];

    const handleRankChange = (event) => {
        let set = new Set([...selectedRanks]);
        let target = event.currentTarget;
        if (target.checked) {
            set.add(parseInt(target.value));
        } else {
            set.delete(parseInt(target.value));
        }
        setSelectedRanks(set);
    };

    const handleTypeChange = (value) => {
        setType(value);
    };

    const MODIFIERS = {
        additional_recipients: {
            name: "Additional Recipients",
            effect: "You may target additional recipients for a spell by paying additional WP. The first additional recipient adds 1 to the total cost, the second adds 2, the third adds 3, etc.",
            cost: "1+",
        },
        armor_piercing: {
            name: "Armor Piercing",
            effect: "Your attack burns through or pierces the target's armor. You may pay up to 3 additional WP to negate an equal amount of the target's armor.",
            cost: "1-3",
        },
        damaging: {
            name: "Damaging",
            effect: "Upon a successful caster skill check, this spell inflicts 2d4 damage. The means by which the damage is inflicted must make sense within the context of the spell.",
            cost: 3,
        },
        extended_duration: {
            name: "Extended Duration",
            effect: "The duration of the spell is increased by one step. 1 Round > 1 Minute > 1 Stretch > 1 Shift > 1 Day",
            cost: 3,
        },
        greater: {
            name: "Greater",
            effect: "The number of dice rolled is increased by 2. This cannot be combined with Improved.",
            cost: 4,
        },
        improved: {
            name: "Improved",
            effect: "The number of dice rolled is increased by 1. This cannot be combined with Greater.",
            cost: 2,
        },
        mind_rider: {
            name: "Mind Rider",
            effect: "The caster can communicate and sense through any of the beings conjured via this spell.",
            cost: 2,
        },
        mobile: {
            name: "Mobile",
            effect: "For 2 additional WP, the caster may 'walk' the spell with a speed of 6. For 4 additional WP the caster may move the spell to any space in sight. In either case, this uses the caster's Action.",
            cost: "2 or 4",
        },
        strong: {
            name: "Strong",
            effect: "Your opponent receives a Bane on their 'Opposed By' roll.",
            cost: 3,
        },
        variable_aoe: {
            name: "Variable AoE",
            effect: "The AoE of the spell is increased by one step: Individual > Small AoE (5') > Medium AoE (10') > Large AoE (15'). If the spell normally targets an individual, this modifier changes the target to a small AoE.",
            cost: 2,
        },
    };

    const RANGES = {
        personal: "Personal",
        touch: "Touch",
        short: "Attribute",
        long: "Attribute x 2",
    };

    const TARGETS = {
        individual: "Individual",
        small: "Small AoE",
        medium: "Medium AoE",
        large: "Large AoE",
    };

    const DURATIONS = {
        instant: "Instantaneous",
        round: "1 Round",
        minute: "1 Minute",
        stretch: "1 Stretch",
        shift: "1 Shift",
        day: "1 Day",
    };

    const SPELLS = [
        // {
        //     name: "Bane",
        //     rank: 1,
        //     range: "Touch",
        //     duration: "1 Minute",
        //     target: "Individual",
        //     opposedBy: "Willpower",
        //     type: "Divine",
        //     description: "Your deity punishes your foe: they receive a Bane on their next d20 roll within 1 minute.",
        //     modifiers: [
        //         MODIFIERS.additional_recipients,
        //     ],
        // },
        {
            name: "Bless",
            rank: 1,
            range: RANGES.short,
            duration: DURATIONS.round,
            target: TARGETS.individual,
            opposedBy: "Harmless",
            type: "Divine",
            description: "Your deity bestows a favor on you and anyone around you: the recipients gain a Boon on their next d20 roll before the the start of your next turn.",
            modifiers: [
                MODIFIERS.additional_recipients,
            ],
        },
        {
            name: "Bolt",
            rank: 1,
            range: RANGES.long,
            duration: DURATIONS.instant,
            target: TARGETS.individual,
            opposedBy: "Dodge or Parry",
            type: "Both",
            description: "Bolt sends damaging bursts of energy, streaks of holy light, or shards of matter toward one's foes. The bolt produce by this spell is considered a projectile: it may be Dodged or Parried, and the casting roll might receive a Bane due to visibility or cover/concealment. The damage of the bolt is 2d6; this damage is reduced by armor.",
            modifiers: [
                MODIFIERS.additional_recipients,
                MODIFIERS.armor_piercing,
                MODIFIERS.greater,
                MODIFIERS.improved,
            ],
        },
        {
            name: "Dark Sight",
            rank: 1,
            range: RANGES.short,
            duration: DURATIONS.shift,
            target: TARGETS.individual,
            opposedBy: "Harmless",
            type: "Arcane",
            description: "Dark Sight lets the target see in the dark, negating any Banes from dim or no lighting.",
            modifiers: [
                MODIFIERS.additional_recipients,
            ],
        },
        {
            name: "Dispel",
            rank: 1,
            range: RANGES.short,
            duration: DURATIONS.instant,
            target: "Special",
            opposedBy: "Attribute",
            type: "Arcane",
            description: "Dispel allows you to negate one spell. It has no effect on enchanted objects, or natural and Monster abilities. Dispel can be used on a spell already in effect or to counter a spell as it is being used as a Reaction (which uses your action for the round). If you win the opposed roll, your foe's spell comes to an end. If you fail the opposed roll, Dispel has no effect.",
            modifiers: [
                {
                    name: "Anti-Magic Field",
                    effect: "Instead of affecting a power at Range, this modifier creates a Medium AoE emanation around the caster and increases the duration to 1 minute. Magic items, effects, and powers have no effect within the field. Creatures conjured via Arcane magic can't enter the field, and if stuck in the field, must succeed at a Willpower save each round of exposure or lose 1d6 HP.",
                    cost: 8,
                }
            ],
        },
        {
            name: "Elemental Manipulation",
            rank: 1,
            range: RANGES.short,
            duration: DURATIONS.minute,
            target: "Special",
            opposedBy: "Special",
            type: "Arcane",
            description: "This spell grants basic control over the four traditional elements: air, earth, fire, and water. Upon casting, select the element you want to manipulate; you must have immediate access to the chosen element, since the spell does not conjure the element for you. For the duration of the spell you can take the following actions: Attack: You bombard a target with the element you are manipulating. You use your casting skill for the attack roll, and successful attacks deal 2d4 damage to a target within Range. Move: You move a cubic foot of the chosen element up to Range in any direction. Special: You may use the elements to create an additional effect with the GM's approval. Some examples are using air to blow out a torch, fill holes in a stone wall, conjure flame the size of a torch, or purify a gallon of water.",
            modifiers: [
                {
                    name: "Weather Manipulation",
                    effect: "By manipulating the elements, you can bring or disperse rain, snow, sun, and wind in a five-mile radius. The possible severity of the weather depends on the environment: a harsh desert might receive gentle rain while a rain forest gets a driving downpour. Casting Elemental Manipulation with this modifier takes a Short Rest, and the effect lasts for one Shift.",
                    cost: 8,
                }
            ],
        },
        {
            name: "Empathy",
            rank: 1,
            range: RANGES.short,
            duration: DURATIONS.stretch,
            target: TARGETS.individual,
            opposedBy: "Willpower",
            type: "Divine",
            description: "If you succeed at casting this on a target, you gain insight to that target's basic emotions. This grants a Boon to Persuasion checks with that target. This can also be cast on animals you want to ride, granting a Boon to Ride checks with that animal. Monsters are immune to Empathy.",
            modifiers: [
                MODIFIERS.additional_recipients,
                MODIFIERS.extended_duration,
                MODIFIERS.strong,
            ],
        },
        {
            name: "Fear",
            rank: 1,
            range: RANGES.short,
            duration: DURATIONS.instant,
            target: TARGETS.individual,
            opposedBy: "Willpower",
            type: "Both",
            description: "This spell causes overwhelming dread and horror. If the target fails the opposed roll they must make a roll on the Fear table. Monsters are immune to Fear.",
            modifiers: [
                MODIFIERS.additional_recipients,
                MODIFIERS.strong,
                MODIFIERS.variable_aoe,
            ],
        },
        {
            name: "Havoc",
            rank: 1,
            range: RANGES.short,
            duration: DURATIONS.instant,
            target: TARGETS.medium,
            opposedBy: "None",
            type: "Arcane",
            description: "Havoc creates chaos and mischief for all those within its area of effect, hurling debris and rivals in all directions. Movement is halved within the AoE, and physical skill checks received a Bane.",
            modifiers: [
                MODIFIERS.damaging,
                MODIFIERS.variable_aoe,
            ],
        },
        {
            name: "Healing",
            rank: 1,
            range: RANGES.touch,
            duration: DURATIONS.instant,
            target: TARGETS.individual,
            opposedBy: "Harmless",
            type: "Divine",
            description: "Healing restores 1d8 HP to a wounded character.",
            modifiers: [
                MODIFIERS.improved,
                MODIFIERS.greater,
                MODIFIERS.variable_aoe,
                {
                    name: "Neutralize",
                    effect: "Rather than healing HP, this spell can be used with a successful Medicine check to neutralize a poison.",
                    cost: 1,
                }
            ],
        },
        {
            name: "Illusion",
            rank: 1,
            range: RANGES.short,
            duration: DURATIONS.minute,
            target: TARGETS.medium,
            opposedBy: "Intelligence",
            type: "Arcane",
            description: "Illusion creates a visual scene of most anything you can imagine, but it is silent, intangible, and incapable of affecting the real world. Those who contact an illusion, or have reason to doubt an illusion is real, make an Intelligence check to disbelieve the illusion. Only one member of a group needs to disbelieve an illusion in order to end the effect for the entire group.",
            modifiers: [
                {
                    name: "Audible",
                    effect: "Your illusion is able to create sound. This sound may take the form of speech, birds singing, etc. This cannot mask or mute existing or real sounds.",
                    cost: 2,
                },
                MODIFIERS.variable_aoe,
                MODIFIERS.damaging,
                MODIFIERS.extended_duration,
                MODIFIERS.mobile,
                MODIFIERS.strong,
            ],
        },
        {
            name: "Light/Darkness",
            rank: 1,
            range: "Personal",
            duration: "1 Stretch",
            target: "Small AoE",
            opposedBy: "Harmless",
            type: "Arcane",
            description: "Light illuminates the AoE comparable to midday sun, while Darkness blocks any illumination in the AoE. If the two overlap, they cancel each other out.",
            modifiers: [
                MODIFIERS.extended_duration,
                MODIFIERS.variable_aoe,
            ],
        },
        {
            name: "Locate",
            rank: 1,
            range: "Personal",
            duration: "1 Stretch",
            target: "Special",
            opposedBy: "Harmless",
            type: "Arcane",
            description: "Locate lets the caster locate an object or creature with which they are familiar. They get a generael sense of the direction and distance to the target. However, Locate is blocked by running water, and only works on the caster's current plane.",
            modifiers: [],
        },
        {
            name: "Lock/Unlock",
            rank: 1,
            range: "Touch",
            duration: "Special",
            target: "Individual",
            opposedBy: "Harmless",
            type: "Arcane",
            description: "Lock permanently seals a door, window, container, envelope, drawer, box, or other closeable item. Any attempt to force the opening is made with a Bane. The caster may set a passphrase during casting that allows access to the object. Unlock may be used to cancel Lock. Lock does not physically activate a lock, nor does Unlock unlock physical locks.",
            modifiers: [
                MODIFIERS.alarm,
            ],
        },
        {
            name: "Mage Armor",
            rank: 1,
            range: "Attribute",
            duration: "1 Minute",
            target: "Individual",
            opposedBy: "Harmless",
            type: "Arcane",
            description: "Mage Armor grants the recipient 2 points of armor that stack with other forms of armor.",
            modifiers: [
                MODIFIERS.additional_recipients,
            ],
        },
        {
            name: "Mind Link",
            rank: 1,
            range: "Attribute",
            duration: "1 Stretch",
            target: "Individual",
            opposedBy: "Willpower",
            type: "Arcane",
            description: "Mind Link creates a telepathic connection between two individuals (neither of which must be the caster) which allows them to communicate telepathically. This spell does not allow mind reading. The range of this connection is limited to one mile. If either individual gains a mental Condition, the connected individual receives the same Condition.",
            modifiers: [
                MODIFIERS.additional_recipients,
                {
                    name: "Broadcast",
                    effect: "Broadcast lets the caster send a telepathic message to any number of recipients within Range. The duration becomes Instant, and the communication is one-way.",
                    cost: 1,
                },
                MODIFIERS.extended_duration,
            ],
        },
        {
            name: "Mind Reading",
            rank: 1,
            range: "Attribute",
            duration: "Instant",
            target: "Individual",
            opposedBy: "Willpower",
            type: "Arcane",
            description: "Mind Reading lets the caster read the thoughts of the target; they are able to learn the true answer to one question. The target is aware of the violation. Boons and Banes may be applied depending on the circumstances. Monsters are immune to Mind Reading.",
            modifiers: [
                {
                    name: "Mind Walk",
                    effect: "Rather than getting the answer to a specific question, Mind Walk unlocks an entire scene or chain of related memories. This is only used by mages of the Black Robes.",
                    cost: 3,
                },
            ],
        },
        {
            name: "Protection",
            rank: 1,
            range: "Attribute",
            duration: "1 Minute",
            target: "Individual",
            opposedBy: "Harmless",
            type: "Both",
            description: "Hostile magic (not Monstrous or natural powers) that directly targets a character who has Protection is rolled with a Bane.",
            modifiers: [
                MODIFIERS.additional_recipients,
            ],
        },
        {
            name: "Relief",
            rank: 1,
            range: "Attribute",
            duration: "Special",
            target: "Individual",
            opposedBy: "Harmless",
            type: "Divine",
            description: "Relief removes one Attribute Condition from the target. If the Condition stems from ongoing circumstances, such as a disease or poison, the Condition is removed for one Shift.",
            modifiers: [
                MODIFIERS.additional_recipients,
            ],
        },
        {
            name: "Sanctuary",
            rank: 1,
            range: "Personal",
            duration: "1 Minute",
            target: "Small AoE",
            opposedBy: "Willpower",
            type: "Divine",
            description: "Targeting a creature within the AoE of Sanctuary with a hostile action requires succeeding at a Willpower check. Sanctuary works both ways, however: if someone within the AoE by Sanctuary takes a hostile action toward another, Sanctuary immediately expires.",
            modifiers: [
                MODIFIERS.variable_aoe,
                MODIFIERS.strong,
            ],
        },
        {
            name: "Shape Change",
            rank: 2,
            cost: "Varies",
            range: RANGES.short,
            duration: DURATIONS.stretch,
            target: TARGETS.individual,
            opposedBy: "Harmless",
            type: "Divine",
            description: "This power allows the caster to take the form of other living creatures. Held and worn items are assumed into the new form and reappear when the power ends. The caster retains their mental attributes, while taking on the physical attributes of the creature whose form they take on. The minimum cost is 3 power points; the size and type of creature will increase the cost.",
            modifiers: [
                MODIFIERS.extended_duration,
                MODIFIERS.polymorph,
                MODIFIERS.transform,
            ],
        },
        {
            name: "Smite",
            rank: 1,
            range: RANGES.short,
            duration: DURATIONS.stretch,
            target: TARGETS.individual,
            opposedBy: "None",
            type: "Divine",
            description: "This power is cast on a weapon. While active, the damage dealt by that weapon is increased by 1 die.",
            modifiers: [
                MODIFIERS.extended_duration,
                MODIFIERS.additional_recipients,
                MODIFIERS.holy_weapon,
            ],
        },
        {
            name: "Silence",
            rank: 1,
            range: RANGES.personal,
            duration: DURATIONS.minute,
            target: TARGETS.medium,
            opposedBy: "Perception",
            type: "Arcane",
            description: "Silence mutes all sound up to a loud shout in volume within a Medium AoE emanation around the caster. Sounds louder than a loud shout can be heard via a Perception check, albeit with a Bane.",
            modifiers: [
                MODIFIERS.variable_aoe,
                MODIFIERS.extended_duration,
            ],
        },
        {
            name: "Speak Language",
            rank: 1,
            range: RANGES.short,
            duration: DURATIONS.stretch,
            target: TARGETS.individual,
            opposedBy: "Harmless",
            type: "Arcane",
            description: "This power allows a character to speak, read, and write a mundane language other than their own. The caster must have access to an example (spoken or written) of the language.",
            modifiers: [
                MODIFIERS.additional_recipients,
                MODIFIERS.extended_duration,
            ],
        },
        {
            name: "Stun",
            rank: 1,
            range: RANGES.short,
            duration: DURATIONS.instant,
            target: TARGETS.individual,
            opposedBy: "Constitution",
            type: "Both",
            description: "Stun strikes a target with concussive force, sound, light, or the like. If the target fails their Constitution check, they gain the Dazed Condition.",
            modifiers: [
                MODIFIERS.variable_aoe,
            ],
        },
        {
            name: "Conjure Ally",
            rank: 1,
            cost: "Varies",
            range: RANGES.short,
            duration: DURATIONS.minute,
            target: TARGETS.individual,
            opposedBy: "Harmless",
            type: "Arcane",
            description: "This power lets the caster summon a magical servant. The servant's appearance is determined along with the power's trappings. The caster's level determines how powerful of a servant they can summon, which in turn determines the casting cost. Chart included elsewhere.",
            modifiers: [
                MODIFIERS.additional_conjurations,
                MODIFIERS.combat_ability,
                MODIFIERS.mind_rider,
                MODIFIERS.extended_duration,
            ],
        },
        {
            name: "Conjure Animal",
            rank: 1,
            cost: "Varies",
            range: RANGES.short,
            duration: DURATIONS.minute,
            target: TARGETS.individual,
            opposedBy: "Harmless",
            type: "Divine",
            description: "This power lets the caster conjure a mundane animal. This animal is loyal and obedient to the caster, but is an animal and will act as such. The cost of casting is determined by the animal being summoned.",
            modifiers: [
                MODIFIERS.additional_conjurations,
                MODIFIERS.combat_ability,
                MODIFIERS.mind_rider,
                MODIFIERS.extended_duration,
            ],
        },
        {
            name: "Conjure Monster",
            rank: 3,
            cost: "Varies",
            range: RANGES.short,
            duration: DURATIONS.minute,
            target: TARGETS.individual,
            opposedBy: "Harmless",
            type: "Arcane",
            description: "Conjuring a mindless magical ally or simple beast is one thing, but conjuring a Monster is a true display of power! The cost of conjuring a Monster is 5 times the Ferocity of the monster being conjured, and the caster must have encountered an example of the Monster. The conjured Monster is essentially mindless, and loyal to the caster.",
            modifiers: [],
        },
        {
            name: "Conjure Undead",
            rank: 3,
            cost: "Varies",
            range: RANGES.short,
            duration: DURATIONS.minute,
            target: TARGETS.individual,
            opposedBy: "Harmless",
            type: "Divine",
            description: "This power lets the caster conjure undead to serve their whims. The cost is determined by the type of undead being conjured. Unlike Animate Dead, this spell doesn't require corpses.",
            modifiers: [
                MODIFIERS.additional_conjurations,
                MODIFIERS.combat_ability,
                MODIFIERS.mind_rider,
                MODIFIERS.extended_duration,
            ],
        },
        {
            name: "Wall Walker",
            rank: 1,
            range: RANGES.short,
            duration: DURATIONS.minute,
            target: TARGETS.individual,
            opposedBy: "Harmless",
            type: "Arcane",
            description: "Wall Walker lets the recipient walk on vertical surfaces at half speed.",
            modifiers: [
                MODIFIERS.additional_conjurations,
                MODIFIERS.extended_duration,
            ],
        },
    ];



    return (
        <section className={"contents"}>
            <h1>Magic</h1>
            <section>
                <h3>Type</h3>
                {TYPES.map((casterType, index) => {
                    return (
                        <div
                            className={"form-check form-check-inline"}
                            key={casterType}
                        >
                            <input
                                className={"form-check-input"}
                                type={"radio"}
                                id={`typeRadio${index}`}
                                value={index}
                                checked={casterType === type}
                                onChange={() => handleTypeChange(casterType)}
                            />
                            <label
                                className={"form-check-label"}
                                htmlFor={`typeRadio${index}`}
                            >
                                {casterType}
                            </label>
                        </div>
                    )
                })}
            </section>
            <section className={"mt-3"}>
                <h3>Ranks</h3>
                {RANKS.map((spellRank, index) => {
                    return (
                        <div
                            className={"form-check form-check-inline"}
                            key={spellRank}
                        >
                            <input
                                className={"form-check-input"}
                                type={"checkbox"}
                                id={`ranksCheckbox${index}`}
                                value={index + 1}
                                checked={selectedRanks.has(index + 1)}
                                onChange={handleRankChange}
                            />
                            <label
                                className={"form-check-label"}
                                htmlFor={`ranksCheckbox${index + 1}`}
                            >
                                Rank {index + 1}
                            </label>
                        </div>
                    )
                })}
            </section>
            <section className={"mt-3"}>
                <h3>Spells</h3>
                {SPELLS.map((spell, index) => {
                    if (selectedRanks.has(spell.rank)) {
                        if (
                            (spell.type === type || spell.type === "Both") ||
                            (type === "Both")
                        ) {
                            return (
                                <ul key={spell.name.replace(/ /g, "-")} className={"list-unstyled mb-4"}>
                                    <li><span className={"h5"}>{spell.name}</span></li>
                                    <li><strong>Rank: </strong>{spell.rank}</li>
                                    <li><strong>WP Cost: </strong>{spell.cost || spell.rank}</li>
                                    <li><strong>Range: </strong>{spell.range}</li>
                                    <li><strong>Duration: </strong>{spell.duration}</li>
                                    <li><strong>Target: </strong>{spell.target}</li>
                                    <li><strong>Opposed By: </strong>{spell.opposedBy}</li>
                                    <li><strong>Type: </strong>{spell.type}</li>
                                    <li><strong>Description: </strong>{spell.description}</li>
                                    <li><strong>Modifiers:</strong>
                                        <ul>
                                            {spell.modifiers.map((modifier, indexx) => {
                                                if (modifier) {
                                                    return (
                                                        <li key={`${spell.name.replace(/ /g, "-")}-${modifier.name.replace(/ /g, "-")}`}>
                                                            <span><span className={"text-decoration-underline"}>{modifier.name} ({modifier.cost} WP)</span>: {modifier.effect}</span>
                                                        </li>
                                                    )
                                                }
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            )
                        }
                    }
                })}
            </section>
        </section>
    )
};
