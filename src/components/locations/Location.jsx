export const Location = ({location}) => {
	return (
		<>
			<h3>{location.name}</h3>
			<p>{location.population}</p>
			<p>{location.description}</p>
		</>
	)
};
