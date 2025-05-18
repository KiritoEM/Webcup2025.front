import useAuth from "@/hooks/useAuth";
import useTheme from "@/hooks/useTheme";
import { ArrowLeft } from "lucide-react";
import { JSX } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

const Guide = (): JSX.Element => {
    const { theme } = useTheme();
    const { token } = useAuth();

    return (
        <>
            {token ? (
                <section
                    className={`Guide min-h-screen ${theme === "dark" ? "bg-darkGradient" : "bg-lightGradient"}`}
                >
                    <div className="h-[75px]"></div>
                    <Link to="/" className="mx-12 mt-6 block ">
                        <ArrowLeft />
                    </Link>
                    <div className="mt-4">
                        <Outlet />
                    </div>
                </section>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
};

export default Guide;
