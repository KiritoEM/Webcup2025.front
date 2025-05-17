import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    animateHeader,
    animateOnLeave,
    animateTitle,
    calculateStickyHeight,
    createCardObserver,
    createQuickAnimations,
    slideCards,
} from "@/helpers/sticky-animation-helper";

gsap.registerPlugin(ScrollTrigger);

const useStickySection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const activeIndex = useRef<number>(-1);

    useGSAP(() => {
        if (!sectionRef.current) return;

        const section = sectionRef.current;
        const cards = gsap.utils.toArray<HTMLElement>(
            ".image-slider__card",
            section,
        );
        const speedFactor = 0.26;
        const heightMultiplicator = 0.42;
        const roleTextHeight = 40;
        const nameTextHeight = 80;
        const nameContainer =
            headerRef.current?.querySelector(".name-container");
        const roleContainer =
            headerRef.current?.querySelector(".role-container");
        const stickyHeight = calculateStickyHeight(cards, heightMultiplicator);
        const { nameAnimation, roleAnimation } = createQuickAnimations(
            nameContainer!,
            roleContainer!,
        );

        gsap.config({ force3D: true });

        // Main ScrollTrigger
        const mainTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top+=60 top+=20",
            end: `+=${stickyHeight}px`,
            pin: true,
            pinSpacing: true,
            toggleActions: "play reverse play reverse",
            onUpdate: ({ progress }) => onUpdateTrigger(progress),
            onLeave: () => {
                animateOnLeave(headerRef, titleRef, section);
                sectionRef.current?.setAttribute("data-scroll", "0.5");
            },
        });

        const onUpdateTrigger = (progress: number) => {
            slideCards(cards, progress, speedFactor);

            const isProgressing = progress > 0.2 && progress < 1;

            //animate title
            animateTitle(titleRef, isProgressing);

            //animate header-container
            animateHeader(headerRef, isProgressing);
        };

        const observer = createCardObserver(
            cards,
            activeIndex,
            nameAnimation,
            roleAnimation,
            roleTextHeight,
            nameTextHeight,
        );
        cards.forEach((card) => observer.observe(card));

        // Initialisation
        slideCards(cards, 0, speedFactor);

        const handleResize = () => {
            slideCards(cards, 0, speedFactor);
            mainTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            mainTrigger.kill();
            observer.disconnect();
        };
    }, []);

    return {
        sectionRef,
        titleRef,
        headerRef,
    };
};

export default useStickySection;
