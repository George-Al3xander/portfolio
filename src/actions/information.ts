"use server";

import { TRevalidationTag } from "@/app/api/revalidate/route";
import * as internalApi from "@/services/api/internal";
import { TInformation } from "@/types/models/firestore";
import { cache } from "@/utils/cache";

const QUERY_KEY: TRevalidationTag = "information";

export const getInformationById = cache(
    async (id: string): Promise<TInformation> => {
        const item = await internalApi.information.findById(id);

        if (!item)
            throw new Error(`Could not find information with id '${id}'`);

        return item;
    },
    [QUERY_KEY],
    {
        tags: [QUERY_KEY],
    },
);
