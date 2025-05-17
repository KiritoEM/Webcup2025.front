import { FC, JSX } from "react";
import { useTranslation } from "react-i18next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_DATA } from "@/helpers/data/home-data";

export type FAQAccordionProps = {
    response: string;
    question: string;
};

const FAQAccordion: FC<FAQAccordionProps> = ({
    response,
    question,
}): JSX.Element => {
    const { t } = useTranslation("home", { keyPrefix: "faq" });
    return (
        <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl text-primary [&>svg]:size-7 [&>svg]:text-white">
                {t(question)}
            </AccordionTrigger>
            <AccordionContent>{t(response)}</AccordionContent>
        </AccordionItem>
    );
};

const FAQ = (): JSX.Element => {
    const { t } = useTranslation("home", { keyPrefix: "faq" });
    return (
        <section className="FAQ mx-auto flex w-full max-w-[850px] flex-col items-center overflow-hidden px-5 py-24">
            <h1
                className="text-center font-dm text-5xl text-primary"
                dangerouslySetInnerHTML={{ __html: t("title") }}
            />

            <Accordion
                className="FAQ__accordion mt-14 w-full"
                type="single"
                collapsible
            >
                {FAQ_DATA.map((faq, index) => (
                    <FAQAccordion key={index} {...faq} />
                ))}
            </Accordion>
        </section>
    );
};

export default FAQ;
