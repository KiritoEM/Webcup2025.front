import { Button } from "@/components/ui/button";
import { EyeIc } from "@/helpers/icons";
import { ArrowLeft } from "lucide-react";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

const StudioHeader = (): JSX.Element => {
    const { t } = useTranslation("studio");
    return (
        <header className="studio-header w-full overflow-hidden border-b-3 border-[#FFDD9B]">
            <div className="header-container container  px-5 flex justify-between py-6">
                <Button variant="ghost" className="studio-header__back-btn text-2xl font-dm font-">
                    <ArrowLeft className="size-6" /> TheStudio
                </Button>

                <div className="header-actions w-fit flex items-center gap-6">
                    <Button variant="ghost" className="header-actions__apercu font-dm font-">
                        {t("preview")} <EyeIc className="size-6 fill-primary" />
                    </Button>

                    <Button className="header-actions__share bg-[#1F57E7] rounded-sm text-white !px-4 font-medium">
                        {t("share")}
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default StudioHeader;