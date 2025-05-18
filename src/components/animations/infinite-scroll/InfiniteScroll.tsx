import React from "react";
import "./InfiniteScroll.css";

const InfiniteScroll: React.FC = () => {
    const slider1Images = [
        {
            src: "/home/partners/association-webcup.png",
            alt: "association webcup",
        },
        { src: "/home/partners/bocasay.png", alt: "bocasay" },
        { src: "/home/partners/etech.png", alt: "etech" },
        { src: "/home/partners/hodi.png", alt: "hodi" },
        { src: "/home/partners/ingenosya.png", alt: "ingenosya" },
        { src: "/home/partners/novity.png", alt: "novity" },
        { src: "/home/partners/vivetic.png", alt: "vivetic" },
        { src: "/home/partners/yas.png", alt: "yas" },
        { src: "/home/partners/fulldigits.png", alt: "fulldigitals" },
    ];

    return (
        <div className="flex flex-col gap-8">
            {/* Slider 1 */}
            <div
                className="slider relative h-[50px] w-[100vw] overflow-hidden"
                style={
                    {
                        maskImage:
                            "linear-gradient(to right, transparent, #000 10% 90%, transparent)",
                        "--width": "100px",
                        "--height": "50px",
                        "--quantity": 9,
                    } as React.CSSProperties
                }
            >
                <div className="list relative flex w-full">
                    {slider1Images.map((slide, index) => (
                        <div
                            key={`slider1-${index}`}
                            className="item animate-autoRun transition-filter group absolute left-full h-[var(--height)] w-[var(--width)] duration-500"
                            style={
                                {
                                    "--position": index + 1,
                                    animationDelay: `calc((10s / var(--quantity)) * (${index + 1} - 1) - 10s)`,
                                } as React.CSSProperties
                            }
                        >
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfiniteScroll;
