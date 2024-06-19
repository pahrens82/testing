export const CharacterCreation = () => {
    const WEAKNESSES = [
        {
            name: "All Thumbs",
            desc: "You receive a Bane with any use of the Crafting and Tinkering skills.",
        },
        {
            name: "Anemic",
            desc: "Anemic characters have a 50% chance of being Exhausted on any given day.",
        },
        {
            name: "Big Mouth",
            desc: "You receive a Bane on any use of Bluff.",
        },
        {
            name: "Hesitant",
            desc: "Roll two dice for rolling Initiative, and use the worse result. You can't gain the Lightning Fast ability.",
        },
        {
            name: "Clueless",
            desc: "You receive a Bane to all Perception checks.",
        },
        {
            name: "Clumsy",
            desc: "You receive a Bane to all Acrobatics checks.",
        },
        {
            name: "Slow",
            desc: "Your Speed is permanently reduce by 2.",
        },
        {
            name: "Small",
            desc: "Your Carrying Capacity is reduced by 3.",
        },
        {
            name: "Craving Knowledge",
            desc: "Your quest for knowledge is what drives you, and takes priority over your friends.",
        },
        {
            name: "Xenophobe",
            desc: "All social interaction rolls with members of other Species receive a Bane.",
        },
        {
            name: "Fearful of Magic",
            desc: "You believe that magic is evil and mages are not to be trusted.",
        },
        {
            name: "Slothful",
            desc: "Whenever the party takes a Short Rest, you use it to Rest, whether you need to recover HP/WP or not.",
        },
    ];

    return (
        <section className={"contents"}>
            <h1>Character Creation</h1>
            <ol>
                <li className={"mb-2"}>
                    <span className={"h4"}>
                        Select your Species.
                    </span>
                    <ul>
                        <li>Each Species provides a unique Ability, and guidance on how that Species fits into the world.</li>
                        <li>More information for each species is available upon request.</li>
                    </ul>
                </li>
                <li className={"mb-2"}>
                    <span className={"h4"}>
                        Select your Profession.
                    </span>
                    <ul>
                        <li>
                            Each Profession provides a unique Ability and a list of skills at which members typically excel.
                        </li>
                    </ul>
                </li>
                <li className={"mb-2"}>
                    <span className={"h4"}>
                        Assign your Attribute Scores
                    </span>
                    <ol>
                        <li>Pick an Attribute to which you have not assigned a score.</li>
                        <li>Roll 4d6 and drop the lowest.</li>
                        <li>Add the remaining three rolls together.</li>
                        <li>Assign the total to your selected Attribute.</li>
                        <li>Repeat from step 1 until all six Attributes have scores.</li>
                    </ol>
                </li>
                <li className={"mb-2"}>
                    <span className={"h4"}>
                        Select your Class Skills
                    </span>
                    <ul>
                        <li>Six of your class skills must come from the list of Key Skills associated with your Professions.</li>
                        <li>Your other two class skills can be any of your choice (unless you don't meet the requirements).</li>
                    </ul>
                </li>
                <li className={"mb-2"}>
                    <span className={"h4"}>
                        (Optional) Select a Weakness in order to select an additional starting Ability.
                    </span>
                    <ol>
                        {WEAKNESSES.map((weakness, index) => {
                            return (
                                <li key={weakness.name}>
                                    <strong>{weakness.name}:</strong> {weakness.desc}
                                </li>
                            )
                        })}
                    </ol>
                </li>
                <li className={"mb-2"}>
                    <span className={"h4"}>
                        Details: name, appearance, background, etc.
                    </span>
                </li>
            </ol>
        </section>
    )
}