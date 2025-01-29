import { FirestoreItem } from "@/types/models/firestore/FirestoreItem";

export type TProject = FirestoreItem<{
    description: string;
    isFullstack?: boolean;
    name: string;
    url_github?: string;
    url_preview?: string;
    img: string;
}>;
