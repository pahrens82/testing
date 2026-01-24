const TRAPS = [
    "swinging club",
    "hail of needles",
    "blast of steam",
    "barbed net",
    "rolling boulder",
    "slicing blade",
    "spiked pit",
    "javelin",
    "blast of fire",
    "falling block",
    "pit fall",
];

const TRIGGERS = [
    "tripwire",
    "pressure plate",
    "opening a door",
    "switch or button",
    "false step on stairs",
    "closing a door",
    "pulling a lever",
    "removing an object",
];

const EFFECTS = [
    "1d6",
    "1d6",
    "1d6",
    "1d6",
    "1d6 damage and emetic poison (Potency 12, Full Effect: Sickly Condition and pass a CON check per round or lose turn to vomiting. Limited Effect: Sickly Condition.)",
    "1d6 damage and tranquilizier poison (Potency 12, Full Effect: Exhausted Condition and must pass a CON check each round to stay awake. Limited Effect: Exhausted Condition.)",
    "2d6",
    "2d6",
    "2d6",
    "2d6 damage and paralytic poison (Potency 12, Full Effect: Dazed Condition and must pass a CON check each round to act. Limited Effect: Dazed Condition.)",
    "3d6",
    "3d6",
];


export class Trap {
    constructor(dangerLevel) {
        this.trap = TRAPS[Math.floor(Math.random() * TRAPS.length)];
        this.trigger = TRIGGERS[Math.floor(Math.random() * TRIGGERS.length)];
        let effectIndex = Math.floor(Math.random() * EFFECTS.length);
        if (dangerLevel === "Unsafe") effectIndex -= 2;
        if (dangerLevel === "Risky") effectIndex -= 1;
        if (effectIndex < 0) effectIndex = 0;
        this.effect = EFFECTS[effectIndex];
        this.description = `A ${this.trap} triggered by a ${this.trigger} that deals ${this.effect}`;
    };
}
