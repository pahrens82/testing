import { useRef } from "react";




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
