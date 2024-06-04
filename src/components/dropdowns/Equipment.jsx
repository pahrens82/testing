import { GEAR_CATEGORIES } from "../../constants.jsx";
import { Link } from "react-router-dom";
import React from "react";

export const Equipment = () => {
    return (
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Equipment
            </a>
            <ul className="dropdown-menu">
                {GEAR_CATEGORIES.map((category, index) => {
                    return (
                        <li key={category}>
                            <Link
                                className="dropdown-item"
                                to={`/equipment/${category.toLowerCase().replace(/ /g, "_")}`}
                            >
                                {category}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}
