import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { SparklesText } from "@/components/animations/sparkles-text";
import TextMiddleOut from "@/components/animations/TexteMiddleOut";
import TextFollow from "@/components/animations/TextFollow";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = (): JSX.Element => {
    const { t: tHome } = useTranslation("lists", { keyPrefix: "hero" });

    return (
        <div className="hero flex min-h-screen w-full items-center overflow-hidden">
            <div className="hero__content relative mx-auto mb-[150px] flex flex-col items-center justify-center space-y-5 px-4 pt-[27vh] text-center md:px-0  md:pt-[14vh] lg:pt-[30vh] 2xl:pt-[26.5vh]">
                <SparklesText>
                    <div className="hero-content__title mt-5 font-dm text-[13vw] leading-none text-primary md:mt-2 md:text-[9vw] lg:text-[6vw] xl:text-[6.4vw] 2xl:text-[5.6vw]">
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
                    className="hero-content__text mb-8 max-w-[800px] text-base lg:text-lg"
                    text={tHome("description")}
                />
            </div>
        </div>
    );
};

export default Hero;
