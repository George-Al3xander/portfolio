import { ExperienceItem } from "@/app/(about)/_components/experience/ExperienceItem";
import { getExperience } from "@/app/(general)/_actions";

export const ExperienceItemsList = async () => {
    const items = await getExperience();

    return (
        <ul className="flex flex-col gap-20">
            {items.map((item, index) => (
                <ExperienceItem key={item.id} index={index + 1} {...item} />
            ))}
        </ul>
    );
};
