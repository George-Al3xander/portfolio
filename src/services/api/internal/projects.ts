import { firestoreClient } from "@/services/libs/internalClient";
import { TProject } from "@/types/models/firestore";
import { handleQueryFirestoreItems } from "@/utils/firestore";
import { collection, where } from "firebase/firestore";

type ProjectWithoutImg = Omit<TProject, "img">;

const COLLECTION_PATH = "projects";
const collectionRef = collection(firestoreClient, COLLECTION_PATH);

export const findAll = async (
    _criteria?: unknown,
): Promise<ProjectWithoutImg[]> =>
    handleQueryFirestoreItems<ProjectWithoutImg>(
        collectionRef,
        where("isHidden", "==", false),
    );
