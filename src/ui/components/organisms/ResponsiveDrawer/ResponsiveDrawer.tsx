import { DeviceViewSwitcher } from "@/ui/components/molecules/DeviceViewSwitcher";
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
}>;

export const ResponsiveDrawer: FC<Props> = ({
    children,
    triggerWrapperProps,
    title,
    description,
    contentWrapperProps,
    headerSrOnly = false,
}) => {
    return (
        <DeviceViewSwitcher
            initializeWithValue={false}
            desktopView={children}
            mobileView={
                <Drawer>
                    <DrawerTrigger {...triggerWrapperProps} />
                    <DrawerContent
                        {...contentWrapperProps}
                        className={cn(contentWrapperProps?.className, "p-4")}
                    >
                        <DrawerHeader
                            className={cn({ "sr-only": headerSrOnly })}
                        >
                            <DrawerTitle>{title}</DrawerTitle>
                            {description && (
                                <DrawerDescription>
                                    {description}
                                </DrawerDescription>
                            )}
                        </DrawerHeader>
                        {children}
                    </DrawerContent>
                </Drawer>
            }
        />
    );
};
