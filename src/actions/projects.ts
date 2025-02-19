"use server";

import * as internalApi from "@/services/api/internal";
import { TProject } from "@/types/models/firestore";
import { cache } from "@/utils/cache";

export const getProjects = cache(async () => {
    const ProjectsWithoutImage = await internalApi.projects.findAll();
    const images = await internalApi.images.findAll();

    return ProjectsWithoutImage.map((project) => ({
        img: images.get(project.id),
        ...project,
    })) as TProject[];
}, ["projects"]);
