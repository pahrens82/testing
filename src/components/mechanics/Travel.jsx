export const Travel = () => {
    return (
        <section className={"container mb-5"}>
            <h1>Travel</h1>
            <section>
                <h3>On The Road</h3>
                <ul>
                    <li>Travel is handled in Shifts.</li>
                    <li>A normal duration for a day's travel is two Shifts.</li>
                    <li>During travel, up to two characters can be Pathfinders for the party.
                        <ul>
                            <li>Pathfinders are responsible for Survival checks for navigation.</li>
                            <li>Pathfinders are responsible for making Perception checks for spotting anything during the journey.</li>
                            <li>Pathfinders are responsible for locating safe campsites (a Survival check) if time permits after a day of travel.</li>
                        </ul>
                    </li>
                    <li>Characters that are not Pathfinders can engage in other activities during travel, as long as those activities do not slow their progress. Examples include writing, reading, or making minor repairs to clothing or other pieces of equipment.</li>
                    <li>After travelling for two Shifts, the party can opt to continue on for a third Shift. If they do so, they will not have time after travelling to do anything other than setting up camp, and eating rations.</li>
                    <li>If the party opts to end their day of travel afters two Shifts, there are a variety of activities they can/should do:
                        <ul>
                            <li>Locating a Camp Site: a Survival check by the Pathfinders.  Critical success on this check lets them find a site that provides some type of benefit: a Boon to hunting, fishing, foraging, cooking, or similar.
                            </li>
                            <li>Making Camp: No check. This amounts to setting up tents, laying out bedrolls is safe, dry areas.</li>
                            <li>Hunting: a Tracking check is made to locate an animal. If successful, 1d6 is rolled to determine the type of animal located. If a critical success is rolled, an additional 1d6 is rolled, and the better result is used. Then, the hunter has two options:
                                <ul>
                                    <li>The hunter may make an attack roll with a ranged weapon. If successful, the animal is slain and meat harvested. Generally, on a critical success, additional meat is harvested (the animal slain is particularly large).
                                    </li>
                                    <li>The hunter may make a Survival check to place a trap. If successful, an animal is caught, allowing it to be slain with ease and its meat harvested. Generally, on a critical success, additional meat is harvested (you catch more than one animal).</li>
                                </ul>
                            </li>
                            <li>Fishing: Survival check. Requires fishing equipment, or a weapon like a spear or trident. Fishing rods yield 1d4 rations of food. Fishing nets yield 1d6 rations of food. Weapons yield 1d3 rations of food.</li>
                            <li>Foraging: Survival check. No equipment required. Must be in a suitable environment. Success yields 1d3 rations of edible mushrooms, roots, and other plants.</li>
                            <li>Cooking: Cooking check to make a fire. Fuel is required, as is some means of starting the fire.</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </section>
    );
};
