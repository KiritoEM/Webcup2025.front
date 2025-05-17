import { JSX } from "react";
import { Outlet } from "react-router-dom";
import StudioHeader from "./headers/StudioHeader";
import StudioToolbar from "./toolbars/StudioToolbar";

const StudioLayout = (): JSX.Element => {
    return (
        <main className="studio-layout">
            <StudioHeader />
            <Outlet />
            <StudioToolbar />
        </main>
    );
};

export default StudioLayout;
