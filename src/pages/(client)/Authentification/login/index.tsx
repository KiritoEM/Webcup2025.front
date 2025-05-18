import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePageTransition } from "@/Provider.tsx/PageTransitionProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LOGIN } from "@/features/(client)/auth/services/auth.sevice";
import { loginSchema, LoginSchemaTypes } from "@/lib/form-validation";
import { z } from "zod";

const Login = () => {
    const { t } = useTranslation("authentification", { keyPrefix: "Login" });
    const { navigateWithTransition } = usePageTransition();

    const [form, setForm] = useState<LoginSchemaTypes>({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<
        Partial<Record<keyof LoginSchemaTypes, string>>
    >({});
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange =
        (field: keyof LoginSchemaTypes) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setForm({ ...form, [field]: e.target.value });
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            loginSchema.parse(form);

            const response = await LOGIN(form);

            if (response.status === "success") {
                toast.success(t("loginSuccess"));

                setTimeout(() => {
                    navigateWithTransition("/"); // Redirect to dashboard or home
                }, 2000);
            } else {
                toast.error(response.message || t("invalidCredentials"));
            }
        } catch (err) {
            if (err instanceof z.ZodError) {
                const zodErrors: typeof errors = {};
                err.errors.forEach((error) => {
                    const path = error.path[0] as keyof LoginSchemaTypes;
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

                    {/* Password */}
                    <div className="grid gap-2">
                        <Label htmlFor="password">{t("password")}</Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={form.password}
                                onChange={handleChange("password")}
                                className="pr-10"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                aria-label={
                                    showPassword
                                        ? t("hidePassword")
                                        : t("showPassword")
                                }
                            >
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-sm text-red-500">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full bg-[#3739EC] hover:bg-[#3755ec]"
                        disabled={loading}
                    >
                        {loading ? t("loading") : t("loginButton")}
                    </Button>
                </div>

                {/* Signup Redirect */}
                <div className="text-center text-sm">
                    {t("noAccount")}{" "}
                    <span
                        onClick={() => navigateWithTransition("/signup")}
                        className="cursor-pointer text-[#3739EC] underline underline-offset-4"
                    >
                        {t("signupLink")}
                    </span>
                </div>
            </form>

            <ToastContainer position="top-right" autoClose={4000} />
        </>
    );
};

export default Login;
