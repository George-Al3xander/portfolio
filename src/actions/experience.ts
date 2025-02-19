"use server";

import { TRevalidationTag } from "@/app/api/revalidate/route";
import * as internalApi from "@/services/api/internal";
import { cache } from "@/utils/cache";

const QUERY_KEY: TRevalidationTag = "experience";

export const getExperience = cache(
    async () => await internalApi.experience.findAll(),
    [QUERY_KEY],
    {
        tags: [QUERY_KEY],
    },
);
