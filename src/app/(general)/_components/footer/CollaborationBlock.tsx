import { Button } from "@/ui/components/atoms/Button";
import { Typography } from "@/ui/components/atoms/Typography";
import Link from "next/link";

export const CollaborationBlock = () => (
    <div className="flex flex-col gap-4 sm:justify-between sm:text-left">
        <Typography as="p" variant="title" size={"lg"}>
            Interested in working together
            <Typography as={"span"} size={"lg"} highlight={"primary"}>
                ?
            </Typography>
        </Typography>
        <div className="flex justify-center gap-4 sm:justify-start">
            <Button asChild>
                <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant={"outline"} className="border-black">
                <Link href="/projects">Browse Projects</Link>
            </Button>
        </div>
    </div>
);
