import { makePricingVerbose } from "../../constants";


const NA = "N/A";

const AVAILABILITIES = [
    "Common",
    "Uncommon",
    "Rare",
    "Unique",
];

const ALCHEMICAL_INGREDIENTS = {
    batBlood: {
        name: "Bat Blood",
        cost: 0.2,
        supply: 1,
    },
    bearTooth: {
        name: "Bear Tooth",
        cost: 0.4,
        supply: 1,
    },
    boarTusk: {
        name: "Boar Tusk",
        cost: 0.2,
        supply: 1,
    },
    charcoal: {
        name: "Charcoal",
        cost: 0.05,
        supply: 0,
    },
    deerAntler: {
        name: "Deer Antler",
        cost: 0.2,
        supply: 1,
    },
    demonBlood: {
        name: "Demon Blood",
        cost: 10,
        supply: 3,
    },
    dragonBlood: {
        name: "Dragon Blood",
        cost: 10,
        supply: 3,
    },
    dragonTooth: {
        name: "Dragon Tooth",
        cost: 10,
        supply: 3,
    },
    fairyDust: {
        name: "Fairy Dust",
        cost: 8,
        supply: 3,
    },
    generalHerbs: {
        name: "General Herbs",
        cost: 0.2,
        supply: 0,
    },
    ghoulBone: {
        name: "Ghoul Bone",
        cost: 1,
        supply: 2,
    },
    giantBlood: {
        name: "Giant Blood",
        cost: 3,
        supply: 2,
    },
    griffonFeather: {
        name: "Griffon Feather",
        cost: 5,
        supply: 2,
    },
    hobgoblinBlood: {
        name: "Hobgoblin Blood",
        cost: 0.5,
        supply: 1,
    },
    hydraBlood: {
        name: "Hydra Blood",
        cost: 6,
        supply: 3,
    },
    ironFilings: {
        name: "Iron Filings",
        cost: 0.1,
        supply: 0,
    },
    manticoreSpike: {
        name: "Manticore Spike",
        cost: 2,
        supply: 2,
    },
    mead: {
        name: "Mead",
        cost: 0.1,
        supply: 0,
    },
    minotaurHorn: {
        name: "Minotaur Horn",
        cost: 4,
        supply: 2,
    },
    nymphTears: {
        name: "Nymph Tears",
        cost: 3,
        supply: 2,
    },
    octopusInk: {
        name: "Octopus Ink",
        cost: 0.5,
        supply: 2,
    },
    philosophersStone: {
        name: "Philosopher's Stone",
        cost: "-",
        supply: 3,
    },
    saltpeter: {
        name: "Saltpeter",
        cost: 0.1,
        supply: 1,
    },
    seaSerpentBile: {
        name: "Sea Serpent Bile",
        cost: 2,
        supply: 2,
    },
    spiderVenom: {
        name: "Spider Venom",
        cost: 3,
        supply: 2,
    },
    sulfur: {
        name: "Sulfur",
        cost: 0.3,
        supply: 1,
    },
    trollBile: {
        name: "Troll Bile",
        cost: 2,
        supply: 2,
    },
    trollBlood: {
        name: "Troll Blood",
        cost: 1,
        supply: 2,
    },
    trollTooth: {
        name: "Troll Tooth",
        cost: 1,
        supply: 2,
    },
    vampireBlood: {
        name: "Vampire Blood",
        cost: 7,
        supply: 3,
    },
    wolfBlood: {
        name: "Wolf Blood",
        cost: 0.3,
        supply: 1,
    },
    worgTooth: {
        name: "Worg Tooth",
        cost: 0.5,
        supply: 2,
    },
};

const ALCHEMICAL_RECIPES = [
    {
        name: "Focus Tonic",
        rank: 1,
        prerequisite: NA,
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.wolfBlood,
        ],
        cost: 5,
        supply: 2,
        effect: "Cures the Dazed condition.",
    },
    {
        name: "Herbal Concoction",
        rank: 1,
        prerequisite: NA,
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
        ],
        cost: 1,
        supply: 1,
        effect: "Grants a Boon on Medicine checks to tend someone suffering from a disease.",
    },
    {
        name: "Invigorating Decoction",
        rank: 1,
        prerequisite: NA,
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.boarTusk,
        ],
        cost: 5,
        supply: 2,
        effect: "Cures the Exhausted condition.",
    },
    {
        name: "Liquid Courage",
        rank: 1,
        prerequisite: NA,
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.bearTooth,
        ],
        cost: 5,
        supply: 2,
        effect: "Cures the Scared condition.",
    },
    {
        name: "Medicinal Water",
        rank: 1,
        prerequisite: NA,
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.deerAntler,
        ],
        cost: 5,
        supply: 2,
        effect: "Cures the Sickly condition.",
    },

    {
        name: "Sleeping Poison",
        rank: 1,
        prerequisite: NA,
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.spiderVenom,
        ],
        cost: "6 silver x potencty",
        supply: 1,
        effect: "Can be ingested by a target or applied to a weapon. The poison has Potency 12, plkus 3 for each additional PL.",
    },
    {
        name: "Soothing Brew",
        rank: 1,
        prerequisite: NA,
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.mead,
        ],
        cost: 5,
        supply: 2,
        effect: "Cures the Angry condition.",
    },
    {
        name: "Spiritlifter",
        rank: 1,
        prerequisite: NA,
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.sulfur,
        ],
        cost: 5,
        supply: 2,
        effect: "Cures the Disheartened condition.",
    },
    {
        name: "Stun Powder",
        rank: 1,
        prerequisite: NA,
        ingredients: [
            ALCHEMICAL_INGREDIENTS.saltpeter,
            ALCHEMICAL_INGREDIENTS.sulfur,
        ],
        cost: 4,
        supply: 1,
        effect: "Can be blown or thrown into the face of a target within 10 feet via a Brawling check. If successful, the target becomes Dazed.",
    },
    {
        name: "Antidote",
        rank: 2,
        prerequisite: "Paralyzing Poison",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.seaSerpentBile,
        ],
        cost: 20,
        supply: 2,
        effect: "Cancels the full effect of a poison. Any limited effects remain.",
    },
    {
        name: "Healing Draught",
        rank: 2,
        prerequisite: "Herbal Infusion",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.hobgoblinBlood,
        ],
        cost: 10,
        supply: 2,
        effect: "Immediately restores 6 HP.",
    },
    {
        name: "Lock Acid",
        rank: 2,
        prerequisite: "Spiritlifter",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.sulfur,
            ALCHEMICAL_INGREDIENTS.trollBile,
        ],
        cost: 10,
        supply: 2,
        effect: "Corrodes and destroys a metal lock or similar small metal object in one Stretch.",
    },
    {
        name: "Love Potion",
        rank: 2,
        prerequisite: "Liquid Courage and Focus Tonic",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.nymphTears,
        ],
        cost: 20,
        supply: 2,
        effect: "Grants a Boon on all CHA-based skill checks directed at the person who drank the potion. The effect lasts for one Shift.",
    },
    {
        name: "Paralyzing Potion",
        rank: 2,
        prerequisite: "Sleeping Poison",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.batBlood,
        ],
        cost: "1.2 x potency",
        supply: 1,
        effect: "Can be ingested by a target or applied to a weapon. The poison has Potency 12, plus 3 for each additional PL.",
    },
    {
        name: "Puff Bomb",
        rank: 2,
        prerequisite: "Stun Powder",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.charcoal,
            ALCHEMICAL_INGREDIENTS.saltpeter,
            ALCHEMICAL_INGREDIENTS.sulfur,
        ],
        cost: 10,
        supply: 2,
        effect: "Can be thrown up to 1/2 STR hexes (Brawling check) and deals 1d8 fire damage on a hit. Can also be used to light a campfire.",
    },
    {
        name: "Smokescreen",
        rank: 2,
        prerequisite: "Stun Powder",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.charcoal,
            ALCHEMICAL_INGREDIENTS.saltpeter,
            ALCHEMICAL_INGREDIENTS.sulfur,
            ALCHEMICAL_INGREDIENTS.octopusInk,
        ],
        cost: 10,
        supply: 2,
        effect: "A smoke bomb that can be thrown up to 1/2 STR hexes (Brawling check). It creates a thick cloud of smoke in a 10-foot radius around the bomb's final position. The smoke blocks all vision, and everyone in the area of effect acts as if in complete darkness. At the start of each round, roll a 1d4 if outdoors or a 1d8 if indoors. On a 1, the smoke dissipates.",
    },
    {
        name: "Corrosive Sludge",
        rank: 3,
        prerequisite: "Lock Acid",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.sulfur,
            ALCHEMICAL_INGREDIENTS.trollBile,
            ALCHEMICAL_INGREDIENTS.ghoulBone,
        ],
        cost: 25,
        supply: 2,
        effect: "A viscous acid that can be thrown up to 1/2 STR hexes (Brawling check) and deals 1d8 damage on a hit. If the target is wearing armor, its armor rating is permanently by the same amount (does not affect natural armor).",
    },
    {
        name: "Drops of Strength",
        rank: 3,
        prerequisite: "Antidote and Invigorating Decoction",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.giantBlood,
        ],
        cost: 60,
        supply: 2,
        effect: "Increases STR to 18 for one Shift, raising the consumer's STR damage bonus (to +1d8) and carrying capacity (to 9). Also cures the Exhausted condition and grants a Boon on all STR-based skill rolls (skill levels are unaffected).",
    },
    {
        name: "Elixir of Wisdom",
        rank: 3,
        prerequisite: "Antidote and Soothin Brew",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.trollTooth,
        ],
        cost: 60,
        supply: 2,
        effect: "Grants a Boon on all INT-based skill rolls for one Shift. Also cures the Angry condition.",
    },
    {
        name: "Healing Potion",
        rank: 3,
        prerequisite: "Healing Draught",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.trollBlood,
        ],
        cost: 50,
        supply: 2,
        effect: "Immediately restores 12 HP.",
    },
    {
        name: "Lethal Poison",
        rank: 3,
        prerequisite: "Paralyzing Poison",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.spiderVenom,
        ],
        cost: "2 x potency",
        supply: 1,
        effect: "Can be ingested by a target or applied to a weapon. The poison has Potency 12, plus 3 for each additional power level.",
    },
    {
        name: "Nimble Nectar",
        rank: 3,
        prerequisite: "Antidote and Focus Tonis",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.griffonFeather,
        ],
        cost: 60,
        supply: 2,
        effect: "Increases AGL to 18 for one Shift, raising the consumer's AGL damage bonus (to +1d8) and movement rate (+10 ft). Also cures the Dazed condition and grants a Boon on all AGL-based skill rolls (skill levels are unaffected).",
    },
    {
        name: "Sunflash",
        rank: 3,
        prerequisite: "Puff Bomb",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.charcoal,
            ALCHEMICAL_INGREDIENTS.saltpeter,
            ALCHEMICAL_INGREDIENTS.sulfur,
            ALCHEMICAL_INGREDIENTS.manticoreSpike,
        ],
        cost: 30,
        supply: 2,
        effect: "Creates a bright flash when thrown on the ground. Everyone within 30 feet who is unprepared must succeed at a Dodge roll (not an action) or be blinded and lose their next turn. They cannot perform reactions until then.",
    },
    {
        name: "Tincture of Beauty",
        rank: 3,
        prerequisite: "Spirit Lifter and Love Potion",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.vampireBlood,
        ],
        cost: 80,
        supply: 2,
        effect: "Grants a Boon on all CHA-based skill rolls for one Shift. Also cures the Disheartened condition.",
    },
    {
        name: "Battle Fumes",
        rank: 4,
        prerequisite: "Drops of Strength",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.saltpeter,
            ALCHEMICAL_INGREDIENTS.sulfur,
            ALCHEMICAL_INGREDIENTS.giantBlood,
        ],
        cost: 100,
        supply: 3,
        effect: "A bubbling cauldron that releases strengthening fumes for one Shift. Anyone who takes a Stretch rest within 10 feet of the cauldron gains a Boon on all melee attacks for the next Shift.",
    },
    {
        name: "Explosive Orb",
        rank: 4,
        prerequisite: "Sunflash",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.charcoal,
            ALCHEMICAL_INGREDIENTS.saltpeter,
            ALCHEMICAL_INGREDIENTS.sulfur,
            ALCHEMICAL_INGREDIENTS.ironFilings,
        ],
        cost: 60,
        supply: 2,
        effect: "Can be thrown up to 1/2 STR hexes (Brawling check), dealing 3d6 bludgeoning damage to the target and everyone within 10 feet of the target.",
    },
    {
        name: "Healing Tincture",
        rank: 4,
        prerequisite: "Healing Potion",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.hydraBlood,
        ],
        cost: 80,
        supply: 3,
        effect: "Immediately restores 18 HP and 18 WP.",
    },
    {
        name: "Healing Vapors",
        rank: 4,
        prerequisite: "Healing Potion and Smokescreen",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.saltpeter,
            ALCHEMICAL_INGREDIENTS.sulfur,
            ALCHEMICAL_INGREDIENTS.trollBlood,
        ],
        cost: 70,
        supply: 2,
        effect: "A bubbling cauldron that releases healing vapors for one Shift. Anyone who takes a Stretch rest within 10 feet of the cauldron gains the full benefits of a Long rest.",
    },
    {
        name: "Philosopher's Stone",
        rank: 4,
        prerequisite: "Elixir of Wisdom",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.demonBlood,
            ALCHEMICAL_INGREDIENTS.dragonBlood,
            ALCHEMICAL_INGREDIENTS.sulfur,
            ALCHEMICAL_INGREDIENTS.trollBlood,
        ],
        cost: "-",
        supply: 3,
        effect: "Produces one dose of Philosopher's Stone, which is used as an ingredient in other recipes.",
    },
    {
        name: "Toxic Mist",
        rank: 4,
        prerequisite: "Lethal Poison and Smokescreen",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.charcoal,
            ALCHEMICAL_INGREDIENTS.saltpeter,
            ALCHEMICAL_INGREDIENTS.sulfur,
            ALCHEMICAL_INGREDIENTS.spiderVenom,
        ],
        cost: 50,
        supply: 2,
        effect: "A poison bomb that can be thrown up to 1/2 STR hexes. It produces a toxic mist in a 10-foot radius around the point of impact. Anyone in the area of effect is afflicted by a Paralyzing, Sleeping, or Lethal poison with potency 15. The specific poison should be selected at time of purchase or creation.",
    },
    {
        name: "Create Gold",
        rank: 5,
        prerequisite: "Philosopher's Stone",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.philosophersStone,
            ALCHEMICAL_INGREDIENTS.ironFilings,
        ],
        cost: "-",
        supply: 3,
        effect: "Changes the iron filings into gold worth 1d8x10 gp.",
    },
    {
        name: "Elixir of Life",
        rank: 5,
        prerequisite: "Healing Tincture",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.generalHerbs,
            ALCHEMICAL_INGREDIENTS.philosophersStone,
            ALCHEMICAL_INGREDIENTS.hydraBlood,
        ],
        cost: "-",
        supply: 3,
        effect: "Immediately restores all lost HP and WP. Also cures all conditions, diseases, poison effects, and severe injuries. Anyone at 0 HP who drinks the Elixir of Life stops making death rolls.",
    },
    {
        name: "Homunculus",
        rank: 5,
        prerequisite: "Philosopher's Stone",
        ingredients: [
            ALCHEMICAL_INGREDIENTS.philosophersStone,
            ALCHEMICAL_INGREDIENTS.ghoulBone,
            ALCHEMICAL_INGREDIENTS.fairyDust,
        ],
        cost: "-",
        supply: 3,
        effect: "Creates a small humanoid creature, about 30 cm tall, that follows your commands like a spiritus familiaris. It has 6 HP, speed 6, Dodge 15, Stealth 15, and all the familiar abilities on page XXX except Trained, and the Gather ability on page XXX. However, the homunculus is disobedient and must be persuaded daily not to run away.",
    },
];


export const Alchemy = () => {
    return (
        <section className={"container mb-5"}>
            <h1>Alchemy</h1>
            <section>
                <h3>Alchemical Substances</h3>
                <p>Alchemy differs from other schools of magic in that you do
                    not cast spells directly on your surroundings. Instead
                    you create magical substances, often in the form of potions.
                    Unless otherwise stated in the recipe, the substance is consumed
                    or applied (as an action), whereupon its effect occurs immediately.
                </p>
                <section>
                    <h5>Preparation</h5>
                    <p>Preparing an alchemy recipe normally takes one Shift. An Alchemy
                        check determines whether you succeed. You make the roll and spend
                        your WP at the end of the preparation process. If successful, you
                        produce one dose of the substance and each additional power
                        level (PL) yields one more dose. Each dose counts as a separate
                        item.
                    </p>
                </section>
                <section>
                    <h5>Power Level</h5>
                    <p>With the exception of poisons, alchemical substances do not have
                        power levels (PL). Instead, the PL determines how many doses
                        you produce.
                    </p>
                </section>
                <section>
                    <h5>Ingredients</h5>
                    <p>Alchemical recipes require specific ingredients, which are listed with each recipe. One dose of each listed ingredient is required per dose of the completed alchemical substance. The ingredients are consumed when the recipe is prepared, even if the roll fails.
                    </p>
                </section>
                <section>
                    <h5>Laboratory</h5>
                    <p>To prepare an alchemical recipe, you need access to tools such as cauldrons, mortars and pestles, funnels, flasks, and vials to store the finished potion. A small field laboratory containing the most essential tools counts as a Rare item with weight 1 and normally costs 50 gold. Alchemical recipes can be prepared in an ordinary kitchen, but this imposes a Bane on the Alchemy roll. Conversely, a large and well-equipped alchemical laboratory that occupies an entire room grants a Boon on the roll, but costs at least 500 gold.
                    </p>
                </section>
                <section>
                    <h5>Ingredients</h5>
                    <p>Alchemical recipes require specific ingredients, which are listed
                        with each recipe. These ingredients are consumed when the recipe
                        is prepared, even if the check fails. Ingredients count as Tiny
                        items for determining encumberance.
                        <ul>
                            <li><strong>General Herbs:</strong> A basic ingredient required for many recipes is <i>general herbs</i>. As an alchemist, it is wise to always keep a small supply of general herbs in your pack.</li>
                            <li><strong>Finding Herbs:</strong> If you spend a Shift foraging plants in the wild and succeed at your Survival check, you may choose to find 1d6 doses of general herbs instead of food. Rarer herbs may also be found if the GM deems it reasonable, but usually only one dose per successful check.</li>
                            <li><strong>Extracting Ingredients:</strong> Some rarer ingredients must be extracted from (usually) dead animals and Monsters. This takes a Stretch of time and requires a Beast Lore check. A successful check yields 1d3 doses of the ingredient, while a critical success yields 1d6 doses. If the check fails, no further attempts can be made on the same creature.</li>
                        </ul>
                    </p>
                </section>
                <section>
                    <h5>Laboratory</h5>
                    <p>To prepare an alchemical recipe, you need access to tools such as
                        cauldrons, mortars and pestles, funnels, flasks, and vials to store
                        the finished potions. A small field laboratory containing the most
                        essential tools counts as a Rare item with weight 1 and costs 50
                        gold. Alchemical recipes can be prepared in an ordinary kitchen,
                        but this imposes a Bane on the Alchemy check. Conversely, a large
                        and well-equipped alchemical laboratory that occupies an entire room
                        grants a Boon on the check, but costs at least 500 gold.
                    </p>
                </section>
                <section>
                    <h5>Shelf Life</h5>
                    <p>Once prepared, an alchemical substance remains potent forever, or at
                        least long enough that it has no practical relevance. However, an
                        alchemical substance can be rendered ineffective with Counter Ritual.
                    </p>
                </section>
            </section>
            <section>
                <h3>Recipes</h3>
                <p></p>
                {ALCHEMICAL_RECIPES.map((recipe) => {
                    return (
                        <>
                            <ul className={"list-unstyled"} key={recipe.name}>
                                <li><strong>{recipe.name}</strong></li>
                                <li>Rank: {recipe.rank}</li>
                                <li>Prerequisites: {recipe.prerequisite}</li>
                                <li>Ingredients:
                                    {recipe.ingredients.map((ingredient) => {
                                        console.log(recipe.name)
                                        return (
                                            <ul key={ingredient.name}>
                                                <li>{ingredient.name}: {makePricingVerbose(ingredient.cost)}, {AVAILABILITIES[ingredient.supply]}</li>
                                            </ul>
                                        )
                                    })}
                                </li>
                                <li>Price Per Dose: {makePricingVerbose(recipe.cost)}</li>
                                <li>Availability: {AVAILABILITIES[recipe.supply]}</li>
                                <li>Effect: {recipe.effect}</li>
                            </ul>
                            <hr />
                        </>
                    )
                })}
            </section>
        </section>
    );
};
