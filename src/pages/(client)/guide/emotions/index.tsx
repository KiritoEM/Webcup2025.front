import { Button } from "@/components/ui/button";
import EmotionTags from "@/features/(client)/guide/EmotionTags";
import { JSX } from "react";

const Emotions = (): JSX.Element => {
    return (
        <section className="mx-auto mt-4 max-w-lg space-y-10 p-4 text-center">
            <h1 className="text-5xl font-bold">Comment tu te sens?</h1>
            <EmotionTags />
            <Button className="mb-10 w-full bg-black hover:bg-black dark:bg-white">
                Continuer
            </Button>
        </section>
    );
};

export default Emotions;
