export const CombatManeuvers = () => {
    return (
        <details className={"border rounded p-1 mt-2 bg-dark-subtle"}>
            <summary className={"fw-bold"}>
                Combat Maneuvers
            </summary>
            <ul className={"list-unstyled ps-2 bg-white small"}>
                <li className={"mb-2"}><strong>Grapple</strong>: You can try to grapple foes. This is handled via opposed Brawling checks. The attack uses your Action in combat, and cannot be Parried or Dodged. You receive a Bane on your roll for each size category larger the target is than yourself. If you fail, you fall to the ground. If you succeed, both you and your foe fall to the ground. As long as you maintain the grapple (via additional opposed Brawling checks) the enemy can neither move nor perform any Action that requires body movement except trying to break free. The enemy attempts to break free via opposed Brawling checks on their turn.</li>
                <li className={"mb-2"}><strong>Disarming</strong>: You can attempt to disarm a foe of their weapon. This counts as an Action for you, but not for your opponent. This Action is resolved as opposed rolls with each participant using their respective weapon skill. This attack can be neither Dodged nor Parried. If the defender is wielding their weapon with two hands, you receive a Bane to your roll. If you succeed, your opponent's weapon lands in an adjacent hex. If you critically succeed and have a free hand, you can grab your opponent's weapon (assuming you are able to wield it). If you critically fail, you are instead disarmed, with your weapon landing in an adjacent hex. Monsters cannot be disarmed.</li>
                {/* <li className={"mb-2"}><strong>Charging</strong>: You can charge on foot or on a mount. You must spend at least half your maximum speed moving directly toward your target and then attack when able. You receive a Bane on this attack roll. If you hit, you roll an additional die of weapon damage, or two additional dice of weapon damage if you are wielding a lance.</li> */}
                <li className={"mb-2"}><strong>Shoving</strong>: If you hit an enemy with a melee attack and your STR damage bonus is equal to or greater than your opponenet's damage bonus, you can choose to shove the enemy back 1 hex in addition to doing damage. This movement does not count toward the enemy's total movement in the round and does not trigger free attacks from anyone. Monsters cannot shove (unless otherwise specified) or be shoved. Monsters cannot be shoved.</li>
                <li className={"mb-2"}><strong>Find Weak Spot</strong>: If your melee weapon deals piercing damage, you can try to find a gap in the enemy's worn or natural armor. You get a Bane on the attack, but if it hits, the enemy counts as armorless.</li>
                <li className={"mb-2"}><strong>Topple</strong>: You can try to topple an enemy to the ground instead of inflicting damage. This attack is handled with an opposed roll between your skill level in the weapon you are using and the enemy's Dodge. If your weapon has the toppling feature, you get a Boon. The attack counts as an action for you, but not for your opponent. This acttack cannot be dodged or parried. Monsters cannot be toppled.</li>
            </ul>
        </details>
    );
};
