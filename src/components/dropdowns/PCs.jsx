import React from "react";
import { Link } from "react-router-dom";

import { CHARACTERS } from "../PlayerCharacters";


export const PCs = () => {
    return (
        <li className={"nav-item dropdown"}>
            <a
                className={"nav-link dropdown-toggle"}
                href={"#"}
                role={"button"}
                data-bs-toggle={"dropdown"}
                aria-expanded={"false"}
            >
                PCs
            </a>
            <ul className={"dropdown-menu"}>
                {Object.keys(CHARACTERS).map((character, index) => {
                    return (
                        <li key={character}>
                            <Link
                                className={"dropdown-item"}
                                to={`/pcs/${character.toLowerCase()}`}
                            >
                                {character}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </li>
    );
}