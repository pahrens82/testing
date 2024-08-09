import { Location } from "./classes/location.jsx";
import { Link } from "react-router-dom";

export const LINKS = {
    ability: {
        herbalism: <Link to={"/mechanics/abilities#herbalism"}>Herbalism</Link>,
    },
    attribute: <Link to={"/mechanics/attributes"}>attribute</Link>,
    attributes: <Link to={"/mechanics/attributes"}>attributes</Link>,
    condition: <Link to={"/mechanics/conditions"}>condition</Link>,
    conditions: <Link to={"/mechanics/health#conditions"}>conditions</Link>,
    disease: <Link to={"/mechanics/health#disease"}>disease</Link>,
    poison: <Link to={"/mechanics/health#poison"}>poison</Link>,
    push: <Link to={"/mechanics/general#push-your-luck"} > Push Your Luck</Link>,
    // skill: <Link to={"/mechanics/skills/"}>skill</Link>,
    skill: {
        acrobatics: <Link to={"/mechanics/skills#acrobatics"}>Acrobatics</Link>,
        alchemy: <Link to={"/mechanics/skills#alchemy"}>Alchemy</Link>,
        arcane: <Link to={"/mechanics/skills#arcane-casting"}>Arcane Casting</Link>,
        // bartering: <Link to={"/mechanics/skills#bartering"}>Bartering</Link>,
        beast: <Link to={"/mechanics/skills#beast-lore"}>Beast Lore</Link>,
        bluff: <Link to={"/mechanics/skills#bluff"}>Bluff</Link>,
        climbing: <Link to={"/mechanics/skills#climbing"}>Climbing</Link>,
        cooking: <Link to={"/mechanics/skills#cooking"}>Cooking</Link>,
        crafting: <Link to={"/mechanics/skills#crafting"}>Crafting</Link>,
        divine: <Link to={"/mechanics/skills#divine-casting"}>Divine Casting</Link>,
        dodge: <Link to={"/mechanics/skills#dodge"}>Dodge</Link>,
        herbalism: <Link to={"/mechanics/skills#herbalism"}>Herbalism</Link>,
        medicine: <Link to={"/mechanics/skills#medicine"}>Medicine</Link>,
        myths: <Link to={"/mechanics/skills#myths-and-legends"}>Myths and Legends</Link>,
        perception: <Link to={"/mechanics/skills#perception"}>Perception</Link>,
        performance: <Link to={"/mechanics/skills#performance"}>Performance</Link>,
        persuasion: <Link to={"/mechanics/skills#persuasion"}>Persuasion</Link>,
        riding: <Link to={"/mechanics/skills#riding"}>Riding</Link>,
        seamanship: <Link to={"/mechanics/skills#seamanship"}>Seamanship</Link>,
        sleight: <Link to={"/mechanics/skills#sleight-of-hand"}>Sleight Of Hand</Link>,
        stealth: <Link to={"/mechanics/skills#stealth"}>Stealth</Link>,
        survival: <Link to={"/mechanics/skills#survival"}>Survival</Link>,
        swimming: <Link to={"/mechanics/skills#swimming"}>Swimming</Link>,
        tinkering: <Link to={"/mechanics/skills#tinkering"}>Tinkering</Link>,
        tracking: <Link to={"/mechanics/skills#tracking"}>Tracking</Link>,
    },
    skills: <Link to={"/mechanics/skills"}>skills</Link>,
    mechanics: {
        combat: {
            sneakattack: <Link to={"/mechanics/combat#sneak-attack"}>Sneak Attack</Link>,
        }
    }
}

export const SPECIES = [
    "Humans",
    "Half-Elves",
    "Kender",
    "Dwarves",
    "Elves",
];

export const LOCATIONS = [
    new Location(
        {
            name: "Krynn",
            population: 12,
            description: "Its a planet",
        }
    ),
];






