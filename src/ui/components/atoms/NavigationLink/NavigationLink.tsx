import { Typography } from "@/ui/components/atoms/Typography";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<typeof Typography> & {
    active?: boolean;
    href: string;
};

export const NavigationLink: FC<Props> = ({
    active = false,
    href,
    className,
    ...props
}) => {
    return (
        <Link
            className={cn({
                "pointer-events-none text-primary": active,
            })}
            href={href}
        >
            <Typography
                variant="title"
                className={cn(
                    className,
                    "transition-all duration-75 ease-in hover:text-primary",
                )}
                {...props}
            />
        </Link>
    );
};
