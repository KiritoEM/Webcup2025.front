import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const start = performance.now();

            const easeIn = (t: number) => t * t;

            const animate = (time: number) => {
                const elapsed = (time - start) / 2000;
                const rawProgress = Math.min(elapsed, 1);
                const easedProgress = easeIn(rawProgress);

                const holeWidth = 103;
                const scale = easedProgress * 8;
                const halfScaledWidth = (holeWidth * scale) / 2;

                const screenCenterX = window.innerWidth / 2;
                const leftEdge = screenCenterX - halfScaledWidth;
                const rightEdge = screenCenterX + halfScaledWidth;

                if (leftEdge < 0 && rightEdge > window.innerWidth) {
                    setProgress(1);
                    setTimeout(() => setIsVisible(false), 500);
                    return;
                }

                setProgress(easedProgress);

                if (rawProgress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setTimeout(() => setIsVisible(false), 500);
                }
            };

            requestAnimationFrame(animate);
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    if (!isVisible) return null;

    const maxScale = 15;
    const scale = progress * maxScale;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999]"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
            >
                <svg
                    width="100%"
                    height="100%"
                    style={{ position: "absolute", top: 0, left: 0 }}
                >
                    <defs>
                        <mask id="shapeMask">
                            <rect width="100%" height="100%" fill="white" />
                            <g
                                transform={`
                                    translate(${centerX}, ${centerY})
                                    scale(${scale})
                                    translate(-51.5, -69)
                                `}
                            >
                                <path
                                    d="M51.1986 0.00842285C79.3347 0.00843934 102.144 22.8176 102.144 50.9537V137.492H0.253296V50.9537C0.253296 22.8176 23.0625 0.00842285 51.1986 0.00842285Z"
                                    fill="black"
                                />
                            </g>
                        </mask>
                    </defs>

                    <rect
                        width="100%"
                        height="100%"
                        className="fill-primary"
                        mask="url(#shapeMask)"
                    />

                    <g
                        transform={`
                            translate(${centerX}, ${centerY})
                            scale(${scale})
                            translate(-51.5, -69)
                        `}
                    >
                        <path
                            d="M51.1986 0.00842285C79.3347 0.00843934 102.144 22.8176 102.144 50.9537V137.492H0.253296V50.9537C0.253296 22.8176 23.0625 0.00842285 51.1986 0.00842285Z"
                            fill="none"
                            stroke="white"
                            strokeWidth={2}
                        />
                    </g>
                </svg>
            </motion.div>
        </AnimatePresence>
    );
};

export default Loader;
