import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, useRef } from "react";
import { useScrollDefaultOptions } from "@/helpers/constant";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";
import { AnimatedTextProps } from "./types";

gsap.registerPlugin(ScrollTrigger, SplitText);

const TextMiddleOut: FC<AnimatedTextProps> = ({
    text,
    useScrollTrigger = true,
    className,
    as: Tag = "h1",
    ...props
}) => {
    const textRef = useRef<HTMLElement | null>(null);
    const scrolOpts = useScrollDefaultOptions();

    useGSAP(() => {
        if (!textRef.current) return;

        const splitter = SplitText.create(textRef.current);

        gsap.set(splitter.chars, {
            yPercent: 130,
            opacity: 0,
            scaleY: 0.7,
            transformOrigin: "bottom bottom",
        });

        const tl = gsap.timeline({
            delay: 0.2,
            ...(useScrollTrigger && {
                scrollTrigger: {
                    ...scrolOpts,
                    trigger: textRef.current,
                },
            }),
        });

        tl.to(splitter.chars, {
            opacity: 1,
            yPercent: 0,
            duration: 0.6,
            scaleY: 1,
            ease: "sine.out",
            stagger: {
                amount: 0.55,
                from: "center",
            },
        });
    }, [text]);

    return (
        <Tag
            ref={textRef}
            className={cn("text-middleout", className)}
            {...props}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );
};

export default TextMiddleOut;
