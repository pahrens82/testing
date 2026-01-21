import {
    useEffect,
    useState,
} from "react";

import {
    ANIMALS,
    BIOMES,
    DAMAGE,
    MEAT,
} from "../../constants";


export const Hunting = (
    {
        selectedBiome,
    }
) => {
    let [animalsToShow, setAnimalsToShow] = useState([]);

    useEffect(
        () => {
            let newAnimalList = ANIMALS.filter(
                (animal) => animal.huntable && animal.biomes.includes(BIOMES[selectedBiome])
            );
            setAnimalsToShow(newAnimalList);
        },
        [selectedBiome]
    );

    return (
        <details className={"border rounded p-1 mt-2 bg-dark-subtle"}>
            <summary className={"fw-bold"}>
                Hunting
            </summary>
            {animalsToShow.map((animal, index) => {
                return (
                    <details
                        className={"border rounded ps-2 py-1 bg-white"}
                        key={animal.name.replace(" ", "-")}
                    >
                        <summary className={"small"}>
                            {index + 1}: {animal.name}, {MEAT[animal.size]} meat, {Math.floor((animal.size + 1) * 1.5)} HP
                        </summary>
                        <ul className={"list-unstyled p-1 mb-0"}>
                            <ul className={"list-unstyled"}>
                                {animal.skills.map((skill, index) => {
                                    return (
                                        <li
                                            className={"small"}
                                            key={`${animal.name}-${skill}`}
                                        >
                                            {skill}{index === 0 ? `, ${DAMAGE[animal.size]} damage${animal.fightsBack ? ", fights back" : ""}` : null}
                                        </li>
                                    )
                                })}
                            </ul>
                        </ul>
                    </details>
                );
            })}
        </details>
    );
};
