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


// const router = createBrowserRouter(
//     <HashRouter>
//         <Routes>
//             <Route
//                 path={"/"}
//                 element={<App />}
//                 errorElement={<Error />}
//             />
//             <Route
//                 path={"/welcome"}
//                 element={<Welcome />}
//             />
//         </Routes>
//     </HashRouter>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <NavigationBar />
            <Routes>
                <Route
                    path={"/"}
                    element={<App />}
                    errorElement={<Error />}
                />
                <Route
                    path={"/welcome"}
                    element={<Welcome />}
                />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
)
