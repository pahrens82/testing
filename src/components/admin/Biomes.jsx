import { BIOMES } from "../../constants";


export const Biomes = (
    {
        selectedBiome,
        changeBiome,
    }
) => {
    return (
        <section className={"border rounded p-1 mt-2 d-flex gap-2 bg-dark-subtle"}>
            <p className={"mb-0 h4"}>
                Biomes
            </p>
            <select
                className={"form-select form-select-sm"}
                value={selectedBiome}
                onChange={changeBiome}
            >
                {Object.keys(BIOMES).map((name) => {
                    return <option key={name} value={name}>{BIOMES[name]}</option>
                })}
            </select>
        </section>
    )
};