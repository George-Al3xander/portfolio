"use server";

import * as internalApi from "@/services/api/internal";
import { cache } from "@/utils/cache";

export const getExperience = cache(
    async () => await internalApi.experience.findAll(),
    ["experience"],
);
