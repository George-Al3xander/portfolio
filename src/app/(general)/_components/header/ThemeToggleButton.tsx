"use client";

import { Button, ButtonProps } from "@/ui/components/atoms/Button";
import { MoonIcon, SunIcon } from "@/ui/icons";
import { useTheme } from "next-themes";
import { FC } from "react";

type Props = Omit<ButtonProps, "children">;

export const ThemeToggleButton: FC<Props> = (props) => {
    const { theme, systemTheme, setTheme } = useTheme();

    const currentTheme = theme || systemTheme || "dark";
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    const Icon = currentTheme === "light" ? SunIcon : MoonIcon;

    return (
        <Button
            {...props}
            type={"button"}
            variant="outline"
            size="icon"
            onClick={() => setTheme(nextTheme)}
        >
            <span className="sr-only">Toggle theme</span>
            <Icon />
        </Button>
    );
};
