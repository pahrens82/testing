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
                            className={"border rounded ps-2 py-1 bg-white"}
                            key={creature.name.replace(" ", "-")}
                        >
                            <summary className={"fst-italic fw-bold"}>
                                {creature.name}
                            </summary>
                            <ul className={"small m-0 list-unstyled"}>
                                <li>
                                    <strong>Speed:</strong> {creature.movement}
                                </li>
                                <li>
                                    <strong>Damage Bonus:</strong> {creature.damageBonus}
                                </li>
                                <li>
                                    <strong>HP:</strong> {creature.hp}
                                </li>
                                <li>
                                    <strong>WP:</strong> {creature.wp}
                                </li>
                                <li>
                                    <strong>Skills:</strong> {creature.skills}
                                </li>
                                <li>
                                    <strong>Armor:</strong> {creature.armor}
                                </li>
                                <li>
                                    <strong>Weapons</strong>
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
                                        <li><strong>Abilities</strong>
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
