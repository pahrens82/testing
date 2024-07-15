import { Link } from "react-router-dom";

export const Combat = () => {
    return (
        <section className={"container"}>
            <h1>Combat</h1>
            <h3>Before Combat</h3>
            <h5 id={"sneak-attack"}>Sneak Attacks</h5>
            <p>If you are able to move adjacent to a target without the
                target becoming aware (via a successful Stealth check),
                you may Sneak Attack that target. You gain a Boon on
                your attack roll, and the target may neither Dodge
                nor Parry your attack. If you are wielding a <i>subtle</i> weapon,
                you deal an additional die of damage. Sneak Attacks
                can only occur BEFORE of combat (unless you are a Thief),
                and are always resolved individually.
            </p>
            <h5 id={"ambush"}>Ambush</h5>
            <p>In order to Ambush a foe, all party members who
                want to participate in the combat must be present. If
                the character with the worst STEALTH succeeds at using
                that skill, the ambush is successful: each participant
                is able to choose their place in initiative.
            </p>
            <h3>Initiative</h3>
            <ol>
                <li>Each participant rolls 1d20.</li>
                <li>Monsters roll 1d20 per Ferocity.</li>
                <li>Turn order proceeds from highest to lowest.</li>
            </ol>
            <h3>The Combat Round</h3>
            <p>On your turn during a combat round you may move up to
                your speed. At any point during your turn you may
                also take one action.
            </p>
            <h3>Combat Actions</h3>
            <p>You are able to take one action per turn, and any number
                of free actions. Each free action may only be taken
                once per round, however.
            </p>
            <h5>Actions</h5>
            <ul>
                <li><strong>Dash</strong>: Move up to your speed (essentially doubling your movement).</li>
                <li><strong>Attack</strong>: Attack an enemy within reach or range of your weapon.</li>
                <li><strong>Parry</strong>: Parrying is a <i>reaction</i> that takes place outside your turn and uses your action for the round.</li>
                <li><strong>Dodge</strong>: Doding is a <i>reaction</i> that takes place outside your turn and uses your action for the round.</li>
                <li><strong>Retrieve Item</strong>: Retrieving an item from your space, an adjacent space, or from your backpack.</li>
                <li><strong>Rally</strong>: Use Persuasion to enable a character at 0 HP continue taking actions, or a WIL check for your own character.</li>
                <li><strong>Use A Skill</strong>: Basically any use of a Skill is an Action.</li>
                <li><strong>Use An Item</strong>: Using an item is an Action.</li>
                <li><strong>Casting A Spell</strong>: Casting a spell is an Action.</li>
                <li><strong>Round Rest</strong>: Once per combat per Shift you can spend a round doing nothing in order to regain 1d6 WP.</li>
            </ul>
            <h5>Free Actions</h5>
            <ul>
                <li><strong>Draw Weapon</strong>: Self explanatory.</li>
                <li><strong>Change Position</strong>: Kneeling, squatting, dropping prone, standing up, leaning around a corner, etc.</li>
                <li><strong>Drop Item</strong>: Dropping a weapon, shield, or other item you are holding.</li>
                <li><strong>Speak</strong>: Self explanatory.</li>
            </ul>
            <h3>Attacking</h3>
            <ol>
                <li>Determine what Boons or Banes might apply to your attack roll.</li>
                <li>Roll against the Skill corresponding to the weapon your wielding.
                    <ul>
                        <li>While making a ranged attack, you receive a Bane on your roll if your target is obscured by an object, person, or substance.</li>
                        <li>Ranged weapons have a specified range within which they can be used effectively. Beyond this range, ranged attack rolls receive a Bane. Attacks beyond twice the listed range are not possible.</li>
                    </ul>
                </li>
                <li>If you succeed, you've hit your target. If you fail, the attack misses.
                    <ul>
                        <li>Your target might have the option of Parrying or Dodging your attack. If they are able and choose to do so, that is resolved now.</li>
                    </ul>
                </li>
                <li>Roll damage. Damage is determined by the weapon you are wielding, and possibly increased by either your STR or DEX.</li>
                <li>If the attack is Parried, damage is applied to the target's weapon or shield. If the attack is Dodged, the damage is ignored.</li>
                <li>If the target takes damage from your attack, that damage is reduced by the target's Armor.</li>
                <li>If a PC is reduced to 0 HP, they begin <Link to={"/mechanics/health#dying"}>Dying</Link>.</li>
            </ol>
            <h3>Parrying</h3>
            <ol>
                <li>Parrying is done as a reaction to being hit in combat.</li>
                <li>Parrying consumes your action for the round. If you've already acted this round, you can't Parry.</li>
                <li>Melee attacks can be Parried with a drawn weapon or shield.</li>
                <li>Ranged attacks can be Parried with a readied shield (or a drawn weapon if you have the Deflect Arrow ability).</li>
                <li>To Parry, you make a check against the Skill corresponding to the weapon you are wielding.</li>
                <li>If your Parry succeeds, your opponent rolls damage, and that damage is compared to the Durability of your weapon. If the damage exceeds the Durability of your weapon, your weapon Breaks.</li>
                <li>If you are wielding a shield in addition to your weapon, you may compare the damage to your shield's Durability instead of your weapon's. Shields generally have a higher Durability rating.</li>
                <li>If the hit against you is critical, you must roll a critical success to Parry it.</li>
                <li>If you roll a critical success on your Parry attempt, and the hit against you is not critical, you get a free attack against your attacker.</li>
                <li>In general, Monster attacks CANNOT be Parried.</li>
                <li>You cannot attempt to Dodge and Parry against the same attack.</li>
            </ol>
            <h3>Dodging</h3>
            <ol>
                <li>Dodging is done as a reaction to being hit in combat.</li>
                <li>Dodging consumes your action for the round. If you've already acted this round, you can't Dodge.</li>
                <li>To Dodge, you make a check against Dodge skill.</li>
                <li>If your Dodge check succeeds, your opponent's attack misses.</li>
                <li>If the hit against you is critical, you must roll a critical success to Dodge it.</li>
                <li>You may move 1 hexagon upon successfully Dodging an attack.</li>
                <li>In general, Monster attacks CAN be Dodged.</li>
                <li>You cannot attempt to Dodge and Parry against the same attack.</li>
            </ol>
            <h3>Critical Hits and Misses</h3>
            <p>If you roll a 1 on your attack roll, you may select one of the following effects:</p>
            <ul>
                <li>Immediately perform an attack against another enemy.</li>
                <li>If you are wielding a <i>piercing</i> weapon, ignore your target's armor for this attack.</li>
                <li>If you are wielding a <i>bludgeoning</i> weapon, knock your enemy prone.</li>
                <li>If you are wielding a <i>slashing</i> weapon, double your weapon's dice for damage on this attack.</li>
            </ul>
            <p>If you roll a 20 on your attack roll, roll 1d6 to determine the effect:</p>
            <ol>
                <li>You drop your weapon in your space.</li>
                <li>You drop your defenses, granting an enemy a free attack against you. You can't Parry or Dodge this attack.</li>
                <li>Your weapon gets stuck in something. You must use an Action to make an STR check to free it.</li>
                <li>You accidently throw your weapon 1d4 hexes away.</li>
                <li>You slam your weapon into something and Break it.</li>
                <li>You hit yourself somehow, dealing only the weapon's damage. You cannot Parry or Dodge this attack.</li>
            </ol>
            <h3>Combat Maneuvers</h3>
            <ul>
                <li><strong>Grapple</strong>: You can try to grapple foes. This is handled via opposed Brawling checks. The attack uses your action in combat, and cannot be Parried or Dodged. You receive a Bane on your roll for each size category larger the target is than yourself. If you fail, you fall to the ground. If you succeed, both you and your foe fall to the ground. As long as you maintain the grapple (via additional opposed Brawling checks) the enemy can neither move nor perform any action that requires body movement except trying to break free. The enemy attempts to break free via opposed Brawling checks on their turn.</li>
                <li><strong>Charging</strong>: You can charge on foot or on a mount. You must spend at least half your maximum speed moving directly toward your target and then attack when able. You receive a Bane on this attack roll. If you hit, you roll an additional die of weapon damage, or two additional dice of weapon damage if you are wielding a lance.</li>
            </ul>
        </section>
    );
};

