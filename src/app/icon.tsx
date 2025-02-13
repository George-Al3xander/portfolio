import { CodeXmlIconRaw } from "@/ui/icons";
import { getLocalFont } from "@/utils/get-local-font";
import { getShadcnVarsFromFile } from "@/utils/get-shadcn-vars-from-file";
import { ImageResponse } from "next/og";

export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
    const poppins = await getLocalFont();

    const shadcnVars = await getShadcnVarsFromFile("dark");
    const primaryColor = `hsl(${shadcnVars["--primary"]!})`;

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 18,
                    background: primaryColor,
                    color: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "100%",
                }}
            >
                <CodeXmlIconRaw />
            </div>
        ),
        {
            ...size,
            fonts: [poppins],
        },
    );
}
