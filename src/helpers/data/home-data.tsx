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

export const TEAM_INFO = [
    {
        name: "Loick",
        role: "Frontend",
        profile_img: "/home/teams/Loick.png",
    },
    {
        name: "Luca",
        role: "Backend",
        profile_img: "/home/teams/Luca.png",
    },
    {
        name: "Nameno",
        role: "Frontend",
        profile_img: "/home/teams/Nameno.png",
    },
    {
        name: "Sedra",
        role: "Designer",
        profile_img: "/home/teams/Sedra.png",
    },
];

export const FAQ_DATA: FAQAccordionProps[] = [
    {
        response: "accordion1.response",
        question: "accordion1.question",
        value: "",
    },
    {
        response: "accordion2.response",
        question: "accordion2.question",
        value: "",
    },
    {
        response: "accordion3.response",
        question: "accordion3.question",
        value: "",
    },
    {
        response: "accordion4.response",
        question: "accordion4.question",
        value: "",
    },
];

export const THANKS_TO = [
    "Association Webcup",
    "Les partenaires",
    "L’équipe Trimobe",
];

export const TEAM_MEMBER = ["Nameno", "Luca", "Loick", "Sedra"];
