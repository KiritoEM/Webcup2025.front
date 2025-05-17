import { z } from "zod";

const loginSchema = z.strictObject({
    email: z.string().email({ message: "L'email est requis !" }),
    password: z.string().min(8, {
        message: "Le mot de passe doit contenir au moins 8 caractères !",
    }),
});

const signupSchema = z.strictObject({
    username: z.string().min(1, { message: "Le nom complet est requis !" }),
    email: z.string().email({ message: "L'email est requis !" }),
    password1: z.string().min(8, {
        message: "Le mot de passe doit contenir au moins 8 caractères !",
    }),
    password2: z.string().min(8, {
        message: "Le mot de passe doit contenir au moins 8 caractères !",
    }),
});

export type LoginSchemaTypes = z.infer<typeof loginSchema>;
export type SignupSchemaTypes = z.infer<typeof signupSchema>;

export { loginSchema, signupSchema };
