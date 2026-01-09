import { FOES } from "../../constants";


export const Foes = () => {
    return (
        <details className={"border rounded p-1"}>
            <summary className={"fw-bold"}>
                Foes
            </summary>
            {
                FOES.map((creature) => {
                    return (
                        <details
                            className={"border rounded p-1"}
                            key={creature.name.replace(" ", "-")}
                        >
                            <summary className={"fw-bold"}>
                                {creature.name}
                            </summary>
                            <ul className={"m-0 list-unstyled"}>
                                <li className={"small"}>Speed: {creature.movement}</li>
                                <li className={"small"}>Damage Bonus: {creature.damageBonus}</li>
                                <li className={"small"}>HP: {creature.hp}</li>
                                <li className={"small"}>WP: {creature.wp}</li>
                                <li className={"small"}>Skills: {creature.skills}</li>
                                <li className={"small"}>Armor: {creature.armor}</li>
                                <li className={"small"}>Weapons
                                    <ol>
                                        {creature.weapons.map((weapon) => {
                                            return <li className={"small"} key={creature + weapon}>{weapon}</li>
                                        })}
                                    </ol>
                                </li>
                                {
                                    creature?.abilities?.length ?
                                        <li className={"small"}>Abilities
                                            <ol>
                                                {creature.abilities.map((ability) => {
                                                    return <li className={"small"} key={creature.name + ability}>{ability}</li>
                                                })}
                                            </ol>
                                        </li>
                                        :
                                        null
                                }
                                {creature.livestock ?
                                    <>
                                        <li className={"small"}>Price: {creature.cost}</li>
                                        <li className={"small"}>Meat: {creature.meat}</li>
                                    </>
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
