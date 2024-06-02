import {useRouteError} from "react-router-dom";
import {NavigationBar} from "./NavigationBar.jsx";

export const Error = () => {
	const error = useRouteError();
	return (
		<>
			<section className={"container-fluid"}>
				<NavigationBar/>
				<div className={"row"}>
					<div className={"col"}>
						<h1>Oops!</h1>
						<p>Sorry, an unexpected error has occurred.</p>
						<p>
							<i>{error.statusText || error.message}</i>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};
