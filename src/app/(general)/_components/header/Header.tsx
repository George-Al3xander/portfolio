import Link from "next/link";
import { Logo } from "./Logo";
import { NavigationBlock } from "./NavigationBlock";
import { ThemeToggleButton } from "./ThemeToggleButton";

export const Header = () => {
    return (
        <ul className="flex items-center justify-between py-4">
            <li className="sm:flex-grow sm:basis-0">
                <Link href="/">
                    <Logo textToAbbreviation />
                    <span className="sr-only">Go home</span>
                </Link>
            </li>
            <li className="ml-auto sm:ml-0">
                <NavigationBlock />
            </li>
            <li className="sm:flex sm:flex-grow sm:basis-0 sm:justify-end">
                <ThemeToggleButton className={"rounded-full bg-accent"} />
            </li>
        </ul>
    );
};
