import React from "react";

const emotions = [
    { label: "Joie libératrice", emoji: "😪", color: "bg-yellow-200" },
    { label: "Tristesse", emoji: "🥺", color: "bg-blue-300" },
    { label: "Dégoût", emoji: "🤢", color: "bg-green-400" },
    { label: "Colère explosive", emoji: "😡", color: "bg-red-600 text-white" },
    {
        label: "Ironie détachée",
        emoji: "🥱",
        color: "bg-purple-400 text-white",
    },
    { label: "Hilarant", emoji: "😂", color: "bg-yellow-300" },
    { label: "Poétique", emoji: "🤔", color: "bg-pink-300" },
    { label: "Vide existentiel", emoji: "😶", color: "bg-black text-white" },
    { label: "Acceptation", emoji: "😊", color: "bg-green-300" },
    { label: "Confus", emoji: "😵", color: "bg-orange-200" },
];

const EmotionTag: React.FC<{ label: string; emoji: string; color: string }> = ({
    label,
    emoji,
    color,
}) => (
    <div
        className={`flex items-center space-x-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow `}
    >
        <span className={`rounded-full p-1 ${color}`}>{emoji}</span>
        <span>{label}</span>
    </div>
);

const EmotionTags: React.FC = () => {
    return (
        <form className="flex flex-wrap justify-center gap-4 p-4">
            {emotions.map((emotion) => (
                <EmotionTag key={emotion.label} {...emotion} />
            ))}
        </form>
    );
};

export default EmotionTags;
