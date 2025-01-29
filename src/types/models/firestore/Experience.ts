import { FirestoreItem } from "@/types/models/firestore/FirestoreItem";

export type TExperience = FirestoreItem<{
    title: string;
    company_name: string;
    key_points: string[];
    description: string;
    credentials_url?: string;
}>;
