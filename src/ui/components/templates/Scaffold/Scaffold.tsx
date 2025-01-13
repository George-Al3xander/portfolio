import { FC, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
    header?: ReactNode;
    footer?: ReactNode;
}>;

export const TemplateScaffold: FC<Props> = ({ header, footer, children }) => {
    return (
        <div className="relative flex min-h-screen flex-col justify-between gap-10 px-10 py-4">
            {header && (
                <header className={"sticky top-0 z-30 w-full bg-background"}>
                    {header}
                </header>
            )}
            <main className="flex-1">{children}</main>
            {footer && <footer>{footer}</footer>}
        </div>
    );
};
