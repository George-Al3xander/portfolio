import { ThemeProvider } from "@/providers/ThemeProvider";
import { FC, PropsWithChildren } from "react";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
    <ThemeProvider>{children}</ThemeProvider>
);
