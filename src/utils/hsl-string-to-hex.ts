import toHex from "hsl-to-hex";

export const hslStringToHex = (hsl: string): string => {
    const [hue, saturation, luminosity] = hsl
        .split(" ")
        .map((num) => Number(num.replaceAll("%", "")));

    return toHex(hue || 0, saturation || 0, luminosity || 0);
};
