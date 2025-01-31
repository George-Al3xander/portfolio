import { metadataConfig } from "@/configs/metadata";
import { Providers } from "@/providers";
import "@/styles/main.css";
import { LayoutProps } from "@/types/app";
import { TemplateScaffold } from "@/ui/components/templates/Scaffold";
import { poppins } from "@/ui/fonts";
import { Footer } from "./(general)/_components/footer/Footer";
import { Header } from "./(general)/_components/header/Header";

export const metadata = metadataConfig["pages"]["layout"];

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
