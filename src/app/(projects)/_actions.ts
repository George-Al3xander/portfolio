import * as internalApi from "@/services/api/internal";
import { TProject } from "@/types/models/Project";

export const getProjects = async () => {
    const ProjectsWithoutImage = await internalApi.projects.findAll();
    const images = await internalApi.images.findAll();

    return ProjectsWithoutImage.map((project) => ({
        img: images.get(project.id),
        ...project,
    })) as TProject[];
};
