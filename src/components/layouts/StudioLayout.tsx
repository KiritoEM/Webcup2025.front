import { JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";
import StudioHeader from "./headers/StudioHeader";
import StudioToolbar from "./toolbars/StudioToolbar";
import useAuth from "@/hooks/useAuth";

const StudioLayout = (): JSX.Element => {
    const { token } = useAuth();
    return (
        <>
            {token ? (
                <main className="studio-layout">
                    <StudioHeader />
                    <Outlet />
                    <StudioToolbar />
                </main>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
};

export default StudioLayout;
