import { Button } from "@/components/ui/button";
import { JSX, useRef } from "react";
import { useTranslation } from "react-i18next";
import { SparklesText } from "@/components/animations/sparkles-text";
import { ArrowRight } from "lucide-react";
import TextMiddleOut from "@/components/animations/TexteMiddleOut";
import TextFollow from "@/components/animations/TextFollow";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = (): JSX.Element => {
    const { t: tHome } = useTranslation("home", { keyPrefix: "hero" });
    const { t: tCommon } = useTranslation("common");
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useGSAP(() => {
        gsap.set(buttonRef.current, {
            opacity: 0,
            y: 100,
        });

        gsap.to(buttonRef.current, {
            duration: 0.5,
            ease: "power1.out",
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: buttonRef.current,
                start: "top 86%",
                end: "bottom 10%",
                toggleActions: "play reverse restart reverse",
            },
        });
    }, []);

    return (
        <div className="hero bg-custom-gradient flex min-h-screen items-center overflow-hidden">
            <div className="hero__content relative mx-auto mb-[150px] flex flex-col items-center justify-center space-y-5 pt-[30vh] text-center">
                <div className="tag inline-flex items-center gap-6 rounded-lg border px-5 py-2 text-sm text-[#ffffff80]">
                    <span>{tHome("tagLabel")}</span>
                    <span className="inline-flex h-0 items-center gap-2 text-primary">
                        {tHome("tagBtn")} <ArrowRight className="size-4" />
                    </span>
                </div>

                <SparklesText>
                    <div className="hero-content__title font-dm text-[6.6vw] leading-none text-primary xl:text-[7.2vw] 2xl:text-7xl 2xl:text-[7.6vw]">
                        <h1>{tHome("title")}</h1>
                        <TextMiddleOut
                            useScrollTrigger={false}
                            text={tHome("titlePart2")}
                        />
                    </div>
                </SparklesText>

                <TextFollow
                    as="p"
                    useScrollTrigger={false}
                    byLine
                    duration={1.4}
                    stagger={0.02}
                    delay={0.32}
                    className="hero-content__text mb-8 max-w-[670px] text-lg"
                    text={tHome("description")}
                />

                <Button
                    size="lg"
                    className="hero__cta rounded-full"
                    ref={buttonRef}
                >
                    {tCommon("btn.start")}
                </Button>
            </div>
        </div>
    );
};

export default Hero;
