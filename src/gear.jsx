export const GEAR_CATEGORIES = [
    "Melee Weapons",
    "Ranged Weapons",
    "Ammunition",
    "Shields",
    "Armor",
    "Clothes",
    "Miscellaneous",
    "Hunting and Fishing",
    "Light Sources",
    "Tools",
    "Lodging",
    "Scholarly Items",
    "Musical Instruments",
    "Transportation",
    "Containers",
    "Services",
    "Medicinal Products",
    "Herbal Products",
    "Alchemical Products",
    "Animals",
];

export const MELEE_WEAPONS = [
    {
        name: "Axe, Hand",
        skill: "Axes",
        grip: 1,
        minStr: 7,
        damage: "1d10",
        durability: 9,
        cost: 1,
        features: "Throwable",
        availability: 0,
    },
    {
        name: "Club",
        skill: "Bludgeons",
        grip: 1,
        minStr: 7,
        damage: "1d8",
        durability: 6,
        cost: 5,
        features: "Throwable",
        availability: 0,
    },
    {
        name: "Club, Spiked",
        skill: "Bludgeons",
        grip: 1,
        minStr: 7,
        damage: "1d10",
        durability: 6,
        cost: 8,
        features: "Throwable",
        availability: 0,
    },
    {
        name: "Club, War",
        skill: "Bludgeons",
        grip: 2,
        minStr: 16,
        damage: "2d8",
        durability: 9,
        cost: 15,
        features: "",
        availability: 0,
    },
    {
        name: "Dagger",
        skill: "Knives",
        grip: 1,
        minStr: 7,
        damage: "2d4",
        durability: 9,
        cost: 2,
        features: "Subtle, Throwable",
        availability: 0,
    },
    {
        name: "Knife",
        skill: "Knives",
        grip: 1,
        minStr: 7,
        damage: "1d8",
        durability: 6,
        cost: 1.2,
        features: "Subtle, Throwable",
        availability: 0,
    },
    {
        name: "Mace",
        skill: "Bludgeons",
        grip: 1,
        minStr: 7,
        damage: "2d4",
        durability: 12,
        cost: 8,
        features: "Throwable",
        availability: 0,
    },
    {
        name: "Spear, Long",
        skill: "Spears",
        grip: 2,
        minStr: 10,
        range: 2,
        damage: "1d10",
        durability: 9,
        cost: 2,
        features: "Cannot Parry, Reach",
        availability: 0,
    },
    {
        name: "Spear, Short",
        skill: "Spears",
        grip: 1,
        minStr: 7,
        damage: "2d4",
        durability: 9,
        cost: 1.6,
        features: "Throwable",
        availability: 0,
    },
    {
        name: "Staff",
        skill: "Staves",
        grip: 2,
        minStr: 7,
        damage: "2d4",
        durability: 9,
        cost: 1,
        features: "",
        availability: 0,
    },
    {
        name: "Sword, Short",
        skill: "Swords",
        grip: 1,
        minStr: 7,
        damage: "2d4",
        durability: 15,
        cost: 10,
        features: "",
        availability: 0,
    },
    {
        name: "Axe, Battle",
        skill: "Axes",
        grip: 1,
        minStr: 13,
        damage: "2d8",
        durability: 9,
        cost: 5,
        features: "",
        availability: 1,
    },
    {
        name: "Axe, Great",
        skill: "Axes",
        grip: 2,
        minStr: 16,
        damage: "2d10",
        durability: 9,
        cost: 12,
        features: "",
        availability: 0,
    },
    {
        name: "Dagger, Parrying",
        skill: "Knives",
        grip: 1,
        minStr: 7,
        damage: "1d8",
        durability: 15,
        cost: 2,
        features: "",
        availability: 1,
    },
    {
        name: "Flail",
        skill: "Bludgeons",
        grip: 1,
        minStr: 13,
        damage: "2d6",
        durability: 12,
        cost: 15,
        features: "Cannot Parry",
        availability: 1,
    },
    {
        name: "Maul",
        skill: "Bludgeons",
        grip: 2,
        minStr: 16,
        damage: "2d10",
        durability: 12,
        cost: 25,
        features: "",
        availability: 1,
    },
    {
        name: "Morningstar",
        skill: "Bludgeons",
        grip: 1,
        minStr: 13,
        damage: "2d6",
        durability: 12,
        cost: 10,
        features: "",
        availability: 1,
    },
    {
        name: "Staff, Iron-shod",
        skill: "Staves",
        grip: 2,
        minStr: 7,
        damage: "2d4",
        durability: 9,
        cost: 6,
        features: "",
        availability: 1,
    },
    {
        name: "Sword, Broad",
        skill: "Swords",
        grip: 1,
        minStr: 10,
        damage: "1d10",
        durability: 15,
        cost: 10,
        features: "",
        availability: 1,
    },
    {
        name: "Sword, Long",
        skill: "Swords",
        grip: 1,
        minStr: 13,
        damage: "2d8",
        durability: 15,
        cost: 15,
        features: "",
        availability: 1,
    },
    {
        name: "Sword, Scimitar",
        skill: "Swords",
        grip: 1,
        minStr: 10,
        damage: "2d6",
        durability: 15,
        cost: 13,
        features: "",
        availability: 1,
    },
    {
        name: "Trident",
        skill: "Spears",
        grip: 1,
        minStr: 10,
        damage: "2d6",
        durability: 9,
        cost: 15,
        features: "Throwable",
        availability: 1,
    },
    {
        name: "Warhammer",
        skill: "Bludgeons",
        grip: 1,
        minStr: 10,
        damage: "2d8",
        durability: 12,
        cost: 3,
        features: "",
        availability: 1,
    },
    {
        name: "Lance",
        skill: "Spears",
        grip: 1,
        minStr: 13,
        range: 2,
        damage: "2d10",
        durability: 9,
        cost: 17,
        features: "Cannot Parry, Reach, Requires Mount",
        availability: 2,
    },
    {
        name: "Sword, Falchion",
        skill: "Swords",
        grip: 2,
        minStr: 16,
        damage: "2d8",
        durability: 15,
        cost: 25,
        features: "",
        availability: 2,
    },
    {
        name: "Sword, Great",
        skill: "Swords",
        grip: 2,
        minStr: 16,
        damage: "2d10",
        durability: 15,
        cost: 50,
        features: "",
        availability: 2,
    },
];

export const RANGED_WEAPONS = [
    {
        name: "Bow, Hunting",
        skill: "Bows",
        grip: 2,
        minStr: 10,
        range: 20,
        damage: "1d10",
        durability: 3,
        cost: 40,
        features: "Requires a quiver",
        availability: 0,
    },
    {
        name: "Bow, War",
        skill: "Bows",
        grip: 2,
        minStr: 16,
        range: 60,
        damage: "1d12",
        durability: 6,
        cost: 80,
        features: "Requires a quiver",
        availability: 1,
    },
    {
        name: "Crossbow, Light",
        skill: "Crossbows",
        grip: 2,
        minStr: 7,
        range: 30,
        damage: "2d6",
        durability: 6,
        cost: 50,
        features: "Requires a quiver, No damage bonus",
        availability: 1,
    },
    {
        name: "Crossbow, Heavy",
        skill: "Crossbows",
        grip: 2,
        minStr: 13,
        range: 40,
        damage: "2d8",
        durability: 9,
        cost: 75,
        features: "Requires a quiver, No damage bonus",
        availability: 2,
    },
    {
        name: "Sling",
        skill: "Slings",
        grip: 2,
        minStr: 3,
        range: 12,
        damage: "1d8",
        durability: 0,
        cost: 0.3,
        features: "Tiny, Cannnot Parry",
        availability: 0,
    },
    {
        name: "Sling, Staff",
        skill: "Slings/Staves",
        grip: 2,
        minStr: 7,
        range: 12,
        damage: "2d4",
        durability: 3,
        cost: 0.7,
        features: "Can be used as a Staff",
        availability: 0,
    },
];

export const AMMUNITION = [
    {
        name: "Arrow/Bolt, Armor Piercing",
        range: "-5",
        cost: 1,
        features: "Ignores 4 points of Armor.",
        availability: 2,
    },
    {
        name: "Arrow/Bolt, Blunt",
        range: "-5",
        damage: "-2 steps",
        cost: 1,
        features: "Reduces the bow's damage die by two steps. Deals no damage against armored targets.",
        availability: 2,
    },
    {
        name: "Arrow/Bolt, Sheaf",
        range: "-2",
        cost: 0.1,
        damage: "+1d4",
        features: "Deals an additional 1d4 damage.",
        availability: 0,
    },
    {
        name: "Arrow/Bolt, Singing",
        range: "-5",
        damage: "None",
        cost: 3,
        features: "Deals no damage; emits a high-pitched whistle.",
        availability: 2,
    },
    {
        name: "Arrow/Bolt, Fire",
        range: "-10",
        damage: "-2 steps",
        cost: 5,
        features: "Reduces the bow's damage die by two steps. Ignites flammable targets.",
        availability: 2,
    },
    {
        name: "Sling Bullet",
        range: "-2",
        cost: 0.2,
        features: "Ignores 2 points of Armor.",
        availability: 1,
    },
]

export const SHIELDS = [
    {
        name: "Buckler",
        grip: 1,
        minStr: 7,
        damage: "1d4",
        durability: 9,
        cost: 4,
        availability: 0,
    },
    {
        name: "Kite",
        grip: 1,
        minStr: 10,
        damage: "1d6",
        durability: 18,
        cost: 8,
        availability: 1,
    },
    {
        name: "Pavise",
        grip: 2,
        minStr: 16,
        damage: "-",
        durability: 15,
        cost: 12,
        availability: 2,
    },
    {
        name: "Round",
        grip: 1,
        minStr: 13,
        damage: "1d8",
        durability: 12,
        cost: 6,
        availability: 0,
    },
];

export const ARMOR = [
    {
        name: "Padded",
        minStr: 7,
        rating: 1,
        cost: 6,
        availability: 0,
        bulk: 2,
        effect: "",
    },
    {
        name: "Boiled Leather",
        minStr: 7,
        rating: 2,
        cost: 12,
        availability: 1,
        bulk: 3,
        effect: "",
    },
    {
        name: "Studded Leather",
        minStr: 7,
        rating: 3,
        cost: 30,
        availability: 1,
        bulk: 4,
        effect: "",
    },
    {
        name: "Ring Mail",
        minStr: 10,
        rating: 4,
        cost: 100,
        availability: 1,
        bulk: 5,
        effect: "Bane on Stealth",
    },
    {
        name: "Brigandine",
        minStr: 10,
        rating: 5,
        cost: 125,
        availability: 1,
        bulk: 6,
        effect: "Bane on Dodge and Stealth",
    },
    {
        name: "Chain Mail",
        minStr: 13,
        rating: 6,
        cost: 150,
        availability: 2,
        bulk: 4,
        effect: "Bane on Acrobatics, Dodge, and Stealth",
    },
    {
        name: "Plate Mail",
        minStr: 13,
        rating: 8,
        cost: 750,
        availability: 2,
        bulk: 6,
        effect: "Bane on Acrobatics, Dodge, and Stealth",
    },
    {
        name: "Full Plate",
        minStr: 13,
        rating: 10,
        cost: 4000,
        availability: 2,
        bulk: 10,
        effect: "Bane on Acrobatics, Dodge, and Stealth",
    },
];

export const CLOTHES = [
    {
        name: "Belt, Fancy",
        cost: 2,
        availability: 2,
        bulk: 1,
        effect: "Holds your coin pouch and one potion.",
    },
    {
        name: "Belt, Potion",
        cost: 10,
        availability: 2,
        bulk: 1,
        effect: "No room for your coin pouch, but can hold 4 potions.",
    },
    {
        name: "Belt, Simple",
        cost: 0.2,
        availability: 0,
        bulk: 1,
        effect: "Holds your coin pouch.",
    },
    {
        name: "Boots, Riding",
        cost: 6,
        availability: 1,
        bulk: 1,
        effect: "Boon to rolls against various environmental hazards.",
    },
    {
        name: "Boots, Soft",
        cost: 2,
        availability: 0,
        bulk: 1,
        effect: "Boon to rolls against various environmental hazards.",
    },
    {
        name: "Cloak, Fur",
        cost: 5,
        availability: 0,
        bulk: 1,
        effect: "Prevents Banes from cold weather conditions.",
    },
    {
        name: "Cloak, Linen",
        cost: 1.5,
        availability: 0,
        bulk: 1,
        effect: "Prevents Banes from hot weather conditions.",
    },
    {
        name: "Cloak, Travel",
        cost: 3,
        availability: 0,
        bulk: 1,
        effect: "???.",
    },
    {
        name: "Garments, Linen",
        cost: 1,
        availability: 1,
        bulk: 1,
        effect: "Boon to Survival checks related to hot temperatures.",
    },
    {
        name: "Garments, Fine",
        cost: 10,
        availability: 2,
        bulk: 1,
        effect: "Boon to CHA-based skills depending on your audience.",
    },
    {
        name: "Garments, Fur",
        cost: 1,
        availability: 0,
        bulk: 2,
        effect: "Boon to Survival checks related to cold temperatures.",
    },
    {
        name: "Garments, Poor",
        cost: 0.05,
        availability: 0,
        bulk: 1,
        effect: "Bane on CHA-based skills depending on your audience.",
    },
    {
        name: "Garments, Simple",
        cost: 0.5,
        availability: 0,
        bulk: 1,
        effect: "Avoids a Bane on CHA-based skills.",
    },
    {
        name: "Shoes",
        cost: 1,
        availability: 0,
        bulk: 1,
        effect: "Avoids Banes to checks against various environmental hazards.",
    },
    {
        name: "Perfume/Cologne",
        cost: 5,
        availability: 1,
        bulk: 1,
        effect: "1 dose. Depending on the audience, may grant a Boon to CHA-based skill checks.",
    },
];

export const MISCELLANEOUS = [
    {
        name: "Abacus",
        cost: 10,
        availability: 1,
        bulk: 1,
        effect: "Boon on INT checks for solving mathematical problems.",
    },
    {
        name: "Bed Roll",
        cost: 1,
        availability: 0,
        bulk: 1,
        effect: "Required for a comfortable Long Rest in temperate wilderness.",
    },
    {
        name: "Blanket",
        cost: 1,
        availability: 0,
        bulk: 1,
        effect: "Required for a comfortable Long Rest in cold wilderness.",
    },
    {
        name: "Board Game",
        cost: 1,
        availability: 1,
        bulk: 1,
        effect: "Opposed INT to determine the winner.",
    },
    {
        name: "Dice",
        cost: 0.1,
        availability: 0,
        bulk: "Tiny",
        effect: "Determine the winner randomly.",
    },
    {
        name: "Dice, Loaded",
        cost: 1,
        availability: 1,
        bulk: "Tiny",
        effect: "Boon when determining random winner.",
    },
    {
        name: "Field Kitchen",
        cost: 4,
        availability: 0,
        bulk: 2,
        effect: "Boon on Cooking checks in the wilderness.",
    },
    {
        name: "Grappling Hook",
        cost: 3,
        availability: 0,
        bulk: 1,
        effect: "Can be used to secure a rope. Can be thrown 20'.",
    },
    {
        name: "Hammock",
        cost: 5,
        availability: 0,
        bulk: 1,
        effect: "Provides a comfortable Long Rest in a temperate wilderness. Must be anchored.",
    },
    {
        name: "Lockpicks, Masterpiece",
        cost: 30,
        availability: 2,
        bulk: 1,
        effect: "Grant a Boon to Tinkering checks to pick locks.",
    },
    {
        name: "Lockpicks, Regular",
        cost: 10,
        availability: 1,
        bulk: 1,
        effect: "Required for Tinkering checks to pick locks.",
    },
    {
        name: "Marbles",
        cost: 1,
        availability: 0,
        bulk: 1,
        effect: "A bag of polished stone marbles. Can be used for a game, or to turn a space into Difficult Terrain.",
    },
    {
        name: "Mirror, Glass",
        cost: 50,
        availability: 2,
        bulk: 1,
        effect: "A piece of silvered glass. Used to reflect light and start fires.",
    },
    {
        name: "Mirror, Metal",
        cost: 10,
        availability: 1,
        bulk: 1,
        effect: "A flat piece of polished metal. Used to reflect light.",
    },
    {
        name: "Padlock, Masterpiece",
        cost: 100,
        availability: 2,
        bulk: 1,
        effect: "Locks a door or chest. 25 HP, Armor 6, Bane to Tinkering to be picked.",
    },
    {
        name: "Padlock, Regular",
        cost: 20,
        availability: 0,
        bulk: 1,
        effect: "Locks a door or chest. 20 HP, Armor 5.",
    },
    {
        name: "Playing Cards",
        cost: 0.5,
        availability: 1,
        bulk: 1,
        effect: "Opposed Bluff check to determine winner.",
    },
    {
        name: "Quiver",
        cost: 1.6,
        availability: 0,
        bulk: 1,
        effect: "Required to carry arrows or bolts. Holds 20 projectiles.",
    },
    {
        name: "Rope, 50'",
        cost: 1,
        availability: 0,
        bulk: 1,
        effect: "May grant a Boon to, or required for, Climbing checks. Must be secured to be useful.",
    },
    {
        name: "Saddle",
        cost: 10,
        availability: 0,
        bulk: 4,
        effect: "Required avoid a Bane on Riding checks during combat.",
    },
    {
        name: "Tent, Small",
        cost: 5,
        availability: 0,
        bulk: 2,
        effect: "Provides a comfortable Long Rest for up to 2 medium creatures in the wilderness.",
    },
    {
        name: "Tent, Medium",
        cost: 15,
        availability: 0,
        bulk: 4,
        effect: "Provides a comfortable Long Rest for up to 4 medium creatures in the wilderness.",
    },
    {
        name: "Tent, Large",
        cost: 30,
        availability: 0,
        bulk: 6,
        effect: "Provides a comfortable Long Rest for up to 6 medium creatures in the wilderness.",
    },
    {
        name: "Tent, Pavilion",
        cost: 100,
        availability: 1,
        bulk: 20,
        effect: "Provides a luxurious Long Rest for up to 4 medium creatures in the wilderness.",
    },
    {
        name: "Whistle",
        cost: 0.5,
        availability: 0,
        bulk: "Tiny",
        effect: "Emits a sound that can be heard up to 300 feet away.",
    },
];

export const HUNTING_AND_FISHING = [
    {
        name: "Fishing Rod",
        cost: 2,
        availability: 0,
        bulk: 1,
        effect: "Provides 1d4 meals upon a successful Survival check.",
    },
    {
        name: "Fishing Net",
        cost: 4,
        availability: 0,
        bulk: 2,
        effect: "Provides 1d6 meals upon a successful Survival check.",
    },
    {
        name: "Trap, Foothold",
        cost: 3,
        availability: 0,
        bulk: 1,
        effect: "Used for catching medium and large game. While hunting, replaces the attack roll with a Survival check. Reusable.",
    },
    {
        name: "Trap, Snare",
        cost: 1,
        availability: 0,
        bulk: "Tiny",
        effect: "Used for catching small game. While hunting, replaces the attack roll with a Survival check. Single use.",
    },
];

export const LIGHT_SOURCES = [
    {
        name: "Candle, Beeswax",
        cost: 0.5,
        availability: 1,
        bulk: "Tiny",
        effect: "Illuminates personal space. Burns for one Shift. Not smokey or smelly.",
    },
    {
        name: "Candle, Tallow",
        cost: 0.05,
        availability: 0,
        bulk: "Tiny",
        effect: "Illuminates personal space. Burns for one Shift. Smokey and smelly.",
    },
    {
        name: "Flint and Steel",
        cost: 1,
        availability: 0,
        bulk: "Tiny",
        effect: "Required to light torches, candles, lanterns, and to start fires.",
    },
    {
        name: "Lamp Oil",
        cost: 1,
        availability: 0,
        bulk: 1,
        effect: "Enough oil to fuel a lantern for 8 Shifts.",
    },
    {
        name: "Lantern, Bullseye",
        cost: 12,
        availability: 1,
        bulk: 1,
        effect: "Illuminates a 60' cone.",
    },
    {
        name: "Lantern, Hooded",
        cost: 6,
        availability: 0,
        bulk: 1,
        effect: "Illuminates a 30' radius.",
    },
    {
        name: "Oil Lamp",
        cost: 2,
        availability: 0,
        bulk: 1,
        effect: "Illuminates a 15' radius.",
    },
    {
        name: "Torch",
        cost: 0.5,
        availability: 0,
        bulk: 1,
        effect: "Illuminates a 10' radius. Burns for 1 Shift. Smokey and smelly.",
    },
];

export const TOOLS = [
    {
        name: "Bow Drill",
        cost: 3,
        availability: 0,
        bulk: 1,
        effect: "Drills a half-inch hole in wood.",
    },
    {
        name: "Hammer",
        cost: 1,
        availability: 0,
        bulk: "1H Weapon",
        effect: "2d4 damage against objects. Does not take damage.",
    },
    {
        name: "Needle and Thread",
        cost: 0.3,
        availability: 0,
        bulk: "Tiny",
        effect: "Can be used via a Crafting check to mend clothing.",
    },
    {
        name: "Pickaxe",
        cost: 3,
        availability: 0,
        bulk: "2H Weapon",
        effect: "2d8 damage against objects. Does not take damage.",
    },
    {
        name: "Pry Bar",
        cost: 2,
        availability: 0,
        bulk: "1H Weapon",
        effect: "2d6 damage against objects. Does not take damage.",
    },
    {
        name: "Saw, Crosscut",
        cost: 3,
        availability: 0,
        bulk: "1H Weapon",
        effect: "Used for cutting wood.",
    },
    {
        name: "Saw, Folding",
        cost: 4,
        availability: 1,
        bulk: "1",
        effect: "Used for cutting wood.",
    },
    {
        name: "Shovel",
        cost: 2,
        availability: 0,
        bulk: "2H Weapon",
        effect: "Reduces the time spent digging by half.",
    },
    {
        name: "Sledgehammer",
        cost: 3,
        availability: 0,
        bulk: "2H Weapon",
        effect: "2d10 damage against objects. Does not take damage.",
    },
    {
        name: "Tools, Smithing",
        cost: 20,
        availability: 1,
        bulk: "6",
        effect: "Used for Crafting. This includes various hammers and chisels, but not a workshop.",
    },
    {
        name: "Tools, Carpentry",
        cost: 8,
        availability: 1,
        bulk: "6",
        effect: "Used for Crafting. This includes various hammers and chisels, but not a workshop.",
    },
    {
        name: "Tools, Leatherworking",
        cost: 5,
        availability: 1,
        bulk: "6",
        effect: "Used for Crafting. This includes various hammers and chisels, but not a workshop.",
    },
];

export const LODGING = [
    {
        name: "Inn Room, Private",
        cost: 0.2,
        availability: 1,
        bulk: "",
        effect: "Allows for a comfortable Long Rest and privacy.",
    },
    {
        name: "Inn Room, Shared",
        cost: 1.5,
        availability: 0,
        bulk: "",
        effect: "Allows for a comfortable Long Rest but no privacy.",
    },
    {
        name: "Inn Room, Luxury",
        cost: 2,
        availability: 2,
        bulk: "",
        effect: "Allows for a luxurious Long Rest and privacy.",
    },
    {
        name: "Stable Floor",
        cost: 0.02,
        availability: 0,
        bulk: "",
        effect: "Basically the same as sleeping outside, but in a settlement.",
    },
];

export const SCHOLARLY_ITEMS = [
    {
        name: "Book",
        cost: 25,
        availability: 2,
        bulk: 1,
        effect: "Can be studied to gain an Advancement Opportunity.",
    },
    {
        name: "Chalk/Charcoal",
        cost: 0.01,
        availability: 0,
        bulk: "Tiny",
        effect: "Used for writing and drawing.",
    },
    {
        name: "Notebook",
        cost: 5,
        availability: 0,
        bulk: 1,
        effect: "Used for notetaking.",
    },
    {
        name: "Quill and Ink",
        cost: 10,
        availability: 1,
        bulk: 1,
        effect: "Used for writing.",
    },
    {
        name: "Scroll, Parchment",
        cost: 0.1,
        availability: 0,
        bulk: "Tiny",
        effect: "Used for writing.",
    },
];

export const TRANSPORTATION = [
    {
        name: "Canoe, Small",
        cost: 30,
        availability: 0,
        effect: "Holds 2 passengers. Oars included. Can be portaged.",
    },
    {
        name: "Canoe, Large",
        cost: 75,
        availability: 0,
        effect: "Holds 4 passengers. Oars included. Can be portaged.",
    },
    {
        name: "Carriage",
        cost: 250,
        availability: 1,
        effect: "Holds 4 passengers. Pulled by 2 animals, not included.",
    },
    {
        name: "Cart",
        cost: 75,
        availability: 0,
        effect: "Holds 3 passengers. Pulled by 1 animal, not included.",
    },
    {
        name: "Coach",
        cost: 14000,
        availability: 2,
        effect: "Holds 6 passengers, 2 externally and 4 internally. Pulled by 2 animals, not included.",
    },
    {
        name: "Raft",
        cost: 100,
        availability: 0,
        effect: "Holds 6 passengers. Poles and sweeps included.",
    },
    {
        name: "Rowboat",
        cost: 25,
        availability: 0,
        effect: "Holds 4 passengers. Oars included.",
    },
    {
        name: "Sailboat",
        cost: 400,
        availability: 1,
        effect: "Holds 6 passengers.",
    },
    {
        name: "Wagon",
        cost: 200,
        availability: 0,
        effect: "Holds 6 passengers. Pulled by 2 animals, not included",
    },
];

export const CONTAINERS = [
    {
        name: "Backpack",
        cost: 3,
        availability: 0,
        bulk: "Tiny",
        effect: "Increases your carrying capacity by 2. You can only benefit from one backpack.",
    },
    {
        name: "Barrel, Small",
        cost: 2,
        availability: 0,
        bulk: 2,
        effect: "Holds 2 gallons. 10 HP, Armor 3.",
    },
    {
        name: "Barrel, Large",
        cost: 8,
        availability: 0,
        bulk: 6,
        effect: "Holds 10 gallons. 10 HP, Armor 3.",
    },
    {
        name: "Bottle, Glass",
        cost: 10,
        availability: 2,
        bulk: 1,
        effect: "Holds 12 ounces of liquid. Stopped with a cork.",
    },
    {
        name: "Barrel, Clay",
        cost: 1,
        availability: 0,
        bulk: 1,
        effect: "Holds 12 ounces of liquid. Stopped with a cork.",
    },
    {
        name: "Bucket, Wooden",
        cost: 0.05,
        availability: 0,
        bulk: 1,
        effect: "Holds 2 gallons.",
    },
    {
        name: "Chest, Large",
        cost: 5,
        availability: 1,
        bulk: 3,
        effect: "Holds 12 bulk. 25 HP, Armor 5. Padlock not included.",
    },
    {
        name: "Chest, Small",
        cost: 2,
        availability: 0,
        bulk: 2,
        effect: "Holds 2 bulk. 10 HP, Armor 5. Padlock not included.",
    },
    {
        name: "Jug, Clay",
        cost: 1,
        availability: 0,
        bulk: 2,
        effect: "Holds 16 ounces of liquid. Stopped with a cork.",
    },
    {
        name: "Jug, Glass",
        cost: 20,
        availability: 1,
        bulk: 1,
        effect: "Holds 16 ounces of liquid. Stopped with a cork.",
    },
    {
        name: "Pouch",
        cost: 1,
        availability: 0,
        bulk: "Tiny",
        effect: "Holds 1 bulk.",
    },
    {
        name: "Sack",
        cost: 0.4,
        availability: 0,
        bulk: 1,
        effect: "Holds 4 bulk.",
    },
    {
        name: "Saddle Bag",
        cost: 6,
        availability: 0,
        bulk: "Tiny",
        effect: "Increases mount's carrying capacity by 2. A mount can only benefit from one saddle bag.",
    },
    {
        name: "Vial",
        cost: 0.5,
        availability: 1,
        bulk: "Tiny",
        effect: "Holds 1 dose of a potion, poison, etc.",
    },
    {
        name: "Waterskin",
        cost: 1,
        availability: 1,
        bulk: 1,
        effect: "Holds enough water for one medium creature for one day.",
    },
];

export const SERVICES = [
    {
        name: "Bath",
        cost: 0.06,
        availability: 0,
        effect: "Removes one Condition of your choice. Only one bath per day has this effect.",
    },
    {
        name: "Tailoring",
        cost: 0.5,
        availability: 0,
        effect: "Repair torn clothing.",
    },
    {
        name: "Courier",
        cost: 0.3,
        availability: 2,
        effect: "Priced per mile. Delivers a message to a recipient.",
    },
    {
        name: "Haircut",
        cost: 0.2,
        availability: 1,
        effect: "Removes one Condition of your choice. Only one haircut per week has this effect.",
    },
    {
        name: "Healer, Novice",
        cost: 5,
        availability: 0,
        effect: "Make a Medicine check with a skill of 9.",
    },
    {
        name: "Healer, Practiced",
        cost: 10,
        availability: 1,
        effect: "Make a Medicine check with a skill of 12.",
    },
    {
        name: "Healer, Adept",
        cost: 20,
        availability: 2,
        effect: "Make a Medicine check with a skill of 15.",
    },
    {
        name: "Carriage",
        cost: 0.1,
        availability: 2,
        effect: "Priced per mile. Provides transportation to a destination.",
    },
    {
        name: "Teacher",
        cost: 10,
        availability: 2,
        effect: "Price is multiplied by character's skill level. Grants a one-time per-skill Advancement Opportunity.",
    },
    {
        name: "Scribe",
        cost: 0.2,
        availability: 2,
        effect: "Priced per page/scroll. Provides writing services.",
    },
];

export const INSTRUMENTS = [
    {
        name: "Bagpipes",
        cost: 30,
        availability: 1,
        bulk: 1,
        effect: "Reduces the cost of the Musician ability by 2 and increases the ability's range to 120 feet.",
    },
    {
        name: "Drum",
        cost: 4,
        availability: 0,
        bulk: 1,
        effect: "Increases the range of the Musician ability to 60 feet.",
    },
    {
        name: "Flute",
        cost: 2,
        availability: 0,
        bulk: 1,
        effect: "Reduces the WP cost of the Musician ability by 1.",
    },
    {
        name: "Harp",
        cost: 8,
        availability: 1,
        bulk: 2,
        effect: "Reduces the WP cost of the Musician ability by 2.",
    },
    {
        name: "Horn",
        cost: 6,
        availability: 0,
        bulk: 1,
        effect: "Increases the range of the Musician ability to 300 feet.",
    },
    {
        name: "Lyre",
        cost: 20,
        availability: 1,
        bulk: 1,
        effect: "Reduces the WP cost of the Musician ability by 2.",
    },
];

export const MEDICINAL = [
    {
        name: "Bandages",
        cost: 1,
        availability: 0,
        bulk: 1,
        effect: "5 bandages. Using a bandage avoids a Bane when using Medicine to Save a Life.",
    },
    {
        name: "Healer's Kit",
        cost: 10,
        availability: 0,
        bulk: 1,
        effect: "Required when using Medicine to Administer Care.",
    },
    {
        name: "Surgical Tools",
        cost: 15,
        availability: 2,
        bulk: 1,
        effect: "Required for Treating Injuries.",
    },
];

export const HERBAL = [
    {
        name: "Antidote",
        cost: "2 x Potency",
        availability: 1,
        bulk: 1,
        effect: "Ends the effects of a poison of the same or weaker Potency.",
    },
    {
        name: "Healing Potion, Weak",
        cost: "25/dose",
        availability: 0,
        bulk: 1,
        effect: "Heals 1d6 HP.",
    },
    {
        name: "Healing Potion, Regular",
        cost: "100/dose",
        availability: 1,
        bulk: 1,
        effect: "Heals 3d6 HP.",
    },
    {
        name: "Healing Potion, Strong",
        cost: "300/dose",
        availability: 2,
        bulk: 1,
        effect: "Heals 5d6 HP.",
    },
    {
        name: "Poison, Emetic",
        cost: "3 x Potency per dose",
        availability: 0,
        bulk: 1,
        effect: "Full Effect: Sickly Condition and pass a CON check per round or lose turn to vomiting. Limited Effect: Sickly Condition.",
    },
    {
        name: "Poison, Lethal",
        cost: "10 x Potency",
        availability: 1,
        bulk: 1,
        effect: "Full Effect: Ailing Condition (round interval) until death, antidote, or passing 3 Death Rolls. Limited Effect: 1d6 HP and WP.",
    },
    {
        name: "Poison, Paralytic",
        cost: "7 x Potency",
        availability: 1,
        bulk: 1,
        effect: "Full Effect: Dazed Condition and must pass a CON check each round to act. Limited Effect: Dazed Condition.",
    },
    {
        name: "Poison, Tranquilizer",
        cost: "5 x Potency",
        availability: 1,
        bulk: 1,
        effect: "Full Effect: Exhausted Condition and must pass a CON check each round to stay awake. Limited Effect: Exhausted Condition.",
    },
];

export const ALCHEMICAL = [
    {
        name: "Smoke Pot",
        cost: 5,
        availability: 1,
        bulk: 1,
        effect: "When ignited, fills a 7-hexagon area with obscuring smoke for 5 rounds.",
    },
    {
        name: "Tinder Twig",
        cost: 1,
        availability: 1,
        bulk: "Tiny",
        effect: "Single use. Ignites when struck on a rough surface.",
    },
    {
        name: "Stink Pot",
        cost: 5,
        availability: 1,
        bulk: 1,
        effect: "When ignited, fills a 7-hexagon area with a disgusting odor. Characters gain the Sickly Condition while in the area of effect.",
    },
    {
        name: "Flash Powder",
        cost: 5,
        availability: 1,
        bulk: 1,
        effect: "Explodes in a brilliant white light with a loud bang. Inflicts the Dazed Condition on anyone within 15 feet.",
    },
    {
        name: "Glass Silvering",
        cost: 5,
        availability: 2,
        bulk: 1,
        effect: "Can be applied to one side of a piece of glass to turn it into a mirror.",
    },
    {
        name: "Parade Torch",
        cost: 5,
        availability: 1,
        bulk: 1,
        effect: "A wooden tube that shoots out colorful flames and sparks upon ignition.",
    },
];
