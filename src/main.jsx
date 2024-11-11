import React from 'react'

import ReactDOM from 'react-dom/client'

import {
    HashRouter,
    Route,
    Routes,
} from "react-router-dom";


import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { App } from './App.jsx'
import { Schedule } from "./components/Schedule.jsx";

import { Character } from "./components/characters/Character.jsx";

import {
    LOCATIONS,
    SPECIES,
} from "./constants.jsx";

import {
    ALCHEMICAL,
    AMMUNITION,
    ANIMALS,
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
import { CharacterCreation } from './components/CharacterCreation.jsx';
import { Characters } from './components/dropdowns/Characters.jsx';
import { PlayerCharacters } from './components/PlayerCharacters.jsx';
import { PlayerCharacter } from './components/PlayerCharacter.jsx';
import { Foes } from './components/Foes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <HashRouter>
            <NavigationBar />
            <main>
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
                        path={"/mechanics/character_creation"}
                        element={<CharacterCreation />}
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
                        path={"/magic/arcane"}
                        element={<Mechanic.Magic type={"Arcane"} />}
                    />
                    <Route
                        path={"/magic/divine"}
                        element={<Mechanic.Magic type={"Divine"} />}
                    />
                    <Route
                        path={"/pcs/nate"}
                        element={<PlayerCharacter player={"Nate"} />}
                    />
                    <Route
                        path={"/pcs/patrick"}
                        element={<PlayerCharacter player={"Patrick"} />}
                    />
                    <Route
                        path={"/pcs/mike"}
                        element={<PlayerCharacter player={"Mike"} />}
                    />
                    <Route
                        path={"/pcs/chris"}
                        element={<PlayerCharacter player={"Chris"} />}
                    />
                    <Route
                        path={"/pcs/dowell"}
                        element={<PlayerCharacter player={"Dowell"} />}
                    />
                    <Route
                        path={"/pcs/mitch"}
                        element={<PlayerCharacter player={"Mitch"} />}
                    />
                    <Route
                        path={"/characters"}
                        element={<Characters />}
                    />
                    <Route
                        path={"/pcs/*"}
                        element={<PlayerCharacters />}
                    />
                    <Route
                        path={"/foes"}
                        element={<Foes />}
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
                        path={"/equipment/ammunition"}
                        element={<Equipment.Weapons equipment={AMMUNITION} label={"Ammunition"} />}
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
                    <Route
                        path={"/equipment/animals"}
                        element={<Equipment.General equipment={ANIMALS} label={"Animals"} />}
                    />
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
                </Routes>
            </main>
        </HashRouter>
    // </React.StrictMode>,
)
