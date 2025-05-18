import Model1 from "@/components/templates/Model1";
import Model2 from "@/components/templates/Model2";
import useZoomable from "@/features/(client)/studio/hooks/useZoomable";
import { RootState } from "@/lib/redux/store";
import { JSX } from "react";
import { useSelector } from "react-redux";

const Studio = (): JSX.Element => {
    const {
        containerRef,
        handleWheel,
        position,
        scale,
        isDragging,
        handleMouseDown,
    } = useZoomable();
    const { activeModel, tagTitle, userText } = useSelector(
        (state: RootState) => state.studio,
    );

    return (
        <section className="studio">
            <div
                ref={containerRef}
                className="studio-container relative h-screen overflow-hidden"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
                <div
                    className={`studio-default-frame relative $ ${activeModel === "model1" ? "bg-[#f1ecd5]" : " bg-[#f0d0d0]"} origin-top-left p-10`}
                    style={{
                        width: "690px",
                        height: "max",
                        transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                        transformOrigin: "0 0",
                    }}
                >
                    {activeModel === "model1" ? (
                        <Model1 title={tagTitle} prompt={userText} />
                    ) : (
                        <Model2 title={tagTitle} prompt={userText} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Studio;
