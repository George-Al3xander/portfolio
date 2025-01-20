import { firestoreClient } from "@/services/libs/internalClient";
import { TInformation } from "@/types/models/Information";
import { doc, getDoc } from "firebase/firestore";

const COLLECTION_PATH = "information";

export const findById = async (id: string): Promise<TInformation | null> => {
    const docRef = doc(firestoreClient, COLLECTION_PATH, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const { value } = docSnap.data();

        return { value, key: id } as TInformation;
    }
    return null;
};
