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
                <div className="animate-marquee pointer-events-none z-0 w-full text-8xl whitespace-nowrap text-black opacity-30 dark:text-white">
                    <span className="mx-4">
                        Hall of Fame Vraies- Confidences Partagées
                    </span>
                    <span className="mx-4">
                        Hall of Fame Vraies- Confidences Partagées
                    </span>
                    <span className="mx-4">
                        Hall of Fame Vraies- Confidences Partagées
                    </span>
                    <span className="mx-4">
                        Hall of Fame Vraies- Confidences Partagées
                    </span>
                </div>
                <div className="animate-marqueeR dark:text-dark pointer-events-none z-0 w-full text-8xl whitespace-nowrap text-white opacity-100">
                    <span className="mx-4">
                        Hall of Fame Vraies- Confidences Partagées
                    </span>
                    <span className="mx-4">
                        Hall of Fame Vraies- Confidences Partagées
                    </span>
                    <span className="mx-4">
                        Hall of Fame Vraies- Confidences Partagées
                    </span>
                    <span className="mx-4">
                        Hall of Fame Vraies- Confidences Partagées
                    </span>
                </div>
            </div>

            {/* Slider par-dessus */}
            <Swiper
                spaceBetween={40}
                slidesPerView={1}
                className="guide-swiper !relative z-10 mx-auto w-full max-w-[500px] px-8 !pb-[57px] md:!pb-[70px]"
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
                <div className="swiper-button-prev absolute bottom-0 left-0 z-20 -translate-y-1/2 transform cursor-pointer rounded-full border border-black p-2 hover:bg-black/10 dark:border-white hover:dark:bg-white/30">
                    <ChevronLeft className="h-8 w-8" />
                </div>
                <div className="swiper-button-next absolute right-0 bottom-0 z-20 -translate-y-1/2 transform cursor-pointer rounded-full border border-black p-2 hover:bg-black/10 dark:border-white hover:dark:bg-white/30">
                    <ChevronRight className="h-8 w-8" />
                </div>
            </Swiper>
        </section>
    );
};

export default Slider;
