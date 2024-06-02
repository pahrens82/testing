export const Resting = () => {
    return (
        <section>
            <h5>Resting</h5>
            <p>There are three types of rests:</p>
            <ul>
                <li><strong>Round Rest</strong>: You may spend one round during combat
                    catching your breath; you regain 1d6 WP. This can be done once per Shift.
                </li>
                <li><strong>Short Rest</strong>: You spend 15 minutes resting, allowing
                    you to regain 1d6 HP and WP (roll for each). This can be done once per
                    Day and must be done somewhere safe.
                </li>
                <li><strong>Long Rest</strong>: You spend 2 consecutive Shifts resting
                    (a total of 8 hours). The number of dice you roll to recover HP and WP
                    depend on the quality of where you rest:
                    <ul>
                        <li><i>Poor</i>: You are resting somewhere exposed to the elements
                            and have no bedroll, tent, hammock, etc. You regain no HP or WP.
                            The counter on Short Rests is not reset.
                        </li>
                        <li><i>Uncomfortable</i>: You are either resting outside with minimal
                            shelter (IE, a bedroll or hammock), or inside somewhere unpleasant
                            (IE, a stable floor). You recover 1d6 HP and WP. The counter on
                            Short Rests is reset.
                        </li>
                        <li><i>Comfortable</i>: You are either resting outside in a tent or
                            similar shelter, or in a room in a house or inn. You recover
                            2d6 HP and WP. The counter on Short Rests is reset.
                        </li>
                        <li><i>Luxurious</i>: You are either resting outside in a pavilion, or
                            in a luxurious room in a manor or inn. You recover 4d6 HP and WP. The
                            counter on Short Rests is reset.
                        </li>
                    </ul>
                </li>
                <li>If another character Administers Care to your character via a successful Medicine
                    Check, you increase the number of dice you roll for recovering HP and WP by 1.
                </li>
                <li>Eating an excellent meal adds an additional 1d6 to the number of dice you roll
                    to recover HP and WP.
                </li>
            </ul>
        </section>
    );
};
