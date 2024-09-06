import React, { useState } from "react";
import { PC } from "../classes/pc";


export const PlayerCharacters = () => {
    const [checked, setChecked] = useState(new Set([0, 1, 2, 3, 4, 5]));

    let showWeaknesses = false;
    let showAttributes = false;
    let showAbilities = false;
    let searchParams = new URLSearchParams(window.location.href.slice(window.location.href.indexOf("?")));
    if (searchParams.has("weakness")) {
        showWeaknesses = searchParams.get("weakness");
    }
    if (searchParams.has("attributes")) {
        showAttributes = searchParams.get("attributes");
    }
    if (searchParams.has("abilities")) {
        showAbilities = searchParams.get("abilities");
    }    

    const handleChange = (event) => {
        let set = new Set([...checked]);
        let target = event.currentTarget;
        if (target.checked) {
            set.add(parseInt(target.value));
        } else {
            set.delete(parseInt(target.value));
        }
        setChecked(set);
    };

    const characters = {
        nate: new PC(
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
            }
        ),
        patrick: new PC(
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
                    "arcane casting",
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
        mike: new PC(
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
                name: "Unknown",
                weaknesses: [
                    "Craving Knowledge"
                ],
                abilities: [],
                classSkills: [
                    "climbing",
                    "perception",
                    "survival",
                    "tracking",
                    "seamanship",
                    "crossbows",
                    "herbalism",
                    "cooking",
                ],
            }
        ),
        chris: new PC(
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
            }
        ),
        dowell: new PC(
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
                ]
            }
        ),
        mitch: new PC(
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
                name: "Garth Goldegrail ",
                weaknesses: [
                    "Afraid of Magic",
                ],
                abilities: [],
                classSkills: [
                    "divine casting",
                    "dodge",
                    "herbalism",
                    "medicine",
                    "bludgeons",
                    "slings",
                    "axes",
                    "perception",
                ],
            }
        ),
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
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox0"
                            value={0}
                            checked={checked.has(0)}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox0"
                        >
                            Nate
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            value={1}
                            checked={checked.has(1)}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox1"
                        >
                            Patrick
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value={2}
                            checked={checked.has(2)}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox2"
                        >
                            Mike
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox3"
                            value={3}
                            checked={checked.has(3)}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox3"
                        >
                            Chris
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox4"
                            value={4}
                            checked={checked.has(4)}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox4"
                        >
                            Dowell
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox5"
                            value={5}
                            checked={checked.has(5)}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox5"
                        >
                            Mitch
                        </label>
                    </div>
                </section>
            </section>
            <section className={"d-flex"}>
                <section className={`card px-3 me-3 d-${checked.has(0) ? "block" : "none"} character`}>
                    <small>Nate</small>
                    <h3 className={"m-0"}>
                        {characters.nate.name}
                    </h3>
                    {showAttributes ?
                        characters.nate.attributesToTable()
                        :
                        null
                    }
                    {showWeaknesses ?
                        <>
                        <strong className={"d-block"}>Weaknesses</strong>
                            {characters.nate.weaknesses.map((weakness, index) => {
                                return (
                                    <span key={`nate-weakness-${index}`}>
                                        {weakness}
                                    </span>
                                )
                            })}
                        </>
                        :
                        null
                    }
                    {characters.nate.skillsToTable(characters.nate.name)}
                    {characters.nate.skillsToTable(characters.nate.name, true)}
                </section>
                <section className={`card px-3 me-3 d-${checked.has(1) ? "block" : "none"} character`}>
                    <small>Patrick</small>
                    <h3 className={"m-0"}>
                        {characters.patrick.name}
                    </h3>
                    {showAttributes ?
                        characters.patrick.attributesToTable()
                        :
                        null
                    }
                    {showWeaknesses ?
                        <>
                            <strong className={"d-block"}>Weaknesses</strong>
                            {characters.patrick.weaknesses.map((weakness, index) => {
                                return (
                                    <span key={`patrick-weakness-${index}`}>
                                        {weakness}
                                    </span>
                                )
                            })}
                        </>
                        :
                        null
                    }
                    {characters.patrick.skillsToTable(characters.patrick.name)}
                    {characters.patrick.skillsToTable(characters.patrick.name, true)}
                </section>
                <section className={`card px-3 me-3 d-${checked.has(2) ? "block" : "none"} character`}>
                    <small>Mike</small>
                    <h3 className={"m-0"}>
                        {characters.mike.name}
                    </h3>
                    {showAttributes ?
                        characters.mike.attributesToTable()
                        :
                        null
                    }
                    {showWeaknesses ?
                        <>
                            <strong className={"d-block"}>Weaknesses</strong>
                            {characters.mike.weaknesses.map((weakness, index) => {
                                return (
                                    <span key={`mike-weakness-${index}`}>
                                        {weakness}
                                    </span>
                                )
                            })}
                        </>
                        :
                        null
                    }
                    {characters.mike.skillsToTable(characters.mike.name)}
                    {characters.mike.skillsToTable(characters.mike.name, true)}
                </section>
                <section className={`card px-3 me-3 d-${checked.has(3) ? "block" : "none"} character`}>
                    <small>Chris</small>
                    <h3 className={"m-0"}>
                        {characters.chris.name}
                    </h3>
                    {showAttributes ?
                        characters.chris.attributesToTable()
                        :
                        null
                    }
                    {showWeaknesses ?
                        <>
                            <strong className={"d-block"}>Weaknesses</strong>
                            {characters.chris.weaknesses.map((weakness, index) => {
                                return (
                                    <span key={`chris-weakness-${index}`}>
                                        {weakness}
                                    </span>
                                )
                            })}
                        </>
                        :
                        null
                    }
                    {characters.chris.skillsToTable(characters.chris.name)}
                    {characters.chris.skillsToTable(characters.chris.name, true)}
                </section>
                <section className={`card px-3 me-3 d-${checked.has(4) ? "block" : "none"} character`}>
                    <small>Dowell</small>
                    <h3 className={"m-0"}>
                        {characters.dowell.name}
                    </h3>
                    {showAttributes ?
                        characters.dowell.attributesToTable()
                        :
                        null
                    }
                    {showWeaknesses ?
                        <>
                            <strong className={"d-block"}>Weaknesses</strong>
                            {characters.dowell.weaknesses.map((weakness, index) => {
                                return (
                                    <span key={`dowell-weakness-${index}`}>
                                        {weakness}
                                    </span>
                                )
                            })}
                        </>
                        :
                        null
                    }
                    {characters.dowell.skillsToTable(characters.dowell.name)}
                    {characters.dowell.skillsToTable(characters.dowell.name, true)}
                </section>
                <section className={`card px-3 me-3 d-${checked.has(5) ? "block" : "none"} character`}>
                    <small>Mitch</small>
                    <h3 className={"m-0"}>
                        {characters.mitch.name}
                    </h3>
                    {showAttributes ?
                        characters.mitch.attributesToTable()
                        :
                        null
                    }
                    {showWeaknesses ?
                        <>
                            <strong className={"d-block"}>Weaknesses</strong>
                            {characters.mitch.weaknesses.map((weakness, index) => {
                                return (
                                    <span key={`mitch-weakness-${index}`}>
                                        {weakness}
                                    </span>
                                )
                            })}
                        </>
                        :
                        null
                    }
                    {characters.mitch.skillsToTable(characters.mitch.name)}
                    {characters.mitch.skillsToTable(characters.mitch.name, true)}
                </section>
            </section>
        </section>

    )
};
