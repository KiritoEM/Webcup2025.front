import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { JSX } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Google } from "@/helpers/icons";
import { useTranslation } from "react-i18next";
import { usePageTransition } from "@/Provider.tsx/PageTransitionProvider";

const Login = (): JSX.Element => {
    const { t } = useTranslation("authentification", { keyPrefix: "Login" });
    const [showPassword, setShowPassword] = useState(false);
    const { navigateWithTransition } = usePageTransition();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={cn("flex flex-col gap-6")}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-4xl font-bold">{t("title")}</h1>
                <p className="text-sm text-balance text-muted-foreground">
                    {t("subtitle")}
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">{t("email")}</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">{t("password")}</Label>
                    </div>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            required
                            className="pr-10"
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
                </div>
                <div className="flex items-center justify-between">
                    <Label
                        htmlFor="remember"
                        className="flex items-center gap-2"
                    >
                        <input id="remember" type="checkbox" />
                        {t("remember")}
                    </Label>
                    <a
                        href="#"
                        className="text-sm text-muted-foreground underline underline-offset-4"
                    >
                        {t("forgotPassword")}
                    </a>
                </div>
                <Button type="submit" className="w-full">
                    {t("loginButton")}
                </Button>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                        {t("orLoginWith")}
                    </span>
                </div>
                <div className="flex w-full items-center justify-center gap-4">
                    <Button variant="outline" className="w-full">
                        <Google className="mr-2" />
                        Google
                    </Button>
                </div>
            </div>
            <div className="text-center text-sm">
                {t("noAccount")}{" "}
                <span
                    onClick={() => navigateWithTransition("/signup")}
                    className="cursor-pointer text-primary underline underline-offset-4"
                >
                    {t("signupLink")}
                </span>
            </div>
        </div>
    );
};

export default Login;
