import React from "react";
import { motion } from "framer-motion";

const stripCount = 7;
const centerIndex = Math.floor(stripCount / 2);
const exitDelayPerStrip = 0.1;

interface StripCenterTransitionProps {
    className?: string;
    stripClassName?: string;
}

const StripCenterTransition: React.FC<StripCenterTransitionProps> = ({
    className = "",
    stripClassName = "",
}) => {
    return (
        <motion.div
            className={`fixed inset-0 z-50 flex ${className}`}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {Array.from({ length: stripCount }).map((_, index) => {
                const delayFromCenter = Math.abs(centerIndex - index);
                const delay = delayFromCenter * exitDelayPerStrip;

                const variants = {
                    initialTop: { y: "-100%" },
                    animateTop: {
                        y: 0,
                        transition: { ease: "easeInOut", delay, duration: 0.5 },
                    },
                    exitTop: {
                        y: "-100%",
                        transition: { ease: "easeInOut", delay, duration: 0.4 },
                    },
                    initialBottom: { y: "100%" },
                    animateBottom: {
                        y: 0,
                        transition: { ease: "easeInOut", delay, duration: 0.5 },
                    },
                    exitBottom: {
                        y: "100%",
                        transition: { ease: "easeInOut", delay, duration: 0.4 },
                    },
                };

                return (
                    <div
                        key={index}
                        className={`relative h-full ${stripClassName}`}
                        style={{ width: `${100 / stripCount}%` }}
                    >
                        {/* Top Half */}
                        <motion.div
                            className="absolute top-0 left-0 h-1/2 w-full bg-[#6EBCDB]"
                            variants={{
                                initial: variants.initialTop,
                                animate: variants.animateTop,
                                exit: variants.exitTop,
                            }}
                        />
                        {/* Bottom Half */}
                        <motion.div
                            className="absolute bottom-0 left-0 h-1/2 w-full bg-[#6EBCDB]"
                            variants={{
                                initial: variants.initialBottom,
                                animate: variants.animateBottom,
                                exit: variants.exitBottom,
                            }}
                        />
                    </div>
                );
            })}
        </motion.div>
    );
};

export default StripCenterTransition;
