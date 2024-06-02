import { LINKS } from "../../constants";


export const Conditions = () => {
    return (
        <section className={"contents"}>
            <h1>Conditions and Hazards</h1>
            <sectio>
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
                </ol>
                <p>The most common way to suffer one of these conditions is to {LINKS.push},
                    although lack of food, sleep, and other circumstances can inflict them as well.
                </p>
                <p>The seventh condition is Ailing. Ailing is not connected to an attribute,
                    but instead represents a complication of one of the six above conditions.
                    While you have the Ailing condition, you lose 1d6 HP and WP at regular
                    intervals; the interval is determined by what inflicted the condition.
                    In addition, you can't heal naturally, nor can you lose other conditions.
                    The means of removing Ailing also depend on how the condition was inflicted.
                </p>
                <h5>Multiple Conditions</h5>
                <p>If you are inflicted with a condition you already have, you must choose
                    a different condition. If you have all six conditions, you instead
                    lose 1d6 WP. If you are out of WP, you instead lose 1d6 HP.
                </p>
            </sectio>
            <section>
                <h3>Hazards</h3>
                <p>There are several hazards you are likely to encounter while adventuring.</p>
                <ul>
                    <li><strong>Darkness</strong>: There are two levels of darkness: Dim Lighting and Total Darkness. In Dim Lighting you receive a Bane on rolls related to vision ({LINKS.skill.perception}, ranged attacks, etc.). In Total Darkness the same Bane applies; in addition, any activity that would normally involve vision can only be made after succeeding at a Perception check.</li>
                    <li><strong>Falling</strong>: Falling inflicts 1d6 damage per 10 feet fallen. Armor offers no protection against falling damage. A successful {LINKS.skill.acrobatics} check reduces the d6s to d4s.</li>
                    <li><strong>Fear</strong>: Fear is caused by exposure to magical effects, monsters, and various other sources. Fear is resisted via a Willpower check. If you fail this check, you gain the Scared condition and roll on the Fear Table.</li>
                    <li><strong>Drowning</strong>: Drowning occurrs if you fail a {LINKS.skill.swimming} check. You gain the Exhausted and Ailing conditions until rescued or you somehow catch your breath. The interal for Ailing depends on your armor and the environment.</li>
                    <li><strong>Extreme Temperature</strong>: You must make a Strength check every Shift during which you are exposed to extreme temperatures. If you fail this check, you gain the Exhausted and Ailing conditions. Certain articles of clothing can help with this check. The interval for Ailing is once per shift, and is removed by spending a Short Rest at a comfortable temperature.</li>
                    <li><strong>Disease</strong>: You can be exposed to disease in a variety of ways. When exposed, you make an opposed CON vs Virulence check. If you fail this check you gain the Sickly and Ailing conditions. The interval depends on the Disease, and the end condition is succeeding at the opposed check. Certain herbal concoctions can help with this check, as can assistance via a {LINKS.skill.medicine} check.</li>
                    <li><strong>Hunger</strong>: If you go for 3 days without eating, you gain the Dazed and Ailing conditions. The frequency for Ailing is daily. The end condition is eating a meal.</li>
                    <li><strong>Poison</strong>: You can be poisoned via injury, ingestion, or inhalation. When poisoned, you make an opposed CON vs Potency check. If you fail this check you suffer the effects specific to the Poison.</li>
                    <li><strong>Sleep Deprivation</strong>: If you stay awake for 6 Shifts without a Long Rest, you gain the Exhausted and Ailing conditions. The interval for Ailing is per Shift. The end condition is a Long Rest.</li>
                </ul>
            </section>
        </section>
    );
};
