import { sendEmail } from "@/actions/contact";

jest.mock("@/services/api/external", () => ({
    contact: {
        send: jest.fn(() => Promise.resolve(true)),
    },
}));

const validData = {
    name: "John Doe",
    email: "john@example.com",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

describe("Contact actions", () => {
    it("should return true", async () =>
        expect(await sendEmail(validData)).toBe(true));

    it("should return object", async () => {
        const invalidData = { ...validData, name: "J" };
        expect(await sendEmail(invalidData)).toEqual({
            fieldName: "name",
            message: "Name must be at least 3 characters in length",
        });
    });

    it("should return the first invalid field error object", async () => {
        const invalidData = { ...validData, name: "J", description: "Short" };
        expect(await sendEmail(invalidData)).toEqual({
            fieldName: "name",
            message: "Name must be at least 3 characters in length",
        });
    });
});
