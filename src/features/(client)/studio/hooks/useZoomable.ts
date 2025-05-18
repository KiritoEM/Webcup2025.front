import { useEffect, useRef, useState } from "react";

const useZoomable = (contentWidth = 690, contentHeight = 500) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState<number>(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        const delta = -e.deltaY;
        const zoomFactor = 0.001;
        const newScale = scale + delta * zoomFactor;
        setScale(Math.max(0.1, Math.min(newScale, 5))); // 0.1x to 5x
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return;
        setIsDragging(true);
        setStartPos({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - startPos.x,
            y: e.clientY - startPos.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            const viewportWidth = container.clientWidth;
            const viewportHeight = container.clientHeight;

            const centerX = (viewportWidth - contentWidth) / 2;
            const centerY = (viewportHeight - contentHeight) / 2 + 50;

            setPosition({
                x: centerX,
                y: centerY,
            });
        }
    }, [contentWidth, contentHeight]);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, startPos]);

    return {
        isDragging,
        position,
        scale,
        handleMouseDown,
        containerRef,
        handleMouseMove,
        handleMouseUp,
        handleWheel,
    };
};

export default useZoomable;
