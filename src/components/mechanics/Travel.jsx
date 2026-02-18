export const Travel = () => {
    return (
        <section className={"container mb-5"}>
            <h1>Travel and Time</h1>
            <section>
                <h3>Time</h3>
                <ul>
                    <li>Each day is divided into 6 4-hour Shifts.</li>
                    <li>At the start of each Shift, each member of the party must decide what they will do for most of the Shift.</li>
                    <li>A member of the party cannot perform more than one task in the same Shift, including Travel. The <i>only</i> exception to this is that one PC should serve as the Pathfinder for the party while Travelling.</li>
                    <li>Some tasks can be performed by several of the characters at the same time. For other tasks, a single character must be chosen.</li>
                </ul>
            </section>
            <sectio>
                <h3>Tasks</h3>
                <ul>
                    <li><strong>Travel:</strong> Walking on foot or riding on animalback to travel cross country.
                        <ul>
                            <li>In most cases, the party will collectively opt for this task.</li>
                            <li>One PC should be designated as the Pathfinder.
                                <ul>
                                    <li>The Pathfinder
                                        is responsible for Survival checks to navigate, and for
                                        Perception checks to spot obstacles and ambushes.
                                    </li>
                                </ul>
                            </li>
                            <li>Under normal circumstances, PCs can select the Travel task twice between Long Rests without negative consequences.</li>
                            <li>PCs can select the Travel task a third time between Long Rests, but gain the Exhausted Condition.</li>
                        </ul>
                    </li>
                    <li><strong>Foraging for food:</strong> The player rolls a Survival check. No equipment required. Must be in a suitable environment. Success yields 1d3 rations of edible mushrooms, roots, and other plants.
                    </li>
                    <li><strong>Foraging for herbal ingredients:</strong> The player rolls a Survival check. No equipment required. Must be in a suitable environment. Details forthcoming.
                    </li>
                    <li><strong>Hunting:</strong> The player rolls a Tracking to locate an animal. If successful, 1d6 is rolled to determine the type of animal located. If a critical success is rolled, an additional animal is tracked (the player should roll a second 1d6); the player may choose which animal to hunt. Then, the hunter has two options:
                        <ul>
                            <li>The hunter may make an attack roll with a ranged weapon. If successful, the animal is slain and meat harvested. Generally, on a critical success, additional meat is harvested (the animal slain is particularly large).
                            </li>
                            <li>The hunter may make a Survival check to place a trap. If successful, an animal is caught, allowing it to be slain with ease and its meat harvested. Generally, on a critical success, additional meat is harvested (you catch more than one animal).

                            </li>
                        </ul>
                    </li>
                    <li><strong>Fishing:</strong> The player rolls a Survival check. Requires fishing equipment, or a weapon like a spear or trident. Fishing rods yield 1d4 rations of food. Fishing nets yield 1d6 rations of food. Weapons yield 1d3 rations of food.
                    </li>
                    <li><strong>Cooking:</strong>The player rolls a Cooking check to gather fuel, make a fire, and prepare raw ingredients for consumption. Some means of means of igniting the fire is required.</li>
                    <li><strong>Making Camp:</strong>
                        One PC is tasked with finding a dry, sheltered location to spend the night.
                        <ul>
                            <li>By default, no check is required.</li>
                            <li>If a hidden shelter is desired, a Survival check must be made to find a suitable location. </li>
                        </ul>
                    </li>
                    <li><strong>Stand Guard:</strong> One or more PCs can opt to stand guard. This is usually done in conjuntion with a Long Rest.</li>
                    <li><strong>Long Rest:</strong> A Long Rest consists of two consecutive Shifts spent sleeping.
                        <ul>
                            <li>As with Travel, in most cases, the party will collectively opt for this task.</li>
                            <li>If interrupted, the Long Rest has no effect.</li>
                            <li>A Long Rest restores all Conditions (unless otherwise noted).</li>
                            <li>HP and WP are recovered. The amount depends on the quality of rest:
                                <ul>
                                    <li><i>Poor</i>: You are resting somewhere exposed to the elements and have no bedroll, tent, hammock, etc. You recover 1d6 HP and 1d6 WP.</li>
                                    <li><i>Uncomfotable</i>: You are either resting outside with minimal shelter (I.E. a bedroll or hammock, but no cover), or inside somewhere unpleasant (I.E., a stable floor). You recover 2d6 HP and 2d6 WP.</li>
                                    <li><i>Comfortable</i>: You are either resting outside in a tent or similar shelter, or in a room in a house or inn. You recover 3d6 HP and 3d6 WP.</li>
                                    <li><i>Luxurious</i>: You are either resting outside in a pavilion, or in a luxurious room in a manor or inn. You recover 4d6 HP and 4d6 WP.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </sectio>
        </section >
    );
};
