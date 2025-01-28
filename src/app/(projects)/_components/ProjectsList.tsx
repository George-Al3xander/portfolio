import { getProjects } from "@/app/(general)/_actions";
import { ProjectCard } from "@/app/(general)/_components/ProjectCard";

export const ProjectsList = async () => {
    const projects = await getProjects();

    return (
        <ul className={"flex flex-col gap-20"}>
            {projects.map((project) => (
                <li key={project.id}>
                    <ProjectCard {...project} />
                </li>
            ))}
        </ul>
    );
};
