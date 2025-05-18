import { Button } from "@/components/ui/button";
import EmotionTags from "@/features/(client)/guide/EmotionTags";
import { JSX, useState } from "react";
import { useNavigate } from "react-router-dom";

const Emotions = (): JSX.Element => {
    const [selectedEmotion, setEmotion] = useState<string>("");

    const handleSelect = (emotion: string) => {
        setEmotion(emotion);
    }

    const navigate = useNavigate();

    return (
        <section className="mx-auto mt-4 max-w-lg space-y-10 p-4 text-center">
            <h1 className="text-5xl font-bold">Comment tu te sens?</h1>
            <EmotionTags select={handleSelect} />
            <Button disabled={!selectedEmotion} className="mb-10 w-full bg-black hover:bg-black dark:bg-white" onClick={() => navigate(`/studio?emotion=${selectedEmotion}`)}>
                Continuer
            </Button>
        </section>
    );
};

export default Emotions;
