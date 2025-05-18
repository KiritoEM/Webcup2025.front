import { BACKEND_URL } from "@/helpers/constant";
import { Response } from "@/helpers/types";
import { LoginSchemaTypes, SignupSchemaTypes } from "@/lib/form-validation";
import axios from "axios";

/**
 * Logs a user in
 *
 * @param data Object containing the user's email and password.
 * @returns A response object
 */
export const LOGIN = async <T>(
    data: LoginSchemaTypes,
): Promise<Response<T>> => {
    try {
        const response = await axios.post(`${BACKEND_URL}auth/login/`, data);

        if (response.status === 200) {
            // Store the access token in local storage
            const accessToken = response.data.access;
            const refreshToken = response.data.refresh;

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            return {
                status: "success",
                message: "Login successful",
                data: response.data as T,
            };
        }

        return {
            status: "error",
            message: "An error occurred during login",
        };
    } catch (err: unknown) {
        let message = "Internal server error";

        if (axios.isAxiosError(err)) {
            const errorData = err.response?.data;

            if (errorData) {
                if (typeof errorData === "string") {
                    message = errorData;
                } else if (typeof errorData === "object") {
                    message = Object.values(errorData).flat().join("\n");
                }
            } else {
                message = err.message;
            }
        } else if (err instanceof Error) {
            message = err.message;
        }

        console.error("Internal server error:", message);

        return {
            status: "error",
            message,
        };
    }
};

/**
 * Sends a signup request to the server
 *
 * @param data Object containing the user's informations
 * @returns A response object
 */
export const SIGNUP = async <T>(
    data: SignupSchemaTypes,
): Promise<Response<T>> => {
    try {
        console.log("Sending signup request with data:", data);
        const response = await axios.post(
            `${BACKEND_URL}auth/registration/`,
            data,
        );

        if (response.status === 201) {
            return {
                status: "success",
                message: "Email verification sent successfully !!!",
                data: response.data as T,
            };
        }

        return {
            status: "error",
            message: "An error occurred during signup",
        };
    } catch (err: unknown) {
        let message = "Internal server error";

        if (axios.isAxiosError(err)) {
            // Access error response data if it exists
            const errorData = err.response?.data;

            if (errorData) {
                if (typeof errorData === "string") {
                    message = errorData;
                } else if (typeof errorData === "object") {
                    // Extract meaningful info from error object
                    message = Object.values(errorData).flat().join("\n");
                }
            } else {
                message = err.message;
            }
        } else if (err instanceof Error) {
            message = err.message;
        }

        console.error("Internal server error:", message);

        return {
            status: "error",
            message,
        };
    }
};

/**
 * Hook for Google login functionality
 */
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT;
const googleCallbackUri = import.meta.env.VITE_GOOGLE_CALLBACK_URI;

export const googleSignInUrl = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${googleCallbackUri}&prompt=consent&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile&access_type=offline`;
