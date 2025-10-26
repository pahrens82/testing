import React, { useState } from "react";


export const NonPlayerCharacter = () => {
    let characters = [
        {
            name: "Tika Waylan",
            description: "Tika is the daughter of Alleran Waylan, and one of Otik Sandath's barmaids. Like all children who grow up in Solace, she is quite adept at climbing ropes. She had run wild for much of her life, and took up thieving until the law caught her. Otik Sandeth, owner of the Inn of the Last Home, took her in and adopted her, trying to give her a skill that didn't have to do with thievery. Tika began work as a barmaid for her adopted father Otik in 346 AC, at the age of fourteen. She has always been fascinated by magic, and tries to spend time with any travelling magic-user who passes through town.",
        },
        {
            name: "Otik Sandath",
            description: "Otik Sandath is a former adventurer, and current innkeeper of the Inn of the Last Home. A portly man who enjoyes life and pleasing those around him, is he often described as a merry soul whose smile is as wide as his waistline. He is famous for his hospitality, ale, and spiced potatoes.",
        },
        {
            name: "Seeker Hederik",
            description: "",
        },
        {
            name: "Elistan",
            description: "",
        },
        {
            name: "Theros Ironfeld",
            description: "Theros Ironfeld was born in a fishing village in Nordmaar. His mother suffered complications from the pregnancy, which eventually claimed her life. Theros's father blamed him for his wife's death, leading Theros to spend as little time at home as he could manage. Shortly after his tenth birthday, his village was raided by minotaurs. Theros saw this as his chance to escape, and voluntarily enslaved himself. Theros's natural might and discipline earned the respect of the minotaurs, and they in turn taught him how to maintain their weapons and armor, and eventually the creation thereof. The minotaurs were killed during a failed raid on Qualinesti, leaving Theros alone for the first time in his life. He wandered Abanasinia until he finally settled in Solace.",
        },
        {
            name: "Dougan Redhammer",
            description: "Dougan Redhammer is an unusual dwarf. He has a luxuriant black beard, long curling black hair, and wears only the finest and most flamboyant clothing. This flamboyant clothing is often brightly colored and adorned with gold buttons and clasps. At times, however, the clothing appears to be worse for wear, stained from Dougan's long travels.",
        },
        {
            name: "Fizban",
            description: "Fizban, or Fizban the Fabulous as some call him, is a befuddled old mage who pops up from time to time around Abanasinia. No one knows where he calls home, including Fizban himself. Despite openly casting magic, Fizban wears gray robes. This would suggest that he is a renegade from the Orders of High Sorcery, and yet members of the Orders seem to make no effort to apprehend the old man.",
        },
        {
            name: "Huma of Eldor",
            description: "",
        },
        {
            name: "Magius",
            description: "",
        },
    ];

    return (
        <section className={"container-fluid"}>
            <section className={"row"}>
                <section className={"col"}>
                    <h1>{player}</h1>
                </section>
            </section>
            <section className={"row"}>
                <section className={"col-12 col-md-4"}>
                    <section
                        key={`${player}-details`}
                        className={`card px-3 mt-3 mt-md-0}`}
                    >
                        <small>{player}</small>
                        <h3 className={"m-0"}>
                            {CHARACTERS[player].name}
                        </h3>
                        {CHARACTERS[player].attributesToTable()}
                        {CHARACTERS[player].skillsToTable(CHARACTERS[player].name)}
                        {CHARACTERS[player].skillsToTable(CHARACTERS[player].name, true)}
                    </section>
                </section>
            </section>
        </section>
    )
};
