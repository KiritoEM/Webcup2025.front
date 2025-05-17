import { Ambiance, Color, Elements, Text } from "../icons";
import { Image } from "lucide-react";

export const STUDIO_TOOLBAR_LIST = [
    {
        label: "text",
        icon: <Text className="size-7 fill-[#EAEEFEB2]/70" />,
    },
    {
        label: "color",
        icon: <Color className="size-7 fill-[#EAEEFEB2]/70" />,
    },
    {
        label: "elements",
        icon: <Elements className="size-7 fill-[#EAEEFEB2]/70" />,
    },
    {
        label: "image",
        icon: <Image className="size-7 text-[#EAEEFEB2]/70" />,
    },
    {
        label: "music",
        icon: <Ambiance className="size-8 fill-[#EAEEFEB2]/70" />,
    },
];
