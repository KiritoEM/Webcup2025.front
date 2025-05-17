import { Button } from "@/components/ui/button";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { SparklesText } from "@/components/animations/sparkles-text";
import { ArrowRight } from "lucide-react";

const Hero = (): JSX.Element => {
    const { t: tHome } = useTranslation("home", { keyPrefix: "hero" });
    const { t: tCommon } = useTranslation("common");

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
                    <h1 className="hero-content__title font-dm text-[6.6vw] leading-none text-primary xl:text-[7.2vw] 2xl:text-7xl 2xl:text-[7.6vw]">
                        <span
                            dangerouslySetInnerHTML={{ __html: tHome("title") }}
                        />
                    </h1>
                </SparklesText>
                <p className="hero-content__text mb-8 max-w-[600px] text-lg">
                    {tHome("description")}
                </p>

                <Button size="lg" className="hero__cta rounded-full">
                    {tCommon("btn.start")}
                </Button>
            </div>
        </div>
    );
};

export default Hero;
