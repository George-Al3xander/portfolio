import { Typography } from "@/ui/components/atoms/Typography";
import { cn } from "@/utils/cn";
import { ComponentProps, FC, HTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    title: string;
    sectionProps?: HTMLAttributes<HTMLElement>;
    typographyProps?: ComponentProps<typeof Typography>;
}>;

export const TitledSection: FC<Props> = ({
    title,
    children,
    sectionProps,
    typographyProps,
}) => {
    return (
        <section {...sectionProps} className={cn(sectionProps?.className)}>
            <Typography
                as="h2"
                variant="title"
                {...typographyProps}
                className={cn(
                    typographyProps?.className,
                    "mb-8 text-4xl sm:text-6xl",
                )}
            >
                {title}
                <span className="text-primary">.</span>
            </Typography>
            {children}
        </section>
    );
};
