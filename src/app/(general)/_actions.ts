import * as internalApi from "@/services/api/internal";

export const getExperience = async () => await internalApi.experience.findAll();
