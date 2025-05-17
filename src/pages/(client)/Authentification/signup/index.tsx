import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { JSX } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Google } from "@/helpers/icons";
import { useTranslation } from "react-i18next";

const SignUp = ({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"form">): JSX.Element => {
    const { t } = useTranslation("authentification", { keyPrefix: "signUp" });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-4xl font-bold">{t("title")}</h1>
                <p className="text-sm text-balance text-muted-foreground">
                    {t("subtitle")}
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="name">{t("name")}</Label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Roger Gerrard"
                        required
                    />
                </div>
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
                    <Label htmlFor="password">{t("password")}</Label>
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
                <div className="grid gap-2">
                    <Label htmlFor="cpassword">{t("confirmPassword")}</Label>
                    <div className="relative">
                        <Input
                            id="cpassword"
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            className="pr-10"
                        />
                        <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            aria-label={
                                showConfirmPassword
                                    ? t("hideConfirmPassword")
                                    : t("showConfirmPassword")
                            }
                        >
                            {showConfirmPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex items-center">
                    <Label
                        htmlFor="remember"
                        className="flex items-center gap-2"
                    >
                        <input id="remember" type="checkbox" />
                        {t("remember")}
                    </Label>
                </div>
                <Button type="submit" className="w-full">
                    {t("register")}
                </Button>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                        {t("orRegister")}
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
                {t("already")}{" "}
                <Link
                    to={"/login"}
                    className="text-primary underline underline-offset-4"
                >
                    {t("login")}
                </Link>
            </div>
        </form>
    );
};

export default SignUp;
