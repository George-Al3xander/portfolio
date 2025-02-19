import { getProjects } from "@/actions/projects";
import { ProjectCard } from "@/app/(general)/_components/ProjectCard";

export const ProjectsGrid = async () => {
    const projects = await getProjects();

    return (
        <ul className="flex flex-col gap-16 sm:grid md:grid-cols-2">
            {projects.map((project) => (
                <li key={project.id}>
                    <ProjectCard {...project} />
                </li>
            ))}
        </ul>
    );
};
