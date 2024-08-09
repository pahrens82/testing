import React, { useState } from "react";
import { PC } from "../classes/pc";


export const PlayerCharacters = () => {
    const [checked, setChecked] = useState(new Set([0, 1, 2, 3, 4, 5]));

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
                    str: 11,
                    dex: 18,
                    con: 11,
                    int: 12,
                    wil: 11,
                    cha: 9,
                },
                description: "A kender burglar",
                species: "kender",
                profession: "burglar",
                name: "Merry Fishmas",
                weaknesses: [
                    "Big Mouth"
                ],
                abilities: [],
                classSkills: [
                    "acrobatics",
                    "dodge",
                    "stealth",
                    "sleightOfHand",
                    "tinkering",
                    "knives",
                    "survival",
                    "swimming",
                ],
            }
        ),
        pattrick: new PC(
            {
                attributes: {
                    str: 13,
                    dex: 13,
                    con: 13,
                    int: 9,
                    wil: 16,
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
                    "beastLore",
                    "dodge",
                    "herbalism",
                    "mythsAndLegends",
                    "perception",
                    "staves",
                ],
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
                    str: 9,
                    dex: 18,
                    con: 12,
                    int: 10,
                    wil: 9,
                    cha: 14,
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
                    "mythsAndLegends",
                    "performance",
                    "persuasion",
                    "sleightOfHand",
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
            }
        ),
        mitch: new PC(
            {
                attributes: {
                    str: 9,
                    dex: 13,
                    con: 13,
                    int: 13,
                    wil: 16,
                    cha: 8,
                },
                description: "A hill dwarf cleric.",
                species: "hill dwarf",
                profession: "cleric",
                name: "Garth Goldgrail ",
                weaknesses: [
                    "Afraid of Magic",
                ],
                abilities: [],
                classSkills: [
                    "divineCasting",
                    "dodge",
                    "herbalism",
                    "medicine",
                    "persuasion",
                    "bludgeons", // Is this supposed to be axes?
                    "slings",
                    "staves",
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
                            Pattrick
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
                    <h3>
                        {characters.nate.name}
                    </h3>
                    {characters.nate.attributesToTable()}
                    {characters.nate.skillsToTable(characters.nate.name)}
                </section>
                <section className={`card px-3 me-3 d-${checked.has(1) ? "block" : "none"} character`}>
                    <small>Patrick</small>
                    <h3 className={"m-0"}>
                        {characters.pattrick.name}
                    </h3>
                    {characters.mitch.attributesToTable()}
                    {characters.pattrick.skillsToTable(characters.pattrick.name)}
                </section>
                <section className={`card px-3 me-3 d-${checked.has(2) ? "block" : "none"} character`}>
                    <small>Mike</small>
                    <h3 className={"m-0"}>
                        {characters.mike.name}
                    </h3>
                    {characters.mike.attributesToTable()}
                    {characters.mike.skillsToTable(characters.mike.name)}
                </section>
                <section className={`card px-3 me-3 d-${checked.has(3) ? "block" : "none"} character`}>
                    <small>Chris</small>
                    <h3 className={"m-0"}>
                        {characters.chris.name}
                    </h3>
                    {characters.chris.attributesToTable()}
                    {characters.chris.skillsToTable(characters.chris.name)}
                </section>
                <section className={`card px-3 me-3 d-${checked.has(4) ? "block" : "none"} character`}>
                    <small>Dowell</small>
                    <h3 className={"m-0"}>
                        {characters.dowell.name}
                    </h3>
                    {characters.dowell.attributesToTable()}
                    {characters.dowell.skillsToTable(characters.dowell.name)}
                </section>
                <section className={`card px-3 me-3 d-${checked.has(5) ? "block" : "none"} character`}>
                    <small>Mitch</small>
                    <h3 className={"m-0"}>
                        {characters.mitch.name}
                    </h3>
                    {characters.mitch.attributesToTable()}
                    {characters.mitch.skillsToTable(characters.mitch.name)}
                </section>
            </section>
        </section>

    )
};
