import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

export const typographyVariants = cva("font-poppins opacity-80", {
    variants: {
        variant: {
            title: "font-bold",
            description: "opacity-70",
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

type Props = HTMLAttributes<HTMLParagraphElement> &
    VariantProps<typeof typographyVariants> & {
        as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "article";
    };

export const Typography: FC<Props> = ({
    as: Tag = "p",
    className,
    variant,
    size,
    ...props
}) => {
    return (
        <Tag
            className={cn(typographyVariants({ variant, size, className }))}
            {...props}
        />
    );
};
