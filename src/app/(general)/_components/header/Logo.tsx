import { Typography } from "@/ui/components/atoms/Typography";
import { CodeXmlIcon } from "@/ui/icons";

import { FC } from "react";
import { AUTHOR_NAME } from "../../constants/metadata";

const size = "lg";

type Props = {
    mainComponentTag?: keyof HTMLElementTagNameMap;
    textToAbbreviation?: boolean;
};

export const Logo: FC<Props> = ({
    textToAbbreviation = false,
    mainComponentTag = "h1",
}) => {
    const title = textToAbbreviation
        ? AUTHOR_NAME.split(" ")
              .map((w) => w[0])
              .join("")
        : AUTHOR_NAME;

    return (
        <Typography variant="title" as={mainComponentTag} size={size}>
            <CodeXmlIcon className="mx-1 inline size-10 text-primary" />
            {title}
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
