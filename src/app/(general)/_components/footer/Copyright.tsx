import { metadataConfig } from "@/configs/metadata";

const AUTHOR_NAME = metadataConfig["author"]["name"];

export const Copyright = () => (
    <small>
        &copy; {new Date().getFullYear()} {AUTHOR_NAME}
    </small>
);
