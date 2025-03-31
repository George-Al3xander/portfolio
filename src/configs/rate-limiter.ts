import { RateLimiterMemory } from "rate-limiter-flexible";

const MAX_ATTEMPTS = 5;
const WINDOW_IN_SECONDS = 60 * 60;

export const rateLimiter = new RateLimiterMemory({
    points: MAX_ATTEMPTS,
    duration: WINDOW_IN_SECONDS,
});
