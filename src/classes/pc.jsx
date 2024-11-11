import { SKILLS } from "../constants";

const WEAPON_SKILLS = [
    "axes",
    "bludgeons",
    "bows",
    "brawling",
    "crossbows",
    "knives",
    "slings",
    "spears",
    "staves",
    "swords",
];

export class PC {
    constructor(
        {
            attributes = {
                str: 12,
                dex: 12,
                con: 12,
                int: 12,
                wil: 12,
                cha: 12,
            },
            skillImprovements = [

            ],
            description,
            species,
            profession,
            gear = [],
            name,
            classSkills = [],
            improvements = [],
            weaknesses = [],
            skills = SKILLS,
        }
    ) {
        this.attributes = attributes;
        this.description = description;
        this.gear = gear;
        this.name = name;
        this.classSkills = classSkills;
        this.skills = skills;
        this.improvements = improvements;
        this.weaknesses = weaknesses;
    };

    getSkills = () => {
        let skills = {};
        Object.keys(this.skills).forEach((skill, index) => {
            if (!WEAPON_SKILLS.includes(skill)) {
                let score = this.attributesToSkills(this.attributes[this.skills[skill].attr], this.classSkills.includes(skill));
                this.improvements.forEach((improvement) => {
                    if (improvement === skill) score += 1;
                });
                skills[skill] = { score: score, description: this.skills[skill].description, attr: this.skills[skill].attr, name: this.skills[skill].name };
            }
        });
        return skills;
    };

    getWeaponSkills = () => {
        let skills = {};
        Object.keys(this.skills).forEach((skill, index) => {
            if (WEAPON_SKILLS.includes(skill)) {
                let score = this.attributesToSkills(this.attributes[this.skills[skill].attr], this.classSkills.includes(skill));
                this.improvements.forEach((improvement) => {
                    if (improvement === skill) score += 1;
                });
                skills[skill] = { score: score, description: this.skills[skill].description, attr: this.skills[skill].attr, name: this.skills[skill].name };
            }
        });
        return skills;
    };

    attributesToSkills = (score, classSkill) => {
        if (score <= 8) {
            return classSkill ? 6 : 3;
        }
        if (score >= 9 && score <= 12) {
            return classSkill ? 8 : 4;
        }
        if (score >= 13 && score <= 15) {
            return classSkill ? 10 : 5;
        }
        if (score >= 16 && score <= 17) {
            return classSkill ? 12 : 6;
        }
        return classSkill ? 14 : 7;
    };

    showModal = (id) => {
        document.getElementById(id).showModal();
    };

    hideModal = (id) => {
        document.getElementById(id).close();
    };

    attributesToTable = () => {
        return (
            <table className={"table table-striped table-sm"}>
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Strength</td>
                        <td>{this.attributes.str}</td>
                    </tr>
                    <tr>
                        <td>Dexterity</td>
                        <td>{this.attributes.dex}</td>
                    </tr>
                    <tr>
                        <td>Constitution</td>
                        <td>{this.attributes.con}</td>
                    </tr>
                    <tr>
                        <td>Intelligence</td>
                        <td>{this.attributes.int}</td>
                    </tr>
                    <tr>
                        <td>Willpower</td>
                        <td>{this.attributes.wil}</td>
                    </tr>
                    <tr>
                        <td>Charisma</td>
                        <td>{this.attributes.cha}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    skillsToTable = (name, weaponsOnly = false) => {
        let skills;
        if (weaponsOnly) {
            skills = this.getWeaponSkills();
        } else {
            skills = this.getSkills();
        }

        return (
            <>
                <table className={"table table-striped table-sm"}>
                    <thead>
                        <tr>
                            <th>Skill</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(skills).map((skill, index) => {
                            return (
                                <tr
                                    key={`row-${skill}`}
                                    title={`(${skills[skill].attr.toLocaleString()}) ${skills[skill].description}`}
                                    onClick={() => this.showModal(`dialog-${name}-${skill}`)}
                                >
                                    <td className={this.classSkills.includes(skill) ? "fw-bold" : ""}>
                                        {skills[skill].name}
                                    </td>
                                    <td>
                                        {skills[skill].score}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {Object.keys(skills).map((skill, index) => {
                    return (
                        <dialog
                            id={`dialog-${name}-${skill}`}
                            key={`dialog-${skill}`}
                        >
                            <p>{skills[skill].description}</p>
                            <p>{name}'s score: {skills[skill].score}</p>
                            <button
                                className={"btn btn-primary"}
                                type={"button"}
                                onClick={() => this.hideModal(`dialog-${name}-${skill}`)}
                            >
                                Close
                            </button>
                        </dialog>
                    )
                })}
            </>
        )
    };

    path = () => {
        return `characters/${this.name.toLowerCase().replace(" ", "_")}`;
    };
}


