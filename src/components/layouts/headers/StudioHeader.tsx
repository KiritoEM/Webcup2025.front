import { Button } from "@/components/ui/button";
import { EyeIc } from "@/helpers/icons";
import { ArrowLeft } from "lucide-react";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

const StudioHeader = (): JSX.Element => {
    const { t } = useTranslation("studio");
    return (
        <header className="studio-header w-full overflow-hidden border-b-3 border-[#FFDD9B]">
            <div className="header-container container  flex justify-between px-5 py-6">
                <Button
                    variant="ghost"
                    className="studio-header__back-btn font- font-dm text-2xl"
                >
                    <ArrowLeft className="size-6" /> TheStudio
                </Button>

                <div className="header-actions flex w-fit items-center gap-6">
                    <Button
                        variant="ghost"
                        className="header-actions__apercu font- font-dm"
                    >
                        {t("preview")} <EyeIc className="size-6 fill-primary" />
                    </Button>

                    <Button className="header-actions__share rounded-sm bg-[#1F57E7] !px-4 font-medium text-white">
                        {t("share")}
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default StudioHeader;
