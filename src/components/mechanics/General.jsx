import { LINKS } from "../../constants.jsx";


export const General = () => {
    return (
        <section className={"container mb-5"}>
            <h1>General Mechanics</h1>
            <section>
                <h3>Dice Rolling</h3>
                <ul>
                    <li>This is a roll-under system, meaning your goal is to roll equal-to or less-than a target number.</li>
                    <li>The target numbers are most often your Skills but may be your Attributes.</li>
                    <li>Rolling a 1 is always a critical success. The exact effects of a critical success depend on the type of check.</li>
                    <li>Rolling a 2 is always a regular success.</li>
                    <li>Rolling a 19 is always a regular failure.</li>
                    <li>Rolling a 20 is always a critical failure. The exact effects of a critical failure depend on the type of check.</li>
                </ul>
            </section>
            <section>
                <h3>Opposed Rolls</h3>
                <ul>
                    <li>Both participants roll for their respective skills.</li>
                    <li>If your roll fails, your action fails, regardless of your opponent's roll.</li>
                    <li>If your roll succeeds while your opponent fails, your action succeeds.</li>
                    <li>If both participants succeed, whomever rolled lowest (closest to 1) wins.</li>
                    <li>Opposed rolls can be pushed.</li>
                </ul>
            </section>
            <section>
                <h3>Pushing Your Luck</h3>
                <ul>
                    <li>If you fail a check but don't roll a 20, you have the option to push your luck and roll again.</li>
                    <li>However, you must immediately gain an Attribute Condition before re-rolling.</li>
                </ul>
            </section>
            <section>
                <h3>Boons and Banes</h3>
                <ul>
                    <li>If something grants you an advantage when making a check, you gain a Boon.</li>
                    <li>If something inflicts a disadvantage when making a check, you gain a Bane.</li>
                    <li>For each Boon and Bane you have on a check, you roll an additional d20.</li>
                    <li>You can gain both Boons and Banes on a single check, but they cancel each other out on a 1-for-1 basis.</li>
                    <li>When rolling with Boons, you use the highest of your rolls.</li>
                    <li>When rolling with Banes, you use the lowest of your rolls.</li>
                </ul>
            </section>
            <section>
                <h3>Helping Another Character</h3>
                <ul>
                    <li>One character (the "helper") may help another character (the "actor") on a roll.</li>
                    <li>The helper makes a skill check using any of their skills, although, they must be able to explain how that skill contributes to the effort (the GM has the ginal say).</li>
                    <li>If they succeed, the actor gains a Boon on the roll.</li>
                    <li>If the helper critically fails their check, the actor receives a Bane on their roll.</li>
                </ul>
            </section>
            <section>
                <h3>Group Checks</h3>
                <ul>
                    <li>On occasion, it might be necessary for every member of the party to make the same check.</li>
                    <li>Depending on circumstances, such a situation might be resolved by having everyone make a check, or by having the character with the highest or lowest skill make the check.</li>
                </ul>
            </section>
            <section>
                <h3>Carrying Capacity</h3>
                <ul>
                    <li>Characters can carry a number of items equal to half their Strength, rounded up.</li>
                    <li>Backpacks increase the number of items a character can carry by 2</li>
                    <li>Some large or voluminous items take up more than 1 space.</li>
                    <li>Characters can carry any number of Tiny items, with the GM's discretion.</li>
                    <li>Characters can also carry 3 hands worth of weapons. For example, you could carry 3 daggers, or a short spear, long sword, and shield.</li>
                </ul>
                <h3>Encumberance</h3>
                <ul>
                    <li>If you are carrying more than your normal encumberance limit:</li>
                    <ul>
                        <li>you must make a Strength roll whenever you want to move during combat. If the Strength roll fails, you must either drop what you are carrying, or stay where you are.</li>
                        <li>you move at half speed outside combat.</li>
                    </ul>
                    <li>If you are carrying another character, you automatically count as encumbered and cannot fight in combat.</li>
                </ul>
            </section>
        </section>
    )
};
