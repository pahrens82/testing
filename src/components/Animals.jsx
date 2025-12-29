import { useState } from "react";

import { makePricingVerbose } from "../constants";

export const MEAT = [
    "1",
    "1d3",
    "1d4",
    "1d6",
    "2d4",
    "2d6",
];

export const DAMAGE = [
    "1d3",
    "1d4",
    "1d6",
    "1d8",
    "1d10",
    "1d12",
    "2d8",
];

export const ANIMALS_BY_SIZE = [
    [
        "Cat",
        "Chicken",
        "Crow",
        "Duck",
        "Ferret",
        "Hedgehog",
        "Magpie",
        "Partridge",
        "Pheasant",
        "Pigeon",
        "Rat",
        "Squirrel",
        "Rabbit",
        "Weasel",
    ],
    [
        "Badger",
        "Beaver",
        "Fox",
        "Goose",
        "Hawk",
        "Porcupine",
        "Possum",
        "Raccoon",
        "Snake",
        "Skunk",
    ],
    [
        "Dog",
        "Dog, Companion",
        "Dog, Guard",
        "Dog, Hunting",
        "Dog, War",
        "Goat",
        "Lynx",
        "Pig",
        "Sheep",
    ],
    [
        "Bear, Black",
        "Boar",
        "Cougar",
        "Donkey",
        "Llama",
        "Mountain Lion",
        "Mule",
        "Wari",
        "Wolf",
    ],
    [
        "Bear, Brown",
        "Bull",
        "Cow",
        "Deer",
        "Horse, Draft",
        "Horse, Riding",
        "Horse, War",
        "Ox",
    ],
    [
        "Bear, Grizzly",
        "Elk",
        "Moose",
    ],
];

const ENVIRONS = {
    grasslands: "Grasslands",
    woodlands: "Woodlands",
    subalpine: "Sub-Alpine", // Sub-alpine refers to a high-elevation ecological zone just below the treeline in mountains. This zone is characterized by cool climates, deep snow, and hardy coniferous forests.
    freshwater: "Fresh Water",
    wetlands: "Wetlands",
    desert: "Deserts",
    mountains: "Mountains",
    swamps: "Swamps",
};

export let animals = [
    {
        name: "Badger",
        movement: 6,
        skills: [
            "Brawling 12",
            "Dodge 10",
            "Perception 14",
            "Stealth 12",
        ],
        environs: [
            ENVIRONS.grasslands,
            ENVIRONS.woodlands,
        ],
        huntable: true,
        fightsBack: true,
    },
    {
        name: "Bear, Black",
        movement: 8,
        skills: [
            "Brawling 12",
            "Dodge 8",
            "Perception 10",
        ],
        environs: [
            ENVIRONS.woodlands,
        ],
        huntable: true,
        fightsBack: true,
    },
    {
        name: "Bear, Brown",
        movement: 8,
        skills: [
            "Brawling 12",
            "Dodge 8",
            "Perception 10",
        ],
        environs: [
            ENVIRONS.woodlands,
        ],
        huntable: true,
        fightsBack: true,
    },
    {
        name: "Bear, Grizzly",
        movement: 8,
        skills: [
            "Brawling 12",
            "Dodge 8",
            "Perception 10",
        ],
        environs: [
            ENVIRONS.woodlands,
            ENVIRONS.subalpine,
        ],
        huntable: true,
        fightsBack: true,
    },
    {
        name: "Beaver",
        movement: "3/14",
        skills: [
            "Brawling 8",
            "Dodge 14",
            "Perception 12",
            "Swimming 16",
        ],
        environs: [
            ENVIRONS.freshwater,
        ],
        huntable: true,
        fightsBack: false,
    },
    {
        name: "Boar",
        movement: 8,
        skills: [
            "Brawling 12",
            "Dodge 8",
            "Perception 10",
        ],
        environs: [
            ENVIRONS.woodlands,
            ENVIRONS.grasslands,
            ENVIRONS.wetlands,
        ],
        huntable: true,
        fightsBack: true,
    },
    {
        name: "Bull",
        movement: 8,
        skills: [
            "Brawling 12",
            "Dodge 8",
            "Perception 8",
        ],
        availability: 1,
        cost: 30,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Cat",
        movement: 8,
        skills: [
            "Brawling 8",
            "Dodge 14",
            "Perception 12",
            "Stealth 16",
        ],
        availability: 0,
        cost: 0.2,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Chicken",
        movement: 0,
        skills: [
            "Brawling 10",
            "Dodge 10",
            "Perception 10",
        ],
        availability: 0,
        cost: 0.05,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Cougar",
        movement: 12,
        skills: [
            "Brawling 14",
            "Dodge 12",
            "Perception 14",
            "Stealth 14",
        ],
        environs: [
            ENVIRONS.desert,
            ENVIRONS.mountains,
            ENVIRONS.woodlands,
            ENVIRONS.swamps,
        ],
        huntable: true,
        fightsBack: true,
    },
    {
        name: "Cow",
        movement: 5,
        skills: [
            "Brawling 8",
            "Dodge 8",
            "Perception 8",
        ],
        availability: 1,
        cost: 15,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Deer",
        movement: 12,
        skills: [
            "Brawling 10",
            "Dodge 12",
            "Perception 12",
        ],
        environs: [
            ENVIRONS.mountains,
            ENVIRONS.woodlands,
            ENVIRONS.grasslands,
        ],
        huntable: true,
        fightsBack: false,
    },
    {
        name: "Dog, Companion",
        movement: 9,
        skills: [
            "Brawling 12",
            "Dodge 10",
            "Perception 12",
            "Stealth 12",
        ],
        availability: 0,
        cost: 10,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Dog, Guard",
        movement: 9,
        skills: [
            "Brawling 12",
            "Dodge 10",
            "Perception 12",
            "Stealth 12",
        ],
        availability: 0,
        cost: 25,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Dog, Hunting",
        movement: 9,
        skills: [
            "Brawling 12",
            "Dodge 10",
            "Perception 14",
            "Stealth 12",
        ],
        availability: 0,
        cost: 40,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Dog, War",
        movement: 9,
        skills: [
            "Brawling 14",
            "Dodge 10",
            "Perception 12",
            "Stealth 8",
        ],
        availability: 1,
        cost: 40,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Donkey",
        movement: 9,
        skills: [
            "Brawling 10",
            "Dodge 6",
            "Perception 10",
        ],
        availability: 1,
        cost: 12,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Duck",
        movement: "4/12",
        skills: [
            "Brawling 8",
            "Dodge 10",
            "Perception 10",
            "Swimming 16",
        ],
        availability: 0,
        cost: 0.06,
        environs: [
            ENVIRONS.wetlands,
            ENVIRONS.freshwater,
        ],
        huntable: true,
        fightsBack: false,
    },
    {
        name: "Elk",
        movement: 10,
        skills: [
            "Brawling 10",
            "Dodge 12",
            "Perception 12",
        ],
        environs: [
            ENVIRONS.woodlands,
            ENVIRONS.mountains,
        ],
        huntable: true,
        fightsBack: true,
    },
    {
        name: "Ferret",
        movement: 12,
        skills: [
            "Brawling 12",
            "Dodge 12",
            "Perception 12",
            "Stealth 14",
        ],
        environs: [
            ENVIRONS.woodlands,
            ENVIRONS.grasslands,
        ],
        huntable: true,
        fightsBack: true,
    },
    {
        name: "Fox",
        movement: 6,
        skills: [
            "Brawling 12",
            "Dodge 10",
            "Perception 12",
            "Stealth 14",
        ],
        environs: [
            ENVIRONS.woodlands,
            ENVIRONS.grasslands,
            ENVIRONS.mountains,
            ENVIRONS.desert,
        ],
        huntable: true,
        fightsBack: false,
    },
    {
        name: "Goat",
        movement: 6,
        skills: [
            "Brawling 10",
            "Dodge 12",
            "Perception 10",
        ],
        availability: 0,
        cost: 5,
        environs: [
            ENVIRONS.mountains,
            ENVIRONS.subalpine,
        ],
        huntable: true,
        fightsBack: true,
    },
    {
        name: "Goose",
        movement: "4/12",
        skills: [
            "Brawling 8",
            "Dodge 10",
            "Perception 10",
            "Swimming 16",
        ],
        availability: 1,
        cost: 0.1,
        environs: [
            ENVIRONS.freshwater,
            ENVIRONS.wetlands,
            ENVIRONS.grasslands,
        ],
        huntable: true,
        fightsBack: true,
    },
    {
        name: "Hawk",
        movement: "4/16",
        skills: [
            "Brawling 12",
            "Dodge 12",
            "Perception 16",
        ],
        availability: 2,
        cost: 250,
        environs: [
            ENVIRONS.woodlands,
            ENVIRONS.grasslands,
            ENVIRONS.desert,
        ],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Horse, Draft",
        movement: 13,
        skills: [
            "Brawling 10",
            "Dodge 8",
            "Perception 12",
        ],
        availability: 1,
        cost: 350,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Horse, Riding",
        movement: 13,
        skills: [
            "Brawling 10",
            "Dodge 8",
            "Perception 12",
        ],
        availability: 1,
        cost: 275,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Horse, War",
        movement: 13,
        skills: [
            "Brawling 10",
            "Dodge 10",
            "Perception 12",
        ],
        availability: 2,
        cost: 700,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Llama",
        movement: 18,
        skills: [
            "Brawling 10",
            "Dodge 12",
            "Perception 12",
        ],
        availability: 2,
        cost: 75,
        environs: [
            ENVIRONS.subalpine,
            ENVIRONS.mountains,
        ],
        huntable: true,
        fightsBack: false,
    },
    {
        name: "Moose",
        movement: 10,
        skills: [
            "Brawling 10",
            "Dodge 8",
            "Perception 10",
        ],
        environs: [
            ENVIRONS.woodlands,
            ENVIRONS.wetlands,
        ],
        huntable: true,
        fightsBack: true,
    },
    {
        name: "Mule",
        movement: 9,
        skills: [
            "Brawling 10",
            "Dodge 6",
            "Perception 10",
        ],
        availability: 1,
        cost: 12,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Ox",
        movement: 8,
        skills: [
            "Brawling 12",
            "Dodge 8",
            "Perception 8",
        ],
        availability: 1,
        cost: 23,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Partridge",
        movement: "4/12",
        skills: [
            "Brawling 8",
            "Dodge 10",
            "Perception 10",
        ],
        availability: 0,
        cost: 0.05,
        environs: [
            ENVIRONS.grasslands,
        ],
        huntable: true,
        fightsBack: false,
    },
    {
        name: "Pig",
        movement: 6,
        skills: [
            "Brawling 10",
            "Dodge 10",
            "Perception 8",
        ],
        availability: 0,
        cost: 6,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Pigeon",
        movement: "4/12",
        skills: [
            "Brawling 8",
            "Dodge 10",
            "Perception 10",
        ],
        availability: 0,
        cost: 0.02,
        environs: [
            ENVIRONS.mountains,
            ENVIRONS.subalpine,
        ],
        huntable: true,
        fightsBack: false,
    },
    {
        name: "Sheep",
        movement: 6,
        skills: [
            "Brawling 10",
            "Dodge 12",
            "Perception 10",
        ],
        availability: 0,
        cost: 4,
        environs: [],
        huntable: false,
        fightsBack: false,
    },
    {
        name: "Snake",
        movement: 8,
        skills: [
            "Brawling 12",
            "Dodge 10",
            "Perception 12",
        ],
        environs: [
            ENVIRONS.desert,
            ENVIRONS.freshwater,
            ENVIRONS.grasslands,
            ENVIRONS.mountains,
            ENVIRONS.subalpine,
            ENVIRONS.swamps,
            ENVIRONS.wetlands,
            ENVIRONS.woodlands,
        ],
        huntable: true,
        fightsBack: false,
    },
    {
        name: "Wari",
        movement: 12,
        skills: [
            "Brawling 12",
            "Dodge 10",
            "Perception 12",
        ],
        availability: 1,
        cost: 30,
        environs: [
            ENVIRONS.grasslands,
        ],
        huntable: true,
        fightsBack: true,
    },
    {
        name: "Wolf",
        movement: 12,
        skills: [
            "Brawling 14",
            "Dodge 12",
            "Perception 14",
            "Stealth 14",
        ],
        environs: [
            ENVIRONS.grasslands,
            ENVIRONS.subalpine,
            ENVIRONS.mountains,
            ENVIRONS.woodlands,
        ],
        huntable: true,
        fightsBack: true,
    },
];

const AVAILABILITIES = [
    "Common",
    "Uncommon",
    "Rare",
];


export const Animals = () => {
    let storedEnvironsList = localStorage.getItem("stored-environs");
    if (!storedEnvironsList) storedEnvironsList = [];
    const [selectedEnvirons, setSelectedEnvirons] = useState(storedEnvironsList);

    let storedAnimalList = localStorage.getItem("stored-animal-list");
    if (storedAnimalList) {
        storedAnimalList = JSON.parse(storedAnimalList);
    } else {
        storedAnimalList = [];
    }
    const [animalsToShow, setAnimalsToShow] = useState(storedAnimalList);

    let storedShowHuntable = localStorage.getItem("stored-show-huntable");
    if (!storedShowHuntable) storedShowHuntable = true;
    const [showHuntable, setShowHuntable] = useState(storedShowHuntable);

    const handleChange = (event) => {
        let target = event.currentTarget;
        let checkedBoxValues = Array.from(target.closest("section.col").querySelectorAll("input:checked")).map((element) => ENVIRONS[element.value]);
        let newAnimalsToShow = [];
        let animalsAdded = [];
        animals.forEach((animal) => {
            checkedBoxValues.forEach((value) => {
                if (
                    (animal.environs.includes(value)) &&
                    (!animalsAdded.includes(animal.name))
                ) {
                    animalsAdded.push(animal.name);
                    newAnimalsToShow.push(animal);
                }
            });
        });
        localStorage.setItem("stored-environs", checkedBoxValues)
        setSelectedEnvirons(checkedBoxValues);
        localStorage.setItem("stored-animal-list", JSON.stringify(newAnimalsToShow));
        setAnimalsToShow(newAnimalsToShow);
    };

    const handleShowHuntableChange = (event) => {
        let checked = event.currentTarget.checked;
        localStorage.setItem("stored-show-huntable", checked)
        setShowHuntable(checked);
    };

    return (
        <section className={"container"}>
            <section className={"row"}>
                <section className={"col"}>
                    <h1 className={"mt-3"}>
                        Animals
                    </h1>
                </section>
            </section>
            <section className={"row"}>
                <section className={"col"}>
                    {Object.keys(ENVIRONS).map((environ, index) => {
                        return (
                            <div
                                className={"form-check"}
                                key={environ}
                            >
                                <input
                                    checked={selectedEnvirons.includes(ENVIRONS[environ])}
                                    className={"form-check-input"}
                                    id={environ}
                                    name={"environ-checkbox"}
                                    type={"checkbox"}
                                    value={environ}
                                    onChange={handleChange}
                                />
                                <label
                                    className={"form-check-label"}
                                    htmlFor={environ}
                                >
                                    {ENVIRONS[environ]}
                                </label>
                            </div>
                        )
                    })}
                </section>
            </section>
            <section className={"row"}>
                <section className={"col"}>
                    <div className={"form-check"}>
                        <input
                            checked={showHuntable}
                            className={"form-check-input"}
                            id={"show-huntable-checkbox"}
                            name={"show-huntable-checkbox"}
                            type={"checkbox"}
                            onChange={handleShowHuntableChange}
                        />
                        <label
                            className={"form-check-label"}
                            htmlFor={"show-huntable-checkbox"}
                        >
                            Show Huntable?
                        </label>
                    </div>
                </section>
            </section>
            <section className={"row"}>
                <section className={"col"}>
                    <table className={"table table-hover table-sm"}>
                        <thead className={"table-dark"}>
                            <tr>
                                <td>Roll for Hunting</td>
                                <td>Animal</td>
                                <td>Speed</td>
                                <td>HP</td>
                                <td>Skills</td>
                                <td>Huntable?</td>
                                <td>Fights Back?</td>
                                <td>Meat</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {animalsToShow.map((animal, index) => {
                                let size;
                                ANIMALS_BY_SIZE.forEach((category, index) => {
                                    if (category.includes(animal.name)) size = index + 1;
                                });
                                return (
                                    <tr key={animal.name.replace(" ", "-")}>
                                        <td>{index + 1}</td>
                                        <td>{animal.name}</td>
                                        <td>{animal.movement}</td>
                                        <td>{size * 2}</td>
                                        <td>
                                            <ul className={"list-unstyled"}>
                                                {animal.skills.map((skill, index) => {
                                                    return (
                                                        <li key={`${animal.name}-${skill}`}>
                                                            {skill}{index === 0 ? `, ${DAMAGE[size]} damage` : null}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </td>
                                        <td>{animal.huntable ? "Yes" : "No"}</td>
                                        <td>{animal.fightsBack ? "Yes" : "No"}</td>
                                        <td>{MEAT[size]}</td>
                                        <td>
                                            <ul className={"list-unstyled"}>
                                                {animal.cost ?
                                                    <>
                                                        <li>Availability: {AVAILABILITIES[animal.availability]}</li>
                                                        <li>Price: {makePricingVerbose(animal.cost)}</li>
                                                    </>
                                                    :
                                                    <>
                                                        <li>Availability: N/A</li>
                                                        <li>Price: N/A</li>
                                                    </>
                                                }
                                            </ul>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </section>
            </section>
        </section>
    );
};
