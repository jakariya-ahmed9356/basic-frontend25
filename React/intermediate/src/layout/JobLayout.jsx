import { Outlet } from "react-router-dom";
import Jobs from "../Pages/Jobs/Jobs";


export default function JobLayout() {
    return (
        <div>
            <Jobs />
            <Outlet />

        </div>
    );
} 

