import React from "react";
import { Link } from "react-router-dom";
import { SPECIES } from "../../constants";



export const SpeciesDropdown = () => {
    return (
        <li className={"nav-item dropdown"}>
            <a
                className={"nav-link dropdown-toggle"}
                href={"#"}
                role={"button"}
                data-bs-toggle={"dropdown"}
                aria-expanded={"false"}
            >
                Species
            </a>
            <ul className={"dropdown-menu"}>
                {SPECIES.map((specie, index) => {
                    return (
                        <li key={specie}>
                            <Link
                                className={"dropdown-item"}
                                to={`/species/${specie.toLowerCase()}`}
                            >
                                {specie}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </li>
    );
}