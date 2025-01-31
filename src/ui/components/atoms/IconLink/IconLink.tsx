import { cn } from "@/utils/cn";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ComponentProps, FC, HTMLAttributes } from "react";

type Props = Omit<ComponentProps<typeof Link>, "children"> & {
    icon: LucideIcon;
    className?: HTMLAttributes<HTMLLinkElement>["className"];
    srText: string;
};

export const IconLink: FC<Props> = ({
    icon: Icon,
    srText,
    className,
    ...props
}) => (
    <Link
        {...props}
        className={cn(
            "text-foreground transition-all hover:text-primary hover:opacity-60",
            className,
        )}
    >
        <Icon />
        <span className="sr-only">{srText}</span>
    </Link>
);
