"use client";

import { Button } from "@/ui/components/atoms/Button";
import { Input } from "@/ui/components/atoms/Input";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/ui/components/organisms/Form";
import { cn } from "@/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentType, HTMLAttributes, useEffect } from "react";
import { ControllerRenderProps, Path, useForm } from "react-hook-form";
import { TypeOf, ZodSchema, z } from "zod";

type Props<TSchema extends ZodSchema> = {
    schema: TSchema;
    fieldsData: {
        fieldName: Path<TypeOf<TSchema>>;
        description?: string;
        placeholder?: string;
        fieldInputComponent?: ComponentType<
            ControllerRenderProps<TypeOf<ZodSchema>, Path<TypeOf<ZodSchema>>>
        >;
    }[];
    defaultValues: z.infer<TSchema>;
    onSubmitAction: (
        data: z.infer<TSchema>,
    ) => Promise<
        { fieldName: Path<TypeOf<TSchema>>; message: string } | boolean
    >;
    onSuccessAction: () => void;
    onExternalErrorAction: () => void;
    formProps?: HTMLAttributes<HTMLFormElement>;
};

export const DynamicForm = <T extends ZodSchema>({
    schema,
    fieldsData,
    defaultValues,
    onSubmitAction,
    onSuccessAction,
    onExternalErrorAction,
    formProps,
}: Props<T>) => {
    const form = useForm<z.infer<T>>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    useEffect(() => {
        if (
            [
                form.formState.isSubmitted,
                form.formState.isSubmitSuccessful,
            ].every(Boolean)
        ) {
            form.reset();
            if (onSuccessAction) onSuccessAction();
        }
    }, [form.formState.isSubmitSuccessful, form.formState.isSubmitted]);

    const onSubmit = form.handleSubmit(async (data) => {
        const serverValidation = await onSubmitAction(data);

        if (typeof serverValidation === "boolean") {
            if (!serverValidation) {
                form.setError("root.serverError", {
                    type: "500",
                });
                onExternalErrorAction();
            }
        } else {
            const { fieldName, message } = serverValidation;
            form.setError(fieldName, { message, type: "custom" });
        }
    });

    return (
        <Form {...form}>
            <form
                {...formProps}
                className={cn("flex flex-col gap-5", formProps?.className)}
                onSubmit={onSubmit}
            >
                {fieldsData.map(
                    ({
                        fieldName,
                        placeholder,
                        description,
                        fieldInputComponent: InputComponent = Input,
                    }) => (
                        <FormField
                            key={"form-field" + fieldName}
                            control={form.control}
                            name={fieldName}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="capitalize">
                                        {fieldName}
                                    </FormLabel>
                                    <FormControl>
                                        <InputComponent
                                            disabled={
                                                form.formState.isSubmitting
                                            }
                                            placeholder={placeholder}
                                            {...field}
                                        />
                                    </FormControl>
                                    {description && (
                                        <FormDescription>
                                            {description}
                                        </FormDescription>
                                    )}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ),
                )}
                <Button disabled={form.formState.isSubmitting} type="submit">
                    Submit{form.formState.isSubmitting && "ing..."}
                </Button>
            </form>
        </Form>
    );
};
