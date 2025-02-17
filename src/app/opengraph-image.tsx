import { metadataConfig } from "@/configs/metadata";
import { GitHubIconRaw, LinkedInIconRaw } from "@/ui/icons";
import { getLocalFont } from "@/utils/get-local-font";
import { getShadcnVarsFromFile } from "@/utils/get-shadcn-vars-from-file";
import { hslStringToHex } from "@/utils/hsl-string-to-hex";
import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

const AUTHOR_NAME = metadataConfig["author"]["name"];

export const alt = `Portfolio | ${AUTHOR_NAME}`;

const links = [
    {
        href: metadataConfig["author"]["github"],
        icon: <GitHubIconRaw />,
    },
    {
        href: metadataConfig["author"]["linkedin"],
        icon: <LinkedInIconRaw />,
    },
];

export default async function Image() {
    const poppins = await getLocalFont();

    const shadcnVars = await getShadcnVarsFromFile("dark");

    const primaryColor = hslStringToHex(shadcnVars["--primary"]!);
    const backgroundColor = hslStringToHex(shadcnVars["--background"]!);

    return new ImageResponse(
        (
            <div
                style={{
                    backgroundColor: backgroundColor,
                    // backgroundImage,
                    color: primaryColor,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "4rem",
                    width: "100%",
                    height: "100%",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            fontSize: 120,
                            fontStyle: "bold",
                            borderBottom: `6px solid ${primaryColor}`,
                            textTransform: "uppercase",
                        }}
                    >
                        {AUTHOR_NAME}
                    </div>
                    <div
                        style={{
                            fontSize: 60,
                            fontStyle: "italic",
                            opacity: 0.8,
                        }}
                    >
                        Front-End Developer
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: "1rem",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        fontSize: 30,
                    }}
                >
                    {links.map(({ icon, href }) => (
                        <div
                            style={{
                                display: "flex",
                                gap: "1rem",
                                alignItems: "center",
                            }}
                            key={href}
                        >
                            {icon}
                            <div style={{ fontStyle: "bold" }}>
                                {href.replace(/https:\/\/(www.)?/, "")}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [poppins],
        },
    );
}
