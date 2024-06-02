import {SESSIONS} from "../constants.jsx";

export const Schedule = () => {
	return (
		<>
		<h3 className={"mt-3"}>
			Schedule
		</h3>
			{SESSIONS.map((session, index) => {
				return (
					<div
						key={session.date}
						className={"card w-auto p-2 mt-3"}
					>
						<p className={"m-0"}>
							{session.date}<br/>
							{session.host} <br/>
							{session.address}
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
		</>
	);
}
