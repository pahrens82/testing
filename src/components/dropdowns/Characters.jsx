import React from "react";


const CHARACTER_LIST = [
    {
        name: "Merrick Tinworth",
        residence: "Solace",
        gender: "male",
        desc: "Master Merrick Tinworth is the mayor of Solace. During the day, he can typically be found in the town hall with Kelly and Aaron Mertryn (his guards) and Haegamon (his advisor). At night, he can be found in his treehouse with his wife Tabitha.",
        physical: {
            height: "5'10",
            age: "older",
            hair: "gray",
            eyes: "green",
            build: "slender",
        },
        relations: [
            {
                name: "Tabitha Tinworth",
                relation: "spouse",
            },
            {
                name: "Kelly Mertryn",
                relation: "employer",
            },
            {
                name: "Aaron Mertryn",
                relation: "employer",
            },
            {
                name: "Haegamon",
                relation: "employer",
            },
        ],
    },
    {
        name: "Tabitha Tinworth",
        residence: "Solace",
        gender: "female",
        desc: "Mistress Tabitha Tinworth is the wife of Master Merrick Tinworth.",
        physical: {
            height: "5'2",
            age: "older",
            hair: "black",
            eyes: "blue",
            build: "slender",
        },
        relations: [
            {
                name: "Merrick Tinworth",
                relation: "spouse",
            },
        ],
    },
    {
        name: "Kelly Mertryn",
        residence: "Solace",
        desc: "Kelly Merytryn is a tough looking young woman with what looks like a permanent scowl on her face. She works as a personal guard for Mayor Tinworth, along with her brother Aaron.",
        physical: {
            height: "5'8",
            age: "young adult",
            hair: "hazel",
            eyes: "green",
            build: "athletic",
        },
        gender: "female",
        relations: [
            {
                name: "Aaron Mertryn",
                relation: "sibling",
            },
            {
                name: "Edill Mertryn",
                relation: "mother",
            },
            {
                name: "Merrick Tinworth",
                relation: "employee",
            }
        ],
    },
    {
        name: "Aaron Mertryn",
        residence: "Solace",
        desc: "Aaron Mertryn is a powerfully build young man with a ready grin and an easy going manner. He works as a personal guard for Mayor Tinworth, along with his sister Kelly.",
        physical: {
            height: "6'",
            age: "young adult",
            hair: "hazel",
            eyes: "green",
            build: "athletic",
        },
        gender: "male",
        relations: [
            {
                name: "Kelly Mertryn",
                relation: "sibling",
            },
            {
                name: "Edill Mertryn",
                relation: "mother",
            },
            {
                name: "Merrick Tinworth",
                relation: "employee",
            }
        ],
    },
    {
        name: "Haegamon",
        residence: "Solace",
        desc: "Haegamon is a middle-aged man known for his salt-and-pepper beard and penchant for wearing red capes. He works as advisor to Mayor Tinworth.",
        physical: {
            height: "5'10",
            age: "middle aged",
            hair: "salt and pepper",
            eyes: "brown",
            build: "dadbod",
        },
        gender: "male",
        relations: [
            {
                name: "Merrick Tinworth",
                relation: "employer",
            },
        ],
    },
    {
        name: "Theros Ironfeld",
        residence: "Solace",
        desc: "Theros Ironfeld is the blacksmith of Solace. He is a tall, muscular man who speaks quietly and infrequently. Customers travel long distances for the high quality of his work, but he refrains from crafting weapons and armor.",
        physical: {
            height: "6'2",
            age: "middle aged",
            hair: "black",
            eyes: "brown",
            build: "muscular",
        },
        gender: "male",
        relations: [],
    },
    {
        name: "Gerann Egil",
        job: "Grocer",
        residence: "Solace",
        gender: "male",
        relations: [
            {
                name: "Leatha Egil",
                relation: "spouse",
            },
            {
                name: "Magpie",
                relation: "employer",
            }
        ],
    },
    {
        name: "Leatha Egil",
        job: "Grocer",
        residence: "Solace",
        gender: "female",
        relations: [
            {
                name: "Gerann Egil",
                relation: "spouse",
            },
            {
                name: "Magpie",
                relation: "employer",
            }
        ],
    },
    {
        name: "Magpie",
        job: "Grocer",
        residence: "Solace",
        gender: "female",
        relations: [
            {
                name: "Gerann Egil",
                relation: "employee",
            },
            {
                name: "Magpie",
                relation: "employee",
            }
        ],
    },
    {
        name: "Minna Fairnuff",
        job: "Healer",
        residence: "Solace",
        gender: "female",
        relations: [
            {
                name: "Karl Fairnuss",
                relation: "child",
            },
        ],
    },
    {
        name: "Karl Fairnuff",
        job: "Crier",
        residence: "Solace",
        gender: "male",
        relations: [
            {
                name: "Minna Fairnuss",
                relation: "parent",
            },
        ],
    },
    {
        name: "Kaval Pukal",
        job: "Dock Master",
        residence: "Solace",
        gender: "male",
        relations: [
            {
                name: "Charles Pukal",
                relation: "child",
            },
        ],
    },
    {
        name: "Charles Pukal",
        job: "Dock Master",
        residence: "Solace",
        gender: "male",
        relations: [
            {
                name: "Kaval Pukal",
                relation: "parent",
            },
        ],
    },
    {
        name: "Harak Fendren",
        job: "Miller",
        residence: "Solace",
        gender: "male",
        relations: [
            {
                name: "Emil Hendren",
                relation: "child",
            },
        ],
    },
    {
        name: "Emil Fendren",
        job: "Miller",
        residence: "Solace",
        gender: "male",
        relations: [
            {
                name: "Harak Hendren",
                relation: "parent",
            },
        ],
    },
    {
        name: "Curston Tantallon",
        job: "lord",
        residence: "Tantallon",
        gender: "male",
        relations: [
            {
                name: "Rostrevor Tantallon",
                relation: "child",
            },
            {
                name: "Balcombe",
                relation: "employee",
            },
        ],
    },
    {
        name: "Rostrevor Tantallon",
        job: "lordling",
        residence: "Tantallon",
        gender: "male",
        relations: [
            {
                name: "Curston Tantallon",
                relation: "parent",
            },
        ],
    },
    {
        name: "Balcombe",
        job: "advisor",
        residence: "Tantallon",
        gender: "male",
        relations: [
            {
                name: "Curston Tantallon",
                relation: "employer",
            },
        ],
    },
    {
        name: "Martyn Brewer",
        job: "proprietor of The Trough",
        residence: "Solace",
        gender: "male",
        relations: [
            {
                name: "Garyn Brewer",
                relation: "child",
            },
        ],
    },
    {
        name: "Garyn Brewer",
        job: "brewer",
        residence: "Solace",
        gender: "male",
        relations: [
            {
                name: "Martyn Brewer",
                relation: "parent",
            },
        ],
    },
    {
        name: "Edill Mertryn",
        job: "grocer",
        residence: "Solace",
        gender: "female",
        relations: [
            {
                name: "Kelly Mertryn",
                relation: "child",
            },
            {
                name: "Aaron Mertryn",
                relation: "child",
            },
        ],
    },
    {
        name: "Herm Tittlepot",
        job: "merchant",
        residence: "Haven",
        gender: "male",
        relations: [
            {
                name: "Esther Tittlepot",
                relation: "spouse",
            },
        ],
    },
    {
        name: "Esther Tittlepot",
        job: "merchant",
        residence: "Haven",
        gender: "female",
        relations: [
            {
                name: "Herm Tittlepot",
                relation: "spouse",
            },
        ],
    },
    {
        name: "Klem Wendling",
        job: "merchant",
        residence: "Long Ridge",
        gender: "male",
        relations: [
            {
                name: "Fran Wendling",
                relation: "spouse",
            },
        ],
    },
    {
        name: "Fran Wendling",
        job: "merchant",
        residence: "Long Ridge",
        gender: "female",
        relations: [
            {
                name: "Klem Wendling",
                relation: "spouse",
            },
        ],
    },
    {
        name: "Tika Waylan",
        job: "waitress",
        residence: "Solace",
        gender: "female",
        relations: [
            {
                name: "Alleran Waylan",
                relation: "parent",
            },
        ],
    },
    {
        name: "Alleran Waylan",
        job: "magician",
        residence: "Solace",
        gender: "male",
        relations: [
            {
                name: "Tika Waylan",
                relation: "child",
            },
        ],
    },
    {
        name: "Otik Sandath",
        job: "proprietor of the Inn of the Last Home",
        residence: "Solace",
        gender: "male",
        relations: [
            {
                name: "Tika Waylan",
                relation: "employee",
            },
            {
                name: "Carla Farnstall",
                relation: "employee",
            },
        ],
    },
    {
        name: "Winsell Weber",
        job: "merchant",
        residence: "Windy Vale",
        gender: "male",
        relations: [
            {
                name: "Marin Weber",
                relation: "spouse",
            },
        ],
    },
    {
        name: "Marin Weber",
        job: "merchant",
        residence: "Windy Vale",
        gender: "female",
        relations: [
            {
                name: "Winsell Weber",
                relation: "spouse",
            },
        ],
    },
    {
        name: "Hallan Farnstall",
        job: "potter",
        residence: "travels",
        gender: "male",
        relations: [
            {
                name: "Glofell Farnstall",
                relation: "sibling",
            },
            {
                name: "Carla Farnstall",
                relation: "sibling",
            },
        ],
    },
    {
        name: "Glofell Farnstall",
        job: "potter",
        residence: "travels",
        gender: "male",
        relations: [
            {
                name: "Hallan Farnstall",
                relation: "sibling",
            },
            {
                name: "Carla Farnstall",
                relation: "sibling",
            },
        ],
    },
    {
        name: "Carla Farnstall",
        job: "waitress",
        residence: "Solace",
        gender: "female",
        relations: [
            {
                name: "Hallan Farnstall",
                relation: "sibling",
            },
            {
                name: "Glofell Farnstall",
                relation: "sibling",
            },
            {
                name: "Otik Sandath",
                relation: "employer",
            },
        ],
    },
    {
        name: "Gaesil Bishop",
        job: "tinkerer",
        residence: "Solace",
        gender: "male",
        relations: [],
    },
];

CHARACTER_LIST.sort((a, b) => a.name > b.name);

export const Characters = () => {
    return (
        <section className={"contents"}>
            <h1>Characters</h1>
            <h5>{CHARACTER_LIST.length}</h5>
            {CHARACTER_LIST.map((character, index) => {
                return (
                    <ul
                        className={"list-unstyled"}
                        key={character.name.replace(/ /g, "")}
                    >
                        <li>{character.name}, {character.job}</li>
                        <li>{character.gender}</li>
                    </ul>
                )
            })}
        </section>
    );
}
