"use server";

import * as externalApi from "@/services/api/external";
import { ContactSchema } from "@/services/libs/zod";
import { TContactInfo } from "@/types/models/Contact";

export const sendEmail = async (
    data: TContactInfo,
): Promise<{ fieldName: keyof TContactInfo; message: string } | boolean> => {
    const { success, error } = ContactSchema.safeParse(data);
    if (!success) {
        for (const { path, message } of error.issues) {
            return { fieldName: path[0] as keyof TContactInfo, message };
        }
    }

    return await externalApi.contact.send(data);
};
