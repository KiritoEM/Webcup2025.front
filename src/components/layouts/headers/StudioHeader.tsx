import { Button } from "@/components/ui/button";
import { EyeIc } from "@/helpers/icons";
import { setIsPreview } from "@/lib/redux/slices/studioSlice";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { ArrowLeft } from "lucide-react";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const StudioHeader = (): JSX.Element => {
    const { t } = useTranslation("studio");
    const dispatch: AppDispatch = useDispatch();
    const { isPreview } = useSelector((state: RootState) => state.studio);
    return (
        <header className="studio-header  fixed z-50 w-full overflow-hidden border-b-3 border-[#FFDD9B] bg-black">
            <div className="header-container container  flex justify-between px-5 py-6">
                <Button
                    variant="ghost"
                    className="studio-header__back-btn font- font-dm text-2xl"
                >
                    <ArrowLeft className="size-6" /> TheStudio
                </Button>

                <div
                    className="header-actions flex w-fit items-center gap-6"
                    onClick={() => dispatch(setIsPreview(!isPreview))}
                >
                    <Button
                        variant="ghost"
                        className="header-actions__apercu font- hidden font-dm sm:inline-flex"
                    >
                        {!isPreview ? (
                            <>
                                {t("preview")}{" "}
                                <EyeIc className="size-6 fill-primary" />
                            </>
                        ) : (
                            "Close"
                        )}
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
