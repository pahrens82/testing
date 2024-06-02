import React from 'react'

import ReactDOM from 'react-dom/client'

import {
    createRoutesFromElements,
    HashRouter,
    createBrowserRouter,
    Route,
    Routes,
    RouterProvider,
} from "react-router-dom";

import { App } from './App.jsx'
import { Welcome } from "./components/Welcome.jsx";
import { Schedule } from "./components/Schedule.jsx";
import { Glossary } from "./components/Glossary.jsx";

import { Mechanics } from "./components/mechanics/Mechanics.jsx";
import { Locations } from "./components/locations/Locations.jsx";
import { Characters } from "./components/characters/Characters.jsx";
import { Character } from "./components/characters/Character.jsx";

import {
    CHARACTERS,
    LOCATIONS,
} from "./constants.jsx";

import * as Mechanic from "./components/mechanics";

import { Error } from "./components/Error.jsx";
import { Location } from "./components/locations/Location.jsx";
import { NavigationBar } from './components/NavigationBar.jsx';


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
                        path={"/mechanics/character_creation"}
                        element={<Mechanic.CharacterCreation />}
                    />
                    <Route
                        path={"/mechanics/attributes"}
                        element={<Mechanic.Attributes />}
                    />
                    <Route
                        path={"/mechanics/species"}
                        element={<Mechanic.Species />}
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
