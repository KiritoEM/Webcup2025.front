import { ABOUT_DATA } from "@/helpers/data/home-data";
import { FC, JSX } from "react";
import { useTranslation } from "react-i18next";

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
        <article className="about-card rounded-lg border border-input bg-[#0D0D0D] px-5 py-12">
            <div className="about-card__icon mx-auto w-fit rounded-xl bg-white p-5">
                {cardIcon}
            </div>

            <div className="about-card__texts mt-8 flex flex-col items-center space-y-3">
                <h5 className="text-xl font-semibold">{t(title)}</h5>
                <p className="text-center text-primary">{t(description)}</p>
            </div>
        </article>
    );
};

const About = (): JSX.Element => {
    const { t } = useTranslation("home", { keyPrefix: "about" });

    return (
        <section className="about container w-full overflow-hidden px-5 py-24">
            <div className="header mx-auto w-fit space-y-5 text-center">
                <h2 className="header__title font-dm text-5xl font-semibold">
                    {t("title")}
                </h2>
                <p className="header__description max-w-[600px] text-primary">
                    {t("description")}
                </p>
            </div>

            <div className="about__cards mt-18 grid grid-cols-3 gap-5">
                {ABOUT_DATA.map((about, index) => (
                    <AboutCard key={index} {...about} />
                ))}
            </div>
        </section>
    );
};

export default About;
