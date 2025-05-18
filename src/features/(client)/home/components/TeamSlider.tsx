import { TEAM_INFO } from "@/helpers/data/home-data";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import useStickySection from "../hooks/useStickySection";

const TeamSlider = (): JSX.Element => {
    const { t } = useTranslation("home", { keyPrefix: "team" });
    const { headerRef, sectionRef, titleRef } = useStickySection();

    return (
        <section
        id="mainNav.team"
            ref={sectionRef}
            className="team-slider relative isolate h-[110vh] w-full overflow-hidden pt-22"
        >
            <h1
                ref={titleRef}
                className="team-slider__main-title clip-path ml-8 h-fit font-dm text-5xl font-semibold text-primary will-change-transform md:text-6xl lg:text-7xl"
            >
                {t("title")}
            </h1>

            <div
                className="team-info absolute z-40 m-8 flex translate-y-[10px] flex-col  opacity-0 will-change-transform"
                ref={headerRef}
            >
                <div className="team-info__name clip-path h-[80px] overflow-hidden">
                    <div className="name-container">
                        {TEAM_INFO.map((info, i) => (
                            <h1
                                key={i}
                                className="h-[80px] font-dm text-5xl text-primary md:text-7xl"
                            >
                                {info.name}
                            </h1>
                        ))}
                    </div>
                </div>

                <div className="team-info__role mt-3 h-[40px] overflow-hidden">
                    <div className="role-container">
                        {TEAM_INFO.map((info, i) => (
                            <h2
                                key={i}
                                className="h-[40px] text-2xl text-secondary dark:mix-blend-difference"
                            >
                                {info.role}
                            </h2>
                        ))}
                    </div>
                </div>
            </div>

            <div className="image-slider absolute top-[30%] left-1/2 w-[150vw] -translate-x-1/2 -translate-y-[50%] transform will-change-transform lg:top-[31%] xl:top-[28%]">
                {TEAM_INFO.map(
                    (info, index) =>
                        info.profile_img && (
                            <div
                                key={index}
                                className="image-slider__card absolute top-1/2 left-1/2 -ml-[250px] h-[390px] w-[390px] origin-center overflow-hidden rounded-md will-change-transform md:h-[400px] md:w-[400px] lg:h-[380px] lg:w-[380px] xl:h-[390px] xl:w-[390px] 2xl:h-[480px] 2xl:w-[480px]"
                            >
                                <img
                                    src={info.profile_img}
                                    alt={`${info.name}-img`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ),
                )}
            </div>
        </section>
    );
};

export default TeamSlider;
