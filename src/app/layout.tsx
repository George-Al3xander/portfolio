import { Providers } from "@/providers";
import "@/styles/main.css";
import { LayoutProps } from "@/types/app";
import { TemplateScaffold } from "@/ui/components/templates/Scaffold";
import { poppins } from "@/ui/fonts";
import type { Metadata } from "next";
import { Footer } from "./(general)/_components/footer/Footer";
import { Header } from "./(general)/_components/header/Header";
import { AUTHOR_NAME } from "./(general)/constants/metadata";

export const metadata: Metadata = {
    title: `${AUTHOR_NAME} | Portfolio`,
    description: "Front-End Developer Portfolio",
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en" className={`${poppins.variable}`}>
            <body className="font-poppins">
                <Providers>
                    <TemplateScaffold header={<Header />} footer={<Footer />}>
                        {children}
                    </TemplateScaffold>
                </Providers>
            </body>
        </html>
    );
}
