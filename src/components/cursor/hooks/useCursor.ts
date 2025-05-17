import { INTERACTIVE_ELEMENTS, TEXT_ELEMENTS } from "@/helpers/constant";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const useCursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const followerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const setCursorX = gsap.quickTo(cursor, "x", {
            duration: 0.1,
            ease: "power3",
        });
        const setCursorY = gsap.quickTo(cursor, "y", {
            duration: 0.1,
            ease: "power3",
        });

        const setFollowerX = gsap.quickTo(follower, "x", {
            duration: 0.3,
            ease: "power3",
        });
        const setFollowerY = gsap.quickTo(follower, "y", {
            duration: 0.3,
            ease: "power3",
        });

        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;

            setCursorX(x);
            setCursorY(y);

            setFollowerX(x);
            setFollowerY(y);
        };

        if (typeof window !== "undefined") {
            window.addEventListener("mousemove", handleMouseMove);
        }
    }, [cursorRef.current]);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const interactiveMouseEnter = () => {
            gsap.to(follower, {
                opacity: 0,
                duration: 0.3,
                ease: "power3",
            });

            gsap.to(cursor, {
                scale: 4,
                duration: 0.3,
                ease: "power3",
            });
        };

        const textMouseEnter = () => {
            gsap.to(follower, {
                scale: 1.4,
                duration: 0.3,
                ease: "power3",
            });

            gsap.to(cursor, {
                scale: 2,
                duration: 0.3,
                ease: "power3",
            });
        };

        const interactiveMouseLeave = () => {
            gsap.to(follower, {
                opacity: 1,
                duration: 0.3,
                ease: "power3",
            });

            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
                ease: "power3",
            });
        };

        const textMouseLeave = () => {
            gsap.to(follower, {
                scale: 1,
                duration: 0.3,
                ease: "power3",
            });

            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
                ease: "power3",
            });
        };

        const allInteractiveElements =
            document.querySelectorAll(INTERACTIVE_ELEMENTS);
        const allTextElements = document.querySelectorAll(TEXT_ELEMENTS);

        allInteractiveElements.forEach((el) => {
            el.addEventListener("mouseenter", interactiveMouseEnter);
            el.addEventListener("mouseleave", interactiveMouseLeave);
        });

        allTextElements.forEach((el) => {
            el.addEventListener("mouseenter", textMouseEnter);
            el.addEventListener("mouseleave", textMouseLeave);
        });

        return () => {
            allInteractiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", interactiveMouseEnter);
                el.removeEventListener("mouseleave", interactiveMouseLeave);
            });

            allTextElements.forEach((el) => {
                el.removeEventListener("mouseenter", textMouseEnter);
                el.removeEventListener("mouseleave", textMouseLeave);
            });
        };
    }, []);

    return { cursorRef, followerRef };
};

export default useCursor;
