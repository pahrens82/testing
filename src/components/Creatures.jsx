

export const Creatures = ({title, creatures}) => {
    return (
        <section className={"container"}>
            <section className={"row"}>
                <section className={"col"}>
                    <h1 className={"mt-3"}>
                        {title}
                    </h1>
                </section>
            </section>
            <section className={"row"}>
                <section className={"col"}>
                    {creatures.map((creature, index) => {
                        return (
                            <div
                                key={creature.name.replace(" ", "-")}
                                className={"card w-auto p-2 my-2"}
                            >
                                <details>
                                    <summary className={"fw-bold"}>
                                        {creature.name}
                                    </summary>
                                    <ul className={"m-0 list-unstyled"}>
                                        <li>Speed: {creature.movement}</li>
                                        <li>Damage Bonus: {creature.damageBonus}</li>
                                        <li>HP: {creature.hp}</li>
                                        <li>WP: {creature.wp}</li>
                                        <li>Skills: {creature.skills}</li>
                                        <li>Armor: {creature.armor}</li>
                                        <li>Weapons
                                            <ol>
                                                {creature.weapons.map((weapon, index) => {
                                                    return <li key={weapon}>{weapon}</li>
                                                })}
                                            </ol>
                                        </li>
                                        {
                                            creature?.abilities?.length ?
                                                <li>Abilities
                                                    <ol>
                                                        {creature.abilities.map((ability, index) => {
                                                            return <li>{ability}</li>
                                                        })}
                                                    </ol>
                                                </li>
                                                :
                                                null
                                        }
                                        {creature.livestock ?
                                            <>
                                                <li>Price: {creature.cost}</li>
                                                <li>Meat: {creature.meat}</li>
                                            </>
                                            :
                                            null
                                        }
                                    </ul>
                                </details>

                            </div>
                        )
                    })}
                </section>
            </section>
        </section>
    )
}