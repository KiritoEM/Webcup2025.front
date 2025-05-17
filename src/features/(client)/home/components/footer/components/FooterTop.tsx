import { Button } from "@/components/ui/button";
import { TEAM_MEMBER, THANKS_TO } from "@/helpers/data/home-data";
import { ArrowRight } from "lucide-react";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

const FooterTop = (): JSX.Element => {
    const { t } = useTranslation("home", { keyPrefix: "footer" });
    const { t: tCommon } = useTranslation("common", { keyPrefix: "mainNav" });
    return (
        <section className="footer-top footer-top relative z-20 container flex items-start gap-30 px-5 pb-20">
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
