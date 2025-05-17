import { Button } from "@/components/ui/button";
import { JSX } from "react";

const Choice = (): JSX.Element => {
    return (
        <section className="Choice mx-auto flex max-w-md flex-col space-y-16 text-center">
            <div className="mx-auto mt-6 flex flex-col gap-4">
                <h1 className="text-5xl font-bold text-black dark:text-white">
                    Tu vis une fin ? <br /> Viens, on en parle.
                </h1>
                <p className="text-gray-700 dark:text-gray-300">
                    Tu préfères qu’on t’accompagne ou tu sais déjà ce que tu
                    ressens ?
                </p>
            </div>
            <div className="mt-4 flex flex-col gap-4">
                <Button className="btn rounded-2xl bg-black hover:bg-black dark:bg-white">
                    Me laisser guide
                </Button>
                <Button className="btn rounded-2xl bg-black hover:bg-black dark:bg-white">
                    Je connais ce que je ressens
                </Button>
            </div>
        </section>
    );
};

export default Choice;
