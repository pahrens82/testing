import {Link} from "react-router-dom";
import {LINKS} from "../../constants.jsx";


export const CharacterCreation = () => {
	return (
		<section className={"contents"}>
			<p className={"h2"}>
				Character Creation
			</p>
			<section>
				<strong>Select a Species</strong>
				<ul>
					<li>Settled Human
						<ul>
							<li>Can be a wizard</li>
							<li>Speed 6</li>
							<li><i>Adaptive</i>: WP Cost: 3. You may activate this ability to use a skill different from
								the norm for a check. You must be able to justify how the different skill applies; the
								GM has the final say.
							</li>
						</ul>
					</li>
					<li>Nomadic Human
						<ul>
							<li>Can be a wizard</li>
							<li>Speed 6</li>
							<li><i>Pathfinder</i>: WP Cost: 2. You may activate this ability to automatically succeed
								at <Link to={"/mechanics/skills#survival"}>Survival</Link> checks to orient yourself in
								the wilderness.
							</li>
						</ul>
					</li>
					<li>Half-Elf
						<ul>
							<li>Can be a wizard</li>
							<li>Speed 6</li>
							<li><i>Adaptive</i>: WP Cost: 3. You may activate this ability to use a skill different from
								the norm for a check. You must be able to justify how the different skill applies; the
								GM has the final say.
							</li>
						</ul>
					</li>
					<li>Elven Exile
						<ul>
							<li>Can be a wizard</li>
							<li>Speed 6</li>
							<li><i>Meditative</i>: WP Cost: -. You meditate deeply for four hours a day rather than
								sleeping for 8. You gain all the benefits of a <Link
									to={"/mechanics/general#long-rest"}>Long Rest</Link> in half the time. However, you
								are completely unresponsive during your meditation.
							</li>
						</ul>
					</li>
					<li>Kender
						<ul>
							<li>Cannot be a wizard</li>
							<li>Speed 4</li>
							<li><i>Fearless</i>: WP Cost: 2. You may activate this ability to automatically succeed at
								a <Link to={"/mechanics/general#fear"}>Fear</Link> test.
							</li>
						</ul>
					</li>
					<li>Hill Dwarf
						<ul>
							<li>Cannot be a wizard</li>
							<li>Speed 4</li>
							<li><i>Resilient</i>: WP Cost: -. You gain a Boon on tests
								against {LINKS.poison} and {LINKS.disease}.
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<section>
				<strong>Generating Attributes</strong>
				<ul>
					<li>Your attributes are Strength, Dexterity, Constitution, Intelligence, Willpower, and
						Charisma.
						<ul>
							<li><strong>Strength</strong> is important because it determines how much your character can
								carry, which weapons you can wield, influences how much damage you deal with
								Strength-based
								weapons, influences how effectively you parry attacks, and determines your Climbing and
								Swimming skills.
							</li>
							<li><strong>Dexterity</strong> is important because it influences how effectively you <Link
								to={"/mechanics/combat#parry"}>parry</Link> or <Link
								to={"/mechanics/combat#dodge"}>dodge</Link> attacks. It is connected with several
								skills,
								and influences how much damage you deal with Dexterity-based weapons.
							</li>
							<li><strong>Constitution</strong> is important because it determines how many HP you start
								with,
								and is used for resisting poison and disease.
							</li>
							<li><strong>Intelligence</strong> is important because it is determines the starting values
								for
								half the skills.
							</li>
							<li><strong>Willpower</strong> is important because it determines how many WP you start
								with. It
								is also used for resisting certain magicks.
							</li>
							<li><strong>Charisma</strong> is important because it influences your social skills and
								determines initials reactions to your character.
							</li>
						</ul>
					</li>
				</ul>
				<p>For each of the attributes, in the order listed above, roll 4d6 and drop the lowest result. The sum
					of the remaining three dice is the score for that attribute.
				</p>
				<p>Once you have generated scores for each attribute, you may swap the places of two of your
					scores. For example, you could swap your Intelligence score for your Strength score.
				</p>
				<p>Please provide me with your attributes at this point so I can record them.</p>
				<p>Please note that your attributes will NOT change after character creation.</p>
			</section>
			<section>
				<strong>Select a Profession</strong>
				<ul>
					<li>Fighter</li>
					<li>Berserker</li>
					<li>Ranger</li>
					<li>Hunter</li>
					<li>Thief</li>
					<li>Bard</li>
					<li>Mage</li>
					<li>Cleric<sup>*</sup></li>
				</ul>
			</section>
			<section>
				<strong>Create a Backstory</strong>
				<p>With a species and profession selected, and attributes determined, you probably have some idea of
					what your character is like. Time to create a backstory for your character!
				</p>
				<p>Here are some questions to answer in your backstory (as your character):</p>
				<ol>
					<li>Are your parents still around? If so, how many? If not, why not?</li>
					<li>Do you have siblings? If so, how many?</li>
					<li>Do you have a mentor?</li>
					<li>What do you do for fun?</li>
				</ol>
			</section>
			<section>
				<strong>Determine Skills</strong>
			</section>
			<section>
				<strong>Ephemera</strong>
				<p>Pick a name, appearance, personality. Round out your character.</p>
			</section>
			<section>
				<strong>Select Spells (if you are a mage)</strong>
			</section>
		</section>
	)
}
