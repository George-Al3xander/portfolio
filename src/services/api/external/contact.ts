import { env } from "@/configs/env";
import { TContactInfo } from "@/types/models/Contact";
import emailjs from "@emailjs/nodejs";

export const send = async (data: TContactInfo): Promise<boolean> => {
    try {
        await emailjs.send(
            env.EMAILJS_SERVICE_ID,
            env.EMAILJS_TEMPLATE_ID,
            data,
            {
                publicKey: env.EMAILJS_PUBLIC_KEY,
                privateKey: env.EMAILJS_PRIVATE_KEY,
            },
        );
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};
