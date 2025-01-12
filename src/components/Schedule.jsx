import {Session} from "../classes/session";


export const Schedule = () => {
    let sessions = [
        new Session({ address: "TBD", date: "2/22/2025", host: "TBD" }),
        new Session({ address: "3604 Kent Rd., Stow, OH 44224", date: "1/11/2025", host: "Mitch" }),
        new Session({ address: "3604 Kent Rd., Stow, OH 44224", date: "12/15/2024", host: "Cancelled" }),
        new Session({ address: "3383 Wilson St., Cuyahoga Falls, OH 44221", date: "11/9/2024", host: "Me" }),
        new Session({ address: "387 Cathy Dr., Munroe Falls, OH 44262", date: "10/12/2024", host: "Patrick" }),
        new Session({ address: "2640 Dodd Rd., Willoughby Hills, OH 44094", date: "9/7/2024", host: "Mike" }),
        new Session({ address: "3604 Kent Rd., Stow, OH 44224", date: "8/18/2024", host: "Mitch" }),
        new Session({ address: "3383 Wilson St., Cuyahoga Falls, OH 44221", date: "7/6/2024", host: "Me" }),
        new Session({ address: "3383 Wilson St., Cuyahoga Falls, OH 44221", date: "6/23/2024", host: "Cancelled" }),
    ];
    let nextSession = sessions.shift();

    return (
        <section className={"container"}>
            <section className={"row"}>
                <section className={"col"}>
                    <h1 className={"mt-3"}>
                        Schedule
                    </h1>
                </section>
            </section>
            <section className={"row"}>
                <section className={"col"}>
                    <h3>Next Session:</h3>
                    <div
                        key={nextSession.date}
                        className={"card border-success w-auto p-2 mt-3"}
                    >
                        <p className={"m-0"}>
                            Date: {nextSession.date}<br />
                            Host: {nextSession.host} <br />
                            Address: {nextSession.address} <br />
                            Start time: {nextSession.startTime}
                        </p>
                        {nextSession.address !== "TBD" ?
                        <a
                            target={"_blank"}
                            href={`https://www.google.com/maps/place/${nextSession.address}/`}
                        >
                            Map
                        </a>
                        :
                        null
                        }
                    </div>
                    <h3 className={"mt-3"}>Past Sessions:</h3>
                    {sessions.map((session, index) => {
                        return (
                            <div
                                key={session.date}
                                className={"card w-auto p-2 mt-3"}
                            >
                                <p className={"m-0"}>
                                    Date: {session.date}<br />
                                    Host: {session.host} <br />
                                    Address: {session.address} <br />
                                    Start time: {session.startTime}
                                </p>
                                <a
                                    target={"_blank"}
                                    href={`https://www.google.com/maps/place/${session.address}/`}
                                >
                                    Map
                                </a>
                            </div>
                        )
                    })}
                </section>
            </section>
        </section>
    );
}
