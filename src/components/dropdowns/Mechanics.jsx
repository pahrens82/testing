import {Link} from "react-router-dom";
import React from "react";

export const Mechanics = () => {
	const MECHANICS = [
		"General",
		// "Character Creation",
		// "Attributes",
		"Species",
		"Professions",
		"Skills",
		// "Abilities",
		// "Gear",
		// "Magic",
		"Combat",
		"Health",
        "Conditions",
	];
	return (
		<li className={"nav-item dropdown"}>
			<a
				className={"nav-link dropdown-toggle"}
				href={"#"}
				role={"button"}
				data-bs-toggle={"dropdown"}
				aria-expanded={"false"}
			>
				Game Mechanics
			</a>
			<ul className={"dropdown-menu"}>
				{MECHANICS.map((mechanic, index) => {
					return (
						<Link
							key={mechanic.toLowerCase()}
							className={"nav-link ms-3 ms-md-0"}
							to={`/mechanics/${mechanic.toLowerCase().replace(" ", "_")}`}
						>
							{mechanic}
						</Link>
					)
				})}
			</ul>
		</li>
	);
}
