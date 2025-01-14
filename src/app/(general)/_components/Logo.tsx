import { Typography } from "@/ui/components/atoms/Typography";
import { CodeXmlIcon } from "@/ui/icons";
import { cn } from "@/utils/cn";

import { FC } from "react";
import { AUTHOR_NAME } from "../constants/metadata";

const size = "lg";

type Props = {
    hideTextOnMobile?: boolean;
    mainComponentTag?: keyof HTMLElementTagNameMap;
};

export const Logo: FC<Props> = ({
    hideTextOnMobile = true,
    mainComponentTag = "h1",
}) => {
    return (
        <Typography variant="title" as={mainComponentTag} size={size}>
            <CodeXmlIcon className="mx-1 inline size-10 text-primary" />
            <span
                className={cn({ "sr-only sm:not-sr-only": hideTextOnMobile })}
            >
                {AUTHOR_NAME}
            </span>
            <Typography
                className="hidden: sm:inline"
                as={"span"}
                size={size}
                highlight={"primary"}
            >
                .
            </Typography>
        </Typography>
    );
};
