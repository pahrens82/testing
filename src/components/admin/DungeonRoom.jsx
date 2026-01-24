import { useState } from "react";

import { Trap } from "../../classes/trap";

import {
    MONSTERS,
    NPCS as FOES,
} from "../../constants";

import {
    ALCHEMICAL,
    ARMOR,
    HERBAL,
    INSTRUMENTS,
    LIGHT_SOURCES,
    MEDICINAL,
    MELEE_WEAPONS,
    MISCELLANEOUS,
    RANGED_WEAPONS,
    SHIELDS,
    TOOLS,
} from "../../gear";

const GEAR = [
    ALCHEMICAL,
    ARMOR,
    HERBAL,
    INSTRUMENTS,
    LIGHT_SOURCES,
    MEDICINAL,
    MELEE_WEAPONS,
    MISCELLANEOUS,
    RANGED_WEAPONS,
    SHIELDS,
    TOOLS,
];

const ROOM_TYPES = [
    "Empty",
    "Empty",
    "Trap",
    "Unsafe Hazard",
    "Solo Monster",
    "Risky Hazard",
    "Mob",
    "Deadly Hazard",
    "Mob",
    "Boss Monster",
];

const HAZARDS = {
    Unsafe: [
        "There is a 10 foot drop to the floor of the room (skill check or 1d6 falling damage)",
        "The room is full of irritating gas/vapors (Potency 9, Sickly Condition)",
        "The path is blocked by rubble/a locked door.",
        "The path is blocked by rubble/a locked door.",
        "The walls and ceiling are unstable. Skill checks with a Boon, or the walls and ceiling collapse, dealing 1d6 bludgeoning damage.",
        "Mold spores causing a Virulence 9 disease.",
    ],
    Risky: [
        "There is a 20 foot drop to the floor of the room (skill check or 2d6 falling damage)",
        "The room is full of harmful gas/vapors (Potency 12, Exhausted and Sickly Conditions)",
        "The path is blocked by rubble/a locked door.",
        "The room is full of water, requiring Swimming in addition to Perception checks to search.",
        "The walls and ceiling are unstable. Skill checks, or the walls and ceiling collapse, dealing 2d6 bludgeoning damage.",
        "Mold spores causing a Virulence 12 disease.",
    ],
    Deadly: [
        "There is a 30 foot drop to the floor of the room (skill check or 3d6 falling damage)",
        "The room is full of debilitating gas/vapors (Potency 15, Exhausted, Dazed, and Sickly Conditions)",
        "The path is blocked by rubble/a trapped locked door.",
        "The room is full of water, requiring Swimming in addition to Perception checks to search. The water is filthy, requiring a CON save vs a Disease with Virulence 12.",
        "The walls and ceiling are unstable. Skill checks with a Bane, or the walls and ceiling collapse, dealing 3d6 bludgeoning damage.",
        "Mold spores causing a Virulence 15 disease.",
    ],
};

const BOOKS = [
    "Eat or Be Eaten - Plants of the Forest, Volume 1",
    "Eat or Be Eaten - Plants of the Forest, Volume 2",
    "Eat or Be Eaten - Plants of the Forest, Volume 3",
    "Grammar of the Elves",
    "Grammar of the Dwarves",
    "Grammar of the Kender",
    "Grammar of the Gnomes",
    "Grammar of the Goblinkind",
    "Grammar of the Ogrekind",
    "Ancient Heroes and Villains, Volume 1",
    "Ancient Heroes and Villains, Volume 2",
    "Ancient Heroes and Villains, Volume 3",
    "Handbook of the Master Carpenter, Volume 1",
    "Handbook of the Master Carpenter, Volume 2",
    "Handbook of the Master Carpenter, Volume 3",
    "Handbook of the Master Smith, Volume 1",
    "Handbook of the Master Smith, Volume 2",
    "Handbook of the Master Smith, Volume 3",
    "Handbook of the Master Leatherworker, Volume 1",
    "Handbook of the Master Leatherworker, Volume 2",
    "Handbook of the Master Leatherworker, Volume 3",
    "Beasts of the Cave - An Encyclopedia, Volume 1",
    "Beasts of the Cave - An Encyclopedia, Volume 2",
    "Beasts of the Cave - An Encyclopedia, Volume 3",
    "Blood, Phlegm, and Bile - Master Your Bodily Fluids, Volume 1",
    "Blood, Phlegm, and Bile - Master Your Bodily Fluids, Volume 2",
    "Blood, Phlegm, and Bile - Master Your Bodily Fluids, Volume 3",
];

const coinGenerator = (dangerLevel) => {
    let pouches = [
        { rolls: 1, metal: "copper", multiplier: 1 },
        { rolls: 2, metal: "copper", multiplier: 1 },
        { rolls: 4, metal: "copper", multiplier: 1 },
        { rolls: 2, metal: "copper", multiplier: 10 },
        { rolls: 4, metal: "copper", multiplier: 10 },
        { rolls: 1, metal: "silver", multiplier: 1 },
        { rolls: 3, metal: "silver", multiplier: 1 },
        { rolls: 1, metal: "silver", multiplier: 5 },
        { rolls: 1, metal: "silver", multiplier: 10 },
        { rolls: 2, metal: "silver", multiplier: 10 },
        { rolls: 3, metal: "silver", multiplier: 10 },
        { rolls: 1, metal: "gold", multiplier: 1 },
        { rolls: 2, metal: "gold", multiplier: 1 },
        { rolls: 4, metal: "gold", multiplier: 1 },
        { rolls: 1, metal: "gold", multiplier: 10 },
        { rolls: 2, metal: "gold", multiplier: 10 },
    ];
    let pouch = pouches[Math.floor(Math.random() * pouches.length)];
    let value = 0;
    let counter = 0;
    while (counter <= pouch.rolls) {
        value += Math.floor(Math.random() * 6) + 1;
        counter++;
    }
    value *= pouch.multiplier;
    return `${value} ${pouch.metal} coins.`;
};

const valuableItemGenerator = (dangerLevel) => {
    let items = [
        { rolls: 2, metal: "silver", type: "bracelet", multiplier: 10 },
        { rolls: 2, metal: "silver", type: "necklace", multiplier: 5 },
        { rolls: 2, metal: "silver", type: "ring", multiplier: 1 },
        { rolls: 2, metal: "silver", type: "brooch", multiplier: 5 },
        { rolls: 2, metal: "gold", type: "chalice", multiplier: 5 },
        { rolls: 2, metal: "gold", type: "bracelet", multiplier: 10 },
        { rolls: 2, metal: "gold", type: "necklace", multiplier: 1 },
        { rolls: 4, metal: "gold", type: "ring", multiplier: 1 },
        { rolls: 2, metal: "gold", type: "brooch", multiplier: 5 },
    ];    
    let item = items[Math.floor(Math.random() * items.length)];
    let value = 0;
    let counter = 0;
    while (counter <= item.rolls) {
        value += Math.floor(Math.random() * 6) + 1;
        counter++;
    }
    value *= item.multiplier;
    return `A ${item.metal} ${item.type} worth ${value} ${item.metal} pieces.`;
};

const commonItemGenerator = (dangerLevel) => {
    let category = GEAR[Math.floor(Math.random() * GEAR.length)];
    let possibleItems = category.filter((item) => item.availability <= dangerLevel);
    return possibleItems[Math.floor(Math.random() * possibleItems.length)].name;
};

const gemGenerator = (dangerLevel) => {
    let gems = [
        { rolls: 1, metal: "gold", type: "garnet", modifier: 1 },
        { rolls: 1, metal: "gold", type: "zircon", modifier: 1 },
        { rolls: 1, metal: "gold", type: "aquamarine", modifier: 1 },
        { rolls: 1, metal: "gold", type: "tourmaline", modifier: 1 },
        { rolls: 1, metal: "gold", type: "bloodstone", modifier: 1 },
        { rolls: 1, metal: "gold", type: "jade", modifier: 5 },
        { rolls: 1, metal: "gold", type: "tanzanite ", modifier: 5 },
        { rolls: 1, metal: "gold", type: "spinel", modifier: 5 },
        { rolls: 2, metal: "gold", type: "emerald", modifier: 10 },
        { rolls: 2, metal: "gold", type: "sapphire", modifier: 10 },
        { rolls: 2, metal: "gold", type: "ruby", modifier: 10 },
        { rolls: 3, metal: "gold", type: "alexandrite", modifier: 15 },
        { rolls: 4, metal: "gold", type: "moonstone", modifier: 20 },
        { rolls: 10, metal: "gold", type: "diamond", modifier: 40 },
    ];
    let gem = gems[Math.floor(Math.random() * gems.length)];
    let value = 0;
    let counter = 0;
    while (counter <= gem.rolls) {
        value += Math.floor(Math.random() * 6) + 1;
        counter++;
    }
    value += gem.modifier;
    return `${gem.type} gem worth ${value} ${gem.metal} pieces.`;
};

const scrollGenerator = () => {
    console.log("Scroll generator coming soon?");
};


const bookGenerator = () => {
    return BOOKS[Math.floor(Math.random() * BOOKS.length)];
};

const TREASURE_FUNCTIONS = [
    { callable: coinGenerator},
    { callable: valuableItemGenerator},
    { callable: gemGenerator},
    { callable: commonItemGenerator },
    // { callable: scrollGenerator },
    { callable: bookGenerator },
];


export const DungeonRoom = (
    {
        name,
        dangerLevel,
    }
) => {
    let [roomTypeIndex, setRoomTypeIndex] = useState(0);

    let treasure1 = null;
    let treasure2 = null;
    let treasure3 = null;

    let isThereATrap = (Math.floor(Math.random() * 10) + dangerLevel) >= 8;
    let trap = null;
    if (isThereATrap) trap = new Trap(dangerLevel);

    let isThereAHazard = (Math.floor(Math.random() * 10) + dangerLevel) >= 8;
    let hazard = null;
    let hazardTypes = Object.keys(HAZARDS);
    if (isThereAHazard) {
        hazard = HAZARDS[hazardTypes[dangerLevel]][Math.floor(Math.random() * HAZARDS[hazardTypes[dangerLevel]].length)];
        let treasureParameters = TREASURE_FUNCTIONS[Math.floor(Math.random() * TREASURE_FUNCTIONS.length)];
        treasure1 = treasureParameters.callable(dangerLevel);
    }

    let isThereAFoe = (Math.floor(Math.random() * 10) + dangerLevel) >= 8;
    let foe = null;
    if (isThereAFoe) {
        foe = FOES[Math.floor(Math.random() * FOES.length)];
        let treasureParameters = TREASURE_FUNCTIONS[Math.floor(Math.random() * TREASURE_FUNCTIONS.length)];
        treasure2 = treasureParameters.callable(dangerLevel);
    }

    let isThereAMonster = (Math.floor(Math.random() * 10) + dangerLevel) >= 8;
    let monster = null;
    if (isThereAMonster) {
        monster = MONSTERS[Math.floor(Math.random() * MONSTERS.length)];
        let treasureParameters = TREASURE_FUNCTIONS[Math.floor(Math.random() * TREASURE_FUNCTIONS.length)];
        treasure3 = treasureParameters.callable(dangerLevel);
    }



    const generateTreasures = (_dangerModifier = null) => {
        if (!_dangerModifier) _dangerModifier = dungeon.dangerModifier;
        let newTreasure = [];
        let counter = 0;
        let parameters = null;
        while (counter <= _dangerModifier) {
            let treasureFunction = TREASURE_FUNCTIONS[Math.floor(Math.random() * TREASURE_FUNCTIONS.length)];
            if (treasureFunction.callable === gemGenerator) {
                parameters = { rolls: treasureFunction.rolls, type: treasureFunction.type, metal: treasureFunction.metal, modifier: treasureFunction.modifier };
            }
            if (treasureFunction.callable === commonItemGenerator) {
                parameters = _dangerModifier;
            }
            if (treasureFunction.callable === valuableItemGenerator) {
                parameters = { rolls: treasureFunction.rolls, type: treasureFunction.type, metal: treasureFunction.metal, multiplier: treasureFunction.multiplier };
            }
            if (treasureFunction.callable === coinGenerator) {
                parameters = { min: treasureFunction.min, max: treasureFunction.max, metal: treasureFunction.metal, multiplier: treasureFunction.multiplier };
            }

            newTreasure.push(treasureFunction.callable(parameters));
            counter++;
        };
        return newTreasure;
    };

    return (
        <details className={"border rounded p-1 bg-secondary-subtle"}>
            <summary className={"bg-white rounded"}>
                {name}
            </summary>
            <div className={"bg-white rounded small p-2"}>
                {trap ? <p className={"mb-1"}>Trap: {trap.description}</p> : null}
                {trap && hazard ? <hr className={"my-0"} /> : null}
                {hazard ? <p className={"mb-1"}>Hazard: {hazard}</p> : null}
                {foe ? <p className={"mb-1"}>Foe: {foe.name}</p> : null}
                {monster ? <p className={"mb-1"}>Monster: {monster.name}</p> : null}
                {treasure1 ? <p className={"mb-1"}>Treasure: {treasure1}</p> : null}
                {treasure2 ? <p className={"mb-1"}>Treasure: {treasure2}</p> : null}
                {treasure3 ? <p className={"mb-1"}>Treasure: {treasure3}</p> : null}
                {/* <select
                    className={"form-select form-select-sm"}
                    size={"sm"}
                    value={roomTypeIndex}
                    onChange={handleChange}
                >
                    {ROOM_TYPES.map((type, index) => {
                        return (
                            <option
                                key={type + index}
                                value={index}
                            >
                                {type}
                            </option>
                        );
                    })}
                </select> */}
            </div>
        </details>
    );
};
