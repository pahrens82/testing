import {CHARACTERS} from "../../constants.jsx";
import {Link} from "react-router-dom";
import React from "react";

export const Characters = () => {
	return (
		<li className="nav-item dropdown">
			<a
				className="nav-link dropdown-toggle"
				href="#"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Characters
			</a>
			<ul className="dropdown-menu">
				{CHARACTERS.map((character, index) => {
					return (
						<li key={character.name}>
							<Link
								className="dropdown-item"
								to={character.path()}
							>
								{character.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</li>
	)
}
