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
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        API_KEY: process.env.API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        PROJECT_ID: process.env.PROJECT_ID,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        SENDER_ID: process.env.SENDER_ID,
        APP_ID: process.env.APP_ID,
    },
});
