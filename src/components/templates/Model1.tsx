import { RootState } from "@/lib/redux/store";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { useSelector } from "react-redux";

export type ModelProps = {
    title: string;
    prompt: string;
    img?: string;
};

const Model1: FC<ModelProps> = ({ prompt, title }) => {
    const { color } = useSelector((state: RootState) => state.studio);

    return (
        <div className="relative h-full w-full">
            <div className="relative z-30 mb-8 w-[550px] font-playfair text-[3.7rem] leading-[65px] font-medium text-black">
                {title}
            </div>

            <div className="absolute top-0 right-0">
                <img
                    src="/icons/emoji.svg"
                    className="size-16"
                    alt="emoji-icon"
                />
            </div>

            <div className="absolute top-[80px] right-0 z-10 h-[300px] w-[280px] -rotate-10 rounded-2xl bg-[#FEE09E] p-5" />

            <div className="absolute top-[120px] left-0 z-10 h-[220px] w-[250px] rotate-10 rounded-2xl bg-[#FEE09E] p-5" />

            <div className="relative z-20 mt-[220px] w-full">
                <p
                    className={cn("text-2xl whitespace-pre-line")}
                    style={{
                        color: color,
                    }}
                >
                    {prompt}
                </p>
            </div>
        </div>
    );
};

export default Model1;
