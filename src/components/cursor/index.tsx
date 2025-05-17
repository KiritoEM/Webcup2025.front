import { Fragment, JSX } from "react";
import useCursor from "./hooks/useCursor";

const Cursor = (): JSX.Element => {
    const { cursorRef, followerRef } = useCursor();
    return (
        <Fragment>
            <span
                id="custom-cursor"
                ref={cursorRef}
                className="pointer-events-none fixed top-0 left-0 z-50 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary mix-blend-difference lg:block"
            ></span>

            <span
                ref={followerRef}
                className="pointer-events-none fixed top-0 left-0 z-40 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary lg:block"
            ></span>
        </Fragment>
    );
};

export default Cursor;
