import { JSX, useLayoutEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import MainNav from "./navbars/main-nav";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ClientLayout = (): JSX.Element => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const isMobile = window.matchMedia("(max-width: 1023px)").matches;

        const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: isMobile ? 1.6 : 2,
            effects: true,
            normalizeScroll: isMobile,
        });

        ScrollTrigger.defaults({
            scroller: wrapperRef.current,
        });

        ScrollTrigger.refresh();

        return () => {
            smoother.kill();
        };
    }, []);

    return (
        <main ref={wrapperRef} className="w-full dark:bg-stone-950">
            <div ref={contentRef}>
                <MainNav />
                <Outlet />
            </div>
        </main>
    );
};

export default ClientLayout;
