import "@testing-library/jest-dom";
import { mockEnv } from "./src/mocks/env.mock";

jest.mock("@t3-oss/env-nextjs", () => ({
    createEnv: jest.fn(() => mockEnv),
}));
