import { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDER_MOCK = [
    { img: "/list/card1.png" },
    { img: "/list/card2.png" },
    { img: "/list/card3.png" },
    { img: "/list/card4.png" },
];

const Slider = (): JSX.Element => {
    return (
        <section className="slider relative overflow-hidden">
            {/* Texte de fond en scroll infini */}
            <div className="absolute top-1/2 -translate-y-1/2">
                <div className="w-full whitespace-nowrap pointer-events-none z-0 animate-marquee text-8xl opacity-30 text-black dark:text-white">
                    <span className="mx-4">Hall of Fame Vraies-
Confidences Partagées</span>
                    <span className="mx-4">Hall of Fame Vraies-
Confidences Partagées</span>
                    <span className="mx-4">Hall of Fame Vraies-
Confidences Partagées</span>
                    <span className="mx-4">Hall of Fame Vraies-
Confidences Partagées</span>
                </div>
                <div className="w-full whitespace-nowrap pointer-events-none z-0 animate-marqueeR text-8xl opacity-100 text-white dark:text-dark">
                    <span className="mx-4">Hall of Fame Vraies-
Confidences Partagées</span>
                    <span className="mx-4">Hall of Fame Vraies-
Confidences Partagées</span>
                    <span className="mx-4">Hall of Fame Vraies-
Confidences Partagées</span>
                    <span className="mx-4">Hall of Fame Vraies-
Confidences Partagées</span>
                </div>
            </div>

            {/* Slider par-dessus */}
            <Swiper
                spaceBetween={40}
                slidesPerView={1}
                className="w-full max-w-[500px] mx-auto !relative guide-swiper px-8 !pb-[57px] md:!pb-[70px] z-10"
                modules={[Navigation]}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
            >
                {SLIDER_MOCK.map((slider, index) => (
                    <SwiperSlide key={index}>
                        <article>
                            <img src={slider.img} alt="article-img" />
                        </article>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev absolute bottom-0 left-0 transform -translate-y-1/2 z-20 cursor-pointer border border-black dark:border-white rounded-full p-2 hover:bg-black/10 hover:dark:bg-white/30">
                    <ChevronLeft className="w-8 h-8" />
                </div>
                <div className="swiper-button-next absolute bottom-0 right-0 transform -translate-y-1/2 z-20 cursor-pointer border border-black dark:border-white rounded-full p-2 hover:bg-black/10 hover:dark:bg-white/30">
                    <ChevronRight className="w-8 h-8" />
                </div>
            </Swiper>
        </section>
    );
};

export default Slider;
