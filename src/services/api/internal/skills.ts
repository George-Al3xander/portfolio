import { firestoreClient } from "@/services/libs/internalClient";
import { TSkill } from "@/types/models/firestore";
import { handleQueryFirestoreItems } from "@/utils/firestore";
import { collection } from "firebase/firestore";

const COLLECTION_PATH = "skills";
const collectionRef = collection(firestoreClient, COLLECTION_PATH);

export const findAll = async (_criteria?: unknown): Promise<TSkill[]> =>
    handleQueryFirestoreItems<TSkill>(collectionRef);
