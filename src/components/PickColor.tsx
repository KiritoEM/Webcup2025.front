import { changeColor } from "@/lib/redux/slices/studioSlice";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import ColorPicker from "react-pick-color";
import { useDispatch, useSelector } from "react-redux";

const PickColor = (): JSX.Element => {
    const { t } = useTranslation("studio");
    const { color } = useSelector((state: RootState) => state.studio);
    const dispatch: AppDispatch = useDispatch();

    return (
        <div className="flex flex-col space-y-5">
            <h5 className="text-xl text-primary">{t("pickColor")}</h5>

            <ColorPicker
                color={color}
                onChange={(color) => {
                    console.log("ColorPicker onChange:", color);
                    dispatch(changeColor(color.hex));
                }}
            />
        </div>
    );
};

export default PickColor;
