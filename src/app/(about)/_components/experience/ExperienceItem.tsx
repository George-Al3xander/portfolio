import { TExperience } from "@/types/models/firestore";
import { Button } from "@/ui/components/atoms/Button";
import { Typography } from "@/ui/components/atoms/Typography";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/ui/components/organisms/Accordion";
import { BookOpenCheckIcon } from "@/ui/icons";
import { formatToZeroPadding } from "@/utils/format-to-zero-padding";
import Link from "next/link";
import { FC } from "react";

type Props = TExperience & {
    index: number;
};

export const ExperienceItem: FC<Props> = ({
    title,
    company_name,
    description,
    index,
    id,
    credentials_url,
}) => {
    return (
        <li className="flex w-full flex-col items-start sm:flex-row sm:items-center sm:gap-10">
            <hgroup className="flex w-full items-center justify-between gap-4 sm:block sm:w-auto">
                <Typography className="text-6xl" as="span" variant="title">
                    {formatToZeroPadding(index)}
                </Typography>
                <Typography
                    highlight="primary"
                    as="small"
                    variant="title"
                    className="sm:hidden"
                    size="lg"
                >
                    {company_name}
                </Typography>
            </hgroup>
            <article className="flex w-full flex-col gap-4">
                <Accordion type="single" collapsible>
                    <AccordionItem value={id}>
                        <AccordionTrigger>
                            <hgroup>
                                <Typography
                                    highlight="primary"
                                    as="small"
                                    variant="title"
                                    className="hidden sm:block"
                                >
                                    {company_name}
                                </Typography>
                                <Typography size="xl" as="h3" variant="title">
                                    {title}
                                </Typography>
                            </hgroup>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4">
                            <Typography>{description}</Typography>
                            {credentials_url && (
                                <Button variant="ghost" asChild>
                                    <Link
                                        href={credentials_url}
                                        target="_blank"
                                    >
                                        <BookOpenCheckIcon className="size-6" />
                                        View credentials
                                    </Link>
                                </Button>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </article>
        </li>
    );
};
