import { getInformationById } from "@/app/(general)/_actions";
import { metadataConfig } from "@/configs/metadata";
import { Button } from "@/ui/components/atoms/Button";
import { Typography } from "@/ui/components/atoms/Typography";
import Link from "next/link";

const AUTHOR_NAME = metadataConfig["author"]["name"];

const Greetings = () => {
    const firstName = AUTHOR_NAME.split(" ")[0]!;
    return (
        <Typography className="text-lg sm:text-2xl">
            Hey, I&#39;m {firstName} 👋🏻
        </Typography>
    );
};

const Title = () => (
    <Typography className="text-5xl sm:text-8xl" as="h2" variant="title">
        <span className="text-primary">Front</span>end Developer
    </Typography>
);

const Description = async () => {
    const { value } = await getInformationById("digest");

    return (
        <Typography className="my-6 sm:my-10 sm:text-2xl">{value}</Typography>
    );
};

export const Hero = async () => {
    return (
        <section className="mt-20 max-w-xl">
            <Greetings />
            <Title />
            <Description />
            <ul className={"mt-auto flex flex-col gap-4 sm:flex-row"}>
                <li className="basis-full sm:basis-auto">
                    <Button className="w-full" size="lg" asChild>
                        <Link href="/contact">Get In Touch</Link>
                    </Button>
                </li>
                <li className="basis-full sm:basis-auto">
                    <Button
                        className="w-full"
                        size="lg"
                        variant={"outline"}
                        asChild
                    >
                        <Link href="/projects">Browse Projects</Link>
                    </Button>
                </li>
            </ul>
        </section>
    );
};
