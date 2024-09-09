import React, { useState } from "react";
import { PC } from "../classes/pc";


const characters = {
    Nate: new PC(
        {
            attributes: {
                str: 13,
                dex: 16,
                con: 11,
                int: 12,
                wil: 11,
                cha: 9,
            },
            description: "A kender burglar",
            species: "kender",
            profession: "burglar",
            name: "Sandy Briarborn", // Sandfish "Sandy" Briarborn
            weaknesses: [
                "Big Mouth"
            ],
            abilities: [],
            classSkills: [
                "acrobatics",
                "dodge",
                "sleight of hand",
                "stealth",
                "survival",
                "swimming",
                "tinkering",
                "knives",
            ],
            improvements: [

            ],
        }
    ),
    Patrick: new PC(
        {
            attributes: {
                str: 10,
                dex: 13,
                con: 13,
                int: 13,
                wil: 15,
                cha: 8,
            },
            description: "A half-elf mage.",
            species: "half-elf",
            profession: "mage",
            name: "Bernard",
            weaknesses: [
                "Craving Knowledge"
            ],
            abilities: [],
            classSkills: [
                "alchemy",
                "arcaneCasting",
                "beast lore",
                "bows",
                "dodge",
                "herbalism",
                "perception",
                "tracking",
            ],
            improvements: [
                "arcane casting",
            ]
        }
    ),
    Mike: new PC(
        {
            attributes: {
                str: 12,
                dex: 14,
                con: 12,
                int: 13,
                wil: 13,
                cha: 8,
            },
            description: "An elven pathfinder.",
            species: "elf",
            profession: "pathfinder",
            name: "Alesti Murkwood", // Alestiarre Murkwood
            weaknesses: [
                "Craving Knowledge"
            ],
            abilities: [],
            classSkills: [
                "perception",
                "survival",
                "tracking",
                "seamanship",
                "crossbows",
                "herbalism",
                "cooking",
                "knives",
            ],
            improvements: [
                "beastLore",
                "knives",
            ],
        }
    ),
    Chris: new PC(
        {
            attributes: {
                str: 10,
                dex: 16,
                con: 11,
                int: 10,
                wil: 9,
                cha: 16,
            },
            description: "A human bard.",
            species: "townsfolk",
            profession: "bard",
            name: "Cyril Runan",
            weaknesses: [
                "Clumsy",
            ],
            abilities: [],
            classSkills: [
                "acrobatics",
                "myths and legends",
                "performance",
                "persuasion",
                "sleight of hand",
                "knives",
                "perception",
                "bows",
            ],
            improvements: [
                "perception",
            ]
        }
    ),
    Dowell: new PC(
        {
            attributes: {
                str: 16,
                dex: 12,
                con: 14,
                int: 10,
                wil: 10,
                cha: 10,
            },
            description: "A plains nomad fighter.",
            species: "plains nomad",
            profession: "fighter",
            name: "Borden Longwalker ",
            weaknesses: [
                "Slothful",
            ],
            abilities: [],
            classSkills: [
                "acrobatics",
                "axes",
                "swords",
                "brawling",
                "dodge",
                "crossbows",
                "crafting",
                "survival",
            ],
            improvements: [
                "survival",
                "cooking",
            ]
        }
    ),
    Mitch: new PC(
        {
            attributes: {
                str: 13,
                dex: 9,
                con: 13,
                int: 13,
                wil: 16,
                cha: 8,
            },
            description: "A hill-dwarf cleric.",
            species: "hill dwarf",
            profession: "cleric",
            name: "Garth Goldegrail",
            weaknesses: [],
            abilities: [],
            classSkills: [
                "divineCasting",
                "dodge",
                "herbalism",
                "medicine",
                "bludgeons",
                "slings",
                "axes",
                "perception",
            ],
            improvements: [

            ],
        }
    ),
};


export const PlayerCharacters = () => {
    const [checked, setChecked] = useState(new Set(Object.keys(characters)));

    let showWeaknesses = false;
    let showAttributes = false;
    let showAbilities = false;
    let searchParams = new URLSearchParams(window.location.href.slice(window.location.href.indexOf("?")));
    if (searchParams.has("weakness")) {
        showWeaknesses = searchParams.get("weakness");
    }
    if (searchParams.has("abilities")) {
        showAbilities = searchParams.get("abilities");
    }

    const handleChange = (event) => {
        let set = new Set([...checked]);
        let target = event.currentTarget;
        if (target.checked) {
            set.add(target.value);
        } else {
            set.delete(target.value);
        }
        setChecked(set);
    };

    return (
        <section className={"container-fluid"}>
            <section className={"row"}>
                <section className={"col"}>
                    <h1>Player Characters</h1>
                </section>
            </section>
            <section className={"row"}>
                <section className={"col"}>
                    {Object.keys(characters).map((key, index) => {
                        return (
                            <div key={`${key}-card`} className={"form-check form-check-inline"}>
                                <input
                                    className={"form-check-input"}
                                    type={"checkbox"}
                                    id={`inlineCheckbox-${key}`}
                                    value={key}
                                    checked={checked.has(key)}
                                    onChange={handleChange}
                                />
                                <label
                                    className={"form-check-label"}
                                    htmlFor={`inlineCheckbox-${key}`}
                                >
                                    {key}
                                </label>
                            </div>
                        )
                    })}
                </section>
            </section>
            <section className={"d-flex"}>
                {Object.keys(characters).map((key, index) => {
                    return (
                        <section
                            key={`${key}-details`}
                            className={`card px-3 me-3 d-${checked.has(key) ? "block" : "none"} character`}
                        >
                            <small>{key}</small>
                            <h3 className={"m-0"}>
                                {characters[key].name}
                            </h3>
                            {characters[key].attributesToTable()}
                            {showWeaknesses ?
                                <>
                                    <strong className={"d-block"}>Weaknesses</strong>
                                    {characters[key].weaknesses.map((weakness, index) => {
                                        return (
                                            <span key={`${key}-weakness-${index}`}>
                                                {weakness}
                                            </span>
                                        )
                                    })}
                                </>
                                :
                                null
                            }
                            {characters[key].skillsToTable(characters[key].name)}
                            {characters[key].skillsToTable(characters[key].name, true)}
                        </section>
                    )
                })}
            </section>
        </section>
    )
};
