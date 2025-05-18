import { FC } from "react";
import { ModelProps } from "./Model1";
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

const Model2: FC<ModelProps> = ({ prompt, title }) => {
    const { color } = useSelector((state: RootState) => state.studio);
    return (
        <div className="relative h-full w-full">
            <div className="mb-8 w-[570px] relative z-20 font-anton text-[4.5rem] leading-[90px] font-bold text-black">
                {title}
            </div>

            <div className="absolute top-0 right-0">
                <img
                    src="/icons/emoji-angry.svg"
                    className="size-16"
                    alt="emoji-icon"
                />
            </div>

            <div
                className="h-[150px] relative -left-[70px] -rotate-10 -top-[40px] w-[380px] rounded-xl object-cover bg-[#f77b6b]"
            />

            <div className="mt-[55px] w-full">
                <p
                    className={cn(
                        "text-2xl whitespace-pre-line",
                        `text-[${color}]`,
                    )}
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

export default Model2;
