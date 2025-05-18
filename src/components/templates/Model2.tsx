import { FC } from "react";
import { ModelProps } from "./Model1";
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

const Model2: FC<ModelProps> = ({ prompt, title }) => {
    const { color } = useSelector((state: RootState) => state.studio);
    return (
        <div className="relative h-full w-full overflow-hidden">
            <div className="relative z-20 mb-8 w-[570px] font-anton text-[4.5rem] leading-[90px] font-bold text-black">
                {title}
            </div>

            <div className="absolute top-0 right-0">
                <img
                    src="/icons/emoji-angry.svg"
                    className="size-16"
                    alt="emoji-icon"
                />
            </div>

            <div className="relative -top-[40px] -left-[70px] h-[150px] w-[380px] -rotate-10 rounded-xl bg-[#f77b6b] object-cover" />

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
