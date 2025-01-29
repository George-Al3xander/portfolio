import { FirestoreItem } from "@/types/models/firestore/FirestoreItem";

export type TInformation = FirestoreItem<{
    key: string;
    value: string;
}>;
