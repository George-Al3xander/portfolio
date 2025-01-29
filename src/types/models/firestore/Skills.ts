import { FirestoreItem } from "@/types/models/firestore/FirestoreItem";

export type TSkill = FirestoreItem<{
    name: string;
    icon: string;
    order: number;
}>;
