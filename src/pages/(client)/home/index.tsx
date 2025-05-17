import About from "@/features/(client)/home/components/About";
import Hero from "@/features/(client)/home/components/Hero";
import { JSX } from "react";

const Home = (): JSX.Element => {
    return (
        <section className="home">
            <Hero />
            <About />
        </section>
    );
};

export default Home;
