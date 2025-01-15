import { firebaseApp } from "@/services/libs/internalClient";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

const IMAGES_STORAGE_PATH = "images/";

const storage = getStorage(firebaseApp);
const imageListRef = ref(storage, IMAGES_STORAGE_PATH);

export const findAll = async () => {
    const { items } = await listAll(imageListRef);

    const imagesMap = new Map<string, string>();

    for (const storageRef of items) {
        const id = storageRef.name.split(".")[0]!;
        const url = await getDownloadURL(storageRef);
        imagesMap.set(id, url);
    }

    return imagesMap;
};
