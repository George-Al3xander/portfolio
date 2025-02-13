import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const getLocalFont = async () => {
    const font = await readFile(
        join(process.cwd(), "src/ui/fonts/Poppins/assets/Poppins-Regular.ttf"),
    );

    return {
        name: "Poppins",
        data: font,
        style: "normal",
        weight: 400,
    } as const;
};
