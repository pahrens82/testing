import {
    useEffect,
    useRef,
    useState,
} from "react";

import { DungeonRoom } from "./DungeonRoom";

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





const TREASURE_CIRCUMSTANCES = [
    "The treasure is hidden.",
    "The treasure is guarded by a Monster.",
    "The treasure is protected by a Trap",
    "The treasure is protected by a Hazard.",
];





export const Dungeons = () => {
    let today = new Date()
    const STORAGE_KEY = `patlance-dungeons_${MONTHS[today.getMonth()]}-${today.getDate()}-${today.getFullYear()}`;

    // let storedDungeon = localStorage.getItem(STORAGE_KEY);
    // if (storedDungeon) {
    //     storedDungeon = JSON.parse(storedDungeon);
    // } else {
    //     storedDungeon = {
    //         rooms: [],
    //         type: "",
    //     }
    // }
    let [dungeon, setDungeon] = useState(
        {
            rooms: [],
            type: "",
        }
    );

    let storedIsOpen = localStorage.getItem("patlance-dungeon_notes_open_status") === "true";
    let [isOpen, setIsOpen] = useState(storedIsOpen);

    useEffect(
        () => {
            // localStorage.setItem(
            //     STORAGE_KEY,
            //     JSON.stringify(dungeon)
            // );
        },
        [dungeon]
    );

    const generateDungeon = () => {
        let newDangerLevelIndex = Math.floor(Math.random() * DANGER_LEVELS.length);
        let typeIndex = Math.floor(Math.random() * SITE_TYPES.length);
        let type = SITE_TYPES[typeIndex];

        let _dangerModifier = 0;
        if (newDangerLevelIndex >= 3) _dangerModifier = 1;
        if (newDangerLevelIndex === 5) _dangerModifier = 2;
        let sizeIndex = Math.floor(Math.random() * SITE_SIZE.length) + _dangerModifier;
        if (sizeIndex >= SITE_SIZE.length) sizeIndex = SITE_SIZE.length - 1;
        let roomCount = SITE_SIZE[sizeIndex];

        let counter = 0;
        let rooms = [];
        while (counter < roomCount) {
            counter++;
            rooms.push(
                {
                    name: `Room ${counter}`,
                    dangerLevel: _dangerModifier,
                }
            )
        };


        // let treasures = generateTreasures(_dangerModifier);
        // let treasureCounter = 0;
        // while (treasureCounter < treasures.length) {
        //     _descriptions.push(`${treasures[treasureCounter]}${"\r\n"}`);
        //     treasureCounter++;
        // };


        let newDungeon = {
            rooms: rooms,
            type: type,
            quality: DANGER_LEVELS[newDangerLevelIndex],
        };

        setDungeon(newDungeon);
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

                <div>
                    <strong>{dungeon.quality} {dungeon.type}</strong>
                    {dungeon.rooms.map((room) => {
                        return (
                            <DungeonRoom
                                key={room.name}
                                name={room.name}
                                dangerLevel={room.dangerLevel}
                            />
                        );
                    })}
                </div>
            </section>
        </details>
    );
};
