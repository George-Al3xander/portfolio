import * as internalApi from "@/services/api/internal";
import { TInformation } from "@/types/models/Information";

export const getExperience = async () => await internalApi.experience.findAll();

export const getInformationById = async (id: string): Promise<TInformation> => {
    const item = await internalApi.information.findById(id);

    if (!item) throw new Error(`Could not find information with id '${id}'`);

    return item;
};
