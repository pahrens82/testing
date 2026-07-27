import { Session } from "../classes/session";


const ADDRESSES = {
    me: "3376 Hunter Pkwy, Cuyahoga Falls, OH 44223",
    meOld: "3383 Wilson St., Cuyahoga Falls, OH 44221",
    mitch: "3604 Kent Rd., Stow, OH 44224",
    mike: "2640 Dodd Rd., Willoughby Hills, OH 44094",
    patrick: "387 Cathy Dr., Munroe Falls, OH 44262",
};


export const Schedule = () => {
    let sessions = [
        new Session({ address: ADDRESSES.patrick, date: "08/22/2026", host: "Patrick", number: 12, }),
        new Session({ address: ADDRESSES.mitch, date: "07/25/2026", host: "Mitch", number: 11, }),
        new Session({ address: ADDRESSES.me, date: "06/28/2026", host: "Me", number: 10, }),
        new Session({ address: ADDRESSES.meOld, date: "05/XX/2026", host: "Cancelled" }),
        new Session({ address: ADDRESSES.meOld, date: "04/11/2026", host: "Cancelled" }),
        new Session({ address: ADDRESSES.mike, date: "03/08/2026", host: "Cancelled" }),
        new Session({ address: ADDRESSES.patrick, date: "02/22/2026", host: "Patrick", number: 9, }),
        new Session({ address: ADDRESSES.mitch, date: "01/24/2026", host: "Mitch", number: 8, }),
        new Session({ address: ADDRESSES.meOld, date: "12/28/2025", host: "Me", number: 7, }),
        new Session({ address: ADDRESSES.meOld, date: "2/22/2025", host: "Me", number: 6, }),
        new Session({ address: ADDRESSES.mitch, date: "1/11/2025", host: "Mitch", number: 5, }),
        new Session({ address: ADDRESSES.mitch, date: "12/15/2024", host: "Cancelled" }),
        new Session({ address: ADDRESSES.meOld, date: "11/9/2024", host: "Me", number: 4, }),
        new Session({ address: ADDRESSES.patrick, date: "10/12/2024", host: "Patrick", number: 3, }),
        new Session({ address: ADDRESSES.mike, date: "9/7/2024", host: "Mike", number: 2, }),
        new Session({ address: ADDRESSES.mitch, date: "8/18/2024", host: "Mitch", number: 1, }),
        new Session({ address: ADDRESSES.meOld, date: "7/6/2024", host: "Me", number: 0, }),
        new Session({ address: ADDRESSES.meOld, date: "6/23/2024", host: "Cancelled" }),
    ];
    let nextSession = sessions.shift();

    return (
        <section
            className={"container-fluid"}
            id={"schedule"}
        >
            <section className={"row"}>
                <section className={"col"}>
                    <h1 className={"mt-3 cinzel-decorative-bold"}>
                        Schedule
                    </h1>
                </section>
            </section>
            <section className={"row"}>
                <section className={"col"}>
                    <h3 className={"cinzel-decorative-bold"}>
                        Next Session:
                    </h3>
                    <div
                        key={nextSession.date}
                        className={"card shadow-lg border-success w-auto p-2 mt-3 session-card"}
                    >
                        <p className={"m-0"}>
                            Session {nextSession.number}<br />
                            Date: {nextSession.date}<br />
                            Host: {nextSession.host} <br />
                            Address: {nextSession.address} <br />
                            Start time: {nextSession.startTime}
                        </p>
                        {nextSession.address !== "TBD" ?
                            <a
                                target={"_blank"}
                                href={`https://www.google.com/maps/place/${nextSession.address.replaceAll(" ", "+") }/`}
                            >
                                Map
                            </a>
                            :
                            null
                        }
                    </div>
                    <h3 className={"mt-3 mb-0 cinzel-decorative-bold"}>
                        Past Sessions:
                    </h3>
                    <div className={"overflow-y-scroll"}>
                    {sessions.map((session, index) => {
                        return (
                            <div
                                key={session.date}
                                className={`card shadow-lg w-auto p-2 mt-3 session-card`}
                            >
                                <p className={"m-0"}>
                                    {session.host === "Cancelled" ? null : <span>Session {session.number}<br /></span>}
                                    Date: {session.date}<br />
                                    Host: {session.host} <br />
                                    Address: {session.address} <br />
                                    Start time: {session.startTime}
                                </p>
                                <a
                                    target={"_blank"}
                                    href={`https://www.google.com/maps/place/${session.address.replaceAll(" ", "+")}/`}
                                >
                                    Map
                                </a>
                            </div>
                        )
                    })}
                    </div>
                </section>
            </section>
        </section>
    );
};
