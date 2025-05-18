import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModelType = "model1" | "model2";

type InitialState = {
    tagTitle: string;
    userText: string;
    color: string;
    activeModel: ModelType;
    isPreview: boolean;
};

const initialState: InitialState = {
    tagTitle: "Un nouveau matin, un cœur léger",
    userText:
        "Hier, j’ai posé mon sac d’inquiétudes sur le pas de ma porte.Ce matin, je me suis levé·e en écoutant les oiseaux chanter, sans pression, sans attentes.",
    color: "#000000",
    activeModel: "model1",
    isPreview: false,
};

const studioSlice = createSlice({
    name: "soundGame",
    initialState,
    reducers: {
        setModel: (state, actions: PayloadAction<ModelType>) => {
            state.activeModel = actions.payload;
        },
        setIsPreview: (state, actions: PayloadAction<boolean>) => {
            state.isPreview = actions.payload;
        },
        setText: (state, actions: PayloadAction<string>) => {
            state.userText = actions.payload;
        },
        setTitle: (state, actions: PayloadAction<string>) => {
            state.tagTitle = actions.payload;
        },
        changeColor: (state, actions: PayloadAction<string>) => {
            state.color = actions.payload;
        },
    },
});

export const { setText, setTitle, changeColor, setModel, setIsPreview } =
    studioSlice.actions;
export default studioSlice.reducer;
