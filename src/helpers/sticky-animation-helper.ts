import gsap from "gsap";

export const getGap = () => {
    const w = window.innerWidth;
    if (w < 764) return w * 5.5;
    if (w < 1024) return w * 3;
    if (w < 1280) return w * 2.3;
    if (w < 1560) return w * 2;
    return w * 2.1;
};

export const animateTitle = (
    titleRef: React.RefObject<HTMLDivElement | null>,
    isProgressing: boolean,
) => {
    gsap.to(titleRef.current, {
        y: isProgressing ? -250 : 0,
        x: 0,
        opacity: isProgressing ? 0 : 1,
        position: isProgressing ? "absolute" : "relative",
        duration: 0.4,
        ease: "power2.out",
    });
};

export const animateHeader = (
    headerRef: React.RefObject<HTMLDivElement | null>,
    isProgressing: boolean,
) => {
    gsap.to(headerRef.current, {
        opacity: isProgressing ? 1 : 0,
        y: isProgressing ? 0 : 30,
        duration: 0.4,
        ease: "power2.out",
    });
};

export const animateOnLeave = (
    headerRef: React.RefObject<HTMLDivElement | null>,
    titleRef: React.RefObject<HTMLDivElement | null>,
    section: HTMLDivElement,
) => {
    gsap.to([headerRef.current, titleRef.current], {
        duration: 0.3,
        delay: 0.1,
        y: -150,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: headerRef.current,
            endTrigger: section,
            start: "top top",
            end: "bottom center",
        },
    });
};

export const createQuickAnimations = (
    nameContainer: Element,
    roleContainer: Element,
) => {
    return {
        nameAnimation: gsap.quickTo(nameContainer, "y", {
            duration: 0.35,
            delay: 0.2,
            ease: "power2.out",
        }),
        roleAnimation: gsap.quickTo(roleContainer, "y", {
            duration: 0.35,
            delay: 0.2,
            ease: "power2.out",
        }),
    };
};

export const createCardObserver = (
    cards: HTMLElement[],
    activeIndex: React.MutableRefObject<number>,
    nameAnimation: (value: number) => void,
    roleAnimation: (value: number) => void,
    roleTextHeight: number,
    nameTextHeight: number,
) => {
    const observerOptions = {
        root: null,
        rootMargin: "0px -50% 0px -50%",
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const idx = cards.indexOf(entry.target as HTMLElement);
            if (entry.isIntersecting) {
                activeIndex.current = idx;
                nameAnimation(-nameTextHeight * idx);
                roleAnimation(-roleTextHeight * idx);
            }
        });
    }, observerOptions);

    cards.forEach((card) => observer.observe(card));

    return observer;
};

export const slideCards = (
    cards: HTMLElement[],
    progress = 0,
    speedFactor = 0.26,
) => {
    const gap = getGap();
    const arcAngle = Math.PI * 0.4;
    const startAngle = Math.PI / 2 - arcAngle / 2;
    const MoveInterval = cards.length * 1.48;
    const adjustedProgress = progress * MoveInterval * speedFactor;

    cards.forEach((card, i) => {
        const normalizedProgress = -i / cards.length;
        const sliderProgress = normalizedProgress + adjustedProgress;
        const angle = startAngle + arcAngle * sliderProgress;

        const x = Math.cos(angle) * gap;
        const y = Math.sin(angle) * gap;
        const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

        gsap.to(card, {
            x,
            y: -y + gap,
            rotation: -rotation,
            transformOrigin: "center center",
            ease: "power4.out",
        });
    });
};

export const calculateStickyHeight = (
    cards: HTMLElement[],
    heightMultiplicator = 0.42,
) => {
    const cardHeight = cards[0]?.offsetHeight;
    return (
        cards.length * (window.innerHeight + cardHeight) * heightMultiplicator
    );
};
