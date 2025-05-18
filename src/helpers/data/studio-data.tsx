import TextPrompt from "@/components/TextPrompt";
import { Color, Text } from "../icons";
import { Globe } from "lucide-react";
import PickColor from "@/components/PickColor";
import ToggleModel from "@/components/ToggleModel";

export const STUDIO_TOOLBAR_LIST = [
    {
        label: "text",
        icon: <Text className="size-7 fill-[#EAEEFEB2]/70" />,
        action: <TextPrompt />,
    },
    {
        label: "color",
        icon: <Color className="size-7 fill-[#EAEEFEB2]/70" />,
        action: <PickColor />,
    },
    {
        label: "template",
        icon: <Globe className="size-8 text-[#EAEEFEB2]/70" />,
        action: <ToggleModel />,
    },
];
