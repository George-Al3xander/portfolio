import * as internalApi from "@/services/api/internal";
import { TInformation, TProject } from "@/types/models/firestore";
import { cache } from "@/utils/cache";

export const getExperience = cache(
    async () => await internalApi.experience.findAll(),
    ["experience_collection"],
);

export const getInformationById = cache(
    async (id: string): Promise<TInformation> => {
        const item = await internalApi.information.findById(id);

        if (!item)
            throw new Error(`Could not find information with id '${id}'`);

        return item;
    },
    ["experience_item"],
);

export const getProjects = cache(async () => {
    const ProjectsWithoutImage = await internalApi.projects.findAll();
    const images = await internalApi.images.findAll();

    return ProjectsWithoutImage.map((project) => ({
        img: images.get(project.id),
        ...project,
    })) as TProject[];
}, ["projects_collection"]);
