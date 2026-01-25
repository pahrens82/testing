import './App.css'


export const App = () => {
    const CHANGE_LOG = [
        {
            date: "01/24/2026",
            changes: [
                "Updates the schedule.",
                "Updates the weapon carrying rules.",
                "Adds a page where items can be searched.",
                "Makes spider web count more reasonable.",
            ]
        },
        {
            date: "01/21/2026",
            changes: [
                "Corrects the text of the Find Weak Spot combat maneuver.",
                "Corrects the text of the Raise Spirits ability.",
                "Adds item availability color coding to most equipment tables.",
            ]
        },
        {
            date: "01/19/2026",
            changes: [
                "Adds Backstabbing to the general ability list.",
                "Corrects various typos.",
                "Corrects the Lightning Fast ability to correspond to card-based initiative.",
                "Changes the Raise Spirits ability to be comparable to Battle Cry.",
            ]
        },
        {
            date: "01/18/2026",
            changes: [
                "Adds Find Weak Spot to combat maneuvers.",
                "Adds Topple to combat maneuvers.",
                "Clarifies rules around Pushing.",
            ]
        },
        {
            date: "01/17/2026",
            changes: [
                "Adds Shoving to combat maneuvers.",
                "Adds ranged attack fumbles.",
                "Removes charging from combat maneuvers.",
            ]
        },
        {
            date: "01/09/2026",
            changes: [
                "Adds Escape Entanglement to the list of Combat Actions.",
                "Adds fun poison names for fun.",
            ]
        },
        {
            date: "12/18/2025",
            changes: [
                "Updated the schedule.",
                "Updated the descriptions of the Cooking, Survival, and Tinkering skills.",
                "Adds an entry under Game Mechanics for Travel.",
                "Updates blanket pricing and description.",
                "Updates warming sphere description.",
                "Updates the whistle item description",
                "Adds a metal whistle item.",
                "Revamps the Animals page.",
            ]
        },
        {
            date: "10/26/2025",
            changes: [
                "Various minor additions and corrections.",
            ]
        },
        {
            date: "1/13/2025",
            changes: [
                "Clarifies some of the death and dying rules.",
                "Clarifies the Persuasion and Medicine skill descriptions.",
            ]
        },
        {
            date: "1/12/2025",
            changes: [
                "Refactors the schedule list.",
            ]
        },
        {
            date: "1/5/2025",
            changes: [
                "Adds additional alchemical items.",
            ]
        },
        {
            date: "11/11/2024",
            changes: [
                "Expands on the animals listings.",
            ]
        },
        {
            date: "11/10/2024",
            changes: [
                "Corrects how skill improvements are calculated.",
                "Changes the common PCs page to a navbar dropdown.",
                "Moves Character Creation to the Game Mechanics dropdown.",
                "Moves Species to the Game Mechanics dropdown.",
                "Moves Magic to the navbar for easier access.",
                "Expands on the magic/casting system.",
            ]
        },
        {
            date: "11/9/2024",
            changes: [
                "Adds trail rations under Miscellaneous.",
                "Updates the bulk of a backpack.",
                "Adds a handful of new items to existing categories.",
                "Adds animals.",
            ]
        },
        {
            date: "10/15/2024",
            changes: [
                "Adds some new items",
                "Changes some item prices",
                "Changes some item descriptions",
            ]
        },
        {
            date: "10/9/2024",
            changes: [
                "Adds a missing key.",
                "Fixes the dropdowns which had stopped working for some reason.",
                "Updates arcane casting mechanics.",
                "Updates armor listings.",
                "Updates to various item prices",
                "Adds verbose item pricing",
            ]
        },
        {
            date: "9/9/2024",
            changes: [
                "Updated slings to require 2 hands for use, but they are still Tiny items.",
                "Corrected skills list on PC page so Arcane and Divine Casting should be calculated correctly.",
                "Updates PC skill improvements from previous session.",
                "Clarifies Sneak Attacks.",
                "Changes Initiative instructions to the card-based system",
                "Updates critical hit effects.",
                "Updates text for Disarming.",
            ]
        },
        {
            date: "9/6/2024",
            changes: [
                "Updates to the PCs page.",
                "Makes the skills list consistent.",
            ]
        },
        {
            date: "8/19/2024",
            changes: [
                "Adds the PCs page link to the navbar.",
                "Corrects the Swimming skill to be based off STR instead of DEX.",
                "Adds start times to the schedule with 11 AM as the default.",
            ]
        },
        {
            date: "8/9/2024",
            changes: [
                "Corrected a typo.",
                "Removed the Locations dropdown",
                "Added mechanics for spell casting.",
                "Clarified critical hits effects.",
                "Clarified free action frequency.",
                "Reveals Elves in the Species dropdown, which I don't remember hiding.",
                "Adds carrying capacity rules under General.",
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
                "Updates weapon attack critical hit effects.",
            ]
        },
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
        
    ];

    return (
        <section className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col"}>
                    <h1>Change Log</h1>
                    <ul>
                        {CHANGE_LOG.map((log, index) => {
                            return (
                                <li key={index}>{log.date}: <ol>{log.changes.map((change, indexx) => { return (<li key={change}>{change}</li>) })}</ol></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}
