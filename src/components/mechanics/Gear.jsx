import { useState } from "react";
import { MELEE_WEAPONS, RANGED_WEAPONS, SHIELDS } from "../../constants";


export const Gear = () => {
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

    MELEE_WEAPONS.sort((a, b) => a.name > b.name);
    RANGED_WEAPONS.sort((a, b) => a.name > b.name);

    return (
        <section>
            <h1>Gear</h1>
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
            <section id={"melee"}>
                <h3>Melee Weapons</h3>
                <table className={"table table-striped"}>
                    <thead>
                        <tr>
                            <th>Weapon</th>
                            <th>Skill</th>
                            <th>Grip</th>
                            <th>Min STR</th>
                            <th>Damage</th>
                            <th>Durability</th>
                            <th>Cost</th>
                            <th>Features</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MELEE_WEAPONS.map((weapon, index) => {
                            if (checked.has(weapon.availability)) {
                                return (
                                    <tr key={weapon.name}>
                                        <td>{weapon.name}</td>
                                        <td>{weapon.skill}</td>
                                        <td>{weapon.grip}</td>
                                        <td>{weapon.minStr}</td>
                                        <td>{weapon.damage}</td>
                                        <td>{weapon.durability}</td>
                                        <td>{weapon.cost}</td>
                                        <td>{weapon.features}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
            </section>
            <section id={"ranged"}>
                <h3>Ranged Weapons</h3>
                <table className={"table table-striped"}>
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
                        {RANGED_WEAPONS.map((weapon, index) => {
                            if (checked.has(weapon.availability)) {
                                return (
                                    <tr key={weapon.name}>
                                        <td>{weapon.name}</td>
                                        <td>{weapon.skill}</td>
                                        <td>{weapon.grip}</td>
                                        <td>{weapon.minStr}</td>
                                        <td>{weapon.range}</td>
                                        <td>{weapon.damage}</td>
                                        <td>{weapon.durability}</td>
                                        <td>{weapon.cost}</td>
                                        <td>{weapon.features}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
            </section>
            <section>
                <h3>Ranged Weapons</h3>
                <table className={"table table-striped"}>
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
                        {RANGED_WEAPONS.map((weapon, index) => {
                            if (checked.has(weapon.availability)) {
                                return (
                                    <tr key={weapon.name}>
                                        <td>{weapon.name}</td>
                                        <td>{weapon.skill}</td>
                                        <td>{weapon.grip}</td>
                                        <td>{weapon.minStr}</td>
                                        <td>{weapon.range}</td>
                                        <td>{weapon.damage}</td>
                                        <td>{weapon.durability}</td>
                                        <td>{weapon.cost}</td>
                                        <td>{weapon.features}</td>
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
