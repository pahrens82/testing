export const Fear = () => {
    return (
        <details className={"border rounded p-1 mt-2 bg-dark-subtle"}>
            <summary className={"fw-bold"}>
                Fear Table
            </summary>
            <div className={"bg-white px-2 small"}>
                <p className={"mb-0"}>
                    When struck by a Fear attack a PC must immediately make a WIL check. The roll can be pushed and does not count as an action.
                    Particularly frightening events can give you a Bane on the roll. If the WIL check fails, the PC must roll on the Fear Table.
                </p>
                <table className={"table table-sm table-striped"}>
                    <thead>
                        <tr>
                            <th>1D8</th>
                            <th>Effect</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <strong>Enfeebled:</strong>{" "}
                                The fear drains your energy and determination. You lose 2d6 WP and become Disheartened.
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <strong>Shaken:</strong>{" "}
                                You become Scared (or another Condition if already Scared).
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <strong>Panting:</strong>{" "}
                                The intense fear leaves you out of breath and makes you Exhausted.
                            </td>

                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                <strong>Pale:</strong>{" "}
                                Your face turns white as a sheet. You and all PCs within 30 feet and in sight of you become Scared (or another condition if already Scared).
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>
                                <strong>Scream:</strong>{" "}
                                You scream in horror, which causes all PCs who hear the sound to immediately suffer a Fear attack as well.
                                Each person only ever needs to make one WIL roll to resist the same Fear attack (it doesn't chain).
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>
                                <strong>Rage:</strong>{" "}
                                Your fear turns to anger, and you are forced to attack its source on your next turn - in melee combat if possible.
                                You also become Angry.
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>
                                <strong>Paralyzed:</strong>{" "}
                                You are petrified with terror and unable to move. You cannot perform any action or movement on your next turn.
                                Make another WIL check on each subsequent turn (not an action) to break the paralysis.
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>
                                <strong>Wild Panic:</strong>{" "}
                                In a fit of utter panic, you flee the scene as fast as you can. On your next turn you must dash away from the
                                source of your fear. Make another WIL roll on each subsequent turn (not an action) to stop running and act normally again.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
    );
};
