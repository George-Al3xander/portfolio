"use client";

import { Button } from "@/ui/components/atoms/Button";
import { Typography } from "@/ui/components/atoms/Typography";
import { HomeIcon, RotateCcwIcon } from "@/ui/icons";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const message =
        error.message.length > 0 ? error.message : "Something went wrong!";

    return (
        <div className="my-auto flex flex-col gap-10 text-center">
            <Typography
                className="text-5xl sm:text-8xl"
                as="h2"
                variant="title"
            >
                Oops!
            </Typography>
            <Typography className="text-lg sm:text-2xl">{message}</Typography>
            <ul className={"flex flex-col justify-center gap-4 sm:flex-row"}>
                <li className="basis-full sm:basis-auto">
                    <Button className="w-full" size="lg" onClick={reset}>
                        <RotateCcwIcon className="size-8" />
                        Try again
                    </Button>
                </li>
                <li className="basis-full sm:basis-auto">
                    <Button
                        className="w-full"
                        size="lg"
                        variant={"outline"}
                        asChild
                    >
                        <Link href="/">
                            <HomeIcon className="size-8" />
                            Return Home
                        </Link>
                    </Button>
                </li>
            </ul>
        </div>
    );
}
