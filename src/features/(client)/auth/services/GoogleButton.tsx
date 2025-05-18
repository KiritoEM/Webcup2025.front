import { Button } from "@/components/ui/button";
import { googleSignInUrl } from "./auth.sevice";
import { Google } from "@/helpers/icons";

export const GoogleButton = () => {
    const handleGoogleLogin = async () => {
        window.location.href = googleSignInUrl;
    };

    return (
        <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full bg-[#3739EC] text-white hover:bg-[#3755ec] hover:text-white"
            type="button"
        >
            <Google className="mr-2" />
            Google
        </Button>
    );
};
