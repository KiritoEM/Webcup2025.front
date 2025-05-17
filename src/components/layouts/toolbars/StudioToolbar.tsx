import { STUDIO_TOOLBAR_LIST } from "@/helpers/data/studio-data";
import { JSX } from "react";

const StudioToolbar = (): JSX.Element => {
    return (
        <div className="studio-toolbar fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-10 rounded-xl bg-[#2A2A2A] px-12 py-4 opacity-90 backdrop-blur-sm">
            {STUDIO_TOOLBAR_LIST.map((item, index) => (
                <article
                    key={index}
                    className="studio-toolbar__item flex flex-col items-center"
                >
                    {item.icon}

                    <p className="text-sm text-[#EAEEFEB2]/70">{item.label}</p>
                </article>
            ))}
        </div>
    );
};

export default StudioToolbar;
