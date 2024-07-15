import { NavigationBar } from "./components/NavigationBar.jsx";
import { Outlet } from "react-router-dom";
import * as bootstrap from "bootstrap";
import './App.css'

export const App = () => {
    const CHANBGE_LOG = [
        {
            date: "7/9/2024",
            changes: [
                "Removed the Barter skill.",
                "Updated the text for Opposed Rolls.",
                "Added new session to schedue.",
                "Changed order sessions are listed in the schedule.",
                "Changed the Medicine skill's Save A Life task name to First Aid.",
            ]
        },
        {
            date: "7/14/2024",
            changes: [
                "Added PCs page for GM use.",
                "Clarified tasks of the Medicine skill.",
                "Updates styling of the Schedule component.",
                "Added backstory questions.",
                "Added a link to the Discord channel to the Navbar component.",
                "Clarifies some language for spells.",
            ]
        }
    ];

    return (
        <>
            <h1>Change Log</h1>
            <ul>
                {CHANBGE_LOG.map((log, index) => {
                    return (
                        <li>{log.date}: <ol>{log.changes.map((change, indexx) => { return (<li>{change}</li>)})}</ol></li>
                    )
                })}
            </ul>
        </>
    )
}
