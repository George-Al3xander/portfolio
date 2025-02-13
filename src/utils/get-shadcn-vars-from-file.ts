import { toJSON } from "cssjson";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const getShadcnVarsFromFile = async (
    mode: "root" | "dark" | undefined = "root",
): Promise<Record<string, string>> => {
    const mainCss = await readFile(join(process.cwd(), "src/styles/main.css"));
    const key = mode === "root" ? ":root" : ".dark";

    return toJSON(mainCss.toString()).children["@layer base"]!.children[key]!
        .attributes;
};
