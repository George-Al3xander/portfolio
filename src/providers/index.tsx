"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { ToastProvider } from "@/providers/ToastProvider";
import { FC, PropsWithChildren, useEffect, useState } from "react";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <ThemeProvider>
            <ToastProvider />
            {children}
        </ThemeProvider>
    );
};
