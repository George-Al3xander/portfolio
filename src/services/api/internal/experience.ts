import { firestoreClient } from "@/services/libs/internalClient";
import { TExperience } from "@/types/models/Experience";
import { handleQueryFirestoreItems } from "@/utils/firestore";
import { collection } from "firebase/firestore";

const COLLECTION_PATH = "experience";
const collectionRef = collection(firestoreClient, COLLECTION_PATH);

export const findAll = async (_criteria?: unknown): Promise<TExperience[]> =>
    handleQueryFirestoreItems<TExperience>(collectionRef);
