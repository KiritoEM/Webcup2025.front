import About from "@/features/(client)/home/components/About";
import FAQ from "@/features/(client)/home/components/FAQ";
import Footer from "@/features/(client)/home/components/footer";
import Hero from "@/features/(client)/home/components/Hero";
import Partners from "@/features/(client)/home/components/Partners";
import TeamSlider from "@/features/(client)/home/components/TeamSlider";
import { JSX } from "react";

const Home = (): JSX.Element => {
    return (
        <section className="home">
            <Hero />
            <About />
            <Partners />
            <TeamSlider />
            <FAQ />
            <Footer />
        </section>
    );
};

export default Home;
