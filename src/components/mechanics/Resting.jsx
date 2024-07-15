export const Resting = () => {
    return (
        <section className={"container"}>
            <h1>Resting</h1>
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
                    (a total of 8 hours). A Long Rest restores all Conditions. How much HP
                    and WP you recover depends on the quality of where you rest:
                    <ul>
                        <li><i>Poor</i>: You are resting somewhere exposed to the elements
                            and have no bedroll, tent, hammock, etc. You recover 1d6 HP and WP.
                        </li>
                        <li><i>Uncomfortable</i>: You are either resting outside with minimal
                            shelter (IE, a bedroll or hammock), or inside somewhere unpleasant
                            (IE, a stable floor). You recover 2d6 HP and WP.
                        </li>
                        <li><i>Comfortable</i>: You are either resting outside in a tent or
                            similar shelter, or in a room in a house or inn. You recover
                            3d6 HP and WP.
                        </li>
                        <li><i>Luxurious</i>: You are either resting outside in a pavilion, or
                            in a luxurious room in a manor or inn. You recover 4d6 HP and WP.
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};
