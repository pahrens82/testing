import { useState } from "react";

import {
    ANIMALS,
    BIOMES,
    DAMAGE,
    MEAT,
    STORAGE_KEYS,
    makePricingVerbose
} from "../constants";

const AVAILABILITIES = [
    "Common",
    "Uncommon",
    "Rare",
];


export const Animals = () => {
    let storedSelectedBiome = localStorage.getItem(STORAGE_KEYS.selectedBiome);
    if (!storedSelectedBiome) storedSelectedBiome = [];
    const [selectedEnvirons, setSelectedEnvirons] = useState(storedSelectedBiome);

    let storedAnimalList = localStorage.getItem(STORAGE_KEYS.animalList);
    if (storedAnimalList) {
        storedAnimalList = JSON.parse(storedAnimalList);
    } else {
        storedAnimalList = [];
    }
    const [animalsToShow, setAnimalsToShow] = useState(storedAnimalList);

    let storedShowHuntable = localStorage.getItem(STORAGE_KEYS.showHuntable);
    if (!storedShowHuntable) storedShowHuntable = true;
    const [showHuntable, setShowHuntable] = useState(storedShowHuntable);

    const handleChange = (event) => {
        let target = event.currentTarget;
        let checkedBoxValues = Array.from(target.closest("section.col").querySelectorAll("input:checked")).map((element) => BIOMES[element.value]);
        let newAnimalsToShow = [];
        let animalsAdded = [];
        ANIMALS.forEach((animal) => {
            checkedBoxValues.forEach((value) => {
                if (
                    (animal.biomes.includes(value)) &&
                    (!animalsAdded.includes(animal.name))
                ) {
                    animalsAdded.push(animal.name);
                    newAnimalsToShow.push(animal);
                }
            });
        });
        localStorage.setItem(STORAGE_KEYS.selectedBiome, checkedBoxValues)
        setSelectedEnvirons(checkedBoxValues);
        localStorage.setItem(STORAGE_KEYS.storedAnimalList, JSON.stringify(newAnimalsToShow));
        setAnimalsToShow(newAnimalsToShow);
    };

    const handleShowHuntableChange = (event) => {
        let checked = event.currentTarget.checked;
        localStorage.setItem(STORAGE_KEYS.showHuntable, checked)
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
                    {Object.keys(BIOMES).map((biomes, index) => {
                        return (
                            <div
                                className={"form-check"}
                                key={biomes}
                            >
                                <input
                                    checked={selectedEnvirons.includes(BIOMES[biomes])}
                                    className={"form-check-input"}
                                    id={biomes}
                                    name={"biomes-checkbox"}
                                    type={"checkbox"}
                                    value={biomes}
                                    onChange={handleChange}
                                />
                                <label
                                    className={"form-check-label"}
                                    htmlFor={biomes}
                                >
                                    {BIOMES[biomes]}
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
                                return (
                                    <tr key={animal.name.replace(" ", "-")}>
                                        <td>{index + 1}</td>
                                        <td>{animal.name}</td>
                                        <td>{animal.movement}</td>
                                        <td>{Math.floor((animal.size + 1) * 1.5)}</td>
                                        <td>
                                            <ul className={"list-unstyled"}>
                                                {animal.skills.map((skill, index) => {
                                                    return (
                                                        <li key={`${animal.name}-${skill}`}>
                                                            {skill}{index === 0 ? `, ${DAMAGE[animal.size]} damage` : null}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </td>
                                        <td>{animal.huntable ? "Yes" : "No"}</td>
                                        <td>{animal.fightsBack ? "Yes" : "No"}</td>
                                        <td>{MEAT[animal.size]}</td>
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
