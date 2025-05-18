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
import { Link } from "react-router-dom";

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
        <div className="hero flex min-h-screen w-full items-center overflow-hidden">
            <div className="hero__content relative mx-auto mb-[150px] flex flex-col items-center justify-center space-y-5 px-4 pt-[27vh] text-center md:px-0  md:pt-[14vh] lg:pt-[30vh] 2xl:pt-[26.5vh]">
                <SparklesText>
                    <div className="hero-content__title mt-5 font-dm text-[13vw] leading-none text-primary md:mt-2 md:text-[9.5vw] lg:text-[6.6vw] xl:text-[7.2vw] 2xl:text-[5.6vw]">
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
                    className="hero-content__text mb-8 max-w-[670px] text-base lg:text-lg"
                    text={tHome("description")}
                />

                <Link to={"/test-page"}>
                    <Button
                        size="lg"
                        className="hero__cta rounded-full"
                        ref={buttonRef}
                    >
                        {tCommon("btn.start")}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
