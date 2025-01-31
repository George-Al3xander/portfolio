import { AboutMe } from "@/app/(about)/_components/AboutMe";
import { ExperienceItemsList } from "@/app/(about)/_components/experience/ExperienceItemsList";
import { Summary } from "@/app/(general)/_components/Summary";
import { metadataConfig } from "@/configs/metadata";
import { TitledSection } from "@/ui/components/molecules/TitledSection";

export const metadata = metadataConfig["pages"]["about"];

const AboutPage = () => {
    return (
        <>
            <TitledSection title="About me">
                <AboutMe />
            </TitledSection>
            <Summary />
            <TitledSection
                typographyProps={{ className: "mb-12" }}
                title={"My Experience"}
            >
                <ExperienceItemsList />
            </TitledSection>
        </>
    );
};

export default AboutPage;
