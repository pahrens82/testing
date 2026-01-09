import { BIOMES } from "../../constants";


export const Biomes = (
    {
        selectedBiome,
        changeBiome,
    }
) => {
    return (
        <section className={"border rounded p-2 d-flex gap-2"}>
            <p className={"mb-0 h3"}>
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