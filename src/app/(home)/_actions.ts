"use server";

import * as internalApi from "@/services/api/internal";

export const getSkills = async () => await internalApi.skills.findAll();
