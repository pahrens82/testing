import {
    useEffect,
    useRef,
    useState,
} from "react";

import { Traps } from "./Traps";

import {
    FOES,
    MONTHS,
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


const DANGER_LEVELS = [
    "Unsafe",
    "Unsafe",
    "Unsafe",
    "Risky",
    "Risky",
    "Deadly",
];

const SITE_SIZE = [
    "5",
    "5",
    "5",
    "8",
    "8",
    "12",
];

const SITE_TYPES = [
    "cave",
    "cave",
    "ruin",
    "ruin",
    "tomb",
    "mine/tunnel",
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
    "Treature",
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

const TREASURE_CIRCUMSTANCES = [
    "The treasure is hidden.",
    "The treasure is guarded by a Monster.",
    "The treasure is protected by a Trap",
    "The treasure is protected by a Hazard.",
];

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

const coinGenerator = (
    {
        rolls = 1,
        metal,
        multiplier = 1,
    }
) => {
    let value = 0;
    let counter = 0;
    while (counter <= rolls) {
        value += Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        counter++;
    }
    value *= multiplier;
    return `${value} ${metal} coins.`;
};

const valuableItemGenerator = (
    {
        type,
        metal,
        rolls = 1,
        multiplier = 1,
    }
) => {
    let value = 0;
    let counter = 0;
    while (counter <= rolls) {
        value += Math.floor(Math.random() * 6) + 1;
        counter++;
    }
    value *= multiplier;
    return `A ${metal} ${type} worth ${value} ${metal} pieces.`;
};

const commonItemGenerator = (availability) => {
    let category = GEAR[Math.floor(Math.random() * GEAR.length)];
    let possibleItems = category.filter((item) => item.availability <= availability);
    return possibleItems[Math.floor(Math.random() * possibleItems.length)].name;
};

const gemGenerator = (
    {
        type,
        metal,
        rolls = 1,
        modifier = 4,
    }
) => {
    let value = 0;
    let counter = 0;
    while (counter <= rolls) {
        value += Math.floor(Math.random() * 6) + 1;
        counter++;
    }
    value += modifier;
    return `${type} gem worth ${value} ${metal} pieces.`;
};

const scrollGenerator = () => {
    console.log("Scroll generator coming soon?");
};


const bookGenerator = () => {
    return BOOKS[Math.floor(Math.random() * BOOKS.length)];
};

const TREASURE_FUNCTIONS = [
    { callable: coinGenerator, rolls: 1, metal: "copper", multiplier: 1 },
    { callable: coinGenerator, rolls: 2, metal: "copper", multiplier: 1 },
    { callable: coinGenerator, rolls: 4, metal: "copper", multiplier: 1 },
    { callable: coinGenerator, rolls: 2, metal: "copper", multiplier: 10 },
    { callable: coinGenerator, rolls: 4, metal: "copper", multiplier: 10 },
    { callable: coinGenerator, rolls: 1, metal: "silver", multiplier: 1 },
    { callable: coinGenerator, rolls: 3, metal: "silver", multiplier: 1 },
    { callable: coinGenerator, rolls: 1, metal: "silver", multiplier: 5 },
    { callable: coinGenerator, rolls: 1, metal: "silver", multiplier: 10 },
    { callable: coinGenerator, rolls: 2, metal: "silver", multiplier: 10 },
    { callable: coinGenerator, rolls: 3, metal: "silver", multiplier: 10 },
    { callable: valuableItemGenerator, rolls: 2, metal: "silver", type: "bracelet", multiplier: 10 },
    { callable: valuableItemGenerator, rolls: 2, metal: "silver", type: "necklace", multiplier: 5 },
    { callable: valuableItemGenerator, rolls: 2, metal: "silver", type: "ring", multiplier: 1 },
    { callable: valuableItemGenerator, rolls: 2, metal: "silver", type: "brooch", multiplier: 5 },
    { callable: coinGenerator, rolls: 1, metal: "gold", multiplier: 1 },
    { callable: coinGenerator, rolls: 2, metal: "gold", multiplier: 1 },
    { callable: coinGenerator, rolls: 4, metal: "gold", multiplier: 1 },
    { callable: coinGenerator, rolls: 1, metal: "gold", multiplier: 10 },
    { callable: coinGenerator, rolls: 2, metal: "gold", multiplier: 10 },
    { callable: valuableItemGenerator, rolls: 2, metal: "gold", type: "chalice", multiplier: 5 },
    { callable: valuableItemGenerator, rolls: 2, metal: "gold", type: "bracelet", multiplier: 10 },
    { callable: valuableItemGenerator, rolls: 2, metal: "gold", type: "necklace", multiplier: 1 },
    { callable: valuableItemGenerator, rolls: 4, metal: "gold", type: "ring", multiplier: 1 },
    { callable: valuableItemGenerator, rolls: 2, metal: "gold", type: "brooch", multiplier: 5 },
    { callable: gemGenerator, rolls: 1, metal: "gold", type: "garnet", modifier: 1 },
    { callable: gemGenerator, rolls: 1, metal: "gold", type: "zircon", modifier: 1 },
    { callable: gemGenerator, rolls: 1, metal: "gold", type: "aquamarine", modifier: 1 },
    { callable: gemGenerator, rolls: 1, metal: "gold", type: "tourmaline", modifier: 1 },
    { callable: gemGenerator, rolls: 1, metal: "gold", type: "bloodstone", modifier: 1 },
    { callable: gemGenerator, rolls: 1, metal: "gold", type: "jade", modifier: 5 },
    { callable: gemGenerator, rolls: 1, metal: "gold", type: "tanzanite ", modifier: 5 },
    { callable: gemGenerator, rolls: 1, metal: "gold", type: "spinel", modifier: 5 },
    { callable: gemGenerator, rolls: 2, metal: "gold", type: "emerald", modifier: 10 },
    { callable: gemGenerator, rolls: 2, metal: "gold", type: "sapphire", modifier: 10 },
    { callable: gemGenerator, rolls: 2, metal: "gold", type: "ruby", modifier: 10 },
    { callable: gemGenerator, rolls: 3, metal: "gold", type: "alexandrite", modifier: 15 },
    { callable: gemGenerator, rolls: 4, metal: "gold", type: "moonstone", modifier: 20 },
    { callable: gemGenerator, rolls: 10, metal: "gold", type: "diamond", modifier: 40 },
    { callable: commonItemGenerator },
    // { callable: scrollGenerator },
    { callable: bookGenerator },
];



export const DungeonsV2 = () => {
    let today = new Date()
    const STORAGE_KEY = `patlance-dungeons_${MONTHS[today.getMonth()]}-${today.getDate()}-${today.getFullYear()}`;

    let storedDungeon = localStorage.getItem(STORAGE_KEY);
    if (storedDungeon) {
        storedDungeon = JSON.parse(storedDungeon);
    } else {
        storedDungeon = {
            dangerLevelIndex: 0,
            dangerModifier: 0,
            descriptions: [""],
            sizeIndex: 0,
            typeIndex: 0,
            // treasureCircumstances: 0,
            foes: [],
            hazards: [],
        }
    }
    let [dungeon, setDungeon] = useState(storedDungeon);
    let [text, setText] = useState("");

    let storedIsOpen = localStorage.getItem("patlance-dungeon_notes_open_status") === "true";
    let [isOpen, setIsOpen] = useState(storedIsOpen);

    let foeDescriptionRef = useRef(null);
    let hazardDescriptionRef = useRef(null);

    useEffect(
        () => {
            setText(dungeon.descriptions);
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(dungeon)
            );
        },
        [
            dungeon,
            setText,
        ]
    );

    const generateDungeon = () => {
        let newDangerLevelIndex = Math.floor(Math.random() * DANGER_LEVELS.length);
        let typeIndex = Math.floor(Math.random() * SITE_TYPES.length);

        let _dangerModifier = 0;
        if (newDangerLevelIndex >= 3) _dangerModifier = 1;
        if (newDangerLevelIndex === 5) _dangerModifier = 2;
        let sizeIndex = Math.floor(Math.random() * SITE_SIZE.length) + _dangerModifier;
        if (sizeIndex >= SITE_SIZE.length) sizeIndex = SITE_SIZE.length - 1;
        let _descriptions = [];

        let roomCounter = 0;
        while (roomCounter < SITE_SIZE[dungeon.sizeIndex]) {
            roomCounter++;
            _descriptions.push(`Room ${roomCounter}: ${"\r\n"}`);
        };

        _descriptions.push("\r\n");

        let treasures = generateTreasures(_dangerModifier);
        let treasureCounter = 0;
        while (treasureCounter < treasures.length) {
            _descriptions.push(`${treasures[treasureCounter]}${"\r\n"}`);
            treasureCounter++;
        };


        let newDungeon = {
            dangerLevelIndex: newDangerLevelIndex,
            dangerModifier: _dangerModifier,
            descriptions: _descriptions,
            sizeIndex: sizeIndex,
            typeIndex: typeIndex,
            foes: [],
            hazards: [],
        };

        setDungeon(newDungeon);
    };

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

    const addTreasure = () => {
        let treasures = generateTreasures();
        let _descriptions = dungeon.descriptions;

        let treasureCounter = 0;
        while (treasureCounter < treasures.length) {
            _descriptions.push(`${treasures[treasureCounter]}${"\r\n"}`);
            treasureCounter++;
        };

        let newDungeon = {
            descriptions: _descriptions,
            ...dungeon,
        };

        setDungeon(newDungeon);
    };

    const handleFoes = () => {
        let foe = FOES[Math.floor(Math.random() * FOES.length)];
        foeDescriptionRef.current.innerText = foe.name;
    };

    const addHazard = (event) => {
        let dangerLevelName = event.currentTarget.closest("div").querySelector(":checked").value;
        let hazard = HAZARDS[dangerLevelName][Math.floor(Math.random() * HAZARDS[dangerLevelName].length)];
        let _descriptions = dungeon.descriptions;
        _descriptions.push(`${hazard}${"\r\n"}`);
        let newDungeon = {
            descriptions: _descriptions,
            ...dungeon,
        };

        setDungeon(newDungeon);
    };

    const handleChange = (event) => {
        setText(event.currentTarget.value);
    };

    const handleToggle = (event) => {
        let newIsOpen = event.currentTarget.open;
        localStorage.setItem("patlance-dungeon_notes_open_status", newIsOpen);
        setIsOpen(newIsOpen);
    };

    return (
        <details
            className={"border rounded p-1 mt-2 bg-dark-subtle"}
            open={isOpen}
            onToggle={handleToggle}
        >
            <summary className={"fw-bold"}>
                Dungeons
            </summary>
            <section className={"rounded p-1 bg-white"}>
                <div className={"d-flex gap-1 bg-white"}>
                    <div className={"d-flex flex-column"}>
                        <button
                            className={"btn btn-sm btn-primary"}
                            type={"button"}
                            onClick={generateDungeon}
                        >
                            Generate Dungeon
                        </button>
                        <button
                            className={"btn btn-sm btn-success mt-1"}
                            type={"button"}
                            onClick={addTreasure}
                        >
                            Add Treasure
                        </button>
                        <div className={"d-flex flex-column"}>
                            <button
                                className={"btn btn-sm btn-danger mt-1"}
                                type={"button"}
                                onClick={addHazard}
                            >
                                Add Hazard
                            </button>
                            <label className={"small"}>
                                Unsafe
                                <input className={"ms-1"} type={"radio"} name={"hazard-control"} defaultValue={"Unsafe"} defaultChecked />
                            </label>
                            <label className={"small"}>
                                Risky
                                <input className={"ms-1"} type={"radio"} name={"hazard-control"} defaultValue={"Risky"} />
                            </label>
                            <label className={"small"}>
                                Deadly
                                <input className={"ms-1"} type={"radio"} name={"hazard-control"} defaultValue={"Deadly"} />
                            </label>
                        </div>
                    </div>
                    <div className={"d-flex small"}>
                        <ol className={"mb-0"}>
                            <li>Empty</li>
                            <li>Empty</li>
                            <li>Trap</li>
                            <li>Unsafe Hazard</li>
                            <li>Solo monster</li>
                        </ol>
                        <ol className={"mb-0"} start={"6"}>
                            <li>Risky Hazard</li>
                            <li>Mob</li>
                            <li>Deadly Hazard</li>
                            <li>Treasure</li>
                            <li>Boss Monster</li>
                        </ol>
                    </div>
                </div>

                <div className={"small"}>
                    <p className={"mt-2 mb-0 fw-bold"}>
                        {DANGER_LEVELS[dungeon.dangerLevelIndex]} {SITE_TYPES[dungeon.typeIndex]} (+{dungeon.dangerModifier})
                    </p>
                    <div>
                        <textarea
                            className={"form-control dungeon-notes"}
                            value={text}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* <Traps dangerLevel={DANGER_LEVELS[dangerLevel]} /> */}
                {/* <div className={"d-flex gap-2 mt-1"}>
                    <div>
                        <button
                            className={"btn btn-sm btn-primary"}
                            type={"button"}
                            onClick={handleTreasure}
                        >
                            Treasure
                        </button>
                    </div>
                    <small
                        className={"treasure-description mb-0"}
                        ref={treasureDescriptionRef}
                    >
                    </small>
                </div>
                <div className={"d-flex gap-2 mt-1"}>
                    <div>
                        <button
                            className={"btn btn-sm btn-primary"}
                            type={"button"}
                            onClick={handleFoes}
                        >
                            Foes
                        </button>
                    </div>
                    <small
                        className={"foe-description mb-0"}
                        ref={foeDescriptionRef}
                    >
                    </small>
                </div>
                <div className={"d-flex gap-2 mt-1"}>
                    <div>
                        <button
                            className={"btn btn-sm btn-primary"}
                            type={"button"}
                            onClick={generateHazard}
                        >
                            Hazards
                        </button>
                    </div>
                    <small
                        className={"foe-description mb-0"}
                        ref={hazardDescriptionRef}
                    >
                    </small>
                </div> */}
                {/* <textarea
                    className={"mt-3 form-control dungeon-notes"}
                    value={text}
                    onChange={handleChange}
                /> */}
            </section>
        </details>
    );
};
