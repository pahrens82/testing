import {
    useEffect,
    useRef,
    useState,
} from "react";

import { Traps } from "./Traps";
import { FOES } from "../../constants";

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
    "Cave",
    "Cave",
    "Ruins",
    "Ruins",
    "Tomb",
    "Mine/Tunnel",
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


export const Dungeons = () => {
    let [dangerLevel, setDangerLevel] = useState(0);
    let dungeonDescriptionRef = useRef(null);
    let treasureDescriptionRef = useRef(null);
    let foeDescriptionRef = useRef(null);
    let notesRef = useRef(null);
    let hazardDescriptionRef = useRef(null);

    useEffect(
        () => {
            if (dangerLevel >= 0) {
                let siteType = SITE_TYPES[Math.floor(Math.random() * SITE_TYPES.length)];

                let sizeModifier = 0;
                if (dangerLevel === 5) sizeModifier += 2;
                if (dangerLevel >= 3) sizeModifier += 1;
                let sizeIndex = Math.floor(Math.random() * SITE_SIZE.length) + sizeModifier;
                if (sizeIndex >= SITE_SIZE.length) sizeIndex = SITE_SIZE.length - 1;

                dungeonDescriptionRef.current.innerText = `${DANGER_LEVELS[dangerLevel]} ${siteType} with ${SITE_SIZE[sizeIndex]} rooms.`;

                notesRef.current.value = "";
                let counter = 1;
                while (counter <= Number(SITE_SIZE[sizeIndex])) {
                    notesRef.current.value = `${notesRef.current.value} Room ${counter}: ${"\r\n"}`;
                    counter++;
                }
            }
        },
        [dangerLevel]
    );

    const generateDungeon = () => {
        setDangerLevel(Math.floor(Math.random() * DANGER_LEVELS.length));
    };

    const handleTreasure = () => {
        let treasureCircumstances = TREASURE_CIRCUMSTANCES[Math.floor(Math.random() * TREASURE_CIRCUMSTANCES.length)];
        treasureDescriptionRef.current.innerText = treasureCircumstances;
    };

    const handleFoes = () => {
        let foe = FOES[Math.floor(Math.random() * FOES.length)];
        foeDescriptionRef.current.innerText = foe.name;
    };

    const generateHazard = () => {
        let dangerLevelName = DANGER_LEVELS[dangerLevel];
        let hazard = HAZARDS[dangerLevelName][Math.floor(Math.random() * HAZARDS[dangerLevelName].length)];
        hazardDescriptionRef.current.innerText = hazard;
    };

    return (
        <details className={"border rounded p-1 mt-2 bg-dark-subtle"}>
            <summary className={"fw-bold"}>
                Dungeons
            </summary>
            <section className={"rounded p-1 bg-white"}>
                <div className={"d-flex gap-1 bg-light"}>
                    <div>
                        <button
                            className={"btn btn-sm btn-primary"}
                            type={"button"}
                            onClick={generateDungeon}
                        >
                            Generate Dungeon
                        </button>
                    </div>
                    <div>
                        <p
                            className={"small dungeon-description mb-0"}
                            ref={dungeonDescriptionRef}
                        >

                        </p>
                    </div>
                </div>
                <strong>Roll 1d10 per room to determine room type:</strong>
                <div className={"d-flex"}>
                    <ol className={"room-type-list mb-0"}>
                        <li className={"small"}>Empty</li>
                        <li className={"small"}>Empty</li>
                        <li className={"small"}>Trap</li>
                        <li className={"small"}>Unsafe Hazard</li>
                        <li className={"small"}>Solo monster</li>
                    </ol>
                    <ol className={"room-type-list mb-0"} start={"6"}>
                        <li className={"small"}>Risky Hazard</li>
                        <li className={"small"}>Mob</li>
                        <li className={"small"}>Deadly Hazard</li>
                        <li className={"small"}>Treasure</li>
                        <li className={"small"}>Boss Monster</li>
                    </ol>
                </div>
                <Traps dangerLevel={DANGER_LEVELS[dangerLevel]} />
                <div className={"d-flex gap-2 mt-1"}>
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
                </div>
                <textarea
                    className={"mt-3 form-control dungeon-notes"}
                    ref={notesRef}
                />
            </section>
        </details>
    );
};
