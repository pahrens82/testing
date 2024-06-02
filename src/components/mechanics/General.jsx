import { LINKS } from "../../constants.jsx";


export const General = () => {
    return (
        <section className={"contents mb-5"}>
            <h1>General Mechanics</h1>
            <section>
                <h3>Dice Rolling</h3>
                <ul>
                    <li>This is a roll-under system, meaning your goal is to roll equal-to or less-than a target number.
                    </li>
                    <li>The target numbers are most often your {LINKS.skills} but may be
                        your {LINKS.attributes}.
                    </li>
                    <li>Rolling a 1 is always a critical success. The exact effects of a critical success depend on the type
                        of check.
                    </li>
                    <li>Rolling a 2 is always a regular success.</li>
                    <li>Rolling a 19 is always a regular failure.</li>
                    <li>Rolling a 20 is always a critical failure. The exact effects of a critical failure depend on the
                        type of check.
                    </li>
                </ul>
            </section>
            <section>
                <h3>Opposed Rolls</h3>
                <ul>
                    <li>Both the GM and player roll their respective skills.</li>
                    <li>If the GM succeeds and the player does not, the GM wins.</li>
                    <li>If the player succeeds and the GM does not, the player wins.</li>
                    <li>If neither the GM nor the player succeed, I am not sure what happens?</li>
                    <li>If both the GM and player succeed, whomever rolled lowest (closest to 1) wins.</li>
                </ul>
            </section>
            <section>
                <h3>Pushing Your Luck</h3>
                <ul>
                    <li>If you fail a check but don't roll a 20, you have the option to push your luck and
                        roll again. However, you must immediately gain an attribute {LINKS.condition} before
                        re-rolling.
                    </li>
                </ul>
            </section>
            <section>
                <h3>Boons and Banes</h3>
                <ul>
                    <li>If something grants you an advantage when making a check, you gain a Boon.</li>
                    <li>If something inflicts a disadvantage when making a check, you gain a Bane.</li>
                    <li>For each Boon and Bane you have on a check, you roll an additional d20.</li>
                    <li>You can gain both Boons and Banes on a single check, but they cancel each other out
                        on a 1-for-1 basis.
                    </li>
                    <li>When rolling with Boons, you use the highest of your rolls.</li>
                    <li>When rolling with Banes, you use the lowest of your rolls.</li>
                    {/* <li>If you are in such an advantageous position that you would have 3 or more Boons on a check,
                        you automatically succeed.
                    </li>
                    <li>If you are in such a disadvantageous position that you would have 3 or more Banes on a
                        check, you automatically fail.
                    </li> */}
                </ul>
            </section>
            <section>
                <h3>Group Checks</h3>
                <ul>
                    <li>On occasion, it might be necessary for every member of the party to make the same check.
                        Depending on circumstances, such a situation might be resolved by having everyone make a
                        check, or by having the character with the highest or lowest skill make the check.
                    </li>
                </ul>
            </section>
        </section>
    )
};
