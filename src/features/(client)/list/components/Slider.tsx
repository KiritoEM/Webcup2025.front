import { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SLIDER_MOCK = [
    {
        img: "/list/card.png",
        title: "Un nouveau matin, un cœur léger"
    },
    {
        img: "/list/card.png",
        title: "Un nouveau matin, un cœur léger"
    },
    {
        img: "/list/card.png",
        title: "Un nouveau matin, un cœur léger"
    }
]

const Slider = (): JSX.Element => {
    return (
        <section className="slider">
            <Swiper spaceBetween={40} slidesPerView={1} className="w-full max-w-[500px] mx-auto !relative guide-swiper px-8 !pb-[57px] md:!pb-[70px]">
                {
                    SLIDER_MOCK.map((slider, index) => (
                        <SwiperSlide
                            key={index}
                        >
                            <article>
                                <img src={slider.img} alt="article-img" />
                                <h2 className="text-primary font-dm">{slider.title}</h2>
                            </article>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Slider;