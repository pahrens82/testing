import { useState } from "react";


export const Gear = ({ category }) => {
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

    let component;
    switch (category) {
        case "Melee Weapons":
            component = <section id={"melee"}>
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
            break;
    }
    return (
        <section className={"container"}>
            <section>
                <h1>Gear</h1>
                <h3>Carrying Capacity</h3>
                <ul>
                    <li>Characters can carry a number of items equal to half their Strength, rounded up.</li>
                    <li>Backpacks increase the number of items a character can carry by 2</li>
                    <li>Some large or voluminous items take up more than 1 space.</li>
                    <li>Characters can carry any number of Tiny items, within reason.</li>
                    <li>Characters can carry 3 hands worth of weapons. For example, you could carry 3 daggers, or a short spear, long sword, and shield.</li>
                </ul>
                <h3>Encumberance</h3>
                <ul>
                    <li>If you are carrying more than your normal encumerance limit, you must make a Strength roll whenever you want to move (per round in combat, or per Shift outside combat). If the Strength roll fails, you must either drop what you are carrying, or stay where you are.</li>
                    <li>If you are carrying another character, you automatically count as encumbered and cannot fight in combat.</li>
                </ul>
            </section>
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
            {component}
        </section>
    )
};
