import Hero from "@/features/(client)/home/components/Hero";
import { JSX } from "react";

const Home = (): JSX.Element => {
    return (
        <section className="home">
            <Hero />

            <div className="relative z-30 h-screen bg-blue-500"></div>
        </section>
    );
};

export default Home;
