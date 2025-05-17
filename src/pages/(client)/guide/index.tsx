import { ArrowLeft } from "lucide-react";
import { JSX } from "react";
import { Link, Outlet } from "react-router-dom";

const Guide = (): JSX.Element => {
    return (
        <section
            className="Guide min-h-screen"
            style={{
                background:
                    "linear-gradient(166deg, #000 15.58%, #200D42 86.18%, #217DA1 149.5%, #6EBCDB 184.33%), #000",
            }}
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
