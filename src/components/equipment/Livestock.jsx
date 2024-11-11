import { useState } from "react";
import { makePricingVerbose } from "../../constants";

import {
    animals,
    ANIMALS_BY_SIZE,
    DAMAGE,
    MEAT
} from "../Animals";


export const Livestock = () => {
    const [checked, setChecked] = useState(new Set([0]));

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

    return (
        <section className={"container-fluid"}>
            <h1>Livestock</h1>
            <section>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value={0}
                        checked={checked.has(0)}
                        onChange={handleChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                    >
                        Common
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value={1}
                        checked={checked.has(1)}
                        onChange={handleChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox2"
                    >
                        Uncommon
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value={2}
                        checked={checked.has(2)}
                        onChange={handleChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox3"
                    >
                        Rare
                    </label>
                </div>
            </section>
            <section>
                <table className={"table table-striped"}>
                    <thead>
                        <tr>
                            <th>Animal</th>
                            <th>Cost</th>
                            <th>Skills</th>
                            <th>Hit Points</th>
                            <th>Meat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animals.map((animal, index) => {
                            let size;
                            ANIMALS_BY_SIZE.forEach((category, index) => {
                                if (category.includes(animal.name)) size = index + 1;
                            });
                            if (checked.has(animal.availability)) {
                                return (
                                    <tr key={animal.name}>
                                        <td>{animal.name}</td>
                                        <td>{makePricingVerbose(animal.cost)}</td>
                                        <td>
                                            <ul>
                                                {animal.skills.map((skill, index) => {
                                                    return (
                                                        <li key={`${animal.name}-${skill}`}>
                                                            {skill}{index === 0 ? `, ${DAMAGE[size]} damage` : null}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </td>
                                        <td>{size * 2}</td>
                                        <td>{MEAT[size]}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
            </section>
        </section>
    )
};
