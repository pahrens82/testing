import { LINKS } from "../../constants";


export const Conditions = () => {
    return (
        <section className={"container"}>
            <h1>Conditions and Hazards</h1>
            <section>
                <h3>Conditions</h3>
                <p>Over the course of the game, your character may suffer from various conditions.
                    There are seven conditions, six of which are connected to the attributes (aka attribute conditions):
                </p>
                <ol>
                    <li>Exhausted (STR)</li>
                    <li>Dazed (DEX)</li>
                    <li>Sickly (CON)</li>
                    <li>Angry (INT)</li>
                    <li>Scared (WIL)</li>
                    <li>Disheartened (CHA)</li>
                    <li>Ailing</li>
                </ol>
                <p>The most common way to suffer one of the attribute conditions is to {LINKS.push},
                    although lack of food, sleep, and other circumstances can inflict them as well (see Hazards below).
                </p>
                <p>The seventh condition, Ailing, is not connected to an attribute,
                    but instead represents a complication of one of the attribute conditions.
                    While your character has the Ailing condition, they lose 1d6 HP and WP
                    at regular intervals; the interval is determined by what inflicted the
                    condition. In addition, while your character has the Ailing condition,
                    you can't heal naturally, nor can you lose other conditions. The means
                    of removing Ailing also depend on how the condition was inflicted.
                </p>
                <h5>Multiple Conditions</h5>
                <p>If your character is inflicted with a condition they already have,
                    you must choose a different condition for them to gain. If your
                    character has all six conditions, they instead lose 1d6 WP. If
                    they are out of WP, they instead lose 1d6 HP.
                </p>
            </section>
            <section>
                <h3>Hazards</h3>
                <p>There are several hazards your character will likely encounter while adventuring. In general, hazards are occurrences that inflict one or more conditions.</p>
                <ul>
                    <li><strong>Darkness</strong>: There are two levels of darkness: Dim Lighting and Total Darkness. In Dim Lighting you receive a Bane on rolls related to vision (Perception, ranged attacks, etc.). In Total Darkness the same Bane applies, with the addition that any activity that would normally involve vision can only be made after succeeding at a Perception check.</li>
                    <li><strong>Falling</strong>: Falling inflicts 1d6 damage per 10 feet fallen. Armor offers no protection against falling damage. A successful Acrobatics check reduces the d6s to d4s.</li>
                    <li><strong>Fear</strong>: Fear is caused by exposure to magical effects, monsters, and various other sources. Fear is resisted via a Willpower check. If you fail this check, your character gains the Scared condition. In addition you must roll on the Fear Table and deal with those consequences.</li>
                    <li><strong>Drowning</strong>: Drowning occurrs if you fail a Swimming check. Your character gains the Exhausted and Ailing conditions until rescued or somehow catches their breath. The interval for Ailing depends on your armor and the environment.</li>
                    <li><strong>Extreme Temperature</strong>: You must make a Strength check every Shift during which your character is exposed to extreme temperatures. If you fail this check, your character gains the Exhausted and Ailing conditions. Certain articles of clothing can help with this check. The interval for Ailing is once per shift, and is removed by spending a Short Rest at a comfortable temperature.</li>
                    <li><strong>Disease</strong>: Your character can be exposed to disease in a variety of ways. When exposed, you make an opposed CON vs Virulence check. If you fail this check your character gains the Sickly and Ailing conditions. The interval depends on the Disease, and the end condition is succeeding at the opposed check. Certain herbal concoctions can help with this check, as can assistance via a Medicine/Treat Disease check.</li>
                    <li><strong>Hunger</strong>: If your character goes for 3 days without eating, they gain the Dazed and Ailing conditions. The frequency for Ailing is daily. The end condition is eating a meal.</li>
                    <li><strong>Poison</strong>: Your character can be poisoned via injury, ingestion, or inhalation. If your character becomes poisoned, you make an opposed CON vs Potency check. If you fail this check your character suffer the effects specific to the Poison.</li>
                    <li><strong>Sleep Deprivation</strong>: If your character stays awake for 6 Shifts without a Long Rest, they gain the Exhausted and Ailing conditions. The interval for Ailing is per Shift. The end condition is a Long Rest.</li>
                </ul>
            </section>
        </section>
    );
};
