import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "test", "production"]),
        API_KEY: z.string().min(1),
        AUTH_DOMAIN: z.string().min(1),
        PROJECT_ID: z.string().min(1),
        STORAGE_BUCKET: z.string().min(1),
        SENDER_ID: z.string().min(1),
        APP_ID: z.string().min(1),
        EMAILJS_SERVICE_ID: z.string().min(1),
        EMAILJS_TEMPLATE_ID: z.string().min(1),
        EMAILJS_PUBLIC_KEY: z.string().min(1),
        EMAILJS_PRIVATE_KEY: z.string().min(1),
        REVALIDATION_API_SECRET_KEY: z.string().min(1),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        API_KEY: process.env.API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        PROJECT_ID: process.env.PROJECT_ID,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        SENDER_ID: process.env.SENDER_ID,
        APP_ID: process.env.APP_ID,
        EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
        EMAILJS_PRIVATE_KEY: process.env.EMAILJS_PRIVATE_KEY,
        REVALIDATION_API_SECRET_KEY: process.env.REVALIDATION_API_SECRET_KEY,
    },
});
