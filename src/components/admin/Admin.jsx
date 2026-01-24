import {
    useEffect,
    useState,
} from "react";

import { Biomes } from "./Biomes";
import { Calendar } from "./Calendar";
import { Events } from "./Events";
import { Foes } from "./Foes";
import { Notes } from "./Notes";
import { Hunting } from "./Hunting";
import { Dungeons } from "./Dungeons";
import { Monsters } from "./Monsters";
import { NPCs } from "./NPCs";
import { Fear } from "./Fear";
import { InanimateObjectProperties } from "./InanimateObjectProperties";
import { Hazards } from "./Hazards";
import { CombatManeuvers } from "./CombatManeuvers";
import { CriticalHitsAndMisses } from "./CriticalHitsAndMisses";
import { Draconians } from "./Draconians";

import { STORAGE_KEYS } from "../../constants";



export const Admin = () => {
    let [selectedBiome, setSelectedBiome] = useState(
        localStorage.getItem(STORAGE_KEYS.selectedBiome) || "village"
    );

    useEffect(
        () => {
            localStorage.setItem(
                STORAGE_KEYS.selectedBiome,
                selectedBiome,
            );
        },
        [selectedBiome]
    );

    const changeBiome = (event) => {
        setSelectedBiome(
            event.currentTarget.value
        );
    };

    return (
        <section id={"admin"} className={"container-fluid"}>
            <section className={"row"}>
                <section className={"col-4"}>
                    <Biomes selectedBiome={selectedBiome} changeBiome={changeBiome} />
                    <Calendar />
                    <Events selectedBiome={selectedBiome} />
                    <Hunting selectedBiome={selectedBiome} />
                    <Hazards />
                    <CombatManeuvers />
                    <CriticalHitsAndMisses />
                    <Fear />
                    <InanimateObjectProperties />
                </section>
                <section className={"col-4"}>
                    <Dungeons />
                    <Foes />
                    <Draconians />
                    <Monsters />
                    <NPCs />                    
                </section>
                <section className={"col-4"}>
                    <Notes />
                </section>
            </section>
        </section>
    );
};
