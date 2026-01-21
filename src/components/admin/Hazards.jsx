export const Hazards = () => {
    return (
        <details className={"border rounded p-1 mt-2 bg-dark-subtle"}>
            <summary className={"fw-bold"}>
                Hazards
            </summary>
            <div className={"bg-white pe-3 small"}>
                <p className={"p-2 pb-0 mb-0"}>
                    There are several hazards your character will likely encounter
                    while adventuring. In general, hazards are occurrences that
                    inflict one or more conditions.
                </p>
                <ul>
                    <li><strong>Darkness</strong>: There are two levels of darkness: Dim Lighting and Total Darkness. In Dim Lighting you receive a Bane on rolls related to
                        vision (Perception, ranged attacks, etc.). In Total Darkness the same Bane applies, with the addition that any activity that would normally involve
                        vision can only be made after succeeding at a Perception check.</li>

                    <li><strong>Falling</strong>: Falling inflicts 1d6 damage per 10 feet fallen. Armor offers no protection against falling damage. A successful Acrobatics
                        check reduces the d6s to d4s.</li>

                    <li><strong>Fear</strong>: Fear is caused by exposure to magical effects, monsters, and various other sources. Fear is resisted via a Willpower check. If
                        you fail this check, your character gains the Scared condition. In addition you must roll on the Fear Table and deal with those consequences.</li>

                    <li><strong>Drowning</strong>: Drowning occurrs if you fail a Swimming check. Your character gains the Exhausted and Ailing conditions until rescued or
                        somehow catches their breath. The interval for Ailing depends on your armor and the environment.</li>

                    <li><strong>Temperature</strong>: You must make a Strength check every Shift during which your character is exposed to extreme temperatures. If you
                        fail this check, your character gains the Exhausted and Ailing conditions. Certain articles of clothing can help with this check. The interval for Ailing
                        is once per Shift, and is removed by spending a Short Rest at a comfortable temperature.</li>

                    <li><strong>Disease</strong>: Your character can be exposed to disease in a variety of ways. When exposed, you make an opposed CON vs Virulence check. If
                        you fail this check your character gains the Sickly and Ailing conditions. The interval depends on the Disease, and the end condition is succeeding at the
                        opposed check. Certain herbal concoctions can help with this check, as can assistance via a Medicine/Treat Disease check.</li>

                    <li><strong>Hunger</strong>: If your character goes for 3 days without eating, they gain the Dazed and Ailing conditions. The frequency for Ailing is daily.
                        The end condition is eating a meal.</li>

                    <li><strong>Poison</strong>: Your character can be poisoned via injury, ingestion, or inhalation. If your character becomes poisoned, you make an opposed CON
                        vs Potency check. If you fail this check your character suffers the effects specific to the Poison.</li>

                    <li><strong>Sleep Deprivation</strong>: If your character stays awake for 6 Shifts without a Long Rest, they gain the Exhausted and Ailing conditions. The
                        interval for Ailing is per Shift. The end condition is a Long Rest.</li>
                </ul>
            </div>
        </details>
    );
};
