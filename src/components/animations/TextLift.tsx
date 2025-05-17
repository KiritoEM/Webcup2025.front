import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { AnimatedTextProps } from "./types";
import { cn } from "@/lib/utils";
import { useScrollDefaultOptions } from "@/helpers/constant";

gsap.registerPlugin(ScrollTrigger, SplitText);

const TextLift: FC<AnimatedTextProps> = ({
    text,
    useScrollTrigger = true,
    as: Tag = "h1",
    className,
    ...props
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLElement | null>(null);
    const scrolOpts = useScrollDefaultOptions();

    useGSAP(() => {
        if (!containerRef.current || !textRef.current) return;

        const splitter = new SplitText(textRef.current, { type: "words" });

        gsap.set(containerRef.current, {
            perspective: 1200,
            transformStyle: "preserve-3d",
            z: -150,
        });
        gsap.set(textRef.current, {
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            transformOrigin: "50% 50% -150px",
            x: 110,
            y: 55,
            z: -63,
            rotateY: -55,
            rotateX: -25,
            opacity: 0,
        });

        const tl = gsap.timeline(
            useScrollTrigger
                ? {
                      scrollTrigger: {
                          ...scrolOpts,
                          trigger: containerRef.current,
                      },
                  }
                : {},
        );

        tl.to(textRef.current, {
            x: 0,
            y: 0,
            z: 0,
            rotateY: 0,
            rotateX: 0,
            duration: 1.3,
            ease: "power3.out",
            opacity: 1,
        }).fromTo(
            splitter.words,
            { opacity: 0, z: 50 },
            {
                opacity: 1,
                z: 0,
                ease: "power3.out",
                stagger: {
                    each: 0.1,
                    from: "start",
                },
            },
            "<+=0.04",
        );

        return () => {
            splitter.revert();
            tl.kill();
        };
    }, [text]);

    return (
        <div ref={containerRef}>
            <Tag
                ref={textRef}
                {...props}
                className={cn(
                    "will-change-opacity will-change-transform",
                    className,
                )}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    );
};

export default TextLift;
