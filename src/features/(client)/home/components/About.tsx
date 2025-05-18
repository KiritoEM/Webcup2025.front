import TextFollow from "@/components/animations/TextFollow";
import { ABOUT_DATA } from "@/helpers/data/home-data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, JSX } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

export type AboutCardProps = {
    cardIcon: JSX.Element;
    title: string;
    description: string;
};

const AboutCard: FC<AboutCardProps> = ({
    description,
    cardIcon,
    title,
}): JSX.Element => {
    const { t } = useTranslation("home", { keyPrefix: "about" });

    return (
        <article className="about-card rounded-lg border border-input bg-[#0D0D0D] px-5 py-12 text-white">
            <div className="about-card__icon mx-auto w-fit rounded-xl bg-white p-5 shadow-2xl shadow-white">
                {cardIcon}
            </div>

            <div className="about-card__texts mt-8 flex flex-col items-center space-y-3">
                <h5 className="text-lg font-semibold lg:text-xl">{t(title)}</h5>
                <p className="text-center text-sm  text-gray-100 lg:text-base">
                    {t(description)}
                </p>
            </div>
        </article>
    );
};

const About = (): JSX.Element => {
    const { t } = useTranslation("home", { keyPrefix: "about" });

    useGSAP(() => {
        gsap.set(".about-card", {
            opacity: 0,
            y: 100,
        });

        gsap.to(".about-card", {
            duration: 0.5,
            ease: "power1.out",
            opacity: 1,
            delay: 0.2,
            y: 0,
            scrollTrigger: {
                trigger: ".about-card",
                start: "top 86%",
                end: "bottom 10%",
                toggleActions: "play reverse restart reverse",
            },
        });
    }, []);

    return (
        <section id="mainNav.about" className="about container w-full overflow-hidden px-5 py-24">
            <div className="header mx-auto w-fit space-y-5 text-center">
                <TextFollow
                    as="h2"
                    byLine
                    duration={1.4}
                    stagger={0.02}
                    className="header__title font-dm text-4xl font-semibold md:text-5xl 2xl:text-6xl"
                    text={t("title")}
                />

                <TextFollow
                    as="p"
                    byLine
                    duration={1.4}
                    stagger={0.02}
                    delay={0.08}
                    className="header__description max-w-[700px]"
                    text={t("description")}
                />
            </div>

            <div className="about__cards mt-18 grid gap-8 md:grid-cols-3 md:gap-5">
                {ABOUT_DATA.map((about, index) => (
                    <AboutCard key={index} {...about} />
                ))}
            </div>
        </section>
    );
};

export default About;
