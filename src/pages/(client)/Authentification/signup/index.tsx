import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Google } from "@/helpers/icons";
import { useTranslation } from "react-i18next";
import { usePageTransition } from "@/Provider.tsx/PageTransitionProvider";
import { SIGNUP } from "@/features/(client)/auth/services/auth.sevice";
import { signupSchema, SignupSchemaTypes } from "@/lib/form-validation";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
    const { t } = useTranslation("authentification", { keyPrefix: "signUp" });
    const { navigateWithTransition } = usePageTransition();

    const [form, setForm] = useState<SignupSchemaTypes>({
        username: "",
        email: "",
        password1: "",
        password2: "",
    });

    const [errors, setErrors] = useState<
        Partial<Record<keyof SignupSchemaTypes, string>>
    >({});
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleVisibility = (field: "password1" | "password2") => {
        if (field === "password1") setShowPassword1((prev) => !prev);
        else setShowPassword2((prev) => !prev);
    };

    const handleChange =
        (field: keyof SignupSchemaTypes) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setForm({ ...form, [field]: e.target.value });
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            signupSchema.parse(form);

            if (form.password1 !== form.password2) {
                setErrors({ password2: t("passwordMismatch") });
                setLoading(false);
                return;
            }

            const response = await SIGNUP(form);

            if (response.status === "success") {
                toast.success(t("emailVerificationSent"));

                // Reset form
                setForm({
                    username: "",
                    email: "",
                    password1: "",
                    password2: "",
                });

                // Optional: Delay redirect slightly to let user read toast
                setTimeout(() => {
                    navigateWithTransition("/login");
                }, 2000);
            } else {
                toast.error(response.message || t("unexpectedError"));
            }
        } catch (err) {
            if (err instanceof z.ZodError) {
                const zodErrors: typeof errors = {};
                err.errors.forEach((error) => {
                    const path = error.path[0] as keyof SignupSchemaTypes;
                    zodErrors[path] = error.message;
                });
                setErrors(zodErrors);
            } else {
                toast.error(t("unexpectedError"));
            }
        }

        setLoading(false);
    };

    return (
        <>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="mx-auto max-w-sm text-center">
                    <h1 className="text-4xl font-bold">{t("title")}</h1>
                    <p className="text-sm text-muted-foreground">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid gap-4">
                    {/* Username */}
                    <div className="grid gap-2">
                        <Label htmlFor="username">{t("username")}</Label>
                        <Input
                            id="username"
                            type="text"
                            value={form.username}
                            onChange={handleChange("username")}
                            placeholder="Roger Gerrard"
                            required
                        />
                        {errors.username && (
                            <p className="text-sm text-red-500">
                                {errors.username}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="grid gap-2">
                        <Label htmlFor="email">{t("email")}</Label>
                        <Input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange("email")}
                            placeholder="m@example.com"
                            required
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password1 */}
                    <div className="grid gap-2">
                        <Label htmlFor="password1">{t("password")}</Label>
                        <div className="relative">
                            <Input
                                id="password1"
                                type={showPassword1 ? "text" : "password"}
                                value={form.password1}
                                onChange={handleChange("password1")}
                                className="pr-10"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => toggleVisibility("password1")}
                                className="absolute top-1/2 right-3 -translate-y-1/2"
                            >
                                {showPassword1 ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>
                        {errors.password1 && (
                            <p className="text-sm text-red-500">
                                {errors.password1}
                            </p>
                        )}
                    </div>

                    {/* Password2 */}
                    <div className="grid gap-2">
                        <Label htmlFor="password2">
                            {t("confirmPassword")}
                        </Label>
                        <div className="relative">
                            <Input
                                id="password2"
                                type={showPassword2 ? "text" : "password"}
                                value={form.password2}
                                onChange={handleChange("password2")}
                                className="pr-10"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => toggleVisibility("password2")}
                                className="absolute top-1/2 right-3 -translate-y-1/2"
                            >
                                {showPassword2 ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>
                        {errors.password2 && (
                            <p className="text-sm text-red-500">
                                {errors.password2}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full bg-[#3739EC] hover:bg-[#3755ec]"
                        disabled={loading}
                    >
                        {loading ? t("loading") : t("register")}
                    </Button>

                    {/* Divider */}
                    <div className="relative text-center text-sm">
                        <span className="relative z-10 bg-background px-2 text-muted-foreground">
                            {t("orRegister")}
                        </span>
                        <div className="absolute inset-0 flex items-center border-t border-border" />
                    </div>

                    {/* Google Button */}
                    <div className="flex items-center justify-center">
                        <Button
                            variant="outline"
                            className="w-full"
                            type="button"
                        >
                            <Google className="mr-2" />
                            Google
                        </Button>
                    </div>
                </div>

                {/* Already registered */}
                <div className="text-center text-sm">
                    {t("already")}{" "}
                    <span
                        onClick={() => navigateWithTransition("/login")}
                        className="cursor-pointer text-[#3739EC] underline underline-offset-4"
                    >
                        {t("login")}
                    </span>
                </div>
            </form>

            <ToastContainer position="top-right" autoClose={4000} />
        </>
    );
};

export default SignUp;
