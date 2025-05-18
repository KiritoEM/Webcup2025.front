// chatbotService.ts
import { BACKEND_URL } from "@/helpers/constant";
import axios from "axios";

type DiscussResponse = {
    response: string;
};

const Discuss = async (token: string, message: string, context?: string, language: string = "fr"): Promise<DiscussResponse> => {
    try {
        const response = await axios.post(`${BACKEND_URL}chat/mistral/`, {
            context: context,
            language: language,
            last_message: message,
            messages: []
        }, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ3NjM0Mjg0LCJpYXQiOjE3NDc1NDc4ODQsImp0aSI6IjE3YTU2Nzc4YTVmZjRjMGM5OGYzYTAyY2FlNGRhZmNmIiwidXNlcl9pZCI6IjY4NjUxYzA1LWRhN2MtNDYxMC1iOTZjLWNjODY5YzY1MDI3MyJ9.7htYpM3MUk6keiWNaQFCWkuCWNyXVOeT0q-iVEyW-qE`
            }
        });


        if (response.status === 200) {
            return {
                response: response.data.response
            };
        }
        throw new Error("Erreur lors de la récupération de la réponse");
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export { Discuss };