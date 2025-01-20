import * as internalApi from "@/services/api/internal";
import { TInformation } from "@/types/models/Information";
import { TProject } from "@/types/models/Project";

export const getExperience = async () => await internalApi.experience.findAll();

export const getInformationById = async (id: string): Promise<TInformation> => {
    const item = await internalApi.information.findById(id);

    if (!item) throw new Error(`Could not find information with id '${id}'`);

    return item;
};

export const getProjects = async () => {
    const ProjectsWithoutImage = await internalApi.projects.findAll();
    const images = await internalApi.images.findAll();

    return ProjectsWithoutImage.map((project) => ({
        img: images.get(project.id),
        ...project,
    })) as TProject[];
};
