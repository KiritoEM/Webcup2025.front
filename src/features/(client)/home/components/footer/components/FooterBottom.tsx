import { Logo } from "@/helpers/icons";
import { JSX } from "react";

const FooterBottom = (): JSX.Element => {
    return (
        <section className="footer-bottom relative z-20 w-full">
            <Logo className="mx-auto size-full w-full px-14 py-14" />
        </section>
    );
};

export default FooterBottom;
