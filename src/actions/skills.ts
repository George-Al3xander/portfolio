"use server";

import { TRevalidationTag } from "@/app/api/revalidate/route";
import * as internalApi from "@/services/api/internal";
import { cache } from "@/utils/cache";

const QUERY_KEY: TRevalidationTag = "skills";

export const getSkills = cache(
    async () => await internalApi.skills.findAll(),
    [QUERY_KEY],
    {
        tags: [QUERY_KEY],
    },
);
