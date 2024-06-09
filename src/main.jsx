import React from 'react'

import ReactDOM from 'react-dom/client'

import {
    HashRouter,
    Route,
    Routes,
} from "react-router-dom";

import { App } from './App.jsx'
import { Schedule } from "./components/Schedule.jsx";
import { Glossary } from "./components/Glossary.jsx";

import { Character } from "./components/characters/Character.jsx";

import {
    CHARACTERS,
    LOCATIONS,
    SPECIES,
} from "./constants.jsx";

import {
    ALCHEMICAL,
    ARMOR,
    CLOTHES,
    CONTAINERS,
    HERBAL,
    HUNTING_AND_FISHING,
    INSTRUMENTS,
    LIGHT_SOURCES,
    LODGING,
    MEDICINAL,
    MELEE_WEAPONS,
    MISCELLANEOUS,
    RANGED_WEAPONS,
    SCHOLARLY_ITEMS,
    SERVICES,
    SHIELDS,
    TOOLS,
    TRANSPORTATION,
} from "./gear.jsx";

import * as Mechanic from "./components/mechanics";
import * as Equipment from "./components/equipment";

import { Error } from "./components/Error.jsx";
import { Location } from "./components/locations/Location.jsx";
import { NavigationBar } from './components/NavigationBar.jsx';
import { Species } from './components/Species.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <NavigationBar />
            <main className={"container"}>
                <Routes>
                    <Route
                        path={"/"}
                        element={<App />}
                        errorElement={<Error />}
                    />
                    <Route
                        path={"/schedule"}
                        element={<Schedule />}
                    />
                    <Route
                        path={"/glossary"}
                        element={<Glossary />}
                    />
                    <Route
                        path={"/mechanics/general"}
                        element={<Mechanic.General />}
                    />
                    <Route
                        path={"/mechanics/resting"}
                        element={<Mechanic.Resting />}
                    />
                    <Route
                        path={"/mechanics/attributes"}
                        element={<Mechanic.Attributes />}
                    />
                    {/* <Route
                        path={"/mechanics/species"}
                        element={<Mechanic.Species />}
                    /> */}
                    <Route
                        path={"/mechanics/professions"}
                        element={<Mechanic.Professions />}
                    />
                    <Route
                        path={"/mechanics/skills"}
                        element={<Mechanic.Skills />}
                    />
                    <Route
                        path={"/mechanics/abilities"}
                        element={<Mechanic.Abilities />}
                    />
                    <Route
                        path={"/mechanics/gear"}
                        element={<Mechanic.Gear />}
                    />
                    <Route
                        path={"/mechanics/magic"}
                        element={<Mechanic.Magic />}
                    />
                    <Route
                        path={"/mechanics/combat"}
                        element={<Mechanic.Combat />}
                    />
                    <Route
                        path={"/mechanics/health"}
                        element={<Mechanic.Health />}
                    />
                    <Route
                        path={"/mechanics/conditions"}
                        element={<Mechanic.Conditions />}
                    />
                    <Route
                        path={"/mechanics/travel"}
                        element={<Mechanic.Travel />}
                    />
                    <Route
                        path={"/equipment/melee_weapons"}
                        element={<Equipment.Weapons equipment={MELEE_WEAPONS} label={"Melee Weapons"} />}
                    />
                    <Route
                        path={"/equipment/ranged_weapons"}
                        element={<Equipment.Weapons equipment={RANGED_WEAPONS} label={"Ranged Weapons"} />}
                    />
                    <Route
                        path={"/equipment/shields"}
                        element={<Equipment.Weapons equipment={SHIELDS} label={"Shields"} />}
                    />
                    <Route
                        path={"/equipment/armor"}
                        element={<Equipment.Armor equipment={ARMOR} label={"Armor"} />}
                    />
                    <Route
                        path={"/equipment/clothes"}
                        element={<Equipment.General equipment={CLOTHES} label={"Clothes"} />}
                    />
                    <Route
                        path={"/equipment/miscellaneous"}
                        element={<Equipment.General equipment={MISCELLANEOUS} label={"Miscellaneous"} />}
                    />
                    <Route
                        path={"/equipment/hunting_and_fishing"}
                        element={<Equipment.General equipment={HUNTING_AND_FISHING} label={"Hunting and Fishing"} />}
                    />
                    <Route
                        path={"/equipment/light_sources"}
                        element={<Equipment.General equipment={LIGHT_SOURCES} label={"Light Sources"} />}
                    />
                    <Route
                        path={"/equipment/tools"}
                        element={<Equipment.General equipment={TOOLS} label={"Tools"} />}
                    />
                    <Route
                        path={"/equipment/lodging"}
                        element={<Equipment.General equipment={LODGING} label={"Lodging"} />}
                    />
                    <Route
                        path={"/equipment/scholarly_items"}
                        element={<Equipment.General equipment={SCHOLARLY_ITEMS} label={"Scholarly Items"} />}
                    />
                    <Route
                        path={"/equipment/musical_instruments"}
                        element={<Equipment.General equipment={INSTRUMENTS} label={"Musical Instruments"} />}
                    />
                    <Route
                        path={"/equipment/transportation"}
                        element={<Equipment.General equipment={TRANSPORTATION} label={"Transportation"} />}
                    />
                    <Route
                        path={"/equipment/containers"}
                        element={<Equipment.General equipment={CONTAINERS} label={"Containers"} />}
                    />
                    <Route
                        path={"/equipment/services"}
                        element={<Equipment.General equipment={SERVICES} label={"Services"} />}
                    />
                    <Route
                        path={"/equipment/medicinal_products"}
                        element={<Equipment.General equipment={MEDICINAL} label={"Medical Supplies"} />}
                    />
                    <Route
                        path={"/equipment/herbal_products"}
                        element={<Equipment.General equipment={HERBAL} label={"Herbal Products"} />}
                    />
                    <Route
                        path={"/equipment/alchemical_products"}
                        element={<Equipment.General equipment={ALCHEMICAL} label={"Alchemical Products"} />}
                    />
                    {/* <Route
                        path={"/equipment/animals"}
                        element={<Equipment.MeleeWeapons />}
                    /> */}
                    {SPECIES.map((specie, index) => {
                        return (
                            <Route
                                key={specie}
                                path={`/species/${specie.toLowerCase()}`}
                                element={<Species type={specie} />}
                            />
                        )
                    })}
                    {LOCATIONS.map((location, index) => {
                        return (
                            <Route
                                key={location.name}
                                path={location.path()}
                                element={<Location location={location} />}
                            />
                        )
                    })}
                    {CHARACTERS.map((character, index) => {
                        return (
                            <Route
                                key={character.name}
                                path={character.path()}
                                element={<Character character={character} />}
                            />
                        )
                    })}
                </Routes>
            </main>
        </HashRouter>
    </React.StrictMode>,
)
