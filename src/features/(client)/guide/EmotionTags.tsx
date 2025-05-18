import React, { useState } from "react";
// Import the icons
import CryingFace from '@/assets/icons/CryingFace.png';
import FaceExhaling from '@/assets/icons/FaceExhaling.png';
import FaceWithoutMouth from '@/assets/icons/FaceWithoutMouth.png';
import FaceWithSpiralEyes from '@/assets/icons/FaceWithSpiralEyes.png';
import FaceWithTearsOfJoy from '@/assets/icons/FaceWithTearsOfJoy.png';
import NauseatedFace from '@/assets/icons/NauseatedFace.png';
import PoutingFace from '@/assets/icons/PoutingFace.png';
import SlightlySmilingFace from '@/assets/icons/SlightlySmilingFace.png';
import ThinkingFace from '@/assets/icons/ThinkingFace.png';
import YawningFace from '@/assets/icons/YawningFace.png';

const emotions = [
    { label: "Joie libératrice", emoji: FaceExhaling, color: "bg-yellow-200" },
    { label: "Tristesse", emoji: CryingFace, color: "bg-blue-300" },
    { label: "Dégoût", emoji: NauseatedFace, color: "bg-green-400" },
    { label: "Colère explosive", emoji: PoutingFace, color: "bg-red-600 text-white" },
    { label: "Ironie détachée", emoji: YawningFace, color: "bg-purple-400 text-white" },
    { label: "Hilarant", emoji: FaceWithTearsOfJoy, color: "bg-yellow-300" },
    { label: "Poétique", emoji: ThinkingFace, color: "bg-pink-300" },
    { label: "Vide existentiel", emoji: FaceWithoutMouth, color: "bg-black text-white" },
    { label: "Acceptation", emoji: SlightlySmilingFace, color: "bg-green-300" },
    { label: "Confus", emoji: FaceWithSpiralEyes, color: "bg-orange-200" },
];

const EmotionTag: React.FC<{
    label: string;
    emoji: string;
    color: string;
    selected: boolean;
    onSelect: () => void;
}> = ({ label, emoji, color, selected, onSelect }) => {
    return (
        <div
            onClick={onSelect}
            className={`cursor-pointer flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium shadow transition
            ${selected ? `${color}` : "bg-white text-black"}`}
        >
            <img
                src={emoji}
                alt={label}
                className={`h-8 w-8 rounded-full p-1 ${color}`}
            />
            <span>{label}</span>
        </div>
    );
};

const EmotionTags: React.FC = () => {
    const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

    return (
        <form className="flex flex-wrap justify-center gap-4 p-4">
            {emotions.map((emotion) => (
                <EmotionTag
                    key={emotion.label}
                    {...emotion}
                    selected={selectedLabel === emotion.label}
                    onSelect={() =>
                        setSelectedLabel(
                            selectedLabel === emotion.label ? null : emotion.label
                        )
                    }
                />
            ))}
        </form>
    );
};

export default EmotionTags;
