import useTheme from "@/hooks/useTheme";
import { ArrowLeft } from "lucide-react";
import { JSX } from "react";
import { Link, Outlet } from "react-router-dom";

const Guide = (): JSX.Element => {
    const { theme } = useTheme();

    return (
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
    );
};

export default Guide;
