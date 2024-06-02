export const Character = ({character}) => {
	return (
		<>
			<h1>{character.name}</h1>
			<p>{character.age}</p>
			<p>{character.description}</p>
		</>
	)
}
