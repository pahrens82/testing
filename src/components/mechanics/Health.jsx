import { Link } from "react-router-dom";
import { LINKS } from "../../constants";


export const Health = () => {
    return (
        <section className={"contents"}>
            <h1>Health, Healing, Resting, and Dying</h1>
            <section>
                <h3>Measuring Health</h3>
                <h5>Hit Points (HP)</h5>
                <ul>
                    <li>Hit points represent your health and wellbeing. They can be lost due to injury, starvation,
                        poison,
                        disease, etc.
                    </li>
                    <li>You begin play with a number of HP equal to your Constitution score.</li>
                </ul>
                <h5>Willpower Points (WP)</h5>
                <ul>
                    <li>Willpower points represent the mental and spiritual energy that you expend to activate your
                        abilities and cast spells.
                    </li>
                    <li>You begin play with a number of WP equal to your Willpower score.</li>
                </ul>
            </section>
            <section>
                <h3>Natural Healing</h3>
                <p>Natural healing includes the recovery of HP and WP from resting and from herbal concoctions.</p>
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
                                    bedroll, etc. You regain no HP or WP. The counter on Short Rests is not reset.
                                </li>
                                <li>Uncomfortable: You are either resting outside with minimal shelter (IE, a bedroll or
                                    hammock), or inside somewhere unpleasant (IE, a stable floor). You recover 1d6 HP and
                                    WP. The counter on Round and Short Rests is reset.
                                </li>
                                <li>Comfortable: You are either resting outside in a tent or similar shelter, or in a
                                    pleasant room in a house or inn. You recover 2d6 HP and WP. The counter on Round and
                                    Short Rests is reset.
                                </li>
                                <li>Luxurious: You are either resting outside in a pavilion, or in a luxurious room in a
                                    manor or inn. You recover 3d6 HP and WP. The counter on Round and Short Rests is reset.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>The number of dice recovered while resting can be increased by one via a successful {LINKS.skill.medicine} check.</p>
                    <p>The size of the dice rolled for recoving HP and WP can be increased via a successful {LINKS.skill.cooking} check.</p>
                </section>
                <section>
                    <h5>Potions</h5>
                    <p>Healing potions made from herbs are available for purchase in most settlements, or, if you have the {LINKS.ability.herbalism} ability, crafted.</p>
                    <p>In general, healing potions restore Xd6 HP, with X depending on the strength of the potion.</p>
                </section>
            </section>
            <section>
                <h3>Magical Healing</h3>
                <p>There have been no genuine clerics on <Link to={"/locations/ansalon"}>Ansalon</Link> since
                    the Cataclysm, and magical healing seems to have disappeared with them. This doesn't mean
                    people don't claim to have such powers, though. Perhaps one of them will prove to be true.
                </p>
            </section>
            <section id={"dying"}>
                <h3>Dying</h3>
                <p>If your HP reaches 0, you drop to the ground and risk dying. You cannot move or perform any actions except trying to Rally. If you survive, you gain an Injury.</p>
                <ul>
                    <li><strong>Death Roll</strong>: On your turn on each subsequent round, you must make a Death Roll -  a roll against your CON. This roll cannot be pushed. After three successful Death Rolls you receover 1d6 HP and stop making Death Rolls. After three failed Death Rolls, your character dies. A critical success counts as two successful rolls, while a critical failure counts as two failed rolls. If combat ends, or if you are dying outside of combat, continue acting in rounds until all Death Rolls have been made.</li>
                    <li><strong>Additional Damage</strong>: If you suffer additional damage while dying, it automatically counts as a failed Death Roll.</li>
                    <li><strong>Saving a Life</strong>: When a character has 0 HP, another character can attempt to Save A Life via a Medicine check. This check gets a Bane if the character making the check doesn't have bandages. If the roll succeeds, the dying character recovers 1d6 HP and doesn't need to make Death Rolls anymore. Saving A Life has no effect on characters with HP greater than 0.</li>
                    <li><strong>Rally:</strong>: Another character within 30 feet and earshot can use Persuasion to rally a dying character. If the Persuasion check succeeds, the dying character is able to continue taking their turns as normal, but must keep making Death Rolls. You can attempt to Rally yourself, rolling against your WIL with a Bane.</li>
                    <li><strong>Instant Death:</strong>: If you are dealt damage equal to twice your maximum HP, your character dies instantly.</li>
                </ul>
                <h5>Injuries</h5>
                <p>If you recover from Dying, make a CON check. If you fail, roll on the table below.</p>
                <table className={"table"}>
                    <thead>
                        <tr>
                            <th>d20</th>
                            <th>Injury</th>
                            <th>Effect</th>
                            <th>Healing Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1-2</td>
                            <td>Broken Nose</td>
                            <td>You get a Bane on all Perception checks.</td>
                            <td>1d6 days</td>
                        </tr>
                        <tr>
                            <td>3-4</td>
                            <td>Slashed Face</td>
                            <td>Bane on all Performance and Persuasion rolls.</td>
                            <td>2d6 days</td>
                        </tr>
                        <tr>
                            <td>5-6</td>
                            <td>Teeth Knocked Out</td>
                            <td>Your Performance and Persuasion skills are permanently reduced by 2 (to a minimum of 3).</td>
                            <td>Permanent</td>
                        </tr>
                        <tr>
                            <td>7-8</td>
                            <td>Broken Ribs</td>
                            <td>Bane on all STR- and DEX-related skills.</td>
                            <td>1d6 days</td>
                        </tr>
                        <tr>
                            <td>9-10</td>
                            <td>Concussion</td>
                            <td>Bane on all INT-related skills.</td>
                            <td>1d6 days</td>
                        </tr>
                        <tr>
                            <td>11-12</td>
                            <td>Deep Wounds</td>
                            <td>Bane on all STR- and DEX-related skills. Every STR- and DEX-related skill check inflicts 1d6 damage (armor doesn't apply).</td>
                            <td>2d6 days</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Broken Leg</td>
                            <td>Your Speed is halved.</td>
                            <td>3d6 days</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Broken Arm</td>
                            <td>You cannot use two-handed weapons, nor dual-wield, and get a Bane on all other actions normally using both arms.</td>
                            <td>3d6 days</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Severed Toes</td>
                            <td>Your Speed is permanently reduced by 1.</td>
                            <td>Permanent</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Severed Finger</td>
                            <td>Your Weapon Skills are all permanently reduced by 1.</td>
                            <td>Permanent</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Gouged Eye</td>
                            <td>Your Perception skill is permanently reduced by 2.</td>
                            <td>Permanent</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Nightmares</td>
                            <td>Make a Fear check each time your take a Long Rest. If you fail, in addition to the normal effects, you don't count has having slept.</td>
                            <td>2d6 days</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>Changed Personality</td>
                            <td>Randomly generate a new weakness for your character.</td>
                            <td>Permanent</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Amnesia</td>
                            <td>You cannot remember who you or the other characters are. This effect must be roleplayed.</td>
                            <td>1d6 days</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    )
};
