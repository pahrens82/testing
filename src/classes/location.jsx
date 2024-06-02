export class Location {
	constructor({name, population, description}) {
		this.name = name;
		this.population = population;
		this.description = description;
	}

	path = () => {
		return `/locations/${this.name.toLowerCase().replace(" ", "_")}`;
	};
}
