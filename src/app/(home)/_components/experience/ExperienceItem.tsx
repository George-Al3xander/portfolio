import { TExperience } from "@/types/models/Experience";
import { Button } from "@/ui/components/atoms/Button";
import { Typography } from "@/ui/components/atoms/Typography";
import { BookOpenCheckIcon, CheckIcon } from "@/ui/icons";

import Link from "next/link";
import { FC } from "react";

const ExperienceItemTitle: FC<{ title: string; company_name: string }> = ({
    title,
    company_name,
}) => (
    <Typography as={"h3"} size={"lg"} variant={"title"}>
        <span>{title}</span>{" "}
        <Typography
            className={"whitespace-nowrap"}
            as={"span"}
            highlight="primary"
            size={"lg"}
            variant={"title"}
        >
            @ {company_name}
        </Typography>
    </Typography>
);

const ExperienceKeyPoint: FC<{ children: string }> = ({ children }) => (
    <li className={"flex gap-4 sm:gap-2"}>
        <CheckIcon className={"size-6 shrink-0 text-primary"} />
        <Typography size={"md"}>{children}</Typography>
    </li>
);

export const ExperienceItem: FC<TExperience> = ({
    key_points,
    credentials_url,
    ...item
}) => (
    <>
        <ExperienceItemTitle {...item} />
        <ul className="my-10 flex flex-col gap-4 text-left">
            {key_points.map((key_point) => (
                <ExperienceKeyPoint key={item.title + key_point}>
                    {key_point}
                </ExperienceKeyPoint>
            ))}
        </ul>
        {credentials_url && (
            <Button asChild variant={"link"}>
                <Link href={credentials_url} target="_blank">
                    <BookOpenCheckIcon className="size-6" />
                    View credentials
                </Link>
            </Button>
        )}
    </>
);
