import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/nav";

export default function RootLayout() {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
}

