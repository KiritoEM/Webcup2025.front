import React from "react";
import "./infiniteScroll.css";

const InfiniteScroll: React.FC = () => {
    const slider1Images = [
        "avanahub.png",
        "bocasay.png",
        "etech.png",
        "hodi.png",
        "ingenosya.png",
        "novity.png",
        "vivetic.png",
        "yas.png",
        "fulldigital.png",
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
                    {slider1Images.map((src, index) => (
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
                                src={src}
                                alt=""
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
