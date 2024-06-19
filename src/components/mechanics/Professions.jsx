import { LINKS } from "../../constants";


export const Professions = () => {
    return (
        <section className={"contents mb-5"}>
            <h1>Professions</h1>
            <section>
                <p>Professions provide an ability and a set of key skills.
                    When making a character, 5 of your class skills must
                    be selected from your profession's key skills. The other
                    three skills are your choice.
                </p>
            </section>
            <div id={"bard"} className={"card p-3 mb-3"}>
                <strong>Bard</strong>
                <p><i>Musician</i>: WP 3. Your beautiful voice instills courage in your friends. Activating this ability (an action in combat) grants a Boon to all allies within 30 feet; this Boon affects all rolls. This effect lasts until the start of your next turn.</p>
                <span>Key Skills:</span>
                <ul>
                    <li>Acrobatics</li>
                    <li>Dodge</li>
                    <li>Myths and Legends</li>
                    <li>Perception</li>
                    <li>Performance</li>
                    <li>Persuasion</li>
                    <li>Sleight of Hand</li>
                    <li>Knives</li>
                </ul>
            </div>
            <div id={"jester"} className={"card p-3 mb-3"}>
                <strong>Jester</strong>
                <p><i>Antagonize</i>: WP 3. Your dischordant voice fills your foes with anger. Activating this ability (an action in combat) grants a Bane to all enemies within 30 feet; this Bane affects all rolls. This effect lasts until the start of your next turn.</p>
                <span>Key Skills:</span>
                <ul>
                    <li>Acrobatics</li>
                    <li>Bluff</li>
                    <li>Dodge</li>
                    <li>Performance</li>
                    <li>Persuasion</li>
                    <li>Sleight of Hand</li>
                    <li>Stealth</li>
                    <li>Knives</li>
                </ul>
            </div>
            <div id={"cleric"} className={"card p-3 mb-3"}>
                <strong>Cleric</strong>
                <p><i>Divine Casting</i>: WP -. You have the ability to cast divine spells.</p>
                <span>Key Skills:</span>
                <ul>
                    <li>Divine Casting</li>
                    <li>Dodge</li>
                    <li>Herbalism</li>
                    <li>Medicine</li>
                    <li>Persuasion</li>
                    <li>Bludgeons</li>
                    <li>Slings</li>
                    <li>Staves</li>
                </ul>
            </div>
            <div id={"fighter"} className={"card p-3 mb-3"}>
                <strong>Fighter</strong>
                <p><i>Veteran</i>: WP -. Your training has taught you the important of having the right tool for the job. You are able to carry 4 hands worth of weapons rather than 3.</p>
                <span>Key Skills:</span>
                <ul>
                    <li>Acrobatics</li>
                    <li>Axes</li>
                    <li>Bludgeons</li>
                    <li>Brawling</li>
                    <li>Crossbows</li>
                    <li>Dodge</li>
                    <li>Spears</li>
                    <li>Swords</li>
                </ul>
            </div>
            <div id={"berserker"} className={"card p-3 mb-3"}>
                <strong>Berserker</strong>
                <p><i>Rage</i>: WP 3. When you activate this ability, you gain the Angry condition and immediately attack the nearest opponent in melee combat. Each subsequent round you must continue melee attacking all enemies in sight until all have been defeated or you reach 0 HP. These melee attacks gain a Boon, and can neither be Parried nor Dodged. After the fight you become Exhausted.</p>
                <span>Key Skills:</span>
                <ul>
                    <li>Acrobatics</li>
                    <li>Axes</li>
                    <li>Bludgeons</li>
                    <li>Brawling</li>
                    <li>Dodge</li>
                    <li>Slings</li>
                    <li>Spears</li>
                    <li>Swords</li>
                </ul>
            </div>
            <div id={"hunter"} className={"card p-3 mb-3"}>
                <strong>Hunter</strong>
                <p><i>Instincts</i>: WP 3. You can use this ability to designate a Creature, Character, or Monster as your prey. Use of this ability counts as an Action in combat. You can follow the trail of your prey for a full day without checks, and you can spend 1 further WP (not an action) to gain a Boon for attacks against your prey.</p>
                <span>Key Skills:</span>
                <ul>
                    <li>Beast Lore</li>
                    <li>Bows</li>
                    <li>Dodge</li>
                    <li>Knives</li>
                    <li>Perception</li>
                    <li>Spears</li>
                    <li>Survival</li>
                    <li>Tracking</li>
                </ul>
            </div>
            <div id={"pathfinder"} className={"card p-3 mb-3"}>
                <strong>Pathfinder</strong>
                <p><i>Pathfinder</i>: WP 1. When making a Survival check to determine what direction to travel, you may activate this ability to gain a Boon.</p>
                <span>Key Skills:</span>
                <ul>
                    <li>Climbing</li>
                    <li>Crossbows</li>
                    <li>Dodge</li>
                    <li>Perception</li>
                    <li>Seamanship</li>
                    <li>Staves</li>
                    <li>Survival</li>
                    <li>Tracking</li>
                </ul>
            </div>
            <div id={"thief"} className={"card p-3 mb-3"}>
                <strong>Thief</strong>
                <p><i>Backstabbing</i>: WP 3. You can activate this ability when using a <i>subtle</i> weapon to make a melee attack against an enemy you are flanking. This attack then counts as a {LINKS.mechanics.combat.sneakattack}.</p>
                <span>Key Skills:</span>
                <ul>
                    <li>Acrobatics</li>
                    <li>Bluff</li>
                    <li>Crossbows</li>
                    <li>Dodge</li>
                    <li>Knives</li>
                    <li>Perception</li>
                    <li>Sleight of Hand</li>
                    <li>Stealth</li>
                </ul>
            </div>
            <div id={"burgler"} className={"card p-3 mb-3"}>
                <strong>Burgler</strong>
                <p><i>Contortionist</i>: WP 1. You escape from your shackles or squeeze through a narrow space without rolling for any skill.</p>
                <span>Key Skills:</span>
                <ul>
                    <li>Acrobatics</li>
                    <li>Crossbows</li>
                    <li>Dodge</li>
                    <li>Knives</li>
                    <li>Perception</li>
                    <li>Sleight of Hand</li>
                    <li>Stealth</li>
                    <li>Tinkering</li>
                </ul>
            </div>
            <div id={"mage"} className={"card p-3 mb-3"}>
                <strong>Mage</strong>
                <p><i>Arcane Casting</i>: WP -. You have the ability to cast arcane spells.</p>
                <span>Key Skills:</span>
                <ul>
                    <li>Alchemy</li>
                    <li>Arcane Casting</li>
                    <li>Beast Lore</li>
                    <li>Dodge</li>
                    <li>Herbalism</li>
                    <li>Myths and Legends</li>
                    <li>Perception</li>
                    <li>Staves</li>
                </ul>
            </div>
        </section >
    )
};
