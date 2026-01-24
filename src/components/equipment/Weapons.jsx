import { useState } from "react";
import { makePricingVerbose } from "../../constants";


export const Weapons = ({ equipment, label }) => {
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

    equipment.sort((a, b) => a.name > b.name);

    return (
        <section className={"container-fluid"}>
            <h1>{label}</h1>
            <section>
                <div className={"form-check form-check-inline"}>
                    <input
                        className={"form-check-input"}
                        type={"checkbox"}
                        id={"inlineCheckbox1"}
                        value={0}
                        checked={checked.has(0)}
                        onChange={handleChange}
                    />
                    <label
                        className={"form-check-label"}
                        htmlFor={"inlineCheckbox1"}
                    >
                        Common
                    </label>
                </div>
                <div className={"form-check form-check-inline"}>
                    <input
                        className={"form-check-input"}
                        type={"checkbox"}
                        id={"inlineCheckbox2"}
                        value={1}
                        checked={checked.has(1)}
                        onChange={handleChange}
                    />
                    <label
                        className={"bg-primary-subtle px-1 form-check-label"}
                        htmlFor={"inlineCheckbox2"}
                    >
                        Uncommon
                    </label>
                </div>
                <div className={"form-check form-check-inline"}>
                    <input
                        className={"form-check-input"}
                        type={"checkbox"}
                        id={"inlineCheckbox3"}
                        value={2}
                        checked={checked.has(2)}
                        onChange={handleChange}
                    />
                    <label
                        className={"bg-danger-subtle px-1 form-check-label"}
                        htmlFor={"inlineCheckbox3"}
                    >
                        Rare
                    </label>
                </div>
            </section>
            <section>
                <p className={"small fst-italic"}>
                    Masterwork weapons can be purchased if rare items are available.<br />
                    The price is 10x the listed price. The STR requirement of a masterwork<br />
                    weapons is reduced by 3, and the weapon's durability is increased by 3.
                </p>
            </section>
            <section>
                <table className={"table"}>
                    <thead>
                        <tr>
                            <th>Weapon</th>
                            <th>Skill</th>
                            <th>Grip</th>
                            <th>Min STR</th>
                            <th>Range</th>
                            <th>Damage</th>
                            <th>Durability</th>
                            <th>Cost</th>
                            <th>Features</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipment.map((item, index) => {
                            if (checked.has(item.availability)) {
                                let variant = "white";
                                if (item.availability === 1) variant = "primary-subtle";
                                if (item.availability === 2) variant = "danger-subtle";
                                return (
                                    <tr key={item.name}>
                                        <td className={`bg-${variant}`}>{item.name}</td>
                                        <td className={`bg-${variant}`}>{item.skill}</td>
                                        <td className={`bg-${variant}`}>{item.grip}</td>
                                        <td className={`bg-${variant}`}>{item.minStr}</td>
                                        <td className={`bg-${variant}`}>{item.range || "Adjacent"}</td>
                                        <td className={`bg-${variant}`}>{item.damage}</td>
                                        <td className={`bg-${variant}`}>{item.durability}</td>
                                        <td className={`bg-${variant}`}>{makePricingVerbose(item.cost)}</td>
                                        <td className={`bg-${variant}`}>{item.features}</td>
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
