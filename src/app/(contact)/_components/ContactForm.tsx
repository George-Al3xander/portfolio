"use client";

import { sendEmail } from "@/actions/contact";
import { ContactSchema } from "@/services/libs/zod";
import { Textarea } from "@/ui/components/atoms/Textarea";
import { DynamicForm } from "@/ui/components/organisms/DynamicForm";
import toast from "react-hot-toast";

const onSuccessAction = () =>
    toast.success(
        "Thanks for reaching out! Your message has been sent successfully. I'll get back to you as soon as possible!",
    );
const onExternalErrorAction = () =>
    toast.error("Oops! Something went wrong. Please try again in a moment.");

export const ContactForm = () => {
    return (
        <DynamicForm
            schema={ContactSchema}
            onSubmitAction={sendEmail}
            onSuccessAction={onSuccessAction}
            onExternalErrorAction={onExternalErrorAction}
            formProps={{
                className: "basis-full",
            }}
            fieldsData={[
                {
                    fieldName: "email",
                    description:
                        "Please provide a valid email address so I can get back to you.",
                    placeholder: "Enter your email address",
                },
                {
                    fieldName: "name",
                    description:
                        "Enter your full name for a personalized response.",
                    placeholder: "Your full name",
                },
                {
                    fieldName: "message",
                    description:
                        "Let me know how I can assist you or share your feedback.",
                    placeholder: "Write your message here...",
                    fieldInputComponent: Textarea,
                },
            ]}
            defaultValues={{
                email: "",
                name: "",
                message: "",
            }}
        />
    );
};
