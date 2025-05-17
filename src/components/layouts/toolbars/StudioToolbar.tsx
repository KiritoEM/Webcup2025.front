import { STUDIO_TOOLBAR_LIST } from "@/helpers/data/studio-data";
import { JSX } from "react";

const StudioToolbar = (): JSX.Element => {
    return (
        <div className="studio-toolbar fixed bottom-6 left-1/2 w-fit -translate-x-1/2 rounded-xl bg-[#2A2A2A] px-10 py-6 opacity-90 backdrop-blur-sm">
            {STUDIO_TOOLBAR_LIST.map((item, index) => (
                <article key={index} className="studio-toolbar__item">
                    {item.icon}

                    <p>{item.label}</p>
                </article>
            ))}
        </div>
    );
};

export default StudioToolbar;
