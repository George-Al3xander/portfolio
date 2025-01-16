import { TProject } from "@/types/models/Project";
import { Button } from "@/ui/components/atoms/Button";
import { Typography } from "@/ui/components/atoms/Typography";
import { CodeXmlIcon, EyeIcon } from "@/ui/icons";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = TProject;

export const ProjectCard: FC<Props> = ({
    name,
    description,
    img,
    url_preview,
    url_github,
}) => (
    <div className="flex h-full flex-col gap-8">
        <span className="h-60 overflow-hidden rounded-lg sm:h-80 sm:rounded-2xl">
            <Image
                className="h-full w-full object-cover"
                src={img}
                alt={`${name} image`}
                width={1200}
                height={700}
            />
        </span>
        <Typography size={"xl"} as={"h3"} variant="title">
            {name}
        </Typography>
        <Typography as={"p"} variant="description">
            {description}
        </Typography>
        {(url_preview || url_github) && (
            <ul className={"mt-auto flex gap-4"}>
                {url_preview && (
                    <li>
                        <Button size={"lg"} asChild>
                            <Link href={url_preview} target="_blank">
                                <EyeIcon />
                                Preview
                            </Link>
                        </Button>
                    </li>
                )}

                {url_github && (
                    <li>
                        <Button size={"lg"} variant={"outline"} asChild>
                            <Link href={url_github} target="_blank">
                                <CodeXmlIcon />
                                Source code
                            </Link>
                        </Button>
                    </li>
                )}
            </ul>
        )}
    </div>
);
