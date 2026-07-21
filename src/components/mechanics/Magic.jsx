import React, { useEffect, useState } from "react";

import { SPELLS } from "../../spells";


export const Magic = ({ type }) => {
    const RANKS = [0, 1, 2, 3, 4, 5];

    const [selectedRanks, setSelectedRanks] = useState(new Set([0, 1]));
    const [filter, setFilter] = useState("name");
    const [sortedSpells, setSortedSpells] = useState([]);

    const rankInputs = [1, 2, 3, 4, 5];

    useEffect(
        () => {
            if (filter === "name") {
                setSortedSpells(
                    SPELLS.toSorted((a, b) => {
                        if (a[filter] > b[filter]) return 1;
                        if (a[filter] < b[filter]) return -1;
                        return 0;
                    })
                );
            } else {
                setSortedSpells(
                    sortedSpells.toSorted((a, b) => {
                        if (a[filter] > b[filter]) return 1;
                        if (a[filter] < b[filter]) return -1;
                        return 0;
                    })
                );
            }
        },
        [filter]
    );

    const handleRankChange = (event) => {
        let set = new Set([...selectedRanks]);
        let target = event.currentTarget;
        if (target.checked) {
            set.add(parseInt(target.value));
        } else {
            set.delete(parseInt(target.value));
        }
        setSelectedRanks(set);
    };

    const handleFilterChange = (event) => {
        setFilter(event.currentTarget.value);
    };

    return (
        <section
            className={"container-fluid"}
            id={type.toLowerCase() === "arcane" ? "arcane-magic" : "divine-magic"}
        >
            <div className={"row"}>
                <div className={"col-xs-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 bg-white"}>
                    <h1>{type} Magic</h1>
                    <section>
                        <details>
                            <summary className={"h3"}>General Mechanics</summary>
                            <ul>
                                <li>To cast a spell you must spend Willpower Points (WP) and roll against your relevant skill.</li>
                                <li>If the roll succeeds, the spell has the intended effect, as per its description. Otherwise, it has no effect.</li>
                                <li>You can push the roll.</li>
                                <li>The Power Level (PL) of a spell indicates how much power you charge it with.
                                    <ul>
                                        <li>The PL ranges from 1 to 3.</li>
                                        <li>Casting a spell costs 2 WP per PL.</li>
                                        <li>Some spells do not use or reference a Power Level; these always cost 2 WP.</li>
                                    </ul>
                                </li>
                                <li>Rank 0 spells (also known as magic tricks or cantrips) succeed automatically and cost 1 WP.</li>
                                <li>When a caster has one or zero WP remaining, they can tap into their own lifeforce to fuel their casting.
                                    <ul>
                                        <li>Roll a die of your choice (up to 1d20) before casting a spell.</li>
                                        <li>The result of the die roll indicates how many WP you gain and must use straight away, but you take the same amount of damage; this damage cannot be reduced.
                                        </li>
                                        <li>Willpower not used immediately are lost.</li>
                                        <li>The damage is applied after the spell is cast.</li>
                                        <li>This cannot be used for healing spells.</li>
                                    </ul>
                                </li>
                                <li>Requirements
                                    <ul>
                                        <li>To cast a spell, you must fulfill all of the requirements which are specified in the description of each spell.</li>
                                        <li>Word: The spell is activated with a chant or power word. It cannot be a whisper.</li>
                                        <li>Gesture: The spell is activated by making specific hand movements.</li>
                                        <li>Focus: The spell is activated with an item held in your hand, such as a wand, crystal ball, or amulet.</li>
                                        <li>Ingredient: The spell is activated using a certain ingredient, which is consumed in the process.</li>
                                    </ul>
                                </li>
                                <li>Casting Time
                                    <ul>
                                        <li>Unless otherwise stated, casting a spell always counts as an action in combat.</li>
                                        <li>However, there are <em>reaction</em> spells which are performed outside your own turn.</li>
                                        <li>Unlike other reactions in combat, such as parrying or dodging, reaction spells do <em>not</em> replace your regular action in the round. This means that you can cast as many of them as you want, if you have enough WP.</li>
                                        <li>There are also <em>rituals</em>, which take a stretch of time or even a Shift to perform.</li>
                                        <li>Grimoire: Arcane casters can cast an unprepared spell from your grimoire, although this takes twice as long. Make your casting roll when the spell is completed. Reaction spells cannot be cast from your grimoire.</li>
                                    </ul>
                                </li>
                                <li>Range
                                    <ul>
                                        <li>Each spell has a maximum range. Unlike ranged weapons, spells cannot be used on targets outside their specified range.</li>
                                        <li>Personal range means the spell only affects the person casting it.</li>
                                        <li>Area of Effect: Unless stated otherwise, an area of effect always starts at the person casting the spell. Area of Effect spells can be dodged but noy parried, unless stated otherwise. You can exempt one or more targets within the area from the spell's effects, but you then get a Bane on your roll.</li>
                                        <li>Sphere: If the range of a spell is described as a sphere, the spell affects all targets within the chosen area except the caster themself.</li>
                                        <li>Cone: If a range is described as a cone, the spell affects all targets within a cone-shaped area whose width at any given point equal the distance from the source of the spell. The range indicates the length of the cone.</li>
                                    </ul>
                                </li>
                                <li>Duration
                                    <ul>
                                        <li>Each spell specifies the duration of its effect:</li>
                                        <li>Round: The effect lasts until the start of your turn in the next round.</li>
                                        <li>Stretch: The effect lasts for one Stretch of time.</li>
                                        <li>Shift: The effect lasts for one Shift of time.</li>
                                        <li>Concentration: The effect ceases if you perform another action, take damage, or fail a WIL roll for resisting Fear. If you are interrupted by a sudden disturbance, such as a sound, you must make a WIL roll (not an action) to maintain your concentration.</li>
                                    </ul>
                                </li>
                                <li>Failure, Critical Failure, and Critical Success
                                    <ul>
                                        <li>If the roll for casting a spell fails, the spell has no effect, but you still spend your WP. You are free to describe how the failure manifests itself, as long as it has no mechanical effect.</li>
                                        <li>If you roll a 20 (a critical failure), you cannot push the roll. There is also a risk of a magical Mishap.</li>
                                        <li>If you roll a 1 (a critical success), your target must roll a critical success to resist, parry, or dodge the spell. In addition, you may choose one of the following effects:
                                            <ul>
                                                <li>The damage or range of the spell is doubled.</li>
                                                <li>The spell does not cost any WP.</li>
                                                <li>You can immediately cast another spell, but with a Bane on the roll.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Learning Arcane Magic
                                    <ul>
                                        <li>Teachers: The easiest (but often most expensive) way to learn a spell is from a teacher who already knows it. The lesson takes one Shift, but you cannot activate the new spell until the end of the game session. You must then use an advancement mark (a skill advancement) to learn the new spell instead of trying to increase your skill. Make a roll against INT with a Boon. On success you learn the spell, otherwise you do not.</li>
                                        <li>Grimoires: If you are lucky, you can find spells in other mages' grimoires. You can learn them on your own. This works the same way as with a teacher, but you roll against Myths & Legends instead of INT, without the Boon.</li>
                                        <li>Magic Tricks: Magic tricks are easier to learn than real spells. It takes one Stretch to learn a new trick from a teacher or grimoire. No advancement mark or roll is required.</li>
                                    </ul>
                                </li>
                            </ul>
                        </details>
                    </section>
                    <section>
                        <details>
                            <summary className={"h3"}>
                                {type} Magic Specifics
                            </summary>
                            {type.toLowerCase() === "arcane" ?
                                <ul>
                                    <li>Arcane casters have a grimoire within which they record their spells.</li>
                                    <li>The grimoire counts as 1 item for determining encumberance.</li>
                                    <li>When an arcane caster learns a new spell, it is also considered to have added to their grimoire.</li>
                                    <li>An arcane caster can memorize ("prepare") spells from their grimoire.</li>
                                    <li>Memorizing spells requires studying a grimoire as part of a Long Rest.</li>
                                    <li>Memorized spells remain so until this action is taken again.</li>
                                    <li>If an arcane caster loses their grimoire, they cannot memorize spells until their grimoire is replaced.</li>
                                    <li>An arcane caster begins play with a number of spells in their grimoire equal to their base chance for INT.</li>
                                    <li>An arcane caster can memorize a number of spells equal to half (rounded down) their base chance for INT.</li>
                                    <li>Metal disrupts arcane magic.
                                        <ul>
                                            <li>Wearing metal armor or wielding a weapon with metal components prevents arcane spell casting.</li>
                                            <li>Items in your inventory do not have this impact.</li>
                                        </ul>
                                    </li>
                                </ul>
                                :
                                <ul>
                                    <li>Divine casters have a holy symbol that is required for preparing spells.</li>
                                    <li>The holy symbol counts as a Tiny item.</li>
                                    <li>Prepared spells require a single action (or whatever is noted in the spell's description) to cast.</li>
                                    <li>Preparing spells requires praying and meditating as part of a Long Rest.</li>
                                    <li>Prepared spells remain so until this action is taken again.</li>
                                    <li>Spells can be cast without preparation, but the caster's symbol must be wielded in one hand and the casting time is doubled.</li>
                                    <li>If a divine caster loses their holy symbol, they will no longer be able to prepare spells until the holy symbol is replaced.</li>
                                    <li>An divine caster begins play familiar with a number of spells equal to their base chance for WIL.</li>
                                    <li>An divine caster can prepare a number of spells equal to half (rounded down) their base chance for WIL.</li>
                                </ul>
                            }
                        </details>
                    </section>
                    <section className={"mt-3"}>
                        <h3>Ranks</h3>
                        {RANKS.map((spellRank, index) => {
                            return (
                                <div
                                    className={"form-check form-check-inline"}
                                    key={spellRank}
                                >
                                    <input
                                        className={"form-check-input"}
                                        type={"checkbox"}
                                        id={`ranksCheckbox${index}`}
                                        value={index}
                                        checked={selectedRanks.has(index)}
                                        onChange={handleRankChange}
                                    />
                                    <label
                                        className={"form-check-label"}
                                        htmlFor={`ranksCheckbox${index}`}
                                    >
                                        Rank {index}
                                    </label>
                                </div>
                            )
                        })}
                    </section>
                    <section className={"mt-3"}>
                        <div className={"d-flex justify-content-between"}>
                            <h3>Spells</h3>
                            <div className={"d-flex justify-content-between"}>
                                <p className={"me-1"}>
                                    Filter by:
                                </p>
                                <div className={"d-flex gap-2"}>
                                    <label>
                                        Name
                                        <input
                                            checked={filter === "name"}
                                            className={"ms-1"}
                                            name={"filter-type"}
                                            type={"radio"}
                                            value={"name"}
                                            onChange={handleFilterChange}
                                        />
                                    </label>
                                    <label>
                                        Rank
                                        <input
                                            checked={filter === "rank"}
                                            className={"ms-1"}
                                            name={"filter-type"}
                                            type={"radio"}
                                            value={"rank"}
                                            onChange={handleFilterChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        {sortedSpells.map((spell, index) => {
                            if (selectedRanks.has(spell.rank)) {
                                if (spell.type === type || spell.type === "Both") {
                                    return (
                                        <details
                                            className={"ps-2 py-1 mb-1 border rounded"}
                                            key={spell.name.replace(/ /g, "-")}
                                        >
                                            <summary>
                                                <span className={"fw-bold"}>{spell.name}</span> (Rank {spell.rank})
                                            </summary>
                                            <ul className={"list-unstyled mb-4"}>
                                                <li><strong>Rank: </strong>{spell.rank}</li>
                                                <li><strong>School: </strong>{spell.school}</li>
                                                <li><strong>Prerequisite: </strong>{spell.prerequisite}</li>
                                                <li><strong>Range: </strong>{spell.range}</li>
                                                <li><strong>Casting Time: </strong>{spell.castingTime}</li>
                                                <li><strong>Requirements: </strong>{spell.requirements}</li>
                                                <li><strong>Duration: </strong>{spell.duration}</li>
                                                <li><strong>Description: </strong>{spell.description}</li>
                                            </ul>
                                        </details>

                                    )
                                }
                            }
                        })}
                    </section>
                </div>
                <div className={"col-2"}></div>
            </div>
        </section>
    )
};
