import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { STUDIO_TOOLBAR_LIST } from "@/helpers/data/studio-data";
import { RootState } from "@/lib/redux/store";
import { cn } from "@/lib/utils";
import { JSX } from "react";
import { useSelector } from "react-redux";

const StudioToolbar = (): JSX.Element => {
    const { isPreview } = useSelector((state: RootState) => state.studio);
    return (
        <div className={
            cn("studio-toolbar fixed bottom-0 sm:bottom-6 left-1/2 z-50 -translate-x-1/2 items-center gap-14 sm:rounded-xl bg-[#2A2A2A] px-12 py-4 opacity-90 backdrop-blur-sm", isPreview ? "hidden" : "flex")
        }>
            {STUDIO_TOOLBAR_LIST.map((item, index) => (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <article
                            key={index}
                            className="studio-toolbar__item flex cursor-pointer flex-col items-center"
                        >
                            {item.icon}
                            <p className="text-sm text-[#EAEEFEB2]/70">
                                {item.label}
                            </p>
                        </article>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        side="top"
                        align="center"
                        sideOffset={8}
                        className="max-w-[430px] min-w-[280px] p-4"
                    >
                        {item.action}
                    </DropdownMenuContent>
                </DropdownMenu>
            ))}
        </div>
    );
};

export default StudioToolbar;
