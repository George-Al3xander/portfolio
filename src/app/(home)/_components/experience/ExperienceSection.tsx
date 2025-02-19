import { getExperience } from "@/actions/experience";
import { ExperienceCarousel } from "@/app/(home)/_components/experience/ExperienceCarousel";
import { ExperienceTabs } from "@/app/(home)/_components/experience/ExperienceTabs";
import { TitledSection } from "@/ui/components/molecules/TitledSection";

export const ExperienceSection = async () => {
    const experience = await getExperience();

    return (
        <TitledSection title={"Experience"}>
            <ExperienceCarousel experience={experience} />
            <ExperienceTabs experience={experience} />
        </TitledSection>
    );
};
