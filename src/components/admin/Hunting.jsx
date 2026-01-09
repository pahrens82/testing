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
        <details className={"border rounded p-1"}>
            <summary className={"fw-bold"}>
                Hunting
            </summary>
            <table className={"table table-sm"}>
                <thead>
                    <tr>
                        <th>Roll</th>
                        <th>Name</th>
                        <th>Meat</th>
                        <th>Dialog</th>
                    </tr>
                </thead>
                <tbody>
                    {animalsToShow.map((animal, index) => {
                        return (
                            <tr key={animal.name}>
                                <td>{index + 1}</td>
                                <td>{animal.name}</td>
                                <td>{MEAT[animal.size]}</td>
                                <td>
                                    <button
                                        className={"btn btn-sm btn-info"}
                                        type={"button"}
                                        onClick={(event) => event.currentTarget.nextElementSibling.showModal()}
                                    >
                                        Details
                                    </button>
                                    <dialog>
                                        <ul className={"list-unstyled"}>
                                            <li className={"fw-bold d-flex justify-content-between"}>
                                                {animal.name}
                                                <button
                                                    className={"btn btn-sm btn-secondary"}
                                                    type={"button"}
                                                    onClick={(event) => event.currentTarget.closest("dialog").close()}
                                                >
                                                    X
                                                </button>
                                            </li>
                                            <li>HP: {Math.floor((animal.size + 1) * 1.5)}</li>
                                            <li>Meat: {MEAT[animal.size]}</li>
                                            <ul className={"list-unstyled"}>
                                                {animal.skills.map((skill, index) => {
                                                    return (
                                                        <li key={`${animal.name}-${skill}`}>
                                                            {skill}{index === 0 ? `, ${DAMAGE[animal.size]} damage${animal.fightsBack ? ", fights back" : ""}` : null}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </ul>
                                    </dialog>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </details>
    );
};
