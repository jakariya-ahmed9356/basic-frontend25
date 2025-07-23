import { Outlet } from "react-router-dom";

export default function ServiceLayout() {

    return (
        <div>
             <h1 className="text-xl font-semibold mb-3">Our Services</h1>
            <Outlet />
        </div>
    );
}