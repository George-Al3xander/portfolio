import {
    CollectionReference,
    DocumentData,
    getDocs,
    query,
    QueryConstraint,
} from "firebase/firestore";

export const handleQueryFirestoreItems = async <T>(
    collectionReference: CollectionReference<DocumentData, DocumentData>,
    ...collectionQuery: QueryConstraint[]
): Promise<T[]> => {
    const snapshots = await getDocs(
        query(collectionReference, ...collectionQuery),
    );

    return snapshots.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    })) as T[];
};
