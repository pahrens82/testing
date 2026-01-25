import { useState } from "react";

import { ALL_ITEMS } from "../../gear";


const AVAILABILITIES = [
    "Common",
    "Uncommon",
    "Rare",
];


export const Everything = () => {
    let [value, setValue] = useState("");
    let [itemList, setItemList] = useState(ALL_ITEMS);
    let [checked, setChecked] = useState(new Set([0, 1, 2]));

    const handleSearch = (event) => {
        let newValue = event.currentTarget.value;
        let potentialItems = ALL_ITEMS;
        if (newValue.length) {
            potentialItems = ALL_ITEMS.filter(
                (item) => item.name.toLowerCase().includes(newValue.toLowerCase())
            );
        }
        setItemList(potentialItems);
        setValue(newValue);
    };

    const handleFocus = (event) => {
        event.currentTarget.select();
    };

    const handleFiltering = (event) => {
        let set = new Set([...checked]);
        let target = event.currentTarget;
        if (target.checked) {
            set.add(parseInt(target.value));
        } else {
            set.delete(parseInt(target.value));
        }
        setChecked(set);
    };

    itemList.sort((a, b) => a.rating > b.rating);

    return (
        <section className={"container"}>
            <section className={"row"}>
                <section className={"col-xs-12 col-sm-9 col-md-6 col-lg-4"}>
                    <h1>Everything</h1>
                    <div className={"mb-2"}>
                        <input
                            className={"form-control"}
                            placeholder={"Search"}
                            value={value}
                            onChange={handleSearch}
                            onFocus={handleFocus}
                        />
                    </div>
                    <section className={"mb-2"}>
                        <div className={"form-check form-check-inline"}>
                            <input
                                className={"form-check-input"}
                                type={"checkbox"}
                                id={"inlineCheckbox1"}
                                value={0}
                                checked={checked.has(0)}
                                onChange={handleFiltering}
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
                                onChange={handleFiltering}
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
                                onChange={handleFiltering}
                            />
                            <label
                                className={"bg-danger-subtle px-1 form-check-label"}
                                htmlFor={"inlineCheckbox3"}
                            >
                                Rare
                            </label>
                        </div>
                    </section>
                    {itemList.map((item) => {
                        if (checked.has(item.availability)) {
                            let color = "white";
                            if (item.availability === 1) color = "primary-subtle";
                            if (item.availability === 2) color = "danger-subtle";
                            return (
                                <details
                                    className={`border px-2 py-1 mb-2 bg-${color}`}
                                    key={item.name}
                                >
                                    <summary className={"fw-bold fst-italic"}>
                                        {item.name}
                                    </summary>
                                    <ul>
                                        {Object.keys(item).map((key) => {
                                            let value = item[key]
                                            if (key === "availability") {
                                                value = AVAILABILITIES[item[key]];
                                            }
                                            let className = "text-capitalize";
                                            if (key === "effect") className = "";
                                            return (
                                                <li key={item + key}>
                                                    <span className={"text-capitalize"}>{key}</span>: <span className={className}>{value}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </details>
                            )
                        }
                    })}
                </section>
            </section>
        </section>
    );
};
