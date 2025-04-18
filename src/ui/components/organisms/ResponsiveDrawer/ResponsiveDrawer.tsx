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
    mobileView?: ReactNode;
    desktopView?: ReactNode;
}>;

export const ResponsiveDrawer: FC<Props> = ({
    children,
    triggerWrapperProps,
    title,
    description,
    contentWrapperProps,
    headerSrOnly = false,
    mobileView,
    desktopView,
}) => {
    return (
        <>
            <div className="hidden sm:block">{desktopView || children}</div>
            <Drawer>
                <DrawerTrigger
                    {...triggerWrapperProps}
                    className={cn("sm:hidden", triggerWrapperProps?.className)}
                />
                <DrawerContent
                    {...contentWrapperProps}
                    className={cn("p-4", contentWrapperProps?.className)}
                >
                    <DrawerHeader className={cn({ "sr-only": headerSrOnly })}>
                        <DrawerTitle>{title}</DrawerTitle>
                        {description && (
                            <DrawerDescription>{description}</DrawerDescription>
                        )}
                    </DrawerHeader>
                    {mobileView || children}
                </DrawerContent>
            </Drawer>
        </>
    );
};
