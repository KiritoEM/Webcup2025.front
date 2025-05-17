import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, useRef } from "react";
import { AnimatedTextProps } from "./types";
import { useScrollDefaultOptions } from "@/helpers/constant";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface TextFollowProps extends AnimatedTextProps {
    scrub?: boolean;
    duration?: number;
    stagger?: number;
    byLine?: boolean;
    delay?: number;
}

const TextFollow: FC<TextFollowProps> = ({
    text,
    useScrollTrigger = true,
    scrub = false,
    duration = 0.2,
    stagger = 0.15,
    className,
    delay = 0,
    byLine = false,
    as: Tag = "h1",
    ...props
}) => {
    const textRef = useRef<HTMLElement | null>(null);
    const scrolOpts = useScrollDefaultOptions();

    useGSAP(() => {
        if (!textRef.current) return;

        const split = new SplitText(textRef.current, {
            type: byLine ? "lines" : "words",
            preserveHTMLTags: true,
        });
        const words = split.words;
        const lines = split.lines;

        const target = byLine ? lines : words;

        const tl = gsap.timeline(
            useScrollTrigger
                ? {
                      scrollTrigger: {
                          ...scrolOpts,
                          trigger: textRef.current,
                          start: "+=55 78%",
                          end: "bottom 10%",
                          ...(scrub && {
                              scrub: 1,
                          }),
                      },
                  }
                : {},
        );

        tl.to(target, {
            backgroundPosition: "0% 0%",
            ease: "power2.inOut",
            duration,
            stagger,
            ...(!scrub && {
                delay,
            }),
        });

        return () => {
            tl.kill();
        };
    }, [text, scrub, duration, stagger]);

    return (
        <Tag
            ref={textRef}
            className={cn("text-follow", className)}
            {...props}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );
};

export default TextFollow;
