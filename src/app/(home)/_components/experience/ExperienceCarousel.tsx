import { ExperienceItem } from "@/app/(home)/_components/experience/ExperienceItem";
import { TExperience } from "@/types/models/firestore";
import { ScrollArea, ScrollBar } from "@/ui/components/molecules/ScrollArea";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/ui/components/organisms/Carousel";
import { FC } from "react";

type Props = {
    experience: TExperience[];
};

export const ExperienceCarousel: FC<Props> = ({ experience }) => (
    <Carousel className="sm:hidden">
        <CarouselContent>
            {experience.map((exp) => (
                <CarouselItem key={exp.id}>
                    <ScrollArea className="h-80 py-2">
                        <ExperienceItem {...exp} />
                        <ScrollBar orientation="vertical" />
                    </ScrollArea>
                </CarouselItem>
            ))}
        </CarouselContent>
        <ul className="mt-4 flex justify-end gap-2">
            <li>
                <CarouselPrevious className="static transition-all disabled:opacity-0" />
            </li>
            <li>
                <CarouselNext className="static transition-all disabled:opacity-0" />
            </li>
        </ul>
    </Carousel>
);
