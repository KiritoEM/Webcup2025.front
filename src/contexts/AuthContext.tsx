import { createContext, FC, ReactNode, useState } from "react";

export type AuthContextType = {
    token: string;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [token] = useState<string>(() => {
        return localStorage.getItem("accessToken") ?? "";
    });

    return (
        <AuthContext.Provider value={{ token }}>
            {children}
        </AuthContext.Provider>
    );
};
