import { getExperience } from "@/app/(general)/_actions";
import { ExperienceCarousel } from "@/app/(home)/_components/experience/ExperienceCarousel";
import { ExperienceTabs } from "@/app/(home)/_components/experience/ExperienceTabs";
import { DeviceViewSwitcher } from "@/ui/components/molecules/DeviceViewSwitcher";
import { TitledSection } from "@/ui/components/molecules/TitledSection";

export const ExperienceSection = async () => {
    const experience = await getExperience();

    return (
        <TitledSection title={"Experience"}>
            <DeviceViewSwitcher
                mobileView={<ExperienceCarousel experience={experience} />}
                desktopView={<ExperienceTabs experience={experience} />}
            />
        </TitledSection>
    );
};
