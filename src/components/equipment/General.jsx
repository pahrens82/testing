import { useState } from "react";
import { makePricingVerbose } from "../../constants";


export const General = ({ equipment, label }) => {
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
                            <th>Item</th>
                            <th>Cost</th>
                            <th>Bulk</th>
                            <th>Effect</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipment.map((item, index) => {
                            if (checked.has(item.availability)) {
                                return (
                                    <tr key={item.name}>
                                        <td>{item.name}</td>
                                        <td>{makePricingVerbose(item.cost)}</td>
                                        {item.bulk ?
                                            <td>{item.bulk}</td>
                                            :
                                            null
                                        }
                                        <td>{item.effect}</td>
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
