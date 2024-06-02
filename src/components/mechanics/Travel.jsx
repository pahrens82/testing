export const Travel = () => {
    return (
        <section className={"contents"}>
            <h1>A Typical Day</h1>
            <i>Coming soon</i>
            {/* <section>
                <h3>The Travel Day</h3>
                <p>Each travel day is broken into 6 4-hour Shifts. To give you an idea of the pattern on normal day of travel:</p>
                <ol>
                    <li><strong>4 AM - 8 AM</strong>: Free time.</li>
                    <li><strong>8 AM - 12 PM</strong>: Travel.</li>
                    <li><strong>12 PM - 4 PM</strong>: Travel.</li>
                    <li><strong>4 PM - 8 PM</strong>:  Free time.</li>
                    <li><strong>8 PM - 12 AM</strong>: Rest or stand watch.</li>
                    <li><strong>12 AM - 4 AM</strong>: Rest or stand watch.</li>
                </ol>
                <p>Characters can essentially do what they want during Shifts of free time.</p>
            </section>
            <section>
                <h3>Activities</h3>
                <ul>
                    <li><strong>Eating</strong>: Eating is the only mandatory activity. Characters can eat rations at any time, and inn meals when in a settlement. Gathered food must</li>
                    <li><strong>Hunting</strong>: </li>
                    <li><strong>Foraging</strong>: </li>
                    <li><strong>Fishing</strong>: </li>
                    <li><strong>Cooking</strong>: </li>
                    <li>Treat an Injury</li>
                </ul>
            </section>
            <section>
                <h3>Travel</h3>
                <ul>
                    <li>If it happens to be a travel day, the party will need to decide
                        who the guide will be for the first Shift of travel.
                    </li>
                    <li>A different guide can be selected at the start of each Shift.</li>
                    <li>The guide is responsible for rolling Survival checks for navigation,
                        and Perception checks if called for by random encounters.
                    </li>
                    <li>If the guide fails their Survival check for navigation, the party
                        becomes lost and, at a minimum, does not progress toward their
                        destination.
                    </li>
                    <li>The party can travel for 1, 2, or 3 Shifts. The choice is theirs:
                        less time travelling allows more time for hunting, cooking, repairing
                        equipment, etc. It also means it will take longer to reach a destination.
                    </li>
                </ul>
            </section>
            <section>
                <h3>Evening Activities</h3>

            </section>
            <section>
                <h3>Night Activities</h3>
                <section>
                    <h5>Resting</h5>
                    <p>There are three types of resting:</p>
                    <ul>
                        <li>Round Rest: You may spend one round during combat catching your breath; you regain 1d6 WP. This
                            can be done once per Shift.
                        </li>
                        <li>Short Rest: You spend 15 minutes resting, allowing you to regain 1d6 HP and WP (roll for each).
                            This can be done once per Day.
                        </li>
                        <li>Long Rest: You spend 2 consecutive Shifts resting (a total of 8 hours). The number of the HP and
                            WP recovered depends on where you are resting:
                            <ul>
                                <li>Exposed: You are resting somewhere completely exposed to the elements. No shelter, no
                                    bedroll, etc. You regain no HP or WP, and remove no Conditions. The counter on Short Rests
                                    is not reset.
                                </li>
                                <li>Uncomfortable: You are either resting outside with minimal shelter (IE, a bedroll or
                                    hammock), or inside somewhere unpleasant (IE, a stable floor). You recover 1d6 HP and
                                    WP, and remove all Conditions. The counter on Round and Short Rests is reset.
                                </li>
                                <li>Comfortable: You are either resting outside in a tent or similar shelter, or in a
                                    pleasant room in a house or inn. You recover 2d6 HP and WP, and remove all Conditions.
                                    The counter on Round and Short Rests is reset.
                                </li>
                                <li>Luxurious: You are either resting outside in a pavilion, or in a luxurious room in a
                                    manor or inn. You recover 4d6 HP and WP. The counter on Round and Short Rests is reset.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>The number of dice rolled to recover HP and WP can be increased by up to two, one for a successful Medicine
                        check, and the other for a critically successful Cooking check.
                    </p>
                </section>
            </section>
            <section>

            </section>
            <section>
                <h3>Camping</h3>
                <section>
                    <p>When the party decides to stop travelling, it becomes time to make camp. </p>
                </section>
                <section>
                    <h5>Eating</h5>
                    <p>While characters eat multiple times a day, we're only going to
                        track one meal per day. What a character eats during that
                        meal impacts their healing rate during their next Long Rest.
                        If a character eats no food in a day, they recover no HP,
                        WP, or Conditions during their next Long Rest.
                    </p>
                    <p>While in a village, town, or city, food is readily available for purchase.</p>
                    <p>While travelling, trail rations provide a great food resource for
                        characters because they never spoil and can be eaten with no
                        preparation. This means they can be eaten during other activities,
                        IE while travelling, etc.
                    </p>
                    <p>If a character runs out of trail rations (or if they want to save their rations for later),
                        they have the options of hunting, fishing, or foraging for food.
                    </p>
                    <h5>Hunting, Foraging, and Fishing</h5>
                    <p>As a Shift activity, one or more characters can go hunting, foraging, or fishing.
                        These activities produce raw ingredients that must be cooked for safe consumption.
                        If a character eats raw food, they must make a CON check vs a Disease with a Potency
                        of 10.
                    </p>
                    <ul>
                        <li><strong>Hunting</strong>: The hunting character makes a Tracking check. If
                            successful, they track an animal down (determined at random). The hunting
                            character must then make a single successful Bows, Crossbows, or Spears
                            check to slay the animal. Be warned, some animals might fight back.
                        </li>
                        <li><strong>Foraging</strong>: If plants or fungi are available, a character
                            may use an Herbalism check to forage for 1d4 meals worth of food.
                        </li>
                        <li><strong>Fishing</strong>: If a character has fishing equipment (rod, net, spear,
                            or trident), and fish are available, a character may catch 1d4 (1d6 for nets) meals
                            worth of fish via a successful Survival check.
                        </li>
                    </ul>
                    <h5>Cooking</h5>
                    <p>As a Shift activity, a character may Cook raw food to make it safe to eat.</p>
                    <ul>
                        <li>A character must have access to fire in order to Cook, meaning fuel and
                            a fire source must be available. It is generally assumed that fuel and
                            a source are available, but that might not be the case depending on the
                            environment through which the party is travelling.
                        </li>
                        <li>If cooking over a fire, a character may cook 6 meals per Shift.</li>
                        <li>If cooking with a Field Kitchen, a character may cook 12 meals per Shift.</li>
                        <li>If in an actual kitchen, a character may cook up to 24 meals per Shift.</li>

                    </ul>
                    <p>The results of a Cooking check are as follows:</p>
                    <ul>
                        <li><strong>Critical Failure</strong>: The food appears to be edible, but is in fact an Emetic Poison.</li>
                        <li><strong>Failure</strong>: The food is ruined.</li>
                        <li><strong>Success</strong>: The food is edible, and allows for the standard rate of healing during the next Long Rest.</li>
                        <li><strong>Critical Success</strong>: The food is excellent, and adds 1d6 to all healing during the next Long Rest.</li>
                    </ul>



                </section>
            </section> */}
        </section >
    );
};
