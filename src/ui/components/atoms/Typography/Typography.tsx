import {
    PropsWithTagSpecification,
    VariantPropsWithChildren,
} from "@/types/component-variants";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { FC } from "react";

export const typographyVariants = cva("font-poppins opacity-80", {
    variants: {
        variant: {
            title: "font-bold",
            description: "opacity-70",
            quote: "border-l-8 border-primary pl-4",
        },
        highlight: {
            primary: "opacity-100 text-primary",
            secondary: "opacity-100 text-secondary",
            accent: "opacity-100 text-accent",
            background: "text-background",
            muted: "opacity-100 text-muted",
            destructive: "opacity-100 text-destructive",
        },
        size: {
            sm: "text-sm",
            md: "text-lg",
            lg: "text-2xl",
            xl: "text-4xl",
            "4xl": "text-8xl",
        },
    },
    defaultVariants: {
        variant: "description",
        size: "md",
    },
});

type Props = PropsWithTagSpecification<
    VariantPropsWithChildren<typeof typographyVariants>
>;

export const Typography: FC<Props> = ({
    as: Tag = "p",
    className,
    variant,
    size,
    highlight,
    ...props
}) => {
    return (
        <Tag
            className={cn(
                typographyVariants({ variant, size, highlight, className }),
            )}
            {...props}
        />
    );
};
