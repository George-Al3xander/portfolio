import { env } from "@/configs/env";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const VALID_TAGS = ["experience", "information", "projects", "skills"] as const;
export type TRevalidationTag = (typeof VALID_TAGS)[number];

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const secretKey = searchParams.get("secretKey");

    if (!secretKey || env.REVALIDATION_API_SECRET_KEY !== secretKey)
        return NextResponse.json(
            {
                error: "The revalidation API secret key you provided is invalid.",
            },
            { status: 401 },
        );

    const tags = searchParams.getAll("tag") || [];

    if (tags.length === 0)
        return NextResponse.json(
            {
                error: "Please provide at least one revalidation tag to proceed.",
            },
            { status: 400 },
        );

    for (const tag of tags) {
        const isValid = VALID_TAGS.includes(tag);

        if (!isValid) {
            return NextResponse.json(
                {
                    error: `The tag you provided is invalid. Please choose one of the following valid tags: ${VALID_TAGS.slice(0, -1).join(", ")}, ${VALID_TAGS[VALID_TAGS.length - 1]}.`,
                },
                { status: 400 },
            );
        }
    }

    for (const tag of tags) revalidateTag(tag);

    return NextResponse.json(
        {
            message: "Revalidation successful!",
        },
        { status: 200 },
    );
}
