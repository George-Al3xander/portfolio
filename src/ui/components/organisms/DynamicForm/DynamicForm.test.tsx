import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { z } from "zod";
import { DynamicForm } from "./DynamicForm";

const testSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
});

const fieldsData: {
    fieldName: keyof z.infer<typeof testSchema>;
    description: string;
    placeholder: string;
}[] = [
    {
        fieldName: "username",
        description: "Enter your username (at least 3 characters)",
        placeholder: "Username",
    },
    {
        fieldName: "email",
        description: "Enter your email address",
        placeholder: "Email",
    },
];

const defaultValues = {
    username: "",
    email: "",
};

const mockOnSubmitAction = jest.fn();
const mockSuccessCb = jest.fn();
const mockServerErrorCb = jest.fn();

const renderDynamicForm = () => {
    render(
        <DynamicForm
            schema={testSchema}
            fieldsData={fieldsData}
            defaultValues={defaultValues}
            onSubmitAction={mockOnSubmitAction}
            onSuccessAction={mockSuccessCb}
            onExternalErrorAction={mockServerErrorCb}
        />,
    );
    const submitButton = screen.getByRole("button", { name: /submit/i });
    const fields = Object.fromEntries(
        Object.keys(defaultValues).map((k) => {
            return [
                k,
                screen.getByPlaceholderText(
                    fieldsData.find(({ fieldName }) => fieldName === k)!
                        .placeholder,
                ),
            ];
        }),
    );
    return { submitButton, fields };
};

describe("DynamicForm Component", () => {
    it("renders all fields and submit button", () => {
        const { submitButton, fields } = renderDynamicForm();
        expect(fields.username).toBeInTheDocument();
        expect(fields.email).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    it("displays validation errors for empty fields", async () => {
        const { submitButton } = renderDynamicForm();
        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(
                screen.getByText("Username must be at least 3 characters"),
            ).toBeInTheDocument();
            expect(
                screen.getByText("Invalid email address"),
            ).toBeInTheDocument();
        });
    });

    it("calls onSubmitAction with valid data", async () => {
        mockOnSubmitAction.mockResolvedValue(true);

        const { submitButton, fields } = renderDynamicForm();
        await userEvent.type(fields.username!, "validUser");
        await userEvent.type(fields.email!, "user@example.com");

        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(mockOnSubmitAction).toHaveBeenCalledWith({
                username: "validUser",
                email: "user@example.com",
            });
            expect(mockSuccessCb).toHaveBeenCalled();
            expect(fields.username!).toHaveValue("");
            expect(fields.email!).toHaveValue("");
        });
    });

    it("handles server validation errors", async () => {
        mockOnSubmitAction.mockResolvedValue({
            fieldName: "username",
            message: "Username is already taken",
        });

        const { submitButton, fields } = renderDynamicForm();
        await userEvent.type(fields.username!, "existingUser");
        await userEvent.type(fields.email!, "user@example.com");

        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(mockOnSubmitAction).toHaveBeenCalled();
            expect(
                screen.getByText("Username is already taken"),
            ).toBeInTheDocument();
            expect(fields.username!).not.toHaveValue("");
            expect(fields.email!).not.toHaveValue("");
        });
    });

    it("calls serverErrorCb on server error", async () => {
        mockOnSubmitAction.mockResolvedValue(false);

        const { submitButton, fields } = renderDynamicForm();
        await userEvent.type(fields.username!, "validUser");
        await userEvent.type(fields.email!, "user@example.com");

        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(mockServerErrorCb).toHaveBeenCalled();
            expect(fields.username!).not.toHaveValue("");
            expect(fields.email!).not.toHaveValue("");
        });
        mockOnSubmitAction.mockResolvedValue(true);
        await userEvent.click(submitButton);
        await waitFor(() => {
            expect(fields.username!).toHaveValue("");
            expect(fields.email!).toHaveValue("");
        });
    });
});
