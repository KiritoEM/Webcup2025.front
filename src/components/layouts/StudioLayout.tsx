import { JSX } from "react";
import { Outlet } from "react-router-dom";
import StudioHeader from "./headers/StudioHeader";

const StudioLayout = (): JSX.Element => {
    return (
        <main className="studio-layout">
            <StudioHeader />
            <Outlet />
        </main>
    );
};

export default StudioLayout;