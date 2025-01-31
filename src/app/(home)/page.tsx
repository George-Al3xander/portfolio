import { PageProps } from "@/types/app";

import { Summary } from "@/app/(general)/_components/Summary";
import { ExperienceSection } from "@/app/(home)/_components/experience/ExperienceSection";
import { ProjectsGrid } from "@/app/(home)/_components/ProjectsGrid";
import { SkillsGrid } from "@/app/(home)/_components/skills/SkillsGrid";
import { metadataConfig } from "@/configs/metadata";
import { TitledSection } from "@/ui/components/molecules/TitledSection";
import { Hero } from "./_components/hero/Hero";

export const metadata = metadataConfig["pages"]["home"];

export default function Home({}: PageProps) {
    return (
        <>
            <Hero />
            <TitledSection title={"Projects"}>
                <ProjectsGrid />
            </TitledSection>
            <ExperienceSection />
            <TitledSection title={"Skills"}>
                <SkillsGrid />{" "}
            </TitledSection>
            <Summary />
        </>
    );
}
