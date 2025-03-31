import { headers } from "next/headers";

export const getUserIP = async () => {
    const headersList = await headers();

    return (
        headersList.get("x-forwarded-for")?.split(",")[0] ||
        headersList.get("x-real-ip") ||
        "127.0.0.1"
    );
};
