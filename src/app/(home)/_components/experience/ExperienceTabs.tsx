"use client";

import { ExperienceItem } from "@/app/(home)/_components/experience/ExperienceItem";
import { TExperience } from "@/types/models/Experience";
import {
    HorizontalTabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/ui/components/organisms/HorizontalTabs";
import { generateUuid } from "@/utils/generateUuid";

export const ExperienceTabs = ({
    experience,
}: {
    experience: TExperience[];
}) => {
    const withIdentifiers = experience.map((item) => ({
        identifier: generateUuid(),
        ...item,
    }));

    return (
        <HorizontalTabs defaultValue={withIdentifiers[0]!.identifier}>
            <TabsList>
                {withIdentifiers.map(({ identifier, company_name }) => (
                    <TabsTrigger
                        key={"tab-trigger-" + identifier}
                        value={identifier}
                    >
                        {company_name}
                    </TabsTrigger>
                ))}
            </TabsList>
            {withIdentifiers.map(({ identifier, ...exp }) => (
                <TabsContent
                    key={"tab-content-" + identifier}
                    value={identifier}
                >
                    <ExperienceItem {...exp} />
                </TabsContent>
            ))}
        </HorizontalTabs>
    );
};
