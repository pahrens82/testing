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
        <section className={"container"}>
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
                            Each Profession provides a unique Ability and a list of Key Skills at which members typically excel.
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
                    <ul>
                        <li>Each attribute has a value running from 3 to 18.</li>
                        <li>Attributes most likely will not change after character creation.</li>
                    </ul>
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
                        Write down your starting skill scores.
                    </span>
                    <ul>
                        <li>Each skill has a score running from 3 to 18.</li>
                        <li>Use the table below to determine what values your skills begin at:</li>
                    </ul>
                    <table className={"table table-sm small ms-3"}>
                        <thead>
                            <tr>
                                <th>Attribute Score</th>
                                <th>Base Skill Score</th>
                                <th>Class Skill Score</th>
                                <th>Bonus Damage (for DEX and STR)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3-8</td>
                                <td>3</td>
                                <td>6</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>9-12</td>
                                <td>4</td>
                                <td>8</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>13-15</td>
                                <td>5</td>
                                <td>10</td>
                                <td>1d4</td>
                            </tr>
                            <tr>
                                <td>16-17</td>
                                <td>6</td>
                                <td>12</td>
                                <td>1d6</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>7</td>
                                <td>14</td>
                                <td>1d8</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <li className={"mb-2"}>
                    <span className={"h4"}>
                        Note your starting Hit Points (HP) and Willpower Points (WP).
                    </span>
                    <ul>
                        <li>Your character begins play with a number of HP equal to their Constitution.</li>
                        <li>Your character begins play with a number of WP equal to their Willpower.</li>
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
                    <p>Filling out this detail information can be done over time. Your character's backstory will probably take a session or two to figure out, as you figure out how your character fits into the world.</p>
                    <strong>Backstory Questions:</strong>
                    <p>These questions are intended to give you an idea of details to include in your backstory.</p>
                    <ul>
                        <li>Where is your character from? What village, town or tribe? What is/was their home like?</li>
                        <li>Does your character have a family? Who are they? Did they raise you? Do you have siblings?</li>
                        <li>What does your character look like?</li>
                        <li>You character has simple garments and shoes. What else does your character wear? For example, does your character have piercings? Does your character decorate their clothing?</li>
                        <li>What is your character's quirk? For example, does your character bite their nails? Bounce from foot to foot? Grind their teeth?</li>
                        <li>What does your character do within their community? Keep in mind your characters are in their late teens, in human terms. Basically, how do you explain your character's skills?</li>
                        <li>Mages are at best disliked and at worst hated because they are perceived as having caused, or at least failed to stop, the Cataclysm.</li>
                        <li>What are your characters likes and dislikes?</li>
                        <li>Does your character have a moral code? If not, why not? If so, what is their moral code, and is the code an ideal or something that actually influences your character's behavior?</li>                        
                    </ul>
                </li>
            </ol>
        </section>
    )
}