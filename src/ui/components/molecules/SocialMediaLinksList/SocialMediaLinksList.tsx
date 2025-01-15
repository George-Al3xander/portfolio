import { IconLink } from "@/ui/components/atoms/IconLink";
import { GithubIcon, LinkedinIcon } from "@/ui/icons";
import { FC } from "react";

type Props = {
    gitHubHref: string;
    linkedinHref: string;
};

export const SocialMediaLinksList: FC<Props> = ({
    gitHubHref,
    linkedinHref,
}) => {
    return (
        <ul className="flex gap-4">
            <li>
                <IconLink
                    icon={GithubIcon}
                    href={gitHubHref}
                    srText={"Open the GitHub profile"}
                    target={"_blank"}
                />
            </li>
            <li>
                <IconLink
                    icon={LinkedinIcon}
                    href={linkedinHref}
                    srText={"Open the Linkedin profile"}
                    target={"_blank"}
                />
            </li>
        </ul>
    );
};
