import { FOES } from "../../constants";


export const Foes = () => {
    return (
        <details className={"border rounded p-1 mt-2 bg-dark-subtle"}>
            <summary className={"fw-bold"}>
                Foes
            </summary>
            {
                FOES.map((creature) => {
                    return (
                        <details
                            className={"border rounded ps-2 py-1 bg-light"}
                            key={creature.name.replace(" ", "-")}
                        >
                            <summary>
                                {creature.name}
                            </summary>
                            <ul className={"small m-0 list-unstyled"}>
                                <li>
                                    Speed: {creature.movement}
                                </li>
                                <li>
                                    Damage Bonus: {creature.damageBonus}
                                </li>
                                <li>
                                    HP: {creature.hp}
                                </li>
                                <li>
                                    WP: {creature.wp}
                                </li>
                                <li>
                                    Skills: {creature.skills}
                                </li>
                                <li>
                                    Armor: {creature.armor}
                                </li>
                                <li>
                                    Weapons
                                    <ol>
                                        {creature.weapons.map((weapon) => {
                                            return (
                                                <li key={creature + weapon}>
                                                    {weapon}
                                                </li>
                                            );
                                        })}
                                    </ol>
                                </li>
                                {
                                    creature?.abilities?.length ?
                                        <li>Abilities
                                            <ol>
                                                {creature.abilities.map((ability) => {
                                                    return (
                                                        <li key={creature.name + ability}>
                                                            {ability}
                                                        </li>
                                                    );
                                                })}
                                            </ol>
                                        </li>
                                        :
                                        null
                                }
                            </ul>
                        </details>
                    )
                })
            }
        </details>
    );
};
