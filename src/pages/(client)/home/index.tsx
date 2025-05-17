import About from "@/features/(client)/home/components/About";
import FAQ from "@/features/(client)/home/components/FAQ";
import Hero from "@/features/(client)/home/components/Hero";
import Partners from "@/features/(client)/home/components/Partners";
import { JSX } from "react";

const Home = (): JSX.Element => {
    return (
        <section className="home">
            <Hero />
            <About />
            <Partners />
            <FAQ />
        </section>
    );
};

export default Home;
