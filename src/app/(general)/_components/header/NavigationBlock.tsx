import { Button } from "@/ui/components/atoms/Button";
import { NavBar } from "@/ui/components/molecules/NavBar";
import { ResponsiveDrawer } from "@/ui/components/organisms/ResponsiveDrawer";
import { MenuIcon } from "lucide-react";
import { WEBSITE_ROUTES } from "../../constants/routes";
import { Logo } from "./Logo";

const MENU_DESCRIPTION =
    "Navigate through my portfolio to explore my projects, skills, experience, and get in touch with me for collaboration or inquiries.";

const TRIGGER_SR_TEXT = "Open navigation menu";

export const NavigationBlock = () => (
    <ResponsiveDrawer
        triggerWrapperProps={{
            asChild: true,
            children: (
                <Button
                    type={"button"}
                    variant="outline"
                    size="icon"
                    className={"rounded-full bg-accent"}
                >
                    <span className={"sr-only"}>{TRIGGER_SR_TEXT}</span>
                    <MenuIcon />
                </Button>
            ),
        }}
        title={<Logo mainComponentTag={"p"} />}
        description={MENU_DESCRIPTION}
    >
        <NavBar links={WEBSITE_ROUTES} />
    </ResponsiveDrawer>
);
