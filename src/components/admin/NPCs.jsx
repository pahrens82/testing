import {
    useEffect,
    useRef,
    useState,
} from "react";
import { STORAGE_KEYS } from "../../constants";

const ANCESTRIES = [
    "human",
    "human",
    "human",
    "human",
    "kender",
    "kender",
    "dwarf",
    "dwarf",
    "elf",
    // "half-elf"
];

const GENDERS = [
    "male",
    "female",
];

const AGES = [
    "child",
    "adolescent",
    "adult",
    "adult",
    "adult",
    "adult",
    "middle-Aged",
    "middle-Aged",
    "elderly",
    "ancient",
];

const OCCUPATIONS = [
    "baker",
    "carpenter",
    "farmer",
    "cook",
    "cobbler",
    "cooper",
    "blacksmith",
    "beggar",
    "butcher",
    "chandler",
    "brewer",
    "fisher",
];

const HAIR_COLORS = [
    "white",
    "gray",
    "black",
    "brown",
    "blonde",
    "ginger",
];

const HAIR_STYLES = {
    female: [
        "long and braided",
        "short and braided",
        "long and loose",
        "short and loose",
        "in a bun",
    ],
    male: [
        "bald",
        "short and braided",
        "in a bowlcut",
        "short and loose",
        "in a bun",
    ],
};

const EYE_COLORS = [
    "brown",
    "brown",
    "brown",
    "blue",
    "blue",
    "green",
    "green",
    "gray",
    "amber",
];

const APPEARANCES = [
    "has a stocky build",
    "is skinny",
    "is very tall",
    "is very short",
    "has a beauty mark",
    "has a scar on face",
    "is muscular",
    "is frail",
    "has six fingers",
    "has one arm",
    "has a willowy build",
    "is sweaty",
    "has a cleft chin",
    "has one eye",
    "has bushy eyebrows",
];

const QUIRKS = [
    "likes to spit",
    "is always eating",
    "moves quickly",
    "is very apologteic",
    "likes to slaps backs",
    "frequently drops things",
    "likes to swear",
    "likes to make puns",
    "is easily spooked",
    "is forgetful",
    "speaks quietly",
    "twitches frequently",
    "moves slowly",
    "speaks loudly",
    "Swaggers",
    "smokes a pipe",
];

const NAMES = {
    human: {
        male: [
            "Adam",
            "Adelard",
            "Alain",
            "Albert",
            "Aldred",
            "Amos",
            "Arthur",
            "Bartholomew",
            "Bardolph",
            "Baudwin",
            "Bennet",
            "Bernard",
            "Bertram",
            "Blaise",
            "Brom",
            "Bryce",
            "Carlsby",
            "Castor",
            "Cedric",
            "Diggory",
            "Edwin",
            "Elias",
            "Elric",
            "Endric",
            "Faramond",
            "Galleron",
            "Gareth",
            "Geoffrey",
            "Gerald",
            "Gerard",
            "Gilbert",
            "Giles",
            "Godwin",
            "Gregory",
            "Griffith",
            "Gunther",
            "Harlow",
            "Hector",
            "Henry",
            "Herbert",
            "Hildebrandt",
            "Horace",
            "Hubert",
            "Hugh",
            "Isaac",
            "Isembard",
            "Jolly",
            "Kellan",
            "Lambert",
            "Leofwin",
            "Lionel",
            "Lios",
            "Lucan",
            "Mabon",
            "Manfred",
            "Merek",
            "Miles",
            "Milo",
            "Nigel",
            "Osric",
            "Percy",
            "Piers",
            "Randel",
            "Ranulf",
            "Roland",
            "Rowan",
            "Rolf",
            "Theobald",
            "Thurstan",
            "Tobias",
            "Tristram",
            "Turstin",
            "Ulric",
            "Urian",
            "Walther",
            "Warin",
            "Warner",
            "William",
            "Wolfstand",
            "Wymond",
        ],
        female: [
            "Adelina",
            "Aelina",
            "Agnes",
            "Althea",
            "Alma",
            "Anais",
            "Aldith",
            "Alice",
            "Alicia",
            "Aldith",
            "Alyson",
            "Amelina",
            "Amy",
            "Anne",
            "Avelina",
            "Avina",
            "Beatrice",
            "Beatrix",
            "Berta",
            "Blanche",
            "Bridget",
            "Bryn",
            "Cassandra",
            "Catelin",
            "Caterina",
            "Cicily",
            "Clarice",
            "Colleta",
            "Constance",
            "Corina",
            "Dassella",
            "Delia",
            "Edith",
            "Elle",
            "Elaine",
            "Eleanor",
            "Elena",
            "Eva",
            "Elizabeth",
            "Elysanda",
            "Emeline",
            "Emma",
            "Eveluna",
            "Evelyn",
            "Felicia",
            "Florence",
            "Genevieve",
            "Giselle",
            "Gwendolen",
            "Hannah",
            "Ida",
            "Isolda",
            "Ivette",
            "Johanna",
            "Kiara",
            "Laudine",
            "Lavina",
            "Leticia",
            "Lia",
            "Lillian",
            "Lena",
            "Linota",
            "Lucy",
            "Lunette",
            "Mary",
            "Maria",
            "Marion",
            "Masselie",
            "Mathilda",
            "Maude",
            "Meliora",
            "Miriel",
            "Mirielda",
            "Milicent",
            "Moira",
            "Myrtle",
            "Nesta",
            "Nicola",
            "Nora",
            "Orella",
            "Philippa",
            "Regina",
            "Rosalin",
            "Roanna",
            "Rosamund",
            "Sabella",
            "Sabina",
            "Sara",
            "Sela",
            "Semila",
            "Sybil",
            "Thora",
            "Vivan",
        ],
    },
    kender: {
        male: [
            "Bronin",
        ],
        female: [
            "Brona",
        ],
    },
    dwarf: {
        male: [
            "Korg",
        ],
        female: [
            "Korga",
        ],
    },
    elf: {
        male: [
            "Ravos",
            "Farondas",
            "Kierenas",
            "Riardenas",
            "Arlomas",
            "Saramiras",
            "Elindos",
            "Cydaros",
            "Rinarielos",
            "Tiramelos",
            "Taenaranos",
            "Ailunos",
            "Ailas",
            "Ornthalas",
            "Mitalaras",
            "Erlanas",
            "Elandoras",
            "Alluinas",
            "",
            "",
        ],
        female: [
            "Sarenia",
            "Imeria",
            "Isoldena",
            "Mirenella",
            "Allindra",
            "Sylara",
            "Vedana",
            "Ophelia",
            ""
        ],
    },
}



export const NPCs = () => {
    let storedNPCs = localStorage.getItem(STORAGE_KEYS.npcs);
    if (storedNPCs) {
        storedNPCs = JSON.parse(storedNPCs);
        if (storedNPCs.length) storedNPCs = new Map(storedNPCs);
    } else {
        storedNPCs = new Map();
    }
    let [npcs, setNPCs] = useState(storedNPCs);
    let [description, setDescription] = useState("");
    let uuidOfNPCBeingEditedRef = useRef("");

    useEffect(
        () => {
            let storageArray = [];
            [...npcs.entries()].map(([uuid, description]) => {
                storageArray.push([uuid, description]);
            });
            if (storageArray.length) {
                localStorage.setItem(
                    STORAGE_KEYS.npcs,
                    JSON.stringify(storageArray)
                );
                setDescription("");
            }
        },
        [npcs]
    );

    const updateNPCMap = (key, value) => {
        setNPCs(new Map(npcs).set(key, value));
    };

    const deleteNPC = (event) => {
        npcs.delete(event.currentTarget.value);
        let newMap = new Map(npcs);
        setNPCs(newMap);
    };

    const generateNPC = () => {
        let ancestry = ANCESTRIES[Math.floor(Math.random() * ANCESTRIES.length)];
        let gender = GENDERS[Math.floor(Math.random() * GENDERS.length)];
        let age = AGES[Math.floor(Math.random() * AGES.length)];
        let hairColor = HAIR_COLORS[Math.floor(Math.random() * HAIR_COLORS.length)];
        let eyeColor = EYE_COLORS[Math.floor(Math.random() * EYE_COLORS.length)];
        let hairStyle = HAIR_STYLES[gender][Math.floor(Math.random() * HAIR_STYLES[gender].length)];
        let appearance = APPEARANCES[Math.floor(Math.random() * APPEARANCES.length)];
        let quirk = QUIRKS[Math.floor(Math.random() * QUIRKS.length)];
        let name = NAMES[ancestry][gender][Math.floor(Math.random() * NAMES[ancestry][gender].length)];
        setDescription(
            `${name} is a ${gender} ${ancestry}. ${name}'s ${hairColor} hair is ${hairStyle}. ${name} has ${eyeColor} eyes. ${name} ${appearance} and ${quirk}.`
        );
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.currentTarget.value);
    };

    const saveNPC = () => {
        let uuid;
        if (uuidOfNPCBeingEditedRef.current) {
            uuid = uuidOfNPCBeingEditedRef.current;
            uuidOfNPCBeingEditedRef.current = "";
        } else {
            uuid = self.crypto.randomUUID();
        }
        updateNPCMap(uuid, description);
    };

    const editNPC = (event) => {
        let uuid = event.currentTarget.value;
        uuidOfNPCBeingEditedRef.current = uuid;
        setDescription(npcs.get(uuid));
    };

    return (
        <details className={"border rounded p-1 mt-2 bg-dark-subtle"}>
            <summary className={"fw-bold"}>
                NPCs
            </summary>
            <div className={"d-flex gap-3 pb-1"}>
                <button
                    className={"btn btn-sm btn-primary"}
                    type={"button"}
                    onClick={generateNPC}
                >
                    Generate NPC
                </button>
                <button
                    className={"btn btn-sm btn-primary"}
                    disabled={description.size === 0}
                    type={"button"}
                    onClick={saveNPC}
                >
                    Save NPC
                </button>
            </div>
            <textarea
                className={"form-control mb-2 npc-text-area"}
                name={"npc-description"}
                value={description}
                onChange={handleDescriptionChange}
            />
            <ul className={"list-unstyled mb-0 bg-light"}>
                {[...npcs.entries()].map(([uuid, description]) => {
                    return (
                        <li key={uuid}>
                            <details className={"border rounded p-1"}>
                                <summary>
                                    {description.substring(0, description.indexOf(" "))}
                                </summary>
                                <p className={"mb-0 px-3 small"}>
                                    {description}
                                </p>
                                <button
                                    className={"btn btn-sm btn-outline-primary"}
                                    type={"button"}
                                    value={uuid}
                                    onClick={editNPC}
                                >
                                    Edit
                                </button>
                                <button
                                    className={"btn btn-sm btn-outline-danger ms-2"}
                                    type={"button"}
                                    value={uuid}
                                    onClick={deleteNPC}
                                >
                                    Delete
                                </button>
                            </details>
                        </li>
                    );
                })}
            </ul>
        </details>
    );
};