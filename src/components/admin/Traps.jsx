import { useRef } from "react";

const TRAPS = [
    "Swinging club",
    "Hail of needles",
    "Toxic gas/Superheated gas",
    "Barbed net",
    "Rolling boulder",
    "Slicing blade",
    "Spiked pit",
    "Javelin",
    "Blast of fire/poison",
    "Falling block",
    "Pit Fall",
];

const TRIGGERS = [
    "Tripwire",
    "Pressure plate",
    "Opening a door",
    "Switch or button",
    "False step on stairs",
    "Closing a door",
    "Pulling a lever",
    "Removing an object",
];

const EFFECTS = [
    "1d6",
    "1d6",
    "1d6",
    "1d6",
    "2d6",
    "2d6",
    "2d6",
    "3d6",
    "3d6",
    "Emetic Poison (Potency 12, Full Effect: Sickly Condition and pass a CON check per round or lose turn to vomiting. Limited Effect: Sickly Condition.)",
    "Tranquilizier Poison (Potency 12, Full Effect: Exhausted Condition and must pass a CON check each round to stay awake. Limited Effect: Exhausted Condition.)",
    "Paralytic Poison (Potency 12, Full Effect: Dazed Condition and must pass a CON check each round to act. Limited Effect: Dazed Condition.)",
];


export const Traps = (
    {
        dangerLevel,
    }
) => {
    let trapDescriptionRef = useRef(null);
    const handleClick = () => {
        let trap = TRAPS[Math.floor(Math.random() * TRAPS.length)];
        let trigger = TRIGGERS[Math.floor(Math.random() * TRIGGERS.length)];
        let effectIndex = Math.floor(Math.random() * EFFECTS.length);
        if (dangerLevel === "Unsafe") effectIndex -= 2;
        if (dangerLevel === "Risky") effectIndex -= 1;
        if (effectIndex < 0) effectIndex = 0;
        let effect = EFFECTS[effectIndex];
        trapDescriptionRef.current.innerText = `${trap}, ${trigger}, ${effect}`;
    };

    return (
        <section className={"d-flex mt-2 gap-2"}>
            <div>
                <button
                    className={"btn btn-primary btn-sm"}
                    type={"button"}
                    onClick={handleClick}
                >
                    Trap
                </button>
            </div>
            <small
                className={"trap-description mb-0"}
                ref={trapDescriptionRef}
            >
            </small>
        </section>
    );
};
