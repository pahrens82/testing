export const Abilities = () => {
    const ABILITIES = [
        {
            name: "Alchemist",
            req: "Alchemy 12",
            cost: 0,
            desc: "This ability lets you use the Alchemy skill to craft alchemical items.",
        },
        {
            name: "Assassin",
            req: "Knives 12",
            cost: 3,
            desc: "Your Sneak Attacks with Knives deal an additional 1d10 damage. This ability can be combined with the Backstabbing ability. You activate this ability after your roll to hit, but before you roll for damage.",
        },
        {
            name: "Backstabbing",
            req: "Knives 12",
            cost: 3,
            desc: <span>You can activate this ability when making a melee attack against an enemy that is also adjacent to another PC. Your attack then counts as a Sneak Attack. This ability can only be used with a <i>subtle</i> weapon. Activating this ability is part of a melee attack action.</span>,
        },
        {
            name: "Battle Cry",
            req: "-",
            cost: 3,
            desc: "As an action during combat, you let out a battle cry that inspires your friends. All other PCs within earshot immediately heal an Attribute Condition of their choice.",
        },
        {
            name: "Cat's Fall",
            req: "Acrobatics 12",
            cost: "Varies",
            desc: "The number of d6 rolled for fall damage is reduce by one for each WP spent.",
        },
        {
            name: "Deadly Aim",
            req: "Any ranged weapon skill 12",
            cost: 3,
            desc: "A hit with a ranged weapon inflicts an additional die of damage, but you cannot move in the same round. You can activate this ability after rolling to hit, but not if you moved.",
        },
        {
            name: "Defensive",
            req: "Any melee weapon skill 12",
            cost: 3,
            desc: "You may attempt to Parry any attack without consuming your action for the round. This bonus Parry can be used at any time during the round. You may only try to Parry the same attack once and you cannot try to Dodge and Parry the same attack. This ability can be used multiple times per round if you have enough WP.",
        },
        {
            name: "Deflect Arrow",
            req: "Any melee weapon skill 12",
            cost: 3,
            desc: "You can Parry a ranged attack with a melee weapon, instead of only with a shield.",
        },
        {
            name: "Disguise",
            req: "Bluffing 12",
            cost: 2,
            desc: "You can spend a Short Rest assuming a different appearance, voice, and/or demeanor. Your new persona must be of the same species as you. Anyone who sees you from up to 25 feet away can make a Perception check to see through your disguise.",
        },
        {
            name: "Cleave",
            req: "Axes or Swords 12",
            cost: 3,
            desc: "When wielding a slashing weapon, you can attack two enemies to which you are adjacent. You roll one attack; if it succeeds, both enemies are hit. You enemies can Parry or Dodge this attack individually. Damage is rolled separately. This ability can be combined with Dual Wield.",
        },
        {
            name: "Dual Wield",
            req: "Any melee weapon skill 12",
            cost: 3,
            desc: "This ability can only be used if you wield a one-handed weapon in each hand. The minimum Strength requirement of the weapon in your off-hand increases by 3. You activate this ability on your turn in combat and can then perform an extra attack with your second weapon; this second attack receives a Bane. This ability can be combined with Double Slash.",
        },
        {
            name: "Eagle Eye",
            req: "Perception 12",
            cost: 2,
            desc: "You can see a person or object up to 600 feet away in great detail, as if standing right next to it. The effect lasts for one scene. Alternatively, while in combat you can shoot at a target beyond the weapon's effective range without getting a Bane to your roll. This ability must be activated for each new target.",
        },
        {
            name: "Fast Footwork",
            req: "Dodge 12",
            cost: 3,
            desc: "You may attempt to Dodge an attack without consuming your action for the round. You may only try to Dodge the same attack once and you cannot try to Dodge and Parry the same attack. This ability can be used multiple times per round if you have enough WP.",
        },
        {
            name: "Fast Healer",
            req: "-",
            cost: 2,
            desc: "You heal an additional 1d6 HP during a Short Rest. This ability does not affect WP or Conditions.",
        },
        {
            name: "Focused",
            req: "-",
            cost: 0,
            desc: "Your maximum WP is permanently increased by 2. You can select this ability multiple times.",
        },
        {
            name: "Guardian",
            req: "Axes, Bludgeons, or Swords 12",
            cost: 2,
            desc: "You do not hesitate to take a hit to protect your friends. If you and another PC are both adjacent to the same enemy and that enemy tries to attack the other character, you can activate this ability to force the enemy to attack you instead. Using this ability can be done out of turn and does not count as an action.",
        },
        {
            name: "Herbalist",
            req: "Herbalism 12",
            cost: 0,
            desc: "This ability lets you create herbal items, such as poisons, antidotes, and potions.",
        },
        {
            name: "Insight",
            req: "Persuasion 12",
            cost: 2,
            desc: "If you spend a Short Rest talking with another person, you can roll Perception to determine whether that person is telling the truth. You cannot tell exactly what a person is lying about.",
        },
        {
            name: "Intuition",
            req: "Myths and Legends 12",
            cost: 3,
            desc: "When faced with a difficult decision, you can activate this ability to ask a question directly to the GM and receive a helpful answer. The answer represents your vast general knowledge and should only aid your decision-making, not reveal everything there is to know.",
        },
        {
            name: "Iron Fist",
            req: "Brawling 12",
            cost: 2,
            desc: "You can activate this ability after rolling to hit with an unarmed attack. Your unarmed attack deals an additional 1d6 damage.",
        },
        {
            name: "Iron Grip",
            req: "Brawling 12",
            cost: 2,
            desc: "You get a Boon to Brawling when trying to Grapple another person or prevent a grappled person from breaking free.",
        },
        {
            name: "Lightning Fast",
            req: "Dodge 12",
            cost: 2,
            desc: "You receive 2 cards when determining initative, and pick which of those two cards you want to use.",
        },
        {
            name: "Lone Wolf",
            req: "Survival 12",
            cost: 2,
            desc: "You are always Comfortable when Resting.",
        },
        {
            name: "Massive Blow",
            req: "Any Strength-based melee weapon skill 12",
            cost: 3,
            desc: "A strike with a two-handed melee weapon deals an additional die of damage, but you cannot move in the same round. You can activate this ability after rolling to hit, but not if you moved.",
        },
        {
            name: "Master Blacksmith",
            req: "Crafting 12",
            cost: "Varies",
            desc: "This ability requires access to a smithy. In one Short Rest, you can sharpen a slashing or piercing weapon for 3 WP. The rating of Armor is reduced by 1 against a sharpened weapon. This effect only lasts for one Attack or Parry. In one day you can craft a metal weapon or suit of metal armor. The cost in WP is equal to the item's price in gold. You can spread the work across multiple days if you do not have enough WP.",
        },
        {
            name: "Master Carpenter",
            req: "Crafting 12",
            cost: "Varies",
            desc: "This ability requires carpentry tools. As an action, you can inflict 1d12 points of damage per WP spent on a wooden door, wall, or other unattended inanimate object, ignoring the object's Armor. In one Short Rest you can craft a wooden item. This costs a number of WP equal to the item's price in gold. You can spread the work across multiple days if you do not have enough WP.",
        },
        {
            name: "Master Chef",
            req: "Cooking 12",
            cost: 2,
            desc: "You can activate this ability to gain a Boon to your Cooking roll while preparing food during a Long Rest.",
        },
        {
            name: "Master Spellcaster",
            req: "Any magic school 12",
            cost: 3,
            desc: "If you activate this ability on your turn in combat, you can cast two different spells as a single action. You can roll for the first spell and then activate this ability to cast a second spell.",
        },
        {
            name: "Master Tanner",
            req: "Crafting 12",
            cost: "Varies",
            desc: "Use of this ability requires a workshop. You can craft one set of leather armor from the skin of an animal or a Monster. The armor gets half the beast's Armor rating (rounded up). This takes at least one day and costs a number of WP equal to the price of the Armor. The work can be spread across multiple days if you don't have enough WP.",
        },
        {
            name: "Master Hunter",
            req: "Tracking 12",
            cost: 3,
            desc: "When Hunting, you can activate this ability to gain a Boon on your Tracking Roll. If you do so, you may also roll twice to determine what animal you find.",
        },
        {
            name: "Monster Slayer",
            req: "Any weapon skill 12",
            cost: 3,
            desc: "An attack that hits a Monster deals an additional 1d10 damage. You can activate this ability after you roll to hit, but before you roll for damage.",
        },
        {
            name: "Quartermaster",
            req: "Survival 12",
            cost: 2,
            desc: "You are skilled at finding exceptional campsites. When setting up camp, you can activate this ability to find a site that grants a Boon to one of the following: Tracking for Hunting, Survival for Fishing or Foraging, Cooking, or Perception for standing watch.",
        },
        {
            name: "Raise Spirits",
            req: "Perform 12",
            cost: 3,
            desc: "You are adept at raising others' spirits with song and poetry. Once per day, while outside combat, you may activate this ability. All other PCs within earshot immediately heal an Attribute Condition of their choice.",
        },
        {
            name: "Robust",
            req: "",
            cost: 0,
            desc: "Your max HP increases by 2. This ability can be selected multiple times.",
        },
        {
            name: "Sea Legs",
            req: "Swimming 12",
            cost: 2,
            desc: "You can activate this ability while making a Swimming check to automatically succeed. Note that this does not negate the need to breathe.",
        },
        {
            name: "Shield Block",
            req: "Any Strength-based melee weapon skill 12",
            cost: 3,
            desc: "You must be wielding a shield to use this ability. You can activate this ability when Parrying with a shield to receive a Boon to your roll. You may also activate this ability to Parry Monster attacks that normally cannot be Parried (this does not include AoE attack). This ability can be combined with Defensive.",
        },
        {
            name: "Throwing Arm",
            req: "Any melee weapon skill 12",
            cost: 3,
            desc: "You can throw any one-handed melee weapon with tremendous force at an enemy up to 20 feet away; if the weapon can already be thrown, increase the throwing range to 30 feet. Roll your attack as normal. The target can Parry or Dodge as usual. The weapon lands in the same space as the enemy.",
        },
        {
            name: "Twin Shot",
            req: "Bows 12",
            cost: 3,
            desc: "You may activate this ability when attacking with a bow to loose two arrows instead of one. Roll a single attack, with a Bane. The arrows can be directed at the same target or two different targets. Roll damage separately.",
        },
        {
            name: "Weapon Mastery",
            req: "Weapon Specialization",
            cost: 0,
            desc: "Your Weapon Focus attacks deal critical hits on rolls of 1 or 2.",
        },
        {
            name: "Weapon Focus",
            req: "Any weapon skill 15",
            cost: 3,
            desc: "When you take this ability, select a weapon skill in which you have at least a score of 15. You may activate this ability to gain a Boon when making attacks using that skill.",
        },
        {
            name: "Weapon Specialization",
            req: "Weapon Focus",
            cost: 3,
            desc: "You may activate this ability to increase the damage of Weapon Focus attacks by 1 die",
        },
    ];

    ABILITIES.sort((a, b) => a.name > b.name)

    return (
        <section className={"container"}>
            <h1>Abilities</h1>
            {ABILITIES.map((ability, index) => {
                return (
                    <div key={ability.name.replace(/ /g,"_")}>
                        <p className={"h4 m-0"}>
                            {ability.name}
                        </p>
                        <p className={"m-0"}>
                            <span className={"fw-bold"}>Requirement:</span> {ability.req}
                        </p>
                        <p className={"m-0"}>
                            <span className={"fw-bold"}>WP Cost:</span> {ability.cost}
                        </p>
                        <p>
                            <span className={"fw-bold"}>Description:</span> {ability.desc}
                        </p>
                    </div>
                )
            })}
        </section>
    )
};
