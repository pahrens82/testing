export const CriticalHitsAndMisses = () => {
    return (
        <details className={"border rounded p-1 mt-2 bg-dark-subtle"}>
            <summary className={"fw-bold"}>
                Critical Hits and Misses
            </summary>
            <div className={"bg-white p-2 small"}>
                <strong>Critical Hits</strong>
                <p>If you roll a 1 on your attack roll, you roll an additional die of weapon damage, and an additional effect determined by the damage type of the weapon you are wielding:</p>                
                <ul>
                    <li>If you are wielding a <i>piercing</i> weapon, ignore your target's armor for this attack.</li>
                    <li>If you are wielding a <i>bludgeoning</i> weapon, roll an additional die of weapon damage for this attack.</li>
                    <li>If you are wielding a <i>slashing</i> weapon, immediately perform an attack against another enemy within reach after resolving your current attack.</li>
                </ul>
                <strong>Critical Misses</strong>
                <p>If you roll a 20 on your attack roll, roll 1d6 to determine the effect (melee/ranged):</p>
                <i>Melee:</i>
                <ol>
                    <li>You drop your weapon in your space.</li>
                    <li>You drop your defenses, granting an enemy a free attack against you. You can't Parry or Dodge this attack.
                    </li>
                    <li>Your weapon gets stuck in something. You must use an Action to make an STR check to free it.</li>
                    <li>You accidently throw your weapon 1d4 hexes away.</li>
                    <li>You slam your weapon into something and Break it.</li>
                    <li>You hit yourself somehow, dealing only the weapon's damage. You cannot Parry or Dodge this attack.</li>
                </ol>
                <i>Ranged:</i>
                <ol>
                    <li>You drop your weapon in your space.</li>
                    <li>You run out of arrows or bolts and must get more before you can use this weapon again (re-roll for slings and thrown weapons).</li>
                    <li>You hit a valuable or important item nearby. The GM decides what it is.</li>
                    <li>You break your weapon. Any use of the weapon gets a Bane until it is repaired.</li>
                    <li>You accidently hit a random PC or friendly NPC. Roll damage as usual.</li>
                    <li>You hit yourself somehow, dealing only the weapon's damage. You cannot Parry or Dodge this attack.</li>
                </ol>
            </div>
        </details>
    );
};
