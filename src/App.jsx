import { NavigationBar } from "./components/NavigationBar.jsx";
import { Outlet } from "react-router-dom";
import * as bootstrap from "bootstrap";
import './App.css'

export const App = () => {
    return (
        <main className={"container"}>
            <NavigationBar />
            <Outlet />
        </main>
    )
}
