import { getSkills } from "@/actions/skills";
import { SkillCard } from "@/app/(home)/_components/skills/SkillCard";

export const SkillsGrid = async () => {
    const skills = (await getSkills()).sort((a, b) => a.order - b.order);

    return (
        <ul className="grid gap-6 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
                <SkillCard key={skill.id} {...skill} />
            ))}
        </ul>
    );
};
