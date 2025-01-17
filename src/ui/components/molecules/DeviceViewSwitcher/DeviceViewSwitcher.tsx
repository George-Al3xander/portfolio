"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { FC, ReactNode } from "react";

type Props = {
    mobileView: ReactNode;
    desktopView: ReactNode;
    mediaQueryPx?: number;
} & Parameters<typeof useMediaQuery>[1];

const TAILWIND_QUERY_PX = 640;

export const DeviceViewSwitcher: FC<Props> = ({
    mobileView,
    desktopView,
    mediaQueryPx = TAILWIND_QUERY_PX,
    initializeWithValue = false,
    defaultValue,
}) => {
    const isDesktop = useMediaQuery(`(min-width: ${mediaQueryPx}px)`, {
        initializeWithValue,
        defaultValue,
    });

    if (isDesktop) return desktopView;

    return mobileView;
};
