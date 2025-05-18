import { FC, JSX, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_DATA } from "@/helpers/data/home-data";
import TextLift from "@/components/animations/TextLift";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export type FAQAccordionProps = {
    response: string;
    question: string;
    value: string;
};

const FAQAccordion: FC<FAQAccordionProps> = ({
    response,
    question,
    value,
}): JSX.Element => {
    const { t } = useTranslation("home", { keyPrefix: "faq" });
    return (
        <AccordionItem value={value}>
            <AccordionTrigger className="[&>svg]:text-dark text-xl text-primary [&>svg]:size-7 dark:[&>svg]:text-white">
                {t(question)}
            </AccordionTrigger>
            <AccordionContent className="text-base">
                {t(response)}
            </AccordionContent>
        </AccordionItem>
    );
};

const FAQ = (): JSX.Element => {
    const { t } = useTranslation("home", { keyPrefix: "faq" });
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
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <section
            id="mainNav.faq"
            className="FAQ mx-auto flex w-full max-w-[850px] flex-col items-center overflow-hidden px-5 py-24"
        >
            <TextLift
                className="text-center font-dm text-5xl font-semibold text-primary lg:text-6xl"
                text={t("title")}
            />

            <Accordion
                className="FAQ__accordion mt-14 w-full"
                type="single"
                collapsible
                ref={sectionRef}
            >
                {FAQ_DATA.map((faq, index) => (
                    <FAQAccordion
                        key={index}
                        value={`item-${index}`}
                        question={faq.question}
                        response={faq.response}
                    />
                ))}
            </Accordion>
        </section>
    );
};

export default FAQ;
