"use client";

import { ExperienceItem } from "@/app/(home)/_components/experience/ExperienceItem";
import { TExperience } from "@/types/models/firestore";
import {
    HorizontalTabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/ui/components/organisms/HorizontalTabs";

export const ExperienceTabs = ({
    experience,
}: {
    experience: TExperience[];
}) => (
    <HorizontalTabs
        className="!hidden sm:!flex"
        defaultValue={experience[0]!.id}
    >
        <TabsList>
            {experience.map(({ id, company_name }) => (
                <TabsTrigger key={"tab-trigger-" + id} value={id}>
                    {company_name}
                </TabsTrigger>
            ))}
        </TabsList>
        {experience.map((exp) => (
            <TabsContent key={"tab-content-" + exp.id} value={exp.id}>
                <ExperienceItem {...exp} />
            </TabsContent>
        ))}
    </HorizontalTabs>
);
