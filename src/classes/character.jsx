export class Character {
	constructor(
		{
			age,
			attributes = {
				strength: 12,
				dexterity: 12,
				constitution: 12,
				intelligence: 12,
				willpower: 12,
				charisma: 12,
			},
			description,
			gear,
			location,
			magic,
			name,
			relationships,
			skills,
		}
	) {
		this.age = age;
		this.attributes = attributes;
		this.description = description;
		this.gear = gear;
		this.location = location;
		this.magic = magic;
		this.name = name;
		this.relationships = relationships;
		this.skills = skills;
	}

	path = () => {
		return `characters/${this.name.toLowerCase().replace(" ", "_")}`;
	};
}
