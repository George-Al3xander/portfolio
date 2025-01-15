import { AUTHOR_NAME } from "../../constants/metadata";

export const Copyright = () => (
    <small>
        &copy; {new Date().getFullYear()} {AUTHOR_NAME}
    </small>
);
