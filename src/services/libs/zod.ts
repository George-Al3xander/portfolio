import z from "zod";

export const ContactSchema = z.object({
    email: z.string().email(),
    message: z
        .string()
        .min(50, "Message must be at least 50 characters in length")
        .max(300, "Message can't be longer than 300 characters"),
    name: z
        .string()
        .min(3, "Name must be at least 3 characters in length")
        .max(100, "Name can't be longer than 100 characters"),
});
