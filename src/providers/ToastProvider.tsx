"use client";

import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
    return (
        <Toaster
            toastOptions={{
                style: {
                    background: "hsl(var(--muted))",
                    color: "hsl(var(--foreground))",
                },
            }}
        />
    );
};
