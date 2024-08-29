import { SESSIONS } from "../sessions";


export const Schedule = () => {
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
                    {SESSIONS.map((session, index) => {
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
