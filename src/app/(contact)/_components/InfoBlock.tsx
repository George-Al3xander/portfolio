import { metadataConfig } from "@/configs/metadata";
import { Typography } from "@/ui/components/atoms/Typography";
import Link from "next/link";

const AUTHOR_GITHUB = metadataConfig["author"]["github"];
const AUTHOR_LINKEDIN = metadataConfig["author"]["linkedin"];

const TITLE = "Let's talk";

const DESCRIPTION =
    "If you have any questions, want to discuss a project, or just want to chat about front-end development, feel free to reach out! I’d love to hear from you and explore how we can collaborate. Simply fill out the form, and I’ll get back to you as soon as possible!";

const SOCIAL_LINKS: { title: string; href: string }[] = [
    { title: "GitHub", href: AUTHOR_GITHUB },
    { title: "LinkedIn", href: AUTHOR_LINKEDIN },
];

export const InfoBlock = () => {
    return (
        <div className="flex basis-full flex-col gap-10">
            <div>
                <Typography className="mb-4" variant="title" size="xl" as="h3">
                    {TITLE}
                </Typography>
                <Typography size="sm">{DESCRIPTION}</Typography>
            </div>
            <div>
                <Typography variant="title" size="lg" as="h3" className="mb-4">
                    Socials
                </Typography>
                <ul className="flex flex-col gap-4">
                    {SOCIAL_LINKS.map(({ title, href }) => (
                        <li key={href}>
                            <Link href={href} target="_blank">
                                <Typography className="transition-all hover:underline hover:opacity-50">
                                    {title}
                                </Typography>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
