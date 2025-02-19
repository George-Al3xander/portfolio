"use server";

import * as internalApi from "@/services/api/internal";
import { cache } from "@/utils/cache";

export const getSkills = cache(
    async () => await internalApi.skills.findAll(),
    ["skills"],
);
