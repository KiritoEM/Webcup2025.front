import React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { usePageTransition } from "@/Provider.tsx/PageTransitionProvider";
import "./PageTransitionAnimation.css";
import StripCenterTransition from "./StripCenterTransition";

const getLoadingScreen = (selectedPath: string) => {
    switch (selectedPath) {
        case "/login":
            return <StripCenterTransition />;
        case "/signup":
            return <StripCenterTransition />;
        default:
            return <></>;
    }
};

const PageTransitionAnimation: React.FC = () => {
    const { isTransitioning, targetPath } = usePageTransition();
    const location = useLocation();

    // Select animation based on target path (or current path if not transitioning)
    const selectedPath =
        isTransitioning && targetPath ? targetPath : location.pathname;

    return (
        <AnimatePresence>
            {isTransitioning && getLoadingScreen(selectedPath)}
        </AnimatePresence>
    );
};

export default PageTransitionAnimation;
