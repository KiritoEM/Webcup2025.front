import About from "@/features/(client)/home/components/About";
import FAQ from "@/features/(client)/home/components/FAQ";
import Footer from "@/features/(client)/home/components/footer";
import Hero from "@/features/(client)/home/components/Hero";
import Partners from "@/features/(client)/home/components/Partners";
import TeamSlider from "@/features/(client)/home/components/TeamSlider";
import Slider from "@/features/(client)/list/components/Slider";
import { JSX } from "react";

const Home = (): JSX.Element => {
    return (
        <section className="home">
            <Hero />
            <About />
            <Partners />
            <div id="mainNav.exemple" className="mt-48 w-full overflow-hidden">
                <Slider />
            </div>
            <div className="mt-48">
                <TeamSlider />
            </div>
            <FAQ />
            <Footer />
        </section>
    );
};

export default Home;
