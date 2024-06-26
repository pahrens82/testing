import React from "react";
import { Link } from "react-router-dom";
import * as Dropdowns from "./dropdowns/";
import logo from "../assets/dragonlance_logo.png";


export const NavigationBar = () => {
    return (
        <nav className={"navbar navbar-expand-lg bg-body-tertiary"}>
            <a
                className={"navbar-brand"}
                href={"#"}
            >
                <img height={47} src={logo} alt={"Dragonlance logo"} />
            </a>
            <button
                className={"navbar-toggler"}
                type={"button"}
                data-bs-toggle={"collapse"}
                data-bs-target={"#navbarSupportedContent"}
                aria-controls={"navbarSupportedContent"}
                aria-expanded={"false"}
                aria-label={"Toggle navigation"}
            >
                <span className={"navbar-toggler-icon"}></span>
            </button>
            <div
                className={"collapse navbar-collapse"}
                id={"navbarSupportedContent"}
            >
                <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                    <li className={"nav-item"}>
                        <Link
                            className={"nav-link"}
                            to={"/schedule"}
                        >
                            Schedule
                        </Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link
                            className={"nav-link"}
                            to={"/characters"}
                        >
                            Character Creation
                        </Link>
                    </li>
                    <Dropdowns.Mechanics />
                    <Dropdowns.SpeciesDropdown />
                    <Dropdowns.Equipment />
                    <Dropdowns.Locations />
                    <Dropdowns.Characters />
                    {/* <li className={"nav-item"}>
                        <Link
                            className={"nav-link"}
                            to={"/glossary"}
                        >
                            Glossary
                        </Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
};
