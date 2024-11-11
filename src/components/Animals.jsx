import {makePricingVerbose} from "../constants";

export const MEAT = [
    "1",
    "1d2",
    "1d2+1",
    "2d2",
    "1d3+2",
    "1d3+3",
    "1d3+4",
    "1d3+5",
    "1d4+6",
];

export const DAMAGE = [
    "1d2",
    "1d3",
    "1d4",
    "1d6",
    "1d8",
    "2d4",
    "1d10",
    "2d6",
    "2d8",
];

export const ANIMALS_BY_SIZE = [
    [
        "Ferret",
        "Magpie",
        "Pigeon",
        "Rat",
        "Squirrel",
        "Hedgehog",
        "Cat",
        "Weasel",
    ],
    [
        "Partridge",
        "Rabbit",
        "Chicken",
        "Crow",
        "Duck",
    ],
    [
        "Hawk",
        "Possum",
        "Raccoon",
        "Skunk",
        "Snake",
    ],
    [
        "Badger",
        "Beaver",
        "Fox",
        "Goose",
        "Porcupine",
    ],
    [
        "Dog, Companion",
        "Dog, Guard",
        "Dog, Hunting",
        "Dog, War",
        "Sheep",
        "Dog",
        "Goat",
        "Lynx",
        "Pig",
    ],
    [
        "Cougar",
        "Wolf",
        "Wari",
        "Boar",
        "Mountain Lion",
        "Donkey",
        "Llama",
        "Mule",
    ],
    [
        "Bear, Black",
        "Cow",
        "Deer",
        "Horse, Riding",
    ],
    [
        "Bear, Brown",
        "Bull",
        "Ox",
        "Horse, Draft",
        "Horse, War",
    ],
    [
        "Elk",
        "Bear, Grizzly",
        "Moose",
    ],
];

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
    },
    {
        name: "Bear, Black",
        movement: 8,
        skills: [
            "Brawling 12",
            "Dodge 8",
            "Perception 10",
        ],
    },
    {
        name: "Bear, Brown",
        movement: 8,
        skills: [
            "Brawling 12",
            "Dodge 8",
            "Perception 10",
        ],
    },
    {
        name: "Bear, Grizzly",
        movement: 8,
        skills: [
            "Brawling 12",
            "Dodge 8",
            "Perception 10",
        ],
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
    },
    {
        name: "Boar",
        movement: 8,
        skills: [
            "Brawling 12",
            "Dodge 8",
            "Perception 10",
        ],
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
    },
    {
        name: "Deer",
        movement: 12,
        skills: [
            "Brawling 10",
            "Dodge 12",
            "Perception 12",
        ],
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
    },
    {
        name: "Elk",
        movement: 10,
        skills: [
            "Brawling 10",
            "Dodge 12",
            "Perception 12",
        ],
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
    },
    {
        name: "Llama",
        movement: 18,
        skills: [
            "Brawling 10",
            "Dodge 12",
            "Perception 12",
        ],
        availability: 1,
        cost: 75,
    },
    {
        name: "Moose",
        movement: 10,
        skills: [
            "Brawling 10",
            "Dodge 8",
            "Perception 10",
        ],
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
    },
    {
        name: "Snake",
        movement: 8,
        skills: [
            "Brawling 12",
            "Dodge 10",
            "Perception 12",
        ],
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
    },
];

export const Animals = () => {
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
                    {animals.map((animal, index) => {
                        console.log(animal)
                        let size;
                        ANIMALS_BY_SIZE.forEach((category, index) => {
                            if (category.includes(animal.name)) size = index + 1;
                        });
                        return (
                            <div
                                key={animal.name.replace(" ", "-")}
                                className={"card w-auto p-2 mt-3"}
                            >
                                <details>
                                    <summary className={"fw-bold"}>
                                        {animal.name}
                                    </summary>
                                    <ul className={"m-0 list-unstyled"}>
                                        <li>Speed: {animal.movement}</li>
                                        <li>HP: {size * 2}</li>
                                        <li>Skills
                                            <ul>
                                                {animal.skills.map((skill, index) => {
                                                    return (
                                                        <li key={`${animal.name}-${skill}`}>
                                                            {skill}{index === 0 ? `, ${DAMAGE[size]} damage` : null}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                        <li>Meat: {MEAT[size]}</li>
                                        {animal.cost ?
                                            <>
                                                <li>Availability: {animal.availability}</li>
                                                <li>Price: {makePricingVerbose(animal.cost)}</li>
                                            </>
                                            :
                                            null
                                        }
                                    </ul>
                                </details>
                            </div>
                        )
                    })}
                </section>
            </section>
        </section>
    )
};
