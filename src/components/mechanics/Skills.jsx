import { SKILLS } from "../../constants";


export const Skills = () => {
    return (
        <section className={"container"}>
            <h1>Skills</h1>
            <ul>
            {Object.values(SKILLS).map((skill, index) => {
                return (
                    <li key={skill.name} id={skill.name.toLocaleLowerCase()}>
                        <strong>{skill.name} ({skill.attr.toLocaleUpperCase()})</strong>
                        <p>{skill.description}</p>
                    </li>
                )
            })}
            </ul>
        </section>
    )
};
