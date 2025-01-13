"use client";

import { NavigationLink } from "@/ui/components/atoms/NavigationLink";
import { usePathname } from "next/navigation";
import { FC } from "react";

type Props = {
    links: { title: string; href: string }[];
};

export const NavBar: FC<Props> = ({ links }) => {
    const pathname = usePathname();

    return (
        <nav>
            <ul
                className={
                    "flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10"
                }
            >
                {links.map(({ href, title }) => (
                    <li key={href}>
                        <NavigationLink active={pathname === href} href={href}>
                            {title}
                        </NavigationLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
