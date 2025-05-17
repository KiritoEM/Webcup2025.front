import { AboutCardProps } from "@/features/(client)/home/components/About";
import { Leaf } from "../icons";

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
