"use server";

import { TRevalidationTag } from "@/app/api/revalidate/route";
import * as internalApi from "@/services/api/internal";
import { TProject } from "@/types/models/firestore";
import { cache } from "@/utils/cache";

const QUERY_KEY: TRevalidationTag = "projects";

export const getProjects = cache(
    async () => {
        const ProjectsWithoutImage = await internalApi.projects.findAll();
        const images = await internalApi.images.findAll();

        return ProjectsWithoutImage.map((project) => ({
            img: images.get(project.id),
            ...project,
        })) as TProject[];
    },
    [QUERY_KEY],
    {
        tags: [QUERY_KEY],
    },
);
