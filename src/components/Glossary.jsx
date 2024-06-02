import { LINKS } from "../constants.jsx";

export const Glossary = () => {
    return (
        <ul>
            <li id={"attribute"}><strong>Attribute</strong>: Attributes represent the inherent qualities of your character. They are:
                <ol>
                    <li>Strength (STR): Raw muscle power.</li>
                    <li>Dexterity (DEX): Body control, speed, and fine motor skills.</li>
                    <li>Constitution (CON): Physical fitness and resilience.</li>
                    <li>Intelligence (INT): Mental acuity, intellect, and reasoning skills.</li>
                    <li>Willpower (WIL): Self-discipline and focus.</li>
                    <li>Charisma (CHA): Force of personality and empathy.</li>
                </ol>
            </li>
            <li id={"bane"}><strong>Bane</strong>: An additional d20 you gain on a check due to some advantage. The highest result is used.</li>
            <li id={"boon"}><strong>Boon</strong>: An additional d20 you gain on a check due to some disadvantage. The lowest result is used.</li>
            <li id={"character"}><strong>Character</strong>: The term character encompass player characters, non-player characters, and
                generally any common sentient creatures.
            </li>
            <li id={"conditions"}><strong>Conditions</strong>: A negative effect that imposes penalties on your character:
                <ul>
                    <li>Exhausted (STR): You gain a Bane on all checks related to Strength.</li>
                    <li>Dazed (DEX): You gain a Bane on all checks related to Dexterity.</li>
                    <li>Sickly (CON): You gain a Bane on all checks related to Constitution.</li>
                    <li>Angry (INT): You gain a Bane on all checks related to Intelligence.</li>
                    <li>Scared (WIL): You gain a Bane on all checks related to Willpower.</li>
                    <li>Disheartened (CHA): You gain a Bane on all checks related to Charisma.</li>
                    <li>Ailing: At regular intervals (determined by what inflicts this condition), you lose 1d6 HP and 1d6 WP. In addition, you can't heal naturally, nor can you lose conditions.</li>
                </ul>
            </li>
            <li id={"monster"}><strong>Monster</strong>: The term monster generally refers to creatures that are more powerful than
                characters.
                <ul>
                    <li>Monsters have neither {LINKS.attributes} nor {LINKS.skills}.</li>
                    <li>Since monsters do not have attributes, they do not suffer from {LINKS.conditions}.</li>
                    <li>Monsters have a rating called ferocity that gives a general idea of how powerful
                        they are.
                    </li>
                    <li>Monsters act a number of times per combat round equal to their ferocity.</li>
                    <li>Monsters have many immunities, but some also have vulnerabilities.</li>
                </ul>
            </li>
            <li id={"resting"}><strong>Resting</strong>: Time taken away from travel and adventure to recover HP and WP. There are three types of rests:
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
                    <li>The number of dice recovered while resting can be increased by one via a successful {LINKS.skill.medicine} check.</li>
                    <li>The size of the dice rolled for recoving HP and WP can be increased via a successful {LINKS.skill.cooking} check.</li>
                </ul>
            </li>
        </ul>
    )
}