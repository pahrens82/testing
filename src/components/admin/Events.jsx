import {
    useEffect,
    useState,
} from "react";

import {
    ANIMALS,
    BIOMES,
    FOES,
} from "../../constants";


const CATEGORIES = {
    UNEVENTFUL: "Uneventful",
    SIGHTING: "Sighting",
    WARNING: "Warning",
    OBSTACLE: "Obstacle",
    ENCOUNTER: "Encounter",
};

const TERRAIN = {
    [BIOMES.village]: [6, 11, 14, 16],
    [BIOMES.city]: [3, 6, 10, 15],
    [BIOMES.mountains]: [3, 9, 12, 17],
    [BIOMES.hills]: [5, 9, 13, 16],
    [BIOMES.woodlands]: [5, 10, 13, 16],
    [BIOMES.jungle]: [3, 9, 10, 14],
    [BIOMES.grasslands]: [8, 12, 14, 17],
    [BIOMES.desert]: [4, 10, 15, 18],
    [BIOMES.wasteland]: [7, 12, 16, 18],
    [BIOMES.swamps]: [3, 8, 12, 17],
    [BIOMES.wetlands]: [5, 10, 12, 17],
    [BIOMES.subalpine]: [6, 11, 15, 18],
    [BIOMES.glacier]: [2, 8, 11, 19],
};

const SIGHTINGS = {
    [BIOMES.village]: [],
    [BIOMES.city]: [],
    [BIOMES.mountains]: [
        "Ruined Fortress",
        "Standing Stones",
        "Dungeon",
        "Dungeon",
        "Dungeon",
        "Animal Tracks",
        "Monster Tracks",
    ],
    [BIOMES.hills]: [
        "Ruined Farmstead",
        "Ruined Mill",
        "Dungeon",
        "Standing Stones",
        "Dungeon",
        "Animal Tracks",
        "Monster Tracks",
    ],
    [BIOMES.woodlands]: [
        "Ruined Farmstead",
        "Standing Stones",
        "Dungeon",
        "Animal Tracks",
        "Monster Tracks",
    ],
    [BIOMES.jungle]: [
        "Ruined Fortress",
        "Standing Stones",
        "Dungeon",
        "Animal Tracks",
        "Monster Tracks",
    ],
    [BIOMES.grasslands]: [
        "Ruined Farmstead",
        "Ruined Mill",
        "Dungeon",
        "Standing Stones",
        "Dungeon",
        "Dungeon",
        "Dungeon",
        "Animal Tracks",
        "Monster Tracks",
    ],
    [BIOMES.desert]: [
        "Dungeon",
        "Standing Stones",
        "Dungeon",
        "Dungeon",
        "Animal Tracks",
        "Monster Tracks",
    ],
    [BIOMES.wasteland]: [
        "Dungeon",
        "Standing Stones",
        "Dungeon",
        "Dungeon",
        "Monster Tracks",
    ],
    [BIOMES.swamps]: [
        "Dungeon",
        "Standing Stones",
        "Dungeon",
        "Dungeon",
        "Animal Tracks",
        "Monster Tracks",
    ],
    [BIOMES.wetlands]: [
        "Animal Tracks",
        "Monster Tracks",
    ],
    [BIOMES.subalpine]: [
        "Dungeon",
        "Dungeon",
        "Dungeon",
        "Animal Tracks",
        "Monster Tracks",
    ],
    [BIOMES.glacier]: [
        "Dungeon",
        "Monster Tracks",
    ],
};

const ENCOUNTER_TYPES = [
    "Animal",
    "Animal",
    "Animal",
    "Creature",
    "Creature",
    "Monster",
];

const OBSTACLE_TYPES = [
    "Chasm",
    "Quicksand",
    "Slippery Surface",
    "Extreme Weather",
];


export const Events = (
    {
        selectedBiome
    }
) => {
    let [animalsToShow, setAnimalsToShow] = useState([]);

    useEffect(
        () => {
            let newAnimalList = ANIMALS.filter(
                (animal) => animal.fightsBack && animal.biomes.includes(selectedBiome)
            );
            setAnimalsToShow(newAnimalList);
        },
        [selectedBiome]
    );

    const handleRandomEvent = () => {
        let category = TERRAIN[BIOMES[selectedBiome]];
        let rando = Math.floor(Math.random() * 20);
        document.querySelector(".roll-description").innerText = `Rolled a: ${rando}`;
        let eventType;
        if (rando <= category[0]) {
            eventType = CATEGORIES.UNEVENTFUL;
        } else if (rando <= category[1]) {
            eventType = SIGHTINGS[BIOMES[selectedBiome]][Math.floor(Math.random() * SIGHTINGS[BIOMES[selectedBiome]].length)];
        } else if (rando <= category[2]) {
            eventType = CATEGORIES.WARNING;
        } else if (rando <= category[3]) {
            eventType = OBSTACLE_TYPES[Math.floor(Math.random() * OBSTACLE_TYPES.length)];
        } else {
            let encounterType = ENCOUNTER_TYPES[Math.floor(Math.random() * ENCOUNTER_TYPES.length)];
            if (encounterType === "Animal") {
                let randomAnimal = animalsToShow[Math.floor(Math.random() * animalsToShow.length)];
                eventType = randomAnimal.name;
            } else if (encounterType === "Creature") {
                let foe = FOES[Math.floor(Math.random() * FOES.length)];
                eventType = foe.name;
            } else {
                eventType = "Monster";
            }
        }
        document.querySelector(".event-type").innerText = `Event type: ${eventType}`;
    };

    return (
        <div className={"events-container border rounded p-2"}>
            <p className={"mb-0 h3"}>
                Events
            </p>
            <div className={"d-flex align-items-center"}>
                <button
                    className={"btn btn-primary"}
                    type={"button"}
                    onClick={handleRandomEvent}
                >
                    Roll
                </button>
                <ul className={"ms-2 mb-0 p-0 list-unstyled"}>
                    <li className={"roll-description"}>Rolled a:</li>
                    <li className={"event-type"}>Event type: </li>
                </ul>
            </div>
            {/* <ul className={"list-unstyled"}>
                <li className={"small"}>
                    <strong>Uneventful:</strong> No significant events.
                </li>
                <li className={"small"}>
                    <strong>Sighting:</strong> The PCs see something interesting: tracks, a structure, etc. Investigating takes at least 1 Shift.
                </li>
                <li className={"small"}>
                    <strong>Warning:</strong> The PCs find signs of hostiles in the area or experience an odd omen of upcoming events.
                </li>
                <li className={"small"}>
                    <strong>Obstacle:</strong> The PCs encounter something that hinders their travel (group skill test or lose 1 Shift of travel).
                </li>
                <li className={"small"}>
                    <strong>Encounter:</strong> The PCs encounter characters, creatures, or Monsters.
                </li>
            </ul> */}
        </div>
    );
};
