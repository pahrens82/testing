import { MONSTERS } from "../../constants"



export const Monsters = () => {
    return (
        <details className={"border rounded p-1"}>
            <summary className={"fw-bold"}>
                Monsters
            </summary>
            {MONSTERS.map((monster, index) => {
                console.log(monster)
                return (
                    <details
                        className={"border rounded px-3 py-2"}
                        key={monster.name.toLowerCase().replace(" ", "-")}
                    >
                        <summary>
                            {monster.name}
                        </summary>
                        <div className={"d-flex"}>
                            <ul className={"list-unstyled pe-4 mb-0"}>
                                <li className={"small"}>Ferocity: {monster.ferocity}</li>
                                <li className={"small"}>Movement: {monster.movement}</li>
                            </ul>
                            <ul className={"list-unstyled mb-0"}>
                                <li className={"small"}>Size: {monster.size}</li>
                                <li className={"small"}>HP: {monster.hp}</li>
                            </ul>
                        </div>
                        <ul className={"list-unstyled"}>
                            <li className={"small"}>Armor: {monster.armor}</li>

                            <li className={`small d-${monster.gear.length ? "block" : "none"}`}>Gear: {monster.gear}</li>
                            <li className={"small"}>Traits:
                                <ul>
                                    {monster.traits.map((trait) => {
                                        return <li className={"small"}>{trait}</li>
                                    })}
                                </ul>
                            </li>
                            <li className={"small"}>Attacks:
                                <ol>
                                    {monster.attacks.map((attack) => {
                                        return <li className={"small"}>{attack}</li>
                                    })}
                                </ol>
                            </li>
                        </ul>
                    </details>
                )
            })}
        </details>
    );
};
