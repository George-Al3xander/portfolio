import { Button } from "@/ui/components/atoms/Button";
import { Typography } from "@/ui/components/atoms/Typography";
import { HomeIcon } from "@/ui/icons";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="my-auto flex flex-col gap-10 text-center">
            <Typography
                className="text-3xl sm:text-6xl"
                as="h2"
                variant="title"
            >
                404 – Page Not Found 💻🚀
            </Typography>
            <Typography className="text-lg sm:text-2xl">
                Looks like you’ve taken a wrong turn. Let’s head back home!
            </Typography>
            <Button size="lg" asChild>
                <Link href="/">
                    <HomeIcon className="size-8" />
                    Return Home
                </Link>
            </Button>
        </div>
    );
}
