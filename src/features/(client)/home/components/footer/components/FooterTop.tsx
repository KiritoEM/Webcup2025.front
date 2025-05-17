import { Button } from "@/components/ui/button";
import { TEAM_MEMBER, THANKS_TO } from "@/helpers/data/home-data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { JSX, useRef } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const FooterTop = (): JSX.Element => {
    const { t } = useTranslation("home", { keyPrefix: "footer" });
    const { t: tCommon } = useTranslation("common", { keyPrefix: "mainNav" });

    const sectionRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.set(sectionRef.current, {
            opacity: 0,
            y: 100,
        });

        gsap.to(sectionRef.current, {
            duration: 0.5,
            delay: 0.2,
            ease: "power1.out",
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 86%",
                end: "bottom 10%",
                toggleActions: "play reverse restart reverse",
            },
        });
    }, []);
    return (
        <section
            className="footer-top footer-top relative z-20 container flex items-start gap-30 px-5 pb-20"
            ref={sectionRef}
        >
            <div className="footer-top__cta w-[40%]">
                <h1
                    className="font-dm text-6xl leading-none text-primary"
                    dangerouslySetInnerHTML={{ __html: t("cta.text") }}
                />
                <Button size="lg" className="mt-8 rounded-full !px-5">
                    {t("cta.btnLabel")} <ArrowRight className="size-6" />
                </Button>
            </div>

            <div className="menu-items grid w-[60%] grid-cols-3">
                <div className="menu-items__navigation">
                    <h5 className="text-xl text-primary">{t("navigation")}</h5>

                    <ul className="mt-5 space-y-5 text-sm font-normal">
                        <li className="text-primary/70 hover:text-blue-500">
                            {tCommon("home")}
                        </li>
                        <li className="text-primary/70 hover:text-blue-500">
                            {tCommon("about")}
                        </li>
                        <li className="text-primary/70 hover:text-blue-500">
                            {tCommon("example")}
                        </li>
                        <li className="text-primary/70 hover:text-blue-500">
                            {tCommon("faq")}
                        </li>
                    </ul>
                </div>

                <div className="menu-items__navigation">
                    <h5 className="text-xl text-primary">{t("thanks")}</h5>

                    <ul className="mt-5 space-y-5 text-sm font-normal">
                        {THANKS_TO.map((element, index) => (
                            <li
                                key={index}
                                className="text-primary/70 hover:text-blue-500"
                            >
                                {element}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="menu-items__navigation">
                    <h5 className="text-xl text-primary">{t("team")}</h5>

                    <ul className="mt-5 space-y-5 text-sm font-normal">
                        {TEAM_MEMBER.map((element, index) => (
                            <li
                                key={index}
                                className="text-primary/70 hover:text-blue-500"
                            >
                                {element}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FooterTop;
