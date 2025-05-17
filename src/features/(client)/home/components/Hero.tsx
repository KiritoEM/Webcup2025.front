import { Button } from "@/components/ui/button";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { GridPattern } from "@/components/animations/grid-pattern";
import { cn } from "@/lib/utils";
import { SparklesText } from "@/components/animations/sparkles-text";

const Hero = (): JSX.Element => {
    const { t: tHome } = useTranslation("home", { keyPrefix: "hero" });
    const { t: tCommon } = useTranslation("common");

    return (
        <div
            className="home__hero flex min-h-screen overflow-hidden"
            data-speed="0.8"
        >
            <GridPattern
                squares={[
                    [4, 4],
                    [5, 1],
                    [8, 2],
                    [5, 3],
                    [5, 5],
                    [10, 10],
                    [12, 15],
                    [15, 10],
                    [10, 15],
                    [15, 10],
                    [10, 15],
                    [15, 15],
                ]}
                className={cn(
                    "[mask-image:radial-gradient(540px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] mt-[8vh] h-[120%] skew-y-12",
                )}
            />

            <div className="hero-content relative top-[calc(5vh+45px)] mx-auto flex flex-col items-center justify-center space-y-6 text-center">
                <SparklesText>
                    <h1 className="hero-content__title font-zektonbo text-6xl leading-tight text-secondary 2xl:text-7xl">
                        <span>{tHome("title")}</span>&nbsp;
                        <br />
                        <span className="text-primary">
                            {tHome("titleHighlight")}
                        </span>
                    </h1>
                </SparklesText>
                <p className="hero-content__text mb-8 max-w-[600px] text-lg text-secondary/70">
                    {tHome("description")}
                </p>

                <div className="hero-content__cta mt-2 flex gap-6">
                    <Button size="lg" className="rounded-full">
                        {tCommon("btn.start")}
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full"
                    >
                        {tCommon("btn.learn")} <ArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
