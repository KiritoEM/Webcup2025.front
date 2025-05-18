import { JSX, useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { setText } from "@/lib/redux/slices/studioSlice";

const TextPrompt = (): JSX.Element => {
    const { t } = useTranslation("studio");
    const [prompt, setPrompt] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!prompt.trim()) {
            alert(t("validation.emptyPrompt"));
            return;
        }

        setIsSubmitting(true);

        try {
            console.log("Prompt soumis:", prompt);
            dispatch(setText(prompt));

            setPrompt("");
            alert(t("success.promptSubmitted"));
        } catch (error) {
            console.error("Erreur lors de la soumission:", error);
            alert(t("errors.submissionFailed"));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col space-y-5"
        >
            <label htmlFor="prompt-area" className="text-xl text-primary">
                {t("textLabel")}
            </label>

            <textarea
                name="prompt"
                id="prompt-area"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={t("arealaceholder")}
                className="h-[150px] rounded-lg border border-input p-2 text-sm"
                disabled={isSubmitting}
            />

            <Button
                type="submit"
                className="header-actions__share w-fit rounded-sm bg-[#1F57E7] !px-4 font-medium text-white"
                disabled={isSubmitting}
            >
                {isSubmitting ? t("btnSubmitting") : t("btnLabel")}
            </Button>
        </form>
    );
};

export default TextPrompt;
