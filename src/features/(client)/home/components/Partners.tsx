import InfiniteScroll from "@/components/animations/infinite-scroll/InfiniteScroll";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

const Partners = (): JSX.Element => {
    const { t } = useTranslation("home");
    return (
        <section className="partners container w-full overflow-hidden py-12">
            <p className="parteners__title text-center text-lg text-[#7A7A7A]">
                {t("partnersTitle")}
            </p>

            <div className="partners__infinite-scroll mt-10">
                <InfiniteScroll />
            </div>
        </section>
    );
};

export default Partners;
