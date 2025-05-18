// ToggleModel.tsx
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ModelType, setModel } from "@/lib/redux/slices/studioSlice";

const ToggleModel = (): JSX.Element => {
    const { t } = useTranslation("studio");
    const dispatch: AppDispatch = useDispatch();

    return (
        <div className="flex w-full flex-col space-y-5">
            <h5 className="text-xl text-primary">{t("pickColor")}</h5>

            <Select
                onValueChange={(value: string) =>
                    dispatch(setModel(value as unknown as ModelType))
                }
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent side="top">
                    <SelectItem value="model1">Modèle 1</SelectItem>
                    <SelectItem value="model2">Modèle 2</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default ToggleModel;
