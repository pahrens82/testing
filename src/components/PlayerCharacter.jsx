import React, { useState } from "react";

import { CHARACTERS } from "./PlayerCharacters";


export const PlayerCharacter = ({ player = "", fontClass = "" }) => {
    return (
        <section className={"container-fluid"}>
            <section className={"row"}>
                <section className={"col-12 col-md-4"}>
                    <section
                        key={`${player}-details`}
                        className={`card px-3 mt-3 mt-md-0}`}
                    >
                        <small>{player}</small>
                        <h3 className={`m-0 ${fontClass}`}>
                            {CHARACTERS[player].name}
                        </h3>
                        {CHARACTERS[player].attributesToTable()}
                        {CHARACTERS[player].skillsToTable(CHARACTERS[player].name)}
                        {CHARACTERS[player].skillsToTable(CHARACTERS[player].name, true)}
                    </section>
                </section>
            </section>
        </section>
    )
};
