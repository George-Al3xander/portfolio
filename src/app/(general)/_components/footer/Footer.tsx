import { metadataConfig } from "@/configs/metadata";
import { SocialMediaLinksList } from "@/ui/components/molecules/SocialMediaLinksList";
import { CollaborationBlock } from "./CollaborationBlock";
import { Copyright } from "./Copyright";

const AUTHOR_GITHUB = metadataConfig["author"]["github"];
const AUTHOR_LINKEDIN = metadataConfig["author"]["linkedin"];

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
