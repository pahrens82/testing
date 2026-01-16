import { MONSTERS } from "../../constants"



export const Monsters = () => {
    return (
        <details className={"border rounded p-1 mt-2 bg-dark-subtle"}>
            <summary className={"fw-bold"}>
                Monsters
            </summary>
            {MONSTERS.map((monster) => {
                let name = monster.name.toLowerCase().replace(" ", "-");

                return (
                    <details
                        className={"border rounded ps-2 py-1 bg-light"}
                        key={name}
                    >
                        <summary>
                            {name}
                        </summary>
                        <div className={"d-flex small"}>
                            <ul className={"list-unstyled pe-4 mb-0"}>
                                <li>
                                    Ferocity: {monster.ferocity}
                                </li>
                                <li>
                                    Movement: {monster.movement}
                                </li>
                            </ul>
                            <ul className={"list-unstyled mb-0"}>
                                <li>
                                    Size: {monster.size}
                                </li>
                                <li>
                                    HP: {monster.hp}
                                </li>
                            </ul>
                        </div>
                        <ul className={"list-unstyled small"}>
                            <li>
                                Armor: {monster.armor}
                            </li>

                            <li className={`d-${monster.gear.length ? "block" : "none"}`}>
                                Gear: {monster.gear}
                            </li>
                            <li>Traits:
                                <ul>
                                    {monster.traits.map((trait) => {
                                        return (
                                            <li
                                                className={"pe-3"}
                                                key={`${name}-${trait.toLowerCase().replace(" ", "-")}`}
                                            >
                                                {trait}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                            <li><hr className={"my-2"} /></li>
                            <li>Attacks:
                                <ol>
                                    {monster.attacks.map((attack) => {
                                        return (
                                            <li
                                                className={"pe-3 mb-1"}
                                                key={`${name}-${attack.toLowerCase().replace(" ", "-")}`}
                                            >
                                                {attack}
                                            </li>
                                        )
                                    })}
                                </ol>
                            </li>
                            <li className={"px-3 fst-italic"}>
                                {monster.description}
                            </li>
                        </ul>
                    </details>
                )
            })}
        </details>
    );
};
