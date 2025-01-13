import { Poppins } from "next/font/google";

export const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    display: "swap",
    weight: ["200", "400", "500", "700", "900"],
});
