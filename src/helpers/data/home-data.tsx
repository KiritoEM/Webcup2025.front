import { AboutCardProps } from "@/features/(client)/home/components/About";
import { Leaf } from "../icons";
import { FAQAccordionProps } from "@/features/(client)/home/components/FAQ";

export const ABOUT_DATA: AboutCardProps[] = [
    {
        cardIcon: <Leaf className="size-6 fill-black" />,
        title: "card1.title",
        description: "card1.description",
    },
    {
        cardIcon: <Leaf className="size-6 fill-black" />,
        title: "card2.title",
        description: "card2.description",
    },
    {
        cardIcon: <Leaf className="size-6 fill-black" />,
        title: "card3.title",
        description: "card3.description",
    },
];

export const FAQ_DATA: FAQAccordionProps[] = [
    {
        response: "accordion1.response",
        question: "accordion1.question",
    },
    {
        response: "accordion2.response",
        question: "accordion2.question",
    },
    {
        response: "accordion3.response",
        question: "accordion3.question",
    },
    {
        response: "accordion4.response",
        question: "accordion4.question",
    },
];
