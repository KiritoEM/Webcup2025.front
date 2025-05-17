import { JSX, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import gsap from "gsap";
import MainNav from "./navbars/main-nav";
import { ReactLenis, LenisRef } from "lenis/react";

const ClientLayout = (): JSX.Element => {
    const lenisRef = useRef<LenisRef | null>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <ReactLenis
            root
            options={{
                duration: 1.5,
                smoothWheel: true,
                wheelMultiplier: 0.75,
                easing: (t: number) => 1 - Math.pow(3, -10 * t),
            }}
            ref={lenisRef}
        >
            <main className="w-full dark:bg-stone-950">
                <MainNav />
                <Outlet />
            </main>
        </ReactLenis>
    );
};

export default ClientLayout;
