"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/ui/components/organisms/Drawer";
import { cn } from "@/utils/cn";
import { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
    triggerWrapperProps: Omit<
        ComponentProps<typeof DrawerTrigger>,
        "children"
    > & { children: ReactNode };
    title: ReactNode;
    description?: ReactNode;
    contentWrapperProps?: ComponentProps<typeof DrawerContent>;
    headerSrOnly?: boolean;
    mediaQueryPx?: number;
}>;

const TAILWIND_QUERY_PX = 640;

export const ResponsiveDrawer: FC<Props> = ({
    children,
    triggerWrapperProps,
    title,
    description,
    contentWrapperProps,
    headerSrOnly = false,
    mediaQueryPx = TAILWIND_QUERY_PX,
}) => {
    const matches = useMediaQuery(`(min-width: ${mediaQueryPx}px)`, {
        initializeWithValue: false,
    });

    if (matches) return children;

    return (
        <Drawer>
            <DrawerTrigger {...triggerWrapperProps} />
            <DrawerContent
                {...contentWrapperProps}
                className={cn(contentWrapperProps?.className, "p-4")}
            >
                <DrawerHeader className={cn({ "sr-only": headerSrOnly })}>
                    <DrawerTitle>{title}</DrawerTitle>
                    {description && (
                        <DrawerDescription>{description}</DrawerDescription>
                    )}
                </DrawerHeader>
                {children}
            </DrawerContent>
        </Drawer>
    );
};
