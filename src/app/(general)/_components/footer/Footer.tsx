import {
    AUTHOR_GITHUB,
    AUTHOR_LINKEDIN,
} from "@/app/(general)/constants/metadata";
import { SocialMediaLinksList } from "@/ui/components/molecules/SocialMediaLinksList";
import { CollaborationBlock } from "./CollaborationBlock";
import { Copyright } from "./Copyright";

export const Footer = () => (
    <footer className="flex flex-col gap-4 text-center">
        <div className="flex flex-col items-center gap-4 sm:flex-row-reverse sm:items-start sm:justify-between">
            <SocialMediaLinksList
                gitHubHref={AUTHOR_GITHUB}
                linkedinHref={AUTHOR_LINKEDIN}
            />
            <CollaborationBlock />
        </div>
        <Copyright />
    </footer>
);
