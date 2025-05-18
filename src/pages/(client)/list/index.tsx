import Footer from "@/features/(client)/home/components/footer";
import Hero from "@/features/(client)/list/components/Hero";
import Slider from "@/features/(client)/list/components/Slider";

const List = () => {
    return (
        <>
            <section className="lists w-full overflow-hidden">
                <Hero />
                <Slider />
            </section>

            <Footer />
        </>
    );
};

export default List;
