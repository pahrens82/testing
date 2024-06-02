import {LINKS} from "../../constants.jsx";

export const Attributes = () => {
	return (
		<div className={"contents"}>
			<h1>Attributes</h1>
			<p>Attribute represent the general physical and mental qualities of your character.</p>
			<ol className={"list-unstyled"}>
				<li>Strength (STR): Raw muscle power. Determines carrying capacity and boosts damage with STR-based weapons.</li>
				<li>Dexterity (DEX): Body control, speed, and fine motor skills. Useful for thief-type skills and boosts damage with DEX-based weapons.</li>
				<li>Constitution (CON): Physical fitness and resilience. Determines starting HP, and is used for resisting poison, disease, and dying.</li>
				<li>Intelligence (INT): Mental acuity, intellect, and reasoning skills. Related to many skills.</li>
				<li>Willpower (WIL): Self-discipline and focus. Determines starting WP, and is used for resisting Fear and certain magicks.</li>
				<li>Charisma (CHA): Force of personality and empathy. Used for social skills.</li>
			</ol>
			<p>Attributes are generated as follows:</p>
			<ul>
				<li>Roll 4d6, drop the lowest, and add the remaining three dice together.</li>
				<li>Assign that score to one of your attributes.</li>
                <li>Do the above two steps for each of your remaining five attributes.</li>
                <li>You must assign each score as you roll them.</li>
                <li>Once you have assigned all six attributes, you may swap two of them.</li>
                <li>You can never have a score greater than 18 in any attribute.</li>
                <li>Attributes rarely change after character creation.</li>
			</ul>
		</div>
	)
}
