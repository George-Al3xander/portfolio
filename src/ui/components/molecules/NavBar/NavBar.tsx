"use client";

import { NavigationLink } from "@/ui/components/atoms/NavigationLink";
import { usePathname } from "next/navigation";
import { ComponentType, FC, Fragment, PropsWithChildren } from "react";

type Props = {
    links: { title: string; href: string }[];
    linkWrapper?: ComponentType<PropsWithChildren>;
};

export const NavBar: FC<Props> = ({ links, linkWrapper }) => {
    const pathname = usePathname();
    const LinkWrapper = linkWrapper || Fragment;

    return (
        <nav>
            <ul
                className={
                    "flex flex-col items-center gap-4 sm:flex-row sm:gap-10"
                }
            >
                {links.map(({ href, title }) => (
                    <li key={href}>
                        <NavigationLink active={pathname === href} href={href}>
                            <LinkWrapper>{title}</LinkWrapper>
                        </NavigationLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
