"use server";

import { rateLimiter } from "@/configs/rate-limiter";
import * as externalApi from "@/services/api/external";
import { ContactSchema } from "@/services/libs/zod";
import { TContactInfo } from "@/types/models/Contact";
import { getUserIP } from "@/utils/ip";

export const sendEmail = async (
    data: TContactInfo,
): Promise<{ fieldName: keyof TContactInfo; message: string } | boolean> => {
    try {
        const clientIp = await getUserIP();
        await rateLimiter.consume(clientIp, 1);

        const { success, error } = ContactSchema.safeParse(data);
        if (!success) {
            for (const { path, message } of error.issues) {
                return { fieldName: path[0] as keyof TContactInfo, message };
            }
        }

        return await externalApi.contact.send(data);
    } catch (e) {
        console.error(e);
        return false;
    }
};
