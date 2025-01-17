import { FC, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
    header?: ReactNode;
    footer?: ReactNode;
}>;

export const TemplateScaffold: FC<Props> = ({ header, footer, children }) => {
    return (
        <div className="relative flex min-h-screen flex-col justify-between gap-10 pt-4">
            {header && (
                <header className="sticky top-0 z-30 w-full bg-background">
                    <div className="responsive-box">{header}</div>
                </header>
            )}
            <main className="responsive-box flex flex-1 flex-col gap-32">
                {children}
            </main>
            {footer && (
                <footer className="responsive-box py-4">{footer}</footer>
            )}
        </div>
    );
};
