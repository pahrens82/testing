import React from "react";
import { Link } from "react-router-dom";



export const Magic = () => {
    return (
        <li className={"nav-item dropdown"}>
            <a
                className={"nav-link dropdown-toggle"}
                href={"#"}
                role={"button"}
                data-bs-toggle={"dropdown"}
                aria-expanded={"false"}
            >
                Magic
            </a>
            <ul className={"dropdown-menu"}>
                <li>
                    <Link
                        className={"dropdown-item"}
                        to={`/magic/arcane`}
                    >
                        Arcane
                    </Link>
                </li>
                <li>
                    <Link
                        className={"dropdown-item"}
                        to={`/magic/divine`}
                    >
                        Divine
                    </Link>
                </li>
            </ul>
        </li>
    );
}