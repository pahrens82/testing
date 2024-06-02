import React from "react";
import {Link} from "react-router-dom";
import {LOCATIONS} from "../../constants.jsx";

export const Locations = () => {
	return (
		<li className={"nav-item dropdown"}>
			<a
				className={"nav-link dropdown-toggle"}
				href={"#"}
				role={"button"}
				data-bs-toggle={"dropdown"}
				aria-expanded={"false"}
			>
				Locations
			</a>
			<ul className={"dropdown-menu"}>
				{LOCATIONS.map((location, index) => {
					return (
						<li key={location.name}>
							<Link
								className={"dropdown-item"}
								to={location.path()}
							>
								{location.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</li>
	);
}